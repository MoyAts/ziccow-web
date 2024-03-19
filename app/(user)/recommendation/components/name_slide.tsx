"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useQuery } from '@apollo/client';
import { GET_REAL_ESTATES } from "@/graphql/features/listing";


const NameSlide = ({ selectedRealEstate }: any) => {
    const [selected, setSelected] = useState("")
    const { loading, error, data } = useQuery(GET_REAL_ESTATES, {
        fetchPolicy: "no-cache"
    });

    // load real estates data

    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 6,
            paritialVisibilityGutter: 60,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            paritialVisibilityGutter: 20,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            paritialVisibilityGutter: 30,
        },
    }
    const realEstateSelected = (real_estate_uuid: string) => {
        setSelected(real_estate_uuid)
        selectedRealEstate(real_estate_uuid)
    }
    return (
        <div className='w-full'>
            <Carousel
                ssr
                infinite={false}
                autoPlay={false}
                containerClass='carousel-container'
                itemClass='carousel-image-item'
                // autoPlaySpeed={6000}
                responsive={responsive}
                className=' max-lg:max-w-[100vw]   mt-12'
                slidesToSlide={1}
            >
                {
                    loading ?
                        <div>Loading</div>
                        :
                        error ?
                            <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
                                {error.graphQLErrors[0]?.message ?? "something goes wrong"}
                            </div>
                            :
                            data ?
                                data.real_estate.map((realEstate: any, idx: any) =>
                                    // <Box key={ind} house={house} />
                                    <div key={idx}
                                        onClick={() => realEstateSelected(realEstate.real_estate_uuid)}
                                        className={`w-fit cursor-pointer duration-200 p-1 border-2  ${selected == realEstate.real_estate_uuid ? ' bg-blue-200 rounded-lg border-blue-600' : 'border-transparent'}`}
                                    >
                                        <Image src={realEstate?.icon?? ""} width={"77"} height={"77"} alt='a' className='h-[4rem] rounded-full w-[4rem] object-contain' />
                                    </div>


                                )
                                :
                                <div>......</div>
                }



            </Carousel>
        </div>
        // <div className='p-2 bg-blue-200 cursor-not-allowed rounded-full w-[2em] h-[2em] flex text-white'>
        //     <ListIcon className='m-auto' />
        // </div>

        //     <div className='p-2 bg-mainBlue cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
        //         <ListIcon className='m-auto rotate-180' />
        //     </div>

    )
}

export default NameSlide

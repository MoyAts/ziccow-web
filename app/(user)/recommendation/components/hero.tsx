"use client" 
import Image from "next/image"; 
import bg from "../../../assets/images/unsplash_B0aCvAVSX8E.png"
import Nav from "../../../_components/nav"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Search from "./search"
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = ({ setIsDrawer }: any) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
            paritialVisibilityGutter: 60,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            paritialVisibilityGutter: 20,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30,
        },
    }
    const [ propertyType,setPropertyType ] = useState("")
    const [ region,setRegion ] = useState("")
    const router = useRouter()
    const search = () => {
        router.push(`/recommendation?region=${region}&propertyType=${propertyType}`)
    }

  return (
    <>
    <Nav setIsDrawer={setIsDrawer} withsearch={false} />
    <Search 
        search={search} 
        propertyType={propertyType}  
        region={region}
        setPropertyType={setPropertyType}
        setRegion={setRegion}
    />
    <div className='w-full  relative z-20 flex flex-col'>
        <div className='absolute left-0 right-0 bottom-0 top-0 bg-mainDark opacity-[85%] z-10'></div>
        <div className="w-full max-w-[1700px]  items-center     relative  mx-auto">
        {/* <div className="w-full max-w-[1700px]  items-center     relative flex  mx-auto"> */}
            <Image src={bg} className='absolute w-7/12 bottom-0 right-0 -z-10 ' alt="" />
            {/* <div  className=' px-20 max-tablet:ps-10 max-mobile:px-0 z-40 flex justify-between gap-2   text-white text-3xl'> */}
            {/* <div className=' my-auto bg-gray-300 bg-opacity-30 cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
               <ListIcon className='m-auto' />
            </div> */}
              {/* <div className="flex flex-col ">
                    <h1 className='text-[45px] ps-12 max-mobile:px-5  flex flex-col gap-2 pe-10'>
                        <span >
                            Discover new products and  
                        </span>
                        <span>
                            possibilities
                        </span>
                    </h1>
                    <p className=' text-lg max-w-[80%] mt-8 max-mobile:px-5 flex gap-2 flex-wrap font-light'>
                        Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div> */}
                <Carousel
                    ssr
                    infinite={false}
                    autoPlay={false}
                    containerClass='carousel-container'
                    itemClass='carousel-image-item'
                    // autoPlaySpeed={6000}
                    responsive={responsive}
                    className=' max-lg:max-w-[100vw] h-[100vh]   z-50'
                    slidesToSlide={1}
                >
                   <Content />
                   <Content />
                   <Content />
                   <Content />
                   <Content />
                </Carousel>

                {/* <div className=' my-auto bg-gray-300 bg-opacity-30 cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
                    <ListIcon className='m-auto rotate-180' />
                </div> */}
   

                

        {/* </div> */}
        <div className=" absolute bottom-0  w-full z-[9999] flex  text-white justify-center text-center py-4">
            <div className="px-4 bg-white bg-opacity-20 py-1 rounded-lg w-fit">2 / 3</div>
        </div>
        
        </div>
    </div>
    </>

  )
}

const Content = () => {
    return <>
    <div className="ps-14 max-md:ps-6">
            <h1 className='text-[45px] max-sm:text-[30px] max-md:text-[40px]  text-white ps-12 max-mobile:px-5  flex flex-col gap-2  pe-10'>
                <span >
                    This place is for promotion
                </span>
                <span>
                    YOUR COMAPNY
                </span>
                <p className=' text-lg md:max-w-[80%] max-md:w-full  mt-8  flex gap-2 flex-wrap font-light'>
                    Here we are focused on getting your name and business in front of millions
                </p>
            </h1>
        </div>
        </>
}

export default Hero

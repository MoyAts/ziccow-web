"use client"
import React,{ useState } from 'react'
<<<<<<< HEAD:app/(user)/recommendation/components/name_slide.tsx
import img1 from "../../../assets/images/Group (7).svg"
import img2 from "../../../assets/images/Group (8).svg"
import img3 from "../../../assets/images/Group (9).svg"
import img4 from "../../../assets/images/Group (10).svg"
=======
import img1 from "../../assets/images/Group (7).svg"
import img2 from "../../assets/images/Group (8).svg"
import img3 from "../../assets/images/Group (9).svg"
import img4 from "../../assets/images/Group (10).svg"
>>>>>>> 864bc90 (update):app/recommendation/components/name_slide.tsx
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const name_slide = () => {
<<<<<<< HEAD:app/(user)/recommendation/components/name_slide.tsx
    const [selected,setSelected] = useState(-1)
=======
>>>>>>> 864bc90 (update):app/recommendation/components/name_slide.tsx
    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
            paritialVisibilityGutter: 60,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            paritialVisibilityGutter: 50,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30,
        },
    }
    return (
        <Carousel
            ssr
            infinite={false}
            autoPlay={false}
            containerClass='carousel-container'
            itemClass='carousel-image-item'
            autoPlaySpeed={6000}
            responsive={responsive}
            className='items-center mt-12'
            slidesToSlide={1}
        >   
<<<<<<< HEAD:app/(user)/recommendation/components/name_slide.tsx
        <div 
            onClick={() => setSelected(0)}
            className={`w-fit cursor-pointer duration-200 p-1 border-2  ${selected == 0 ? ' bg-blue-200 rounded-lg border-blue-600' : 'border-transparent'}`}
        >
            <Image src={img1} alt='a' className='h-[4rem] w-[4rem] object-contain' />
        </div>
        <div 
            onClick={() => setSelected(1)}
            className={`w-fit cursor-pointer duration-200 p-1 border-2  ${selected == 1 ? ' bg-blue-200 rounded-lg border-blue-600' : 'border-transparent'}`}
        >
            <Image src={img2} alt='a' className='h-[4rem] w-[4rem] object-contain' />
        </div>
        <div 
            onClick={() => setSelected(2)}
            className={`w-fit cursor-pointer duration-200 p-1 border-2  ${selected == 2 ? ' bg-blue-200 rounded-lg border-blue-600' : 'border-transparent'}`}
        >
            <Image src={img3} alt='a' className='h-[4rem] w-[4rem] object-contain' />
        </div>
        <div 
            onClick={() => setSelected(3)}
            className={`w-fit cursor-pointer duration-200 p-1 border-2  ${selected == 3 ? ' bg-blue-200 rounded-lg border-blue-600' : 'border-transparent'}`}
        >
            <Image src={img4} alt='a' className='h-[4rem] w-[4rem] object-contain' />
        </div>
        <div 
            onClick={() => setSelected(4)}
            className={`w-fit cursor-pointer duration-200 p-1 border-2  ${selected == 4 && ' bg-blue-200 rounded-lg border-blue-600'}`}
        >
            <Image src={img1} alt='a' className='h-[4rem] w-[4rem] object-contain' />
        </div>
        <div 
            onClick={() => setSelected(5)}
            className={`w-fit cursor-pointer duration-200 p-1 border-2   ${selected == 5 ? ' bg-blue-200 rounded-lg border-blue-600' : 'border-transparent'}`}
        >
            <Image src={img2} alt='a' className='h-[4rem] w-[4rem] object-contain' />
        </div>
=======
        <Image src={img1} alt='a'  className='cursor-pointer' />
        <Image src={img2} alt='a'  className='cursor-pointer' />
        <Image src={img3} alt='a'  className='cursor-pointer' />
        <Image src={img4} alt='a'  className='cursor-pointer' />
        <Image src={img1} alt='a'  className='cursor-pointer' />
        <Image src={img2} alt='a'  className='cursor-pointer' />
>>>>>>> 864bc90 (update):app/recommendation/components/name_slide.tsx
        
    </Carousel>
        // <div className='p-2 bg-blue-200 cursor-not-allowed rounded-full w-[2em] h-[2em] flex text-white'>
        //     <ListIcon className='m-auto' />
        // </div>
        
    //     <div className='p-2 bg-mainBlue cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
    //         <ListIcon className='m-auto rotate-180' />
    //     </div>
   
  )
}

export default name_slide

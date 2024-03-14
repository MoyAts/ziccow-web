"use client"
import React,{ useState } from 'react'
import img1 from "../../assets/images/Group (7).svg"
import img2 from "../../assets/images/Group (8).svg"
import img3 from "../../assets/images/Group (9).svg"
import img4 from "../../assets/images/Group (10).svg"
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const name_slide = () => {
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
        <Image src={img1} alt='a'  className='cursor-pointer' />
        <Image src={img2} alt='a'  className='cursor-pointer' />
        <Image src={img3} alt='a'  className='cursor-pointer' />
        <Image src={img4} alt='a'  className='cursor-pointer' />
        <Image src={img1} alt='a'  className='cursor-pointer' />
        <Image src={img2} alt='a'  className='cursor-pointer' />
        
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

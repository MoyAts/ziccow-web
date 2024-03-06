"use client" 
import Image from "next/image"; 
import Link from "next/link";
import React from 'react'
import bg from "../../assets/images/Background_-_Copy-removebg-preview.png"
import shareImg from "../../assets/images/share.svg"
import deleteImg from "../../assets/images/delete.svg"
import propertyImg from "../../assets/images/property.svg"
import { IoIosArrowBack  as NextIcon } from "react-icons/io";
import About from './about' 
import Images from "./images"
import Features from "./features"
// import Graph from './graph'
import Location from './location'

const hero = () => {
  return (
    <div className='h-fit min-h-[100vh]  w-full relative flex   bg-[#547b87] ' >
        <Image src={bg} alt="" className='absolute left-0 top-0 bottom-0 right-0 w-full h-full' />
        <div className='h-fit min-h-fit w-full z-10 border-t border-gray-300 px-20 max-tablet:px-0 max-w-[1700px] mx-auto' >

                
            <div className='w-full h-full z-[1000] bg-lightBg   py-3 px-10 max-mobile:px-5 '>
                <div className='flex text-sm gap-2 pt-4 max-mobile:text-xs '>
                    <div className="flex gap-1">
                        <Image src={propertyImg} alt="" />
                        <div>Property</div>
                    </div>
                    <NextIcon className="my-auto rotate-180" />
                    <div className="text-lightGray">Rental</div>
                    <NextIcon className="my-auto rotate-180" />
                    <div className="text-lightGray">Glam Apartment No.3</div>
                </div>

                <div className='flex justify-between mt-5 max-mobile:flex-col-reverse'>
                    <h1 className='text-[35px] max-mobile:text-[27px]'>Glam Apartment No.3</h1>
                    <div className='flex gap-8 max-mobile:place-items-end max-mobile:my-3'>
                        <div className='flex gap-2 cursor-pointer'>
                            <Image src={shareImg} className='my-auto w-4' alt="" />
                            <p className='my-auto'>Share</p>
                        </div>
                        <div className='flex gap-2 cursor-pointer'>
                            <Image src={deleteImg} className='my-auto w-4' alt="" />
                            <p className='text-danger my-auto'>Delete</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4  mb-12">
                    <div className="flex gap-1">
                        <span>1 day</span>
                        <span className="text-lightGray">on Zirrow</span>
                    </div>
                    <div className="w-[1px] h-5 my-auto bg-gray-300"></div>
                    <div className="flex gap-1">
                        <span>310</span>
                        <span className="text-lightGray">View</span>
                    </div>
                    <div className="w-[1px] h-5 my-auto bg-gray-300"></div>
                    <div className="flex gap-1">
                        <span>4</span>
                        <span className="text-lightGray">Saves</span>
                    </div>
                </div>

                <Images />
                <About />
                <Features />
                {/* <Graph /> */}
                <Location />


            </div>
                
                


        </div>
      
    </div>
  )
}

export default hero

"use client" 
import Image from "next/image"; 
import Link from "next/link";
import React from 'react'
import img from "../../assets/images/image.png"

const images = () => {
  return (
      <div className='flex  gap-8 mt-3 mb-5 max-tablet:flex-col'>
            <div className='tablet:basis-5/12'>
                <Image src={img} alt='home' className='w-full object-cover rounded-lg h-full ' />
            </div>
            <div className='flex max-tablet:basis-full basis-7/12 gap-8  h-full'>
                <div className='flex flex-col gap-8'>
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                </div>
                <div className='flex flex-col gap-8'>
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                </div>
            </div>

        </div>
  )
}

export default images

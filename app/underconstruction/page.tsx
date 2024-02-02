"use client" 
import Image from "next/image"; 
import React from 'react'
import img from "../assets/images/under_construction.svg"
import logo from "../assets/images/Widget 5.svg"
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";


const page = () => {
  return (
    <div className='w-full h-fit pb-12 bg-lightBg flex flex-col items-center'>
        <div className='flex gap-3 mt-10 '>
            <Image src={logo} alt=""  />
            <p>Ziccow General Trading</p>
        </div>
        <div className='text-[30px] mt-10 text-mainBlue'>
            The Website is Under Construction
        </div>
      <Image src={img} className='relative -top-12 ' alt="" />

      <div className='flex gap-5 mb-4'>
        <FaFacebookF />
        <FaInstagram />
        <RiTwitterXFill />
        <FaLinkedinIn />
      </div>
      <div className='text- mt-4'>
        Copyright ©Ziccow General Trading 2024.
      </div>
    </div>
  )
}

export default page

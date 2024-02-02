"use client" 
import Image from "next/image"; 
import Link from "next/link";
import React from 'react'

const location = () => {
  return (
    
    <div className='w-full max-w-[1700px]  mt-12 h-[100vh] max-h-[850px] relative flex mx-auto flex-col '>
        <div className='text-2xl  mb-6'>Where it’s located...</div>
        <iframe className="w-full h-full bg-gray-300 " 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.155759235115!2d38.744371077855796!3d9.037385747868658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1705580274602!5m2!1sen!2set" 
            loading="lazy" 
        ></iframe>
    </div>
  )
}

export default location

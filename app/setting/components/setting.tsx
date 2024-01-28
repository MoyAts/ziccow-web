import React, { useState } from 'react'
import logoutImg from "../../assets/images/logout.svg"
import Image from 'next/image'
import Security from "./security"
import Personal from './personal'
const Setting = () => {
   const [isSecurity,setIsSecurity] = useState(false)
  return (
    <div className='flex flex-col pt-10 px-20 mx-auto h-fit pb-32 border-t'>
        <div className='w-full flex justify-between'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[35px]'>Account Setting</h1>
                <p>Personalize your account and manage your sign-in preferences.</p>
            </div>

            <div className='flex gap-2'>
                <Image src={logoutImg} alt='logout' className='my-auto' />
                <p className='my-auto text-[#BB730D]'>Logout</p>
            </div>

        </div>

        <div className='flex justify-between mt-12'>
            <div className='flex flex-col gap-5 basis-5/12 text-lightGray'>
                <p onClick={() => setIsSecurity(false)} className={`${!isSecurity && "font-semibold text-black"} cursor-pointer duration-200`}>1. Personal info</p>
                <p onClick={() => setIsSecurity(true)} className={`${isSecurity && "font-semibold text-black"}  cursor-pointer duration-200`}>2. Security</p>
            </div>
            {
                isSecurity ?
                <Security />
                :
                <Personal />
            }

        </div>
      
    </div>
  )
}

export default Setting

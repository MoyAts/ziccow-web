import React from 'react'
import CustomeInput from '@/app/_components/customeInput'
import goImg from "../../assets/images/go.svg"
import Image from 'next/image'

const personal = () => {
  return (
    <div className='w-full '>
       <h2 className='text-2xl font-semibold mb-8'>Profile Information</h2>  
        <form action=" mt-8">
            <CustomeInput label='Full Name' name='fullName' placeholder='Enter your name'  />
            <p className='text-sm my-2 text-lightGray mb-7'>Your first and last given names.</p>
            <CustomeInput label='User Name' name='userName' placeholder='Enter your name'  />
            <p className='text-sm my-2 text-lightGray mb-7'>Your screen name across the platform.</p>
            <div className='flex gap-5 w-full '>
                <CustomeInput label='Phone Number' name='userName' placeholder='Enter your phone number' divClass='w-full'  />
                <CustomeInput label='Email Address' name='userName' placeholder='Enter your email' divClass='w-full'  />
            </div>
            <div className='flex justify-between mt-8'>
                <button className='px-2 py-2 text-mainBlue'> Cancel </button>
                <button className='flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white '>
                    <Image src={goImg} className="w-6 my-auto" alt="" />
                    <span className='text-[16px] my-auto'>Save Changes</span>
                </button> 

            </div>
        </form>
    </div>
  )
}

export default personal

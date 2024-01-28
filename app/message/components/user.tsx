import React from 'react'
import person from "../../assets/images/person.png"
import Image from 'next/image'
const user = () => {
  return (
    <div className='flex gap-5 px-5 border-b pb-5 mx-3'>
        <Image src={person} className='w-12 h-12 my-auto rounded-full' alt='user' />
        <div className='flex flex-col'>
            <div className='font-semibold'>Chantel Shelburne</div>
            <div className='text-lightGray text-normal'>Cool, appreciate all the work.</div>
            <div className='text-lightGray text-sm'>Just a moment ago</div>
        </div>
    </div>
  )
}

export default user

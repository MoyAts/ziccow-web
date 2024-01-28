import React from 'react'
import User from './user'
import Message from "./message"
import Users from './users'
import emptyImg from "../../assets/images/emptyMessage.svg"
import Image from 'next/image'
const detail = () => {
  const nothingFound = false
  return (
    <div className='flex flex-col px-20 max-w-[1700px] max-h-[1200px] mx-auto'>
      <div className='flex flex-col'>
        <h1 className='text-[35px]'>Direct Message</h1> 
        <p className='text-lightGray'>Messages replied to within 1 hour, 7 days a week.</p>
      </div>
      
      {nothingFound ?
        <div className='flex h-[80vh] max-h-[700px] w-full pb-16'>

          <div className='m-auto flex flex-col gap-2 justify-center items-center'> 
            <Image src={emptyImg} alt='nothing found' />
            <div className='text-[30px] font-semibold'>You don’t have any messages yet.</div>
            <div>When you have messages you’ll see them here.</div>

          </div>


        </div>
      :
      <div className='flex h-[100vh] max-h-[1000px] mt-8 w-full pb-16'>
        <Users />
        <div className='h-full w-[2px] mx-2 bg-onDark'></div>
        <Message />
      </div>}
    </div>
  )
}

export default detail

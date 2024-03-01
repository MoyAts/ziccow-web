import React from 'react'
import person from "../../../assets/images/person.png"
import Image from 'next/image'
interface Props {
  setMessage : Function
}

interface MessageInf {
  type : number,
  message : string,
}

const user = ({ setMessage } : Props) => {
  
  const msg : MessageInf[] = [
    {type : 1,message: " hey there"},
    {type : 2,message: " hey there"},
    {type : 1,message: " hey there"},
    {type : 3,message: " hey there"},
  ]
  const onClick = () => {
    setMessage(msg)
  }

  return (
    <div onClick={onClick} className='flex cursor-pointer gap-5 px- border-b border-gray-300 pb-5 me-3  '>
        <Image src={person} className='w-12 h-12 my-auto rounded-full' alt='user' />
        <div className='flex flex-col gap-1'>
            <div className='font-semibold'>Chantel Shelburne</div>
            <div className='text-lightGray text-normal'>Cool, appreciate all the work.</div>
            <div className='text-lightGray text-sm'>Just a moment ago</div>
        </div>
    </div>
  )
}

export default user

import React from 'react'
import Image from 'next/image'
import person from "../../assets/images/person.png"


interface Props {
    isCurrentUser : boolean   
}

const chat = ({ isCurrentUser } : Props) => {
  return (
    <div className={`w-full flex gap-2 ${isCurrentUser && "flex-row-reverse"} `}>
       { isCurrentUser ? 
        <div className="cursor-pointer bg-blue-200  p-2 w-10 h-10 rounded-full flex items-center justify-center">
            JD
        </div>
            : 
            <Image src={person} className='w-10 h-10 rounded-full' alt='user' />
        }
        <div className={`w-fit  max-w-[50%] ${isCurrentUser ? "bg-white rounded-b-xl rounded-l-xl" : "bg-lightBlue rounded-b-xl rounded-r-xl"}  px-2 py-2 flex flex-col gap-2 `}>
            <p>That's awesome. I think our users will really appreciate the improvements.</p>
            <p className='text-sm'>1 hr. ago</p>
        </div>
    </div>
  )
}

export default chat

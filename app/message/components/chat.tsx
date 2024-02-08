import React from 'react'
import Image from 'next/image'
import person from "../../assets/images/person.png"


interface Props {
    isCurrentUser : boolean   
}

const chat = ({ isCurrentUser } : Props) => {
  return (
    <div className={`w-full flex gap-2 ${isCurrentUser && "flex-row-reverse"} bg-red-00`}>
       { isCurrentUser ? 
        <div className="cursor-pointer bg-[blue-200 ] p-2 w-10 h-10 rounded-full flex items-center justify-center">
            JD
        </div>
            : 
            <Image src={person} className='w-10 h-10 rounded-full' alt='user' />
        }
        <div className={`w-fit  max-w-[50%] max-mobile:max-w-[75%] ${isCurrentUser ? "bg-white  rounded-b-xl rounded-l-xl" : "bg-[#EEF6FE] rounded-b-xl rounded-r-xl"}  px-4 py-3 flex flex-col gap-2 `}>
            <p className={`${isCurrentUser && "text-right"} `}>That's awesome. I think our users will really appreciate the improvements.</p>
            <p className={`text-sm ${isCurrentUser && "self-end"}  `}>1 hr. ago</p>
        </div>
    </div>
  )
}

export default chat

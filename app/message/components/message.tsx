import InputIcon from "../../assets/images/mainIcon.svg"
import React from 'react'
import person from "../../assets/images/person.png"
import Image from "next/image"
import Chat from './chat'
import sendImg from "../../assets/images/sendBlue.svg"
const message = () => {
  return (
    <div className='basis-2/3  relative flex flex-col ps-12 '>
        <div className='flex   w-full z-20 items-center gap-2 sticky bg-lightBg  bg-opacity-80 top-0'>
            <Image src={person} className='w-14 h-14 rounded-full' alt='user' />
            <div>Chantel Shelburne</div>
        </div>
        <div className='h-fit overflow-auto   w-full flex flex-col pt-4  px-4 gap-7 pb-12 '>
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={false} />
            <Chat isCurrentUser={true} />
            <Chat isCurrentUser={true} />
        </div>

        <div className={'w-full  bg-white flex rounded-3xl px-5 py-3  shadow' }>
            <Image src={InputIcon} alt="" width={23} className={'me-3 '  }/>
            <input type={"text"} name={"name"} placeholder={"Write a message ..."} className={'py-3 text-li w-full outline-none rounded-lg '}/>
            <button className="flex gap-2 items-center justify-center text-mainBlue w-fit capitalize text-lg">
                <Image src={sendImg} alt="" />
                <p>
                    send
                </p>
            </button>
        </div>

    </div>
  )
}

export default message





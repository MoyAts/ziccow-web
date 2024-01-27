"use client" 
import Image from "next/image"; 
import goImg  from "../assets/images/go.svg"

const join = () => {
  return (
    <div className="w-full bg-mainDark flex justify-center ">
        <div className='w-full border-b-[1px] px20  border-gray-600  max-w-[1560px] mx-20 bg-mainDark flex gap-12 py-24 text-white' >
            <div className='basis-2/3  '  >
                <h1 className='w-/3 text-[45px] flex gap-1 flex-col mb-10'>
                    <span>
                        Want to talk to become a 
                    </span>
                    <span className='text-mainBlue leading-[12px]'>
                        real estate agent 
                        <span className="text-white"> ?</span>
                    </span> 
                </h1>
                <p className='font-light '>
                    A great agent makes all the difference. Find out how real estate advertising on Ziccow can help you get more leads.
                </p>
            </div>
            <p className='basis-1/3   text-sm my-auto flex flex-row-reverse text-gray-400 '>
                <button className='flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white '>
                    <span className='text-[16px]'>Join out agents</span>
                    <Image src={goImg} className="w-6 my-auto" alt="" />
                </button> 
            </p>
        </div>
    </div>
  )
}

export default join

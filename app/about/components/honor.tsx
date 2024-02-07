"use client" 
import Card from './card'
import { IoMdArrowForward as ArrowIcon } from "react-icons/io";
const honor = () => {
  return (
    <div className='w-full px-20 max-tablet:px-10 h-fit py-16 pb-32 bg-lightBg max-w-[1700px] mx-auto'>
        <div className='w-full text-center text-[45px]'>
            Our <span className='text-mainBlue'>Honorary Partners.</span> 
        </div>
        <div className='flex tablet:justify-between gap-10   pt-16 overflow-auto'>
            <Card />
            <Card />
            <Card />
        </div>

        <div className='flex justify-center w-full  mt-20 gap-5 '>
            <div className='cursor-pointer flex w-10 h-10 border-2 border-blue-300 rounded-full'>
                <ArrowIcon className='m-auto text-blue-300 rotate-180' />
            </div>
            <div className='flex gap-4'>
                <div className='cursor-pointer w-4 h-4 rounded-full bg-mainBlue my-auto'></div>
                <div className='cursor-pointer w-4 h-4 rounded-full bg-blue-300 my-auto'></div>
                <div className='cursor-pointer w-4 h-4 rounded-full bg-blue-300 my-auto'></div>
                <div className='cursor-pointer w-4 h-4 rounded-full bg-blue-300 my-auto'></div>
            </div>
            <div className='cursor-pointer flex w-10 h-10 border-2 border-mainBlue rounded-full'>
                <ArrowIcon className='m-auto text-[#4784C4]' />
            </div>
        </div>
      
    </div>
  )
}

export default honor

"use client" 
import Image from "next/image"; 
import phone from "../assets/images/phone.svg"
import { MdOutlineMail as EmailIcon } from "react-icons/md";
const join = () => {
  return (
    <div className="w-full bg-mainDark">

        <div className='w-full h-fit   max-w-[1700px] mx-auto  flex max-tablet:flex-col max-tablet:gap-4 gap-12 py-12 px-20  max-small:px-5 max-tablet:px-10 text-white' >
            <div className='basis-1/2  '  >
                <div className='w-/3 text-[38px]  max-mobile:text-[25px]   mb-10 text-center'>
                    <span className='text-mainBlue '>
                        Have questions 
                    </span>
                    <span >
                    ? Contact us by email or telephone.
                    </span> 
                </div>
            </div>
            <p className='basis-1/2 text-sm my-auto flex max-sm:flex-col justify-center gap-10 max-sm:gap-5  text-gray-400 '>
                
                <button className='flex gap-2 text-lg px-4 py-2 hover:bg-slate-600 hover:bg-opacity-30 rounded-lg border w-fit max-sm:mx-auto text-white '>
                    <Image src={phone} alt="" className="my-auto" />
                    <span className=''>(123) 456-7890</span>
                </button> 

                <button className='flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit max-sm:mx-auto text-white '>
                    <EmailIcon className="m-auto text-xl"  />
                    <span className='my-auto'>Join out agents</span>
                </button> 
            </p>
    </div>
  </div>
  )
}

export default join

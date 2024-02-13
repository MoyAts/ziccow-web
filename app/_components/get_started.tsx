"use client" 
import Image from "next/image"; 
import diskImg from "../assets/images/disk.svg"
import checkIcon from "../assets/images/Group (2).svg"

const GetStarted = () => {
  return (
    <div className='w-full bg-mainDark sticky top-0 z-[2000] h-12 flex  max-mobile:hidden'>
      <div className='w-full max-w-[1700px]  m-auto px-20 max-tablet:px-10   bg-mainDark text-white font-light text-sm top-0 flex justify-between'>
          <div className='flex '>
              <p className='my-auto me-2'>Ready, and looking for properties?</p>
              <button  className={` flex  text-lg  hover:bg-blue-600 rounded-lg px-3 py-1 gap-2 bg-mainBlue w-fit text-white m-auto  `}>
                <span className="text-sm my-auto capitalize ">Get Started</span>
                <Image src={checkIcon} className='my-auto' alt="" />
            </button> 
          </div>
          <div className='my-auto flex gap-1'>
            <Image src={diskImg} alt="" />
            Having Troubles? Call 8990
          </div>
      </div>
    </div>
  )
}

export default GetStarted

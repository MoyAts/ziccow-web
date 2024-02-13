"use client" 
import Link from "next/link";

import style from "../css/propertiesCard.module.css"

interface Props {
  show : boolean
}

const profileCard = ({ show } : Props) => {
  return (
    <div className={`${show ? style.showPopup : "hidden"} duration-0 w-fit flex min-w-[200px] shadow text-lightGray flex-col text-sm  bg-white rounded-lg absolute z-[3000] right-0 top-12 `}>
        <div className='px-3 py-2 mt-2 '>
          <div className='font-bold text-black'>John Doe</div>
          <p className='text-xs'>johnd03@example.com</p>
        </div>
        <div className='w-full h-[1px] my-1 bg-gray-300'></div>
        <div className='px-3 my-1 flex gap-2 flex-col '>
          <Link href={""} className='hover:text-mainBlue'>My Listings</Link>
          <Link href={""} className='hover:text-mainBlue'>Saved Listings</Link>
          <Link href={""} className='hover:text-mainBlue'>Account Settings</Link>
        </div>
        <div className='w-full h-[1px] my-1 bg-gray-300'></div>
        <div className='px-3 font-semibold pb-3 mt-1 text-[#8C560A]'>
          <Link href={""}>Sign Out</Link>
        </div>
      
    </div>
  )
}

export default profileCard


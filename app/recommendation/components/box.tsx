"use client" 
import Image from "next/image"; 
import img from "../../assets/images/image.png"
import { FaArrowUp as ArrowIcon } from "react-icons/fa6";
import { houseInf } from "@/utils/interfaces";

const box = ({ house } : { house : houseInf}) => {
  return (
    <div className='flex w-full flex-col text-sm  gap-1 '>
        <div className='rounded-lg w-full overflow-hidden duration-200'>
            <Image 
            src={house?.digital_assets[0]?.url ?? ""} 
            width={100}
            height={100}
            unoptimized={true}
            className='w-full hover:scale-105 duration-200 rounded-lg'
            alt="" />
        </div>
        <h1 className='font-semibold'>{house?.real_estate?.name ?? "Real state"}</h1>
        <p>Are you looking to find your dream home or invest in a lucrative property.</p>
        <button className='flex w-fit gap-2 text-mainBlue mt-2 group'>
            <span>
                View More
            </span>
            <ArrowIcon className='rotate-90 duration-200 m-auto relative ' />
        </button>
    </div>
  )
}

export default box

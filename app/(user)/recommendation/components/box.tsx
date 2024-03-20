"use client" 
import Image from "next/image"; 
import { FaArrowUp as ArrowIcon } from "react-icons/fa6";
import { houseInf } from "@/utils/interfaces";
import Link from "next/link";
import { FaStar as StarIcon } from "react-icons/fa6"; 

const box = ({ house } : { house : houseInf}) => {
  const BuildStar = ({num} : any) => {
    var randomNumber = 2 + Math.floor(Math.random() * 4);
    return <>
      {[0,0,0,0,0].map((_,ind : number) => ind < randomNumber ? <StarIcon key={ind} className="text-lg fill-yellow-500" /> : <StarIcon  key={ind} className="text-lg fill-gray-600" /> )}
  </>}
  return (
    <Link href={"/properties/" + house.listing_id} className='flex w-full flex-col text-sm  gap-1 '>
        <div className='rounded-lg relative w-full overflow-hidden duration-200'>
            <Image 
            src={house?.digital_assets[0]?.url ?? ""} 
            width={100}
            height={100}
            unoptimized={true}
            className='w-full hover:scale-105 object-cover duration-200 h-[300px] rounded-lg'
            alt="" />
             <div className="absolute top-5 flex gap-1 px-2 py-1 rounded-xl right-5 bg-gray-100 bg-opacity-40">
                <BuildStar num={3} />
            </div>
        </div>
        <h1 className='font-semibold'>{house?.real_estate?.name ?? "Real state"}</h1>
        <p>Are you looking to find your dream home or invest in a lucrative property.</p>
        <button className='flex w-fit gap-2 text-mainBlue mt-2 group'>
            <span>
                View More
            </span>
            <ArrowIcon className='rotate-90 duration-200 m-auto relative ' />
        </button>
    </Link>
  )
}

export default box

"use client" 
import Image from "next/image"; 
import { FaArrowUp as ArrowIcon } from "react-icons/fa6";
import { houseInf } from "@/utils/interfaces";
import Link from "next/link";

const box = ({ house } : { house : houseInf}) => {
 
  return (
    <Link 
        // href={} 
        href={{
          pathname: "/properties/" + house.listing_id,
        }}
        className='flex w-full flex-col text-sm  gap-1 '
      >
        <div className='rounded-lg relative w-full overflow-hidden duration-200'>
            <Image 
            src={house?.digital_assets[0]?.url ?? ""} 
            width={100}
            height={100}
            unoptimized={true}
            className='w-full hover:scale-105 object-cover duration-200 h-[300px] rounded-lg'
            alt="" />
             {/* <div className="absolute top-5 flex gap-1 px-2 py-1 rounded-xl right-5 bg-gray-100 bg-opacity-40">
                <BuildStar num={3} />
            </div> */}
        </div>
        <h1 className='font-semibold'>{house?.real_estate?.name ?? "Real state"}</h1>
        <p>{house.description ? house.description.slice(0,50) : "Check out here!"}</p>
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

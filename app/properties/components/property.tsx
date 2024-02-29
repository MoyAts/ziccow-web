"use client" 
import Image from "next/image"; 
import locationIcon from "../../assets/images/location.svg"
import img from "../../assets/images/card-header.png"
import bookMarkSvg from "../../assets/images/bookmark.svg"

import img3 from "../../assets/images/space.svg"
import img4 from "../../assets/images/bed.svg"
import img5 from "../../assets/images/bathroom.svg"
import { houseInf } from "@/utils/interfaces";

interface Props {
    house : houseInf 
}

const home = ( { house } : Props) => {
  
  return (
    
    <div className={`flex w-full shrink-0 gap-2 bg-white  p-1 rounded-lg text-lightGray flex-col`}>
        <div className="rounded-lg asis-1/3 flex">
            <Image 
            src={house.digital_assets[0].url} 
            className="rounded-lg w-full object-cover my-auto" 
            width={100}
            height={100}
            quality={100}
            alt="" />
        </div>
        <div className="flex h-full  flex-grow"></div>
        <div className={`flex flex-col basis-2/3 py-2 px-1  `}>
            <div className={` flex justify-between`}>
                <h1 className="text-lg my-auto me-2 text-black">{house?.real_estate?.name ?? "Real state"}</h1>
                <div className={`  w-fit  bg-blue-300 text-black text-sm px-2 rounded-lg h-fit my-auto bg-opacity-55`}>
                       Appartment
                </div>
            </div>
            
            <p className="text-sm flex flex-wrap mb-2 mt-2">Glam Apartment No.3, 4 Kilo Parliament, Addis Ababa.</p>
            <div className={`  flex w-full justify-between pe-2`}>
                <p className="flex text-sm text-black font-semibold gap-1">
                    <Image className="w-[20px] h-[20px]" src={locationIcon} alt="" />
                    <p className="my-auto">
                        2 km away from current location
                    </p>
                </p>
            </div>
            <div className='justify-between font-semibold text-black flex gap-y-2 flex-wrap' >
                <div className='flex mt-2 gap-1'>
                    <Image src={img5} width={15} className="my-auto"  alt="" />
                    <span className='text-sm my-auto'>{house.listing_property.bathroom_count} Bathroom</span>
                </div>
                <div className='flex mt-2 gap-1 '>
                    <Image src={img3} width={13} className="my-auto"  alt="" />
                    <span className='text-sm my-auto'>{house.listing_property.bedroom_count} Bathroom</span>
                </div>
                <div className='flex mt-2 gap-1 '>
                    <Image src={img4} width={19} className="my-auto" alt="" />
                    <span className='text-sm my-auto'>{house.listing_property.square_ft} square fit</span>
                </div>
            </div>
            <div className="flex justify-between pe-2 mt-2">
                <h1 className="">
                    <span className="text-xl font-semibold text-black">{house.sale_price}</span> 
                    <span className="">/month</span>
                </h1>
                <Image src={bookMarkSvg} className="w-6" alt="" />
                
            </div>
        </div>
    </div>
  )
}

export default home
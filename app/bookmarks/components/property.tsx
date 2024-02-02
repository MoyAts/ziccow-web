"use client" 
import Image from "next/image"; 
import locationIcon from "../../assets/images/location.svg"
import img from "../../assets/images/card-header.png"
import bookMarkSvg from "../../assets/images/bookmarked.svg"

import img3 from "../../assets/images/space.svg"
import img4 from "../../assets/images/bed.svg"
import img5 from "../../assets/images/bathroom.svg"

const home = ( ) => {
    
  return (
    
    <div className={`flex w-fit shrink-0 text-sm gap-2   p-1 rounded-lg text-lightGray flex-col`}>
        <div className="rounded-lg asis-1/3 flex">
            <Image src={img} className="rounded-lg w-full object-cover my-auto" alt="" />
        </div>
        <div className={`flex flex-col basis-2/3 py-2 px-1  `}>
            <div className={` flex justify-between`}>
                <h1 className="text-lg my-auto me-2 text-black">Glam Apartment No.3</h1>
                <div className={`  w-fit  bg-blue-300 text-black text-[10px] px-2 rounded-lg h-fit my-auto bg-opacity-55`}>
                       Appartment
                </div>
            </div>
            
            <p className="text-xs flex flex-wrap mb-2 mt-2">Glam Apartment No.3, 4 Kilo Parliament, Addis Ababa.</p>
            <div className={`  flex w-full justify-between pe-2`}>
                <p className="flex text-xs text-black gap-1">
                    <Image className="w-[20px] h-[20px]" src={locationIcon} alt="" />
                    <p className="my-auto">
                        2 km away from current location
                    </p>
                </p>
            </div>
            <div className='justify-between font-semibold text-black grid grid-cols-3 gap-3' >
                <div className='flex mt-2 gap-1'>
                    <Image src={img5} width={15} className="my-auto"  alt="" />
                    <span className='text-xs my-auto'>1 Bathroom</span>
                </div>
                <div className='flex mt-2 gap-1 '>
                    <Image src={img3} width={13} className="my-auto"  alt="" />
                    <span className='text-xs my-auto'>1 Bathroom</span>
                </div>
                <div className='flex mt-2 gap-1 '>
                    <Image src={img4} width={19} className="my-auto" alt="" />
                    <span className='text-xs my-auto'>1 Bathroom</span>
                </div>
            </div>
            <div className="flex justify-between pe-2 mt-2">
                <h1 className="">
                    <span className="text-xl font-semibold text-black">$12,000</span> 
                    <span className="">/month</span>
                </h1>
                <Image src={bookMarkSvg} alt="" />
                
            </div>
        </div>
    </div>
  )
}

export default home
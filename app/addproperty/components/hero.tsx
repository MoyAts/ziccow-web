"use client" 
import Image from "next/image"; 
import Link from "next/link";

import propertyImg from "../../assets/images/property.svg"
import { IoIosArrowBack  as NextIcon } from "react-icons/io";
import Form from "./form"
import cancelImg from "../../assets/images/cancelentry.svg"
const hero = () => {
  return (
    <div className="h-fit px-20 mx-auto max-tablet:px-10 max-mobile:px-5 border-t border-gray-300 pt-5 max-w-[1700px]">
        <div className='flex text-sm gap-2'>
            <div className="flex gap-1">
                <Image src={propertyImg} alt="" />
                <div>Property</div>
            </div>
            <NextIcon className="my-auto rotate-180" />
            <div className="text-lightGray">Add new listing</div>
        </div>

        <div className=" mb-1 flex justify-between">
          <div>
            <h1 className="text-[35px] mt-10 mb-1">Add a new listing</h1>
            <p className="text-lightGray">Answer a few questions and get your selling options in as little as 3 minutes.</p>
          </div>
          <button className="my-auto flex gap-3 max-mobile:hidden">
            <Image src={cancelImg} alt="" className="my-auto" />
            <p className="text-[#b16d0e] font-semibold">Cancel Entry</p>
          </button>
        </div>

        <Form />
    </div>
  )
}

export default hero
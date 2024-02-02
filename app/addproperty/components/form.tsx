"use client" 
import Image from "next/image"; 
import Link from "next/link";
import { useState } from 'react'
import PropertyDetail from "./propertyDetail"
import PropertyManagment from './propertyManagment'
import Confirmation from "./confirmation";
import Confirmed from "./confirmed";

import accept from "../../assets/images/goAccept.svg"
import goImg from "../../assets/images/goBlack.svg"
import CancelImg from "../../assets/images/cancelentry.svg"

const Form = () => {
   const [page,setPage] = useState(4)
   return (
    <div className='min-h-[400px]'>
         <div className='flex justify-between mt-12'>
            <div className='flex flex-col gap-12 basis-5/12 text-lightGray'>
                <p onClick={() => setPage(1)} className={`${page == 1 && "font-semibold text-black"}    duration-200 flex justify-between`}>
                    <p className={`cursor-pointer ${page > 1 && "text-accept"} `}>
                        1. Property details
                    </p>
                    <div className="">
                        {
                            page == 1 ? 
                            <Image src={goImg} alt="go" className="w-5 me-12" /> :
                            <Image src={accept} alt="go" className="w-5 me-12" />
                        }
                    </div>
                </p>
                <p onClick={() => setPage(2)} className={`${page == 2 && "font-semibold text-black"}    duration-200 flex justify-between`}>
                    <p className={`cursor-pointer ${page > 2 && "text-accept"} `}>
                        2. Selling options
                    </p>
                    <div className=" flex justify-center items-center">
                        {
                            page == 2 ? 
                            <Image src={CancelImg} alt="go" className="w-5 me-12" /> :
                            page > 2 ?
                            <Image src={accept} alt="go" className="w-5 me-12" />
                            :
                            <></>
                        }
                    </div>
                </p>

                <p onClick={() => setPage(3)} className={`${page == 3 && "font-semibold text-black"}  cursor-pointer duration-200 flex justify-between`}>
                    <p className="cursor-pointer">
                        3. Confirmation
                    </p>
                    <div className=" flex justify-center items-center">
                        {
                            page == 3 ? 
                            <Image src={CancelImg} alt="go" className="w-5 me-12" /> :
                            page > 3 ?
                            <Image src={accept} alt="go" className="w-5 me-12" />
                            :
                            <></>
                        }
                    </div>
                </p>
            </div>
            {
                page == 1 ?
                <PropertyDetail />
                :
                page == 2 ?
                <PropertyManagment />
                :
                page == 3 ?
                <Confirmation />
                :
                <Confirmed />
            }

        </div>
    </div>
  )
}

export default Form
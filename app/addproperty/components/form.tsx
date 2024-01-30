"use client" 
import Image from "next/image"; 
import Link from "next/link";
import { useState } from 'react'
import PropertyDetail from "./propertyDetail"
import PropertyManagment from './propertyManagment'
const Form = () => {
   const [page,setPage] = useState(1)
   return (
    <div className=''>
         <div className='flex justify-between mt-12'>
            <div className='flex flex-col gap-5 basis-5/12 text-lightGray'>
                <p onClick={() => setPage(1)} className={`${page == 1 && "font-semibold text-black"} cursor-pointer duration-200`}>1. Property details</p>
                <p onClick={() => setPage(2)} className={`${page == 2 && "font-semibold text-black"}  cursor-pointer duration-200`}>2. Selling options</p>
                <p onClick={() => setPage(3)} className={`${page == 3 && "font-semibold text-black"}  cursor-pointer duration-200`}>3. Confirmation</p>
            </div>
            {
                page == 2 ?
                <PropertyManagment />
                :
                <PropertyDetail />
            }

        </div>
    </div>
  )
}

export default Form
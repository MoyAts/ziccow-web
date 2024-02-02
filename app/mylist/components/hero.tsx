"use client" 
import Image from "next/image"; 
import Link from "next/link";
import React from 'react'
// import { Combobox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import SelectBox from "./selectBox"
import houseImg from "../../assets/images/house.svg"
import monthImg from "../../assets/images/month.svg"
import Table from './table'
import goImage from "../../assets/images/goBlack.svg"

const options = ["choice1","choice2","choice3"] 

const hero = () => {
  return (
    <div className='h-fit pb-20 px-20 max-w-[1700px] mx-auto'>
        <div className=' flex justify-between mt-5'>
            <h1 className='text-3xl'>Property Listing</h1>
            <div className='flex gap-5'>
                <SelectBox list={options}  img={monthImg} />
                <SelectBox list={options}  img={houseImg} />
            </div>
        </div>

        <Table />

        <div className='mt-14 text-lightGray flex justify-between m'>
          <div>
            Showing <span className='font-semibold'>1-10</span> of <span className='font-semibold'>1000</span> 
          </div>
          <div className='flex gap-5'>
            <Image src={goImage} alt="" className='cursor-pointer  rotate-180' />
            <div className='flex gap-5 text-xl'>
                <div className='font-semibold'>1</div>
                <div>2</div>
                <div>...</div>
                <div>6</div>
            </div>
            <Image src={goImage} alt="" className='cursor-pointer  ' />
          </div>
        </div>


    </div>
  )
}

export default hero
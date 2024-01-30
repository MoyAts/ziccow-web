"use client" 
import Image from "next/image"; 
import Link from "next/link";
import React from 'react'
import RadioDiv from './radioboxdiv'
import CustomeInput from '../../components/customeInput' 
import { MdNavigateNext } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";

const propertyManagment = () => {
  return (
    <div className='w-full h-fit pb-56'>
        <div className='text-2xl mb-8'>Add property management options...</div>
        <div>Which one of the following apply to you?</div>
        <div className='pt-4 flex w-full justify-between '>
           <RadioDiv label='I am a real estate agent' name='Which one of the following apply to you?' />
           <RadioDiv label='I am the property ownert' name='Which one of the following apply to you?' />
           <RadioDiv label='None of these apply to me' name='Which one of the following apply to you?' />
        </div>
        <p className="text-danger mt-3 text-sm">Please select an option.</p>
        <div className="mt-8">How soon would you like to sell?</div>
        <div className='pt-4 flex w-full justify-between '>
           <RadioDiv label='As soon as possible' name='How soon would you like to sell?' />
           <RadioDiv label='Within a month' name='How soon would you like to sell?' />
           <RadioDiv label='2-3 months' name='How soon would you like to sell?' />
           <RadioDiv label='4+ months' name='How soon would you like to sell?' />
        </div>
        <p className="text-lightGray mt-3 text-sm">Please select an option.</p>
        <div className="mt-8 mb-4">How soon would you like to sell?</div>
        <div className='flex flex-col gap-3'>
            <CustomeInput ReactIcon={MdNavigateNext} IconClass={"m-auto text-3xl rotate-90 text-mainBlue"} name='name' label='Property management' placeholder='Rental'/>
            <CustomeInput ReactIcon={MdNavigateNext} IconClass={"m-auto text-3xl rotate-90 text-mainBlue"} name='name' label='Selling price' placeholder='15,000'/>
        </div>
        <div className="flex mt-8 justify-between ">
          <button className="text-mainBlue">Cancel</button>
          <button className="px-5 py-3 rounded-lg bg-mainBlue hover:bg-blue-500 text-white flex gap-3">
            <div className="border border-blue-300 rounded  my-auto w-6 h-6 py-[2px] px-[2px]">
              <GrLinkNext />
            </div>
            <p>Next Step</p>
          </button>

        </div>
        
    </div>
  )
}

export default propertyManagment
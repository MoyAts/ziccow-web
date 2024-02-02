import React from 'react'
import Image from "next/image"
import img from "../../assets/images/image.png"
import Features from "./features"
import goImg from "../../assets/images/go.svg"

const Confirmation = () => {
  return (
    <div className='w-full h-fit pb-32'>
        <div className='text-2xl mb-3'>Preview your entry before confirmation.</div>
        <div className='text-[28px] text-lightGray'>Glam Apartment No.3</div>
        <div className='flex  gap-8 mt-3 mb-5 '>
            <div className='basis-5/12'>
                <Image src={img} alt='home' className='w-full object-cover rounded-lg h-full ' />
            </div>
            <div className='flex basis-7/12 gap-8  h-full'>
                <div className='flex flex-col gap-8'>
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                </div>
                <div className='flex flex-col gap-8'>
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                    <Image src={img} alt='home' className='object-cover rounded-lg h-full' />
                </div>
            </div>

        </div>

        <div className='mt-5 flex flex-col gap-3' >
            
            <div className='text-3xl text-lightGray'>About the Property</div>
            <Info detail='Apartment, High rise' topic='Home Type' />
            <Info detail='Glam Apartment No.3, 4 Kilo Parliament, Addis Ababa.' topic='Address' />
            <Info detail='2020' topic='Year Built' />
            <Info detail='Rental' topic='Property Management' />
            <Info detail='12,000 /month' topic='Price' />
            <Info detail='Beautiful and Bright 1 Bedroom Condo in Full Service Doorman Building!  
                Welcome to Apartment 314 located on the third floor of Novo 64 in the heart of Forest Hills! This unit features a spacious living area with beautiful maple hardwood floors and expansive windows overlooking a quiet street. The kitchen features top of the line Jenn-Air stainless steel appliances, Caesarstone countertops, and an oversized island/breakfast bar. The spacious natural stone bathroom is outfitted with Kohler fixtures and European-style vanity. The unit has central heating and cooling and has lots of storage space throughout with three oversized closets in the front hallway and bedroom. 
                Novo 64 is a luxury, full-service building consisting of 5 floors. Building amenities include a full-time doorman, concierge, lounge, gym, sauna, playroom, laundry, cold storage, common courtyard, and cinema room. Morning shuttle service is offered directly from the building to Express/LIRR trains at 71st/Continental Avenue. M/R subway station is a few blocks away. Express bus QM42 is also available in front of the building. Pets Welcome!
                Call or Message today to view!' 
                topic='Description'
            />
            <Features />
        </div>

        <div className="flex  justify-between mt-12">
          <button className="text-mainBlue">Cancel</button>
          <button className="px-5 py-2 rounded-lg bg-mainBlue hover:bg-blue-500 text-white flex gap-3">
            <Image src={goImg} className="my-auto" alt="" />
            <p>Register Property</p>
          </button>
        </div>
   
    </div>
  )
}

interface Props{
    topic : string,
    detail : string
}

function Info({ topic , detail } : Props){
    return (
        <div className='flex flex-col gap-2 text-lightGray'>
            <div className='text-xl font-semibold text-gray-500'>{topic}</div>
            <div>{detail}</div>
        </div>
    )
}

export default Confirmation
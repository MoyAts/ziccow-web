"use client" 
import Image from "next/image"; 
import Link from "next/link";

import img2 from "../../assets/images/location.svg"
import img3 from "../../assets/images/bed.svg"
import img4 from "../../assets/images/bathroom.svg"
import img5 from "../../assets/images/space.svg"


interface Props {
  img : any
}

const box = ({img} : Props) => {
  
  return (
    <Link href={"/propertiesDetail"}  className='bg-rd-300 w-fit cursor-pointer shrink-0 rounded-xl overflow-hidden text-black flex flex-col gap-3'>
          <div className='rounded-xl group relative border w-full h-2/3 overflow-hidden'>
            <Image src={img} className='rounded-xl group-hover:scale-110 w-full object-cover h-full cursor-pointer duration-300 hover:scale-105' alt="" />
            <div className="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-mainDardk via-transparent to-transparent"></div>
          </div>
          <div className='flex flex-col capitalize'>

            <div className='flex justify-between mt-2 '>
              <h1 className="text-xl">Modernica Apartment</h1>
              <div className='px-2 text-normal my-auto  rounded-xl' style={{background:"#CCE3FC"}}>appartment</div>
            </div>

            <div className='flex mt-2 gap-2 text-lightGray'>
              <Image src={img2} alt="" />
              <span className='text-normal my-auto'>2 km away from current location</span>
            </div>

            <div className='flex justify-between'>
              <div className='flex mt-2 gap-2 text-lightGray'>
                <Image src={img4} alt="" />
                <span className='text-normal my-auto'>1 Bathroom</span>
              </div>
              <div className='flex mt-2 gap-2 text-lightGray'>
                <Image src={img3} className='m-auto' alt="" />
                <span className='text-normal my-auto'>1 Bed</span>
              </div>
              <div className='flex mt-2 gap-2 text-lightGray'>
                <Image src={img5} alt="" />
                <span className='text-normal my-auto'>125 sqft</span>
              </div>

            </div>

          </div>
        </Link>
  )
}

export default box

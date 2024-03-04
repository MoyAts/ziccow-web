"use client" 
import Image from "next/image"; 
import Link from "next/link";

import img2 from "../../assets/images/location.svg"
import img3 from "../../assets/images/bed.svg"
import img4 from "../../assets/images/bathroom.svg"
import img5 from "../../assets/images/space.svg"
import { houseFeaturedInf } from "@/utils/interfaces";


interface Props {
  data : houseFeaturedInf
}

const Box = ({data} : Props) => {
  
  return (
    <Link href={"/properties/"+data.listing_id}  className='bg-rd-300 relative w-fit max-w-sm cursor-pointer shrink-0 max-mobile:w-full rounded-xl overflow-hidden text-black flex flex-col gap-3'>
          <div className="absolute top-4 right-4  z-10">
              {
              data.is_featured ?  <Popular /> 
              : data.is_discounted ? <IsDiscounted />
              : data.is_
              }
          </div>          
          <div className='rounded-xl group relative border w-full h-2/3 overflow-hidden'>
            <Image src={data.digital_assets[0]?.url ?? ""} unoptimized={true} width={100} height={100} className='rounded-xl group-hover:scale-110 w-full object-cover h-full cursor-pointer duration-300 hover:scale-105' alt="" />
            <div className="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-mainDardk via-transparent to-transparent"></div>
          </div>
          <div className='flex flex-col capitalize'>

            <div className='flex justify-between mt-2 '>
              <div className="text-xl">{data.real_estate?.name ?? "Realestate"}</div>
              <div className='px-2 text-normal my-auto  rounded-xl' style={{background:"#CCE3FC"}}>appartment</div>
            </div>

            <div className='flex mt-2 gap-2 text-lightGray'>
              <Image src={img2} alt="" />
              <span className='text-normal my-auto'>{data.address_data ?? "Ethiopia"} </span>
            </div>

            <div className='flex justify-between'>
              <div className='flex mt-2 gap-2 text-lightGray'>
                <Image src={img4} alt="" />
                <span className='text-normal my-auto'>{data.listing_property.bathroom_count} Bathroom</span>
              </div>
              <div className='flex mt-2 gap-2 text-lightGray'>
                <Image src={img3} className='m-auto' alt="" />
                <span className='text-normal my-auto'>{data.listing_property.bedroom_count} Bedroom</span>
              </div>
              <div className='flex mt-2 gap-2 text-lightGray'>
                <Image src={img5} alt="" />
                <span className='text-normal my-auto'>{data.listing_property.square_ft} sqft</span>
              </div>

            </div>

          </div>
        </Link>
  )
}

const Popular = () => {
  return (
    <div className="w-fit px-2 py-1 rounded-xl" style={{backgroundColor : "rgba(253, 244, 231, 1)"}} >
      
        <div className="" style={{color : "rgba(82, 50, 6, 1)"}}>Popular</div>

    </div>
  )
}


const IsDiscounted = () => {
  return (
    <div className="w-fit px-2 py-1 rounded-xl" style={{backgroundColor : "rgba(253, 244, 231, 1)"}} >
      
        <div className="" style={{color : "rgba(82, 50, 6, 1)"}}>Discounted Price</div>

    </div>
  )
}


const isNewListing = () => {
  return (
    <div className="w-fit px-2 py-1 rounded-xl" style={{backgroundColor : "rgba(253, 244, 231, 1)"}} >
      
        <div className="" style={{color : "rgba(82, 50, 6, 1)"}}>New Listing</div>

    </div>
  )
}



export default Box

"use client" 
import Image from "next/image"; 
import locationIcon from "../../assets/images/location.svg"
import bookMarkSvg from "../../assets/images/bookmark.svg"
import bookMarkedSvg from "../../assets/images/bookmarked.svg"

import img3 from "../../assets/images/space.svg"
import img4 from "../../assets/images/bed.svg"
import img5 from "../../assets/images/bathroom.svg"
import { houseInf } from "@/utils/interfaces";
import { useMutation } from "@apollo/client";
import { ADD_TO_BOOKMARK } from "@/graphql/features/listing";
import Link from "next/link";
import { useSelector } from "react-redux";
import { LogInf, getState } from "@/store/features/auth/authSlice";
interface Props {
    house : houseInf,
    userId : string | null, 
}

const Home = ( { house , userId} : Props) => {
  const [addToBookmark , { loading,data,error}] = useMutation(ADD_TO_BOOKMARK,{
    fetchPolicy : "no-cache"
  })
  
  if(error){
    alert("something goes wrong")
  }
  const state = useSelector(getState)
  const url = state.isLogedIn == LogInf.LOGED_IN ? "/properties/"+house.listing_id : "/auth/register"
  
  return (
    
    <div  className={`flex w-full overflow-hidden shrink-0 gap-2 bg-white  p-1 rounded-lg text-lightGray flex-col`}>
        <Link href={url} className="rounded-lg  asis-1/3 flex ">
            {
            house.digital_assets[0]?.url &&
            <Image 
                src={house.digital_assets[0].url} 
                className="rounded-lg w-full object-cover my-auto hover:scale-105    duration-300" 
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
                alt="" 
            />
            }
        </Link>
        <div className="flex h-full  flex-grow"></div>
        <div className={`flex flex-col basis-2/3 py-2 px-1  `}>
            <div className={` flex justify-between`}>
                <h1 className="text-lg my-auto me-2 text-black">{house?.real_estate?.name ?? "Real state"}</h1>
                <div className={`  w-fit  bg-blue-300 text-black text-sm px-2 rounded-lg h-fit my-auto bg-opacity-55`}>
                       Appartment
                </div>
            </div>
            
            <p className="text-sm flex flex-wrap mb-2 mt-2">{house?.real_estate?.name ?? "unknown"} {house?.address_data ?? "unknown"}</p>
            <div className={`  flex w-full justify-between pe-2`}>
                <p className="flex text-sm text-black font-semibold gap-1">
                    <Image className="w-[20px] h-[20px]" src={locationIcon} alt="" />
                    <p className="my-auto">
                        2 km away from current location
                    </p>
                </p>
            </div>
            <div className='justify-between font-semibold text-black flex gap-y-2 flex-wrap' >
               {house.listing_property?.bathroom_count && 
                    <div className='flex mt-2 gap-1'>
                        <Image src={img5} width={15} className="my-auto"  alt="" />
                        <span className='text-sm my-auto'>{house.listing_property.bathroom_count} Bathroom</span>
                    </div>
                }
                {
                    house.listing_property?.bedroom_count &&
                    <div className='flex mt-2 gap-1 '>
                        <Image src={img3} width={13} className="my-auto"  alt="" />
                        <span className='text-sm my-auto'>{house.listing_property.bedroom_count} Bathroom</span>
                    </div>
                }
                {
                    house.listing_property?.square_ft && 
                    <div className='flex mt-2 gap-1 '>
                        <Image src={img4} width={19} className="my-auto" alt="" />
                        <span className='text-sm my-auto'>{house.listing_property.square_ft}Built up area</span>
                    </div>
                }
            </div>
            <div className="flex justify-between pe-2 mt-2">
                {
                    house.sale_price && 
                    <h1 className="">
                        <span className="text-xl font-semibold text-black">{house.currency ?? "Birr "}{house.sale_price.slice(1,house.sale_price.length)}</span> 
                        {house.sale_type != "Sell" && <span className=""> /month</span>}
                    </h1>
                }
               { 
               loading ? 
               "..." : 
               data ? 
               <Image src={bookMarkedSvg} className="w-6" alt="" />
               :
               <Image onClick={() => addToBookmark({ variables : { list_id : house.listing_id, user_id : userId}})} src={bookMarkSvg} className="w-6 cursor-pointer" alt="" />
               }                
            </div>
        </div>
    </div>
  )
}

export default Home
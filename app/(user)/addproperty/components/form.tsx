"use client" 
import Image from "next/image"; 
import Link from "next/link";
import { useRef, useState } from 'react'
import PropertyDetail from "./propertyDetail"
import PropertyManagment from './propertyManagment'
import Confirmation from "./confirmation";
import Confirmed from "./confirmed";

import accept from "../../../assets/images/goAccept.svg"
import goImg from "../../../assets/images/goBlack.svg"
import CancelImg from "../../../assets/images/cancelentry.svg"
import { PropertyDetailInf,initialForm } from "./interface";
import { useMutation } from "@apollo/client";
import { Add_LISTING_NEW } from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { getUser } from "@/lib/auth";

const Form = () => {
    const state = useSelector(getUser)
    const errRef = useRef<any>(null)
    const [form,setForm] = useState(initialForm)
    const [page,setPage] = useState(1)
    const [loading2,setLoading2] = useState(false)
    const [sendList,{ loading,error,data }] = useMutation(Add_LISTING_NEW)
    
   if(data){
    page != 4 && setPage(4)
   }
   
   if(error){
    console.log("error")
    console.log(error)
   }

   const changePage = (num : number) =>{
        errRef && errRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center", 
        });
        setPage(num)
    
   }

   const uploadImage = async (image : any)  => {
        const data = new FormData();
        data.append("file", image);
        data.append(
            "upload_preset",
            "mymymy"
        );
        data.append("cloud_name", "de7yugvwl");
        data.append("folder", "Cloudinary-React");
        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${"de7yugvwl"}/image/upload`,
                {
                method: "POST",
                body: data,
                }
            );
            const res = await response.json();
            return res.url
        } catch (e) {
            console.log(e,"--")
            alert("something goes wrong")
        }
        return null
   }
   const addList = async () => {
        let imgs : any = []
        setLoading2(true)
        for(let i in form.images){
            let url = null
            if(form.images[i]){ 
             url = await uploadImage(form.images[i])
             imgs.push({
                url,
                type: `${i}`,
                primary: imgs.length < 1
              })
            }
            
        }
        setForm((data : any) => ({...data,"urls":[...imgs]}))
        sendList({ variables : {
            "objects": {
              "address_data": form.address,
              "sale_price": form.sellingPrice,
              "build_date": form.yearBuilt,
              "description": "some nice description",
              "sale_type" : form.propertyManagment, 
              "listing_property": {
                "data": {
                  "bathroom_count": form.facilities.numOfBathrooms,
                  "bedroom_count": form.facilities.numOfBedrooms,
                  "gymnasium": form.facilities.numOfGyms,
                  "kitchen_count": form.facilities.numOfKitchens,
                  "library": form.facilities.numOfLibs,
                  "living_room_count": form.facilities.numOfLivingrooms,
                  "maids_room": form.facilities.numOfMaidsRooms,
                  "spa": form.facilities.numOfSpas,
                  "square_ft": form.squareFootage,
                  "store_rooms": form.facilities.numOfStores
                }
              },
              "digital_assets": {
                "data": imgs
              },
              "real_estate": {
                "data" :{ 
                    "name" : form.propertyName
                }
              }
            }
          }})
        setLoading2(false)
    }





   return (
    <div className='min-h-[400px]'>
         <div className='flex justify-between mt-12 max-tablet:flex-col'>
            <div className='flex tablet:flex-col mobile:gap-12 max-mobile:flex-col max-mobile:gap-4 basis-5/12 text-lightGray max-tablet:mb-7 '>
                <p onClick={() => setPage(1)} className={`${page == 1 && "font-semibold text-black"} gap-3    duration-200 flex justify-between`}>
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
                <p onClick={() => page > 1 && setPage(2)} className={`${page == 2 && "font-semibold text-black"} gap-3    duration-200 flex justify-between`}>
                    <p className={`cursor-pointer ${page > 2 && "text-accept"} `}>
                        2. Selling options
                    </p>
                    <div className=" flex justify-center items-center">
                        {
                            page == 2 ? 
                            <Image src={goImg} alt="go" className="w-5 me-12" /> :
                            page > 2 ?
                            <Image src={accept} alt="go" className="w-5 me-12" />
                            :
                            <></>
                        }
                    </div>
                </p>

                <p ref={errRef} onClick={() => page > 2 && setPage(3)} className={`${page == 3 && "font-semibold text-black"} gap-3  cursor-pointer duration-200 flex justify-between`}>
                    <p className="cursor-pointer">
                        3. Confirmation
                    </p>
                    <div className=" flex justify-center items-center">
                        {
                            page == 3 ? 
                            <Image src={goImg} alt="go" className="w-5 me-12" /> :
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
                <PropertyDetail setPage={changePage} setForm={setForm} form={form} />
                :
                page == 2 ?
                <PropertyManagment setPage={changePage} setForm={setForm} form={form} />
                :
                page == 3 ?
                <Confirmation loading={loading || loading2} form={form} setForm={setForm} addList={addList} />
                :
                <Confirmed />
            }

        </div>
    </div>
  )
}

export default Form
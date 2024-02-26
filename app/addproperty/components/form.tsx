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
import { PropertyDetailInf,initialForm } from "./interface";
import { useMutation } from "@apollo/client";
import { Add_LISTING } from "@/graphql/features/listing";

const Form = () => {
   
   const [form,setForm] = useState(initialForm)
   const [page,setPage] = useState(1)
   const [loading2,setLoading2] = useState(false)
   const [sendList,{ loading,error,data }] = useMutation(Add_LISTING)
   
   if(data){
    page != 4 && setPage(4)
   }
  
   if(error){
    console.log("error")
    console.log(error)
   }
   console.log(form)

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
            address : form.address,
            sellingPrice : form.sellingPrice,
            yearBuilt : form.yearBuilt,
            squareFootage : form.squareFootage,
            numOfBathrooms : form.facilities.numOfBathrooms,
            numOfBedrooms : form.facilities.numOfBedrooms,
            numOfLivingrooms : form.facilities.numOfLivingrooms,
            numOfKitchens : form.facilities.numOfKitchens,
            numOfMaidsRooms : form.facilities.numOfMaidsRooms,
            numOfStores : form.facilities.numOfStores,
            numOfLibs : form.facilities.numOfLibs,
            numOfGyms : form.facilities.numOfGyms,
            numOfSpas : form.facilities.numOfSpas,
            urls : [],
            name : form.propertyName,
            lotFeature : form.lotFeature ?? false,
            appliances : form.appliances ?? false,
            parkingFeature : form.parkingFeature ?? false,
            shoppingDistrict : form.community.shoppingDistrict ?? false,
            nearPark : form.community.nearPark ?? false,
            currency : form.currency,

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

                <p onClick={() => page > 2 && setPage(3)} className={`${page == 3 && "font-semibold text-black"} gap-3  cursor-pointer duration-200 flex justify-between`}>
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
                <PropertyDetail setPage={setPage} setForm={setForm} form={form} />
                :
                page == 2 ?
                <PropertyManagment setPage={setPage} setForm={setForm} form={form} />
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
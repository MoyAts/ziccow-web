"use client" 
import Image from "next/image"; 
import locImg from "../../assets/images/detailLocation.svg"
import hashTagImg from "../../assets/images/hashTag.svg"
import propertyImg from "../../assets/images/propertyLight.svg"
import builtImg from "../../assets/images/built.svg"
import img3 from "../../assets/images/bed.svg"
import img4 from "../../assets/images/bathroom.svg"
import img5 from "../../assets/images/space.svg"

const generalInformation = () => {
  return (
    <div className="mt-2 bg-white py-4 px-4 rounded-xl shadow h-fit">
        <div className="flex gap-2 text-xl font-semibold">
            <div className="w-5 my-auto h-5 rounded bg-gray-400 text-lightGray flex justify-center items-center">
                !
            </div>
            <p>
              General Information
            </p>
        </div>
        <div className="flex flex-col my-4 mt-6 gap-5 text-[16px] text-lightGray">
          
          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={locImg} className="w-5  my-auto mt-1" alt="" />
            <p>
              Glam Apartment No.3, 4 Kilo Parliament, Addis Ababa.
            </p>
          </div>
          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={hashTagImg} className="w-5  my-auto mt-1" alt="" />
            <p>
              Parcel number: 012671164
            </p>
          </div>
          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={propertyImg} className="w-5  my-auto mt-1" alt="" />
            <p>
              Apartment
            </p>
          </div>
          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={builtImg} className="w-5  my-auto mt-1" alt="" />
            <p>
              Property built on 2020
            </p>
          </div>

          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={img5} className="w-5  my-auto mt-1" alt="" />
            <p>
              Occupying 125 sq ft
            </p>
          </div>

          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={img4} className="w-5  my-auto mt-1" alt="" />
            <p>
             Single Dedicated Bathroom
            </p>
          </div>

          <div className="flex gap-5 px-2 pb-4 ">
            <Image src={img3} className="w-5  my-auto mt-1" alt="" />
            <p>
             A Single Bedroom
            </p>
          </div>


        </div>

    </div>
  )
}

export default generalInformation

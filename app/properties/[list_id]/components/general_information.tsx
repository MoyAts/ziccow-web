"use client";
import Image from "next/image";
import locImg from "../../../assets/images/detailLocation.svg";
import hashTagImg from "../../../assets/images/hashTag.svg";
import propertyImg from "../../../assets/images/propertyLight.svg";
import builtImg from "../../../assets/images/built.svg";
import img3 from "../../../assets/images/bed.svg";
import img4 from "../../../assets/images/bathroom.svg";
import img5 from "../../../assets/images/space.svg";
import { houseInf } from "@/utils/interfaces";

interface Props {
  house: houseInf;
}

const generalInformation = ({ house }: Props) => {
  return (
    <div className="mt-2 bg-white py-4 px-4 rounded-xl shadow h-fit">
      <div className="flex gap-2 text-xl font-semibold">
        <div className="w-5 my-auto h-5 rounded bg-gray-400 text-lightGray flex justify-center items-center">
          !
        </div>
        <p>General Information</p>
      </div>
      <div className="flex flex-col my-4 mt-6 gap-5 text-[16px] text-lightGray">
        <div className="flex gap-5 border-b px-2 pb-4 ">
          <Image src={locImg} className="w-5  my-auto mt-1" alt="" />
          <p>{house.address_data ?? ""}.</p>
        </div>
        <div className="flex gap-5 border-b px-2 pb-4 ">
          <Image src={hashTagImg} className="w-5  my-auto mt-1" alt="" />
          <p>Property Id: {house.property_number ?? " N/A"}</p>
        </div>
        
        {house.real_estate_id && (
          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={propertyImg} className="w-5  my-auto mt-1" alt="" />
            <p>Project {house.project_name}</p>
          </div>
        )}

        {house.house_type?.type_name && (
          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={propertyImg} className="w-5  my-auto mt-1" alt="" />
            <p>{house.house_type?.type_name}</p>
          </div>
        )}
        <div className="flex gap-5 border-b px-2 pb-4 ">
          <Image src={builtImg} className="w-5  my-auto mt-1" alt="" />
          <p>Property built on {house.build_date}</p>
        </div>

        {house.extra_features?.applicances && (
          <div className="flex gap-5 border-b px-2 pb-4 ">
            <Image src={propertyImg} className="w-5  my-auto mt-1" alt="" />
            <p>{house.extra_features?.applicances}</p>
          </div>
        )}

       

        <div className="flex gap-5 border-b px-2 pb-4 ">
          <Image src={img5} className="w-5  my-auto mt-1" alt="" />
          <p>
            Built up area {house.listing_property?.square_ft ?? 0} m<sup>2</sup>
          </p>
        </div>

        <div className="flex gap-5  px-2  ">
          <Image src={img4} className="w-5  my-auto mt-1" alt="" />
          <p>{house.listing_property.bathroom_count} Bathroom</p>
        </div>

        {!house.real_estate_id && 
          <div className="flex gap-5 border-t px-2 pt-4 ">
            <Image src={img3} className="w-5  my-auto mt-1" alt="" />
            <p>{house.listing_property.bedroom_count} Bedroom</p>
          </div>
        }
        
      </div>
    </div>
  );
};

export default generalInformation;

"use client";
import Image from "next/image";
import { FaArrowUp as ArrowIcon } from "react-icons/fa6";
import { houseInf } from "@/utils/interfaces";
import Link from "next/link";

import img3 from "../../assets/images/space.svg";
import img4 from "../../assets/images/bed.svg";
import img5 from "../../assets/images/bathroom.svg";
import { TbToolsKitchen2 } from "react-icons/tb";
const RecommendationBox = ({ house }: { house: houseInf }) => {
  console.log(house);
  const encodedPathname = "/properties/" + house?.listing_id;
  return (
    <Link
      href={{
        pathname: encodedPathname,
        query: "r=true",
      }}
      className="flex w-full flex-col text-sm  gap-1 md:max-w-[400px]"
    >
      <div className="rounded-lg relative w-full overflow-hidden duration-200">
        <Image
          src={house?.digital_assets[0]?.url ?? ""}
          width={100}
          height={100}
          unoptimized={true}
          className="w-full hover:scale-105 object-cover duration-200 h-[300px] rounded-lg"
          alt=""
        />
      </div>
      <h1 className="font-semibold">
        {house?.real_estate?.name ?? "Real state"}
      </h1>
      <p>{house.description ? house.description.slice(0, 50) : ""}</p>
      {/* <div className="justify-between  text-black grid grid-cols-2 gap-2 flex-wrap">
        <div className="flex mt-2 gap-1 ">
          <Image src={img4} width={19} className="my-auto" alt="" />
          <span className="text-sm my-auto">
            {house.listing_property?.square_ft ?? 0} M<sup>2</sup> Built up area
          </span>
        </div>
        <div className="flex mt-2 gap-1  place-self-end">
          <Image src={img5} width={15} className="my-auto" alt="" />
          <span className="text-sm my-auto">
            {house.listing_property?.bedroom_count ?? 0} Bathroom
          </span>
        </div>
        <div className="flex mt-2 gap-1  ">
          <Image src={img3} width={13} className="my-auto" alt="" />
          <span className="text-sm my-auto">
            {house.listing_property?.bedroom_count ?? 0} Bedroom
          </span>
        </div>
        <div className="flex mt-2 gap-1 place-self-end">
          <Image src={img4} width={19} className="my-auto" alt="" />
          <span className="text-sm my-auto">
            {house.listing_property?.kitchen_count ?? 0} Kitchens
          </span>
        </div>
      </div> */}
      <div className="justify-between  text-black grid grid-cols-2 gap-2 flex-wrap">
        <div className="flex mt-2 gap-1 ">
          <Image src={img3} width={16} className="my-auto" alt="" />
          <span className="text-sm my-auto">
            {house.listing_property?.square_ft ?? 0} M<sup>2</sup>
            Built up area
          </span>
        </div>
        <div className="flex mt-2 gap-1  place-self-end">
          <Image src={img5} width={16} className="my-auto" alt="" />
          <span className="text-sm my-auto">
            {house.listing_property?.bedroom_count ?? 0} Bathroom
          </span>
        </div>
        <div className="flex mt-2 gap-1  ">
          <Image src={img4} width={16} className="my-auto" alt="" />
          <span className="text-sm my-auto">
            {house.listing_property?.bedroom_count ?? 0} Bedroom
          </span>
        </div>
        <div className="flex mt-2 gap-1 place-self-end">
          {/* <Image src={img4} width={19} className="my-auto" alt="" /> */}
          <TbToolsKitchen2 width={16} className="text-gray-500" />
          <span className="text-sm my-auto">
            {house.listing_property?.kitchen_count ?? 0} Kitchenss
          </span>
        </div>
      </div>
      <button className="flex w-fit gap-2 text-mainBlue mt-2 group">
        <span>View More</span>
        <ArrowIcon className="rotate-90 duration-200 m-auto relative " />
      </button>
    </Link>
  );
};

export default RecommendationBox;

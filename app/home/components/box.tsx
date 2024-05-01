"use client";
import Image from "next/image";
import Link from "next/link";

import img2 from "../../assets/images/location.svg";
import img3 from "../../assets/images/bed.svg";
import img4 from "../../assets/images/bathroom.svg";
import img5 from "../../assets/images/space.svg";
import { houseFeaturedInf } from "@/utils/interfaces";
import popImg from "../../assets/images/solar_fire-bold-duotone.png";
import aImg from "../../assets/images/solar_tag-price-bold-duotone.png";
import { useSelector } from "react-redux";
import { getState, LogInf } from "@/store/features/auth/authSlice";

interface Props {
  house: houseFeaturedInf;
}

const Box = ({ house }: Props) => {
  const state = useSelector(getState);
  const url =
    state.isLogedIn == LogInf.LOGED_IN
      ? "/properties/" + house.listing_id
      : "/auth/register";
  return (
    <Link
      href={url}
      className="bg-rd-300 relative w-fit max-w-sm cursor-pointer shrink-0 max-mobile:w-full rounded-xl overflow-hidden text-black flex flex-col gap-3"
    >
      <div className="absolute top-4 right-4  z-10">
        {house.is_popular ? (
          <Popular />
        ) : house.is_discounted ? (
          <IsDiscounted />
        ) : (
          <></>
        )}
      </div>
      <div className="rounded-xl group relative border w-full h-2/3 overflow-hidden">
        <Image
          src={house.digital_assets[0]?.url ?? ""}
          unoptimized={true}
          width={100}
          height={100}
          className="rounded-xl group-hover:scale-110 w-full object-cover h-full cursor-pointer duration-300 hover:scale-105"
          alt=""
        />
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-mainDardk via-transparent to-transparent"></div>
      </div>
      <div className="flex flex-col capitalize">
        <div className="flex justify-between mt-2 ">
          <div className="text-xl">
            {house.real_estate?.name ?? "Realestate"}
          </div>
          <div
            className="px-2 text-normal my-auto  rounded-xl capitalize"
            style={{ background: "#CCE3FC" }}
          >
            {house.status}
          </div>
        </div>

        <div className="flex mt-2 gap-2 text-lightGray">
          <Image src={img2} alt="" />
          <span className="text-normal my-auto">
            {house.address_data ?? "Ethiopia"}
          </span>
        </div>

        <div className="flex justify-between">
          <div className="flex mt-2 gap-2 text-lightGray">
            <Image src={img4} alt="" />
            <span className="text-normal my-auto">
              {house.listing_property.bathroom_count} Bathroom
            </span>
          </div>
          <div className="flex mt-2 gap-2 text-lightGray">
            <Image src={img3} className="m-auto" alt="" />
            <span className="text-normal my-auto">
              {house.listing_property.bedroom_count} Bedroom
            </span>
          </div>
          <div className="flex mt-2 gap-2 text-lightGray">
            <Image src={img5} alt="" />
            <span className="text-normal my-auto">
              {house.listing_property.square_ft} sqft
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Popular = () => {
  return (
    <div
      className="w-fit px-2 py-1 rounded-xl flex gap-2"
      style={{ backgroundColor: "rgba(253, 244, 231, 1)" }}
    >
      <Image src={popImg} alt="" />
      <div className="" style={{ color: "rgba(82, 50, 6, 1)" }}>
        Popular
      </div>
    </div>
  );
};

const IsDiscounted = () => {
  return (
    <div className="w-fit px-2 py-1 rounded-xl flex gap-2 bg-green-100">
      <Image src={aImg} alt="" />
      <div className="" style={{ color: "rgba(82, 50, 6, 1)" }}>
        Discounted Price
      </div>
    </div>
  );
};

export default Box;

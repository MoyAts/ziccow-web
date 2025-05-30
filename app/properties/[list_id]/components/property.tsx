"use client";
import Image from "next/image";
import locationIcon from "../../../assets/images/Group.png";
import img from "../../../assets/images/card-header.png";
import bookMarkSvg from "../../../assets/images/bookmark.svg";

import img3 from "../../../assets/images/Group (1).png";
import img4 from "../../../assets/images/Group (2).png";
import img5 from "../../../assets/images/Group (3).png";

const property = () => {
  return (
    <div
      className={`flex flex-shrink-0 w-fit  gap-2 bg-white border shadow p-1 rounded-lg text-lightGray flex-col`}
    >
      <div className="rounded-lg  flex">
        <Image
          src={img}
          className="rounded-lg w-full object-cover my-auto"
          alt=""
        />
      </div>
      <div className={`flex flex-col basis-2/3 py-2 px-1`}>
        <div className={` flex justify-between gap-6`}>
          <h1 className="text-lg mt-2 text-black my-auto font-semibold">
            Glam Apartment No.3
          </h1>
          <div
            className={`  w-fit  bg-blue-300 text-black text-[10px] px-2 rounded-lg h-fit my-auto bg-opacity-55`}
          >
            Apartment
          </div>
        </div>

        <p className="text-[10px]">
          Glam Apartment No.3, 4 Kilo Parliament, Addis Ababa.
        </p>
        <div className={` flex w-full justify-between pe-2`}>
          <p className="flex text-xs gap-2">
            <Image className="w-[20px] h-[20px]" src={locationIcon} alt="" />
            <p className="my-auto">2 km away from current location</p>
          </p>
        </div>
        <div className="flex justify-between pe-2 text-black flex-wrap">
          <div className="flex mt-2 gap-2">
            <Image src={img5} width={15} className="my-auto" alt="" />
            <span className="text-[10px] my-auto">1 Bathroom</span>
          </div>
          <div className="flex mt-2 gap-2 ">
            <Image src={img3} width={13} className="my-auto" alt="" />
            <span className="text-[10px] my-auto">1 Bathroom</span>
          </div>
          <div className="flex mt-2 gap-2 ">
            <Image src={img4} width={19} className="my-auto" alt="" />
            <span className="text-[10px] my-auto">1 Bathroom</span>
          </div>
        </div>
        <div className="flex justify-between pe-2 mt-2">
          <h1 className="">
            <span className="text-xl font-semibold text-black">$12,000</span>
            <span className="">/month</span>
          </h1>
          <Image src={bookMarkSvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default property;

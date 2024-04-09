"use client";
import Image from "next/image";
import userImg from "../../assets/images/Photo.png";
import phoneImg from "../../assets/images/datelight.svg";
import InputIcon from "../../assets/images/inputIcon.svg";
import send from "../../assets/images/send.svg";
import userSvg from "../../assets/images/user.svg";

const broker = () => {
  return (
    <div className="mt-5 bg-white py-4 px-4 rounded-xl shadow h-fit">
      <div className="flex gap-2 text-xl font-semibold">
        <Image src={userSvg} className="w-7" alt="" />
        <p>Broker’s Info</p>
      </div>

      <div className="flex flex-col my-4 mt-6 gap-5 text-[16px] text-lightGray">
        <div className="px-2 pb-4 flex justify-between">
          <div className="flex gap-2">
            <Image src={userImg} className="w-16 h-16 rounded-full" alt="" />
            <div className="flex flex-col my-auto">
              <div>Jan 03, 2024</div>
              <div className="text-slate-700">Today</div>
            </div>
          </div>
          <Image src={phoneImg} className="w-7 my-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default broker;

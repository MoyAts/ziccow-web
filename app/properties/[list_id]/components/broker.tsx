"use client";
import Image from "next/image";
import userImg from "../../../assets/images/Photo.png";
import phoneImg from "../../../assets/images/datelight.svg";
import InputIcon from "../../../assets/images/inputIcon.svg";
import send from "../../../assets/images/send.svg";
import userSvg from "../../../assets/images/user.svg";
import { houseFeaturedInf, houseInf } from "@/utils/interfaces";
import { CiLinkedin } from "react-icons/ci";
import { BsTelegram, BsTiktok, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import ShowImage from "@/app/_components/showImage";
import { useState } from "react";

interface Props {
  house: houseInf;
}
const Broker = ({ house }: Props) => {
  const date = new Date(house.created_at);
  const [open, setOpen] = useState(false);
  console.log(house, "my house");
  return (
    <div className="mt-5 bg-white py-4 px-4 rounded-xl shadow h-fit">
      <div className="flex gap-2 text-xl font-semibold">
        <Image src={userSvg} className="w-7" alt="" />
        <p>Agent’s Info </p>
        <div className="my-auto capitalize px-2 py-1 rounded-lg bg-mainBlue text-white text-xs shadow-lg">
          {house.type_of_person}
        </div>
      </div>
      <ShowImage
        open={open}
        setOpen={setOpen}
        imageLink={house.owner?.profile_pic ?? ""}
      />

      <div className="flex flex-col my-4 mt-6 gap-2 text-[16px] text-lightGray">
        <div className="px-2 pb-4 flex justify-between gap-3">
          <div className="flex  gap-4  w-full">
            {house.owner?.profile_pic ? (
              <Image
                onClick={() => setOpen((data) => !data)}
                src={house.owner?.profile_pic ?? ""}
                width={100}
                height={100}
                className="w-[50px] h-[50px] object-cover rounded-full"
                alt=""
              />
            ) : (
              <div className="p-2 flex rounded-full w-[44px] bg-blue-500 text-white h-[44px]">
                <p className="m-auto text-2xl">
                  {house.owner?.first_name ? house.owner?.first_name[0] : "U"}
                </p>
              </div>
            )}
            <div className="flex flex-col my-auto">
              {/* <div>
                {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
              </div> */}
              <div className="text-slate-700 capitalize">
                {house.owner?.first_name} {house.owner?.last_name}
              </div>
            </div>
          </div>
          <a href={"tel:" + house.owner?.phone_number ?? ""}>
            <Image src={phoneImg} className="w-7 my-auto" alt="" />
          </a>
        </div>

        <div className={"flex flex-col gap-2 capitalize "}>
          <div className="text-xl text-black mt-5">Social Medias</div>
          <div className="flex gap-4 mt-2 justify-between">
            {house.owner?.social_youtube && (
              <Link href={house.owner?.social_youtube ?? ""}>
                <FaYoutube className="text-3xl hover:text-blue-600 text-blue-500" />
              </Link>
            )}
            {house.owner?.social_facebook && (
              <Link href={house.owner?.social_facebook ?? ""}>
                <FaFacebookF className="text-3xl hover:text-blue-600 text-blue-500" />
              </Link>
            )}
            {house.owner?.social_whatsapp && (
              <Link href={house.owner?.social_whatsapp ?? ""}>
                <FaWhatsapp className="text-3xl hover:text-blue-600 text-blue-500" />
              </Link>
            )}
            {house.owner?.social_telegram && (
              <Link href={house.owner?.social_telegram ?? ""}>
                <BsTelegram className="text-3xl hover:text-blue-600 text-blue-500" />
              </Link>
            )}
            {house.owner?.social_instagram && (
              <Link href={house.owner?.social_instagram ?? ""}>
                <FaInstagram className="text-3xl hover:text-blue-600 text-blue-500" />
              </Link>
            )}
            {house.owner?.social_tiktok && (
              <Link href={house.owner?.social_tiktok ?? ""}>
                <BsTiktok className="text-3xl hover:text-blue-600 text-blue-500" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broker;

"use client";
import Image from "next/image";
import React from "react";
import img from "../assets/images/under_construction.svg";
import logo from "../assets/images/Widget 5.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full h-fit min-h-[100vh] pb-12 bg-lightBg flex flex-col items-center">
      <div className="flex gap-3 mt-10 ">
        <Image src={logo} alt="" />
        <p className="text-center">Ziccow General Trading</p>
      </div>
      <div className="text-[30px] mt-10 text-mainBlue text-center">
        The Website is Under Construction
      </div>
      <Image
        src={img}
        className="relative -top-12 max-tablet:top-0  max-small:mt-12"
        alt=""
      />

      <div className="flex gap-7 mb-7 max-tablet:mt-16">
        <FaFacebookF className="text-xl" />
        <FaInstagram className="text-xl" />
        <RiTwitterXFill className="text-xl" />
        <FaLinkedinIn className="text-xl" />
      </div>
      <div className="text-center mt-4 max-tablet:mt-2">
        Copyright ©Ziccow General Trading 2024.
      </div>
    </div>
  );
};

export default page;

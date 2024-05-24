"use client";
import Image from "next/image";
import goImg from "../assets/images/go.svg";
import Link from "next/link";

const join = () => {
  return (
    <div className="w-full bg-mainDark flex justify-center ">
      <div className="w-full border-b-[1px]  border-gray-600  max-w-[1560px] max-tablet:px-10 px-20 bg-mainDark flex max-tablet:flex-col max-tablet:gap-8 max-mobile:px-5 gap-12 py-24 text-white">
        <div className="basis-2/3 max-tablet:basis-1">
          <div className="text-[47px] max-tablet:text-center max-tablet:text-[35px]  flex-col max-tablet:mb-4 mb-10">
            <span>Do you want to contact &nbsp;</span>
            <span className="text-mainBlue leading-[12px]">
              with our agents
              <span className="text-white"> ?</span>
            </span>
          </div>
          <p className="font-light max-tablet:text-center ">
            Our agents are the key to your success in the real estate market.
            With Zirrow, you can count on us to not only help you find your
            dream home but also to generate more leads for your property
            listings.
          </p>
        </div>
        <p className="basis-1/3 max-tablet:basis-full  max-mobile:mx-0 max-tablet:mx-auto  text-sm my-auto flex flex-row-reverse text-gray-400 ">
          <Link
            href="/contactus"
            className="flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg max-mobile:justify-center bg-mainBlue max-mobile:w-full w-fit text-white "
          >
            <span className="text-[16px]">Find zirrow agents</span>
            <Image src={goImg} className="w-6 my-auto" alt="" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default join;

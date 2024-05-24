"use client";
import Image from "next/image";

import Nav from "../../_components/nav";
import bg from "../../assets/images/about_bg.png";
const Hero = ({ setIsDrawer }: any) => {
  return (
    <div className="w-full bg-[#6b6d77] h-[100vh]   mx-auto max-h-[800px] relative flex flex-col ">
      <Nav setIsDrawer={setIsDrawer} withsearch={false} />
      <div className="absolute w-full h-[100vh]  mx-auto max-h-[800px]">
        <Image
          src={bg}
          alt=""
          className="w-full mx-auto m  h-full object-cover"
        />
      </div>
      <div className="m-auto z-0 flex flex-col text-white">
        <h1 className="text-[45px] max-tablet:text-center">
          Zirrow General Trading
        </h1>
        <p className="text-center font-light">
          Meet founding members of Zirrow General Trading PLC
        </p>
      </div>
    </div>
  );
};

export default Hero;

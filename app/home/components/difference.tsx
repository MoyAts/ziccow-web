"use client";
import Image from "next/image";
import img from "../../assets/images/Mask group (2).png";

const difference = () => {
  return (
    <div className="w-full">
      <div
        id="services"
        className="h-[100vh] max-w-[1700px] mx-auto  max-h-[700px]   flex max-tablet:flex-col max-tablet:px-10 px-20 max-mobile:px-0  "
      >
        <div className="flex flex-col my-auto gap-3 max-tablet:gap-6 max-tablet:px-8 max-mobile:px-5  max-tablet:justify-center max-tablet:items-center w-6/12 max-tablet:w-full max-tablet:mt-20">
          <h4 className="text-lg text-blue-500  ">What makes us different?</h4>
          <div
            className="text-[54px] max-mobile:text-[35px] max-tablet:text-[40px] max-tablet:text-center w-full"
            style={{ lineHeight: 1 }}
          >
            <span className="">We assist buyers in finding their</span>
            <span className="text-blue-500 ms-2 ">dream homes.</span>
          </div>
          <p className="text-lg w-4/5  max-mobile:hidden text-gray-700 mt-3 max-tablet:text-center">
            Our agents will guide you through the entire buying process, of
            property.
          </p>
        </div>
        <div className="flex w-1/2 max-tablet:w-full max-tablet:mt-8 ">
          <div className="my-auto max-tablet:w-3/4  max-mobile:w-full w-full mx-auto">
            <Image src={img} alt="" className="w-full object-cover" />
          </div>
        </div>
        <p className="text-lg w-4/5 px-5 text-center  max-mobile:w-full mobile:hidden text-gray-700 mt-7 max-tablet:text-center">
          Our agents will guide you through the entire buying process, of
          property.
        </p>
      </div>
    </div>
  );
};

export default difference;

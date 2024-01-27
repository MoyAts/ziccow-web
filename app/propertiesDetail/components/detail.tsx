"use client" 
import Image from "next/image"; 
import propertyImg from "../../assets/images/property.svg"
import img from "../../assets/images/solar_medal-ribbons-star-bold-duotone.png"
import saveImg from "../../assets/images/save.svg"
import shareImg from "../../assets/images/share.svg"
import reportImg from "../../assets/images/report.svg"
import ImageSlider from "./image_slider"
import GeneralInformation from "./general_information"
import About from "./about"
import Price from "./price"
import Features from "./features"
import Graph from "./graph"
import TimeLine from "./time_line"
import Broker from "./broker"
import Nearby from "./nearby"

const detail = () => (
  <div className='w-full h-fit px-20 max-w-[1700px] mx-auto'>
    <div className='flex text-sm gap-2'>
      <div className="flex gap-1">
        <Image src={propertyImg} alt="" />
        <div>Property</div>
      </div>
      <div>Rental</div>
      <div>Glam Apartment No.3</div>
    </div>

    <div className="flex justify-between">
      <div className="flex gap-7">
        <h1 className="text-[35px]"> Glam Apartment No.3</h1>

        <div className="flex gap-1 m-auto">
          <Image src={img} width={25} alt="" />
          <p className="my-auto text-mainBlue">Verified</p>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex gap-2">
          <Image src={saveImg} className="my-auto" alt="" />
          <p className="my-auto">save</p>
        </div>
        <div className="flex gap-2">
          <Image src={shareImg} alt="" className="my-auto" />
          <p className="my-auto">share</p>
        </div>
        <div className="flex gap-2">
          <Image src={reportImg} alt="" className="my-auto" />
          <p className="my-auto text-[#b16d0e]">Report</p>
        </div>

      </div>

    </div>

    <div className="flex gap-4">
      <div className="flex gap-1">
        <span>1 day</span>
        <span className="text-lightGray">on Ziccow</span>
      </div>
      <div className="w-[1px] h-5 my-auto bg-gray-300"></div>
      <div className="flex gap-1">
        <span>310</span>
        <span className="text-lightGray">View</span>
      </div>
      <div className="w-[1px] h-5 my-auto bg-gray-300"></div>
      <div className="flex gap-1">
        <span>4</span>
        <span className="text-lightGray">Saves</span>
      </div>
    </div>

    <div className="flex w-full pb-12 gap-10 pt-8">
      <div className="w-7/12 flex flex-col">
        <ImageSlider />
        <About />
        <Features />
        <Graph />
        <Nearby />
      </div>
      <div className="w-5/12 flex flex-col">
        <GeneralInformation />
        <Price />
        <TimeLine />
        <Broker />
      </div>
    </div>

  </div>
)

export default detail

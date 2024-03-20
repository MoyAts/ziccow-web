"use client" 
import Image from "next/image"; 
import propertyImg from "../../../assets/images/property.svg"
import img from "../../../assets/images/solar_medal-ribbons-star-bold-duotone.png"
import saveImg from "../../../assets/images/save.svg"
import shareImg from "../../../assets/images/share.svg"
import reportImg from "../../../assets/images/report.svg"
import ImageSlider from "./image_slider"
import GeneralInformation from "./general_information"
import About from "./about"
import Price from "./price"
import Features from "./features"
import Graph from "./graph"
import TimeLine from "./time_line"
import Broker from "./broker"
import Nearby from "./nearby"
import { houseInf } from "@/utils/interfaces";
import AddComment from "./comments";
import BuildStar  from "./buildstar"
interface Props {
  house : houseInf
}

const detail = ({ house } : Props ) => (
  <div className='w-full mt-12 h-fit px-20 max-w-[1700px]  max-tablet:px-10 max-small:px-5 mx-auto'>
    <div className='flex text-sm gap-2'>
      <div className="flex gap-1">
        <Image src={propertyImg} alt="" />
        <div>Property</div>
      </div>
      <div>Rental</div>
      <div>{house.real_estate_name ?? house.real_estate?.name ?? "Real State"}</div>
    </div>

    <div className="flex justify-between">
      <div className="flex gap-7">
        <h1 className="text-[35px] max-tablet:text-[25px]"> {house.real_estate?.name ?? "Real State"}</h1>

        <div className="flex gap-1 m-auto">
          <Image src={img} width={25} alt="" />
          <p className="my-auto text-mainBlue">Verified</p>
        </div>
        <div className="flex gap-2 my-auto ">
          <BuildStar num={3} />
        </div>
      </div>



      <div className="flexx gap-10 max-tablet: hidden">
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
    <div className="flex justify-between max-mobile:flex-col max-small:gap-5">
      <div className="flex gap-4 my-auto">
        <div className="flex gap-1">
          <span>1 day</span>
          <span className="text-lightGray">on Zirrow</span>
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
      <div className="flex gap-10 tablet:hidden place-self-end">
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

    <div className="flex w-full pb-12 gap-10 pt-8 max-tablet:hidden">
      <div className="w-7/12 flex flex-col">
        <ImageSlider house={house} />
        <About description={house.description} />
        <Features house={house} />
        {/* <Nearby /> */}
      </div>
      <div className="w-5/12 flex flex-col">
        <GeneralInformation house={house} />
        <Price house={house} />
        <TimeLine />
        <Broker />
      </div>
    </div>

    <div className="flex flex-col w-full pb-12 gap-10 pt-8 tablet:hidden">
        <ImageSlider house={house} />
        {/* <About /> */}
        <GeneralInformation house={house} />
        <Price house={house} />
        <TimeLine />
        <Broker />
        <Features house={house} />
        {/* <Nearby /> */}
    </div>
    <div className=" ">
      <AddComment />
    </div>
  </div>
)

export default detail

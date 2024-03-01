"use client" 
import Image from "next/image"; 
import img from "../../../assets/images/anthony-esau-N2zk9yXjmLA-unsplash (1).jpg"
import { IoIosArrowBack as NextIcon} from "react-icons/io";
import { houseInf } from "@/utils/interfaces";

interface Props {
    house : houseInf
}

const imageSlider = ({ house } : Props) => {
  return (
    <div className='p-2  bg-red-00 h-fit'>
        <div className='w-full h-[65vh] max-h-[500px] rounded-lg relative'>
            <div className="absolute cursor-pointer left-2 hover:opacity-100 duration-200 flex bottom-1/2 mt-2 w-10 h-10 text-white rounded-full bg-blue-200">
                 <NextIcon className="m-auto text-mainBlue" />
            </div>
            <div className="absolute cursor-pointer flex right-2 hover:opacity-100 duration-200 bottom-1/2 mt-2 w-10 h-10 text-white rounded-full bg-mainBlue">
                <NextIcon className="m-auto rotate-180" />
            </div>
            <Image src={house.digital_assets[0]?.url ?? ""} width={100} height={100} className='w-full h-full object-cover rounded-lg' alt="" />        
        </div>
        {/* <div className="mt-4 gap-5 grid grid-cols-4 justify-between overflow-hidden">
            <div onClick={() => alert("alert")} className="w-full flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-full flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>

            <div onClick={() => alert("alert")} className="w-full flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-full relative flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
                <div className="absolute left-0 right-0 bottom-0 top-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
                    <p className="text-white text-3xl">6+</p>
                </div>
            </div>

          

        </div> */}
    </div>
  )
}

export default imageSlider

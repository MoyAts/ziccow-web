"use client" 
import Image from "next/image"; 
import rentalIcon from "../../assets/images/rentalIcon.svg"
import SelectOption from "./select_option"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import gridSvg from  "../../assets/images/gridsvg.svg"
import listSvg from  "../../assets/images/listSvg.svg"
import Home from "./home";
import { useState } from "react";
import collapseImg from "../../assets/images/collapse.svg"
interface filterInf {
    list : string[],
    img : any 
}

const Hero = () => {
    const [isGrid,setIsGrid] = useState(false)
    const sortList = ["Default" , "temporary1","temporary2"] 
    const filters : filterInf[] = [
        {
            list : ["Rental1","Rental2","Rental3"],
            img : rentalIcon
        },
        {
            list : ["Rental1","Rental2","Rental3","Rental4"],
            img : rentalIcon
        },
        {
            list : ["Rental1","Rental2"],
            img : rentalIcon
        },
        {
            list : ["Rental1","Rental2","Rental3"],
            img : rentalIcon
        },
    ]
  
  return (

    <div className='h-[100vh] max-w-[1700px] mx-auto max-h-[800px] relative z-20  bg-lightBg flex border-t border-gray-300'>
        <div className="basis-3/5 h-full bg-white">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.155759235115!2d38.744371077855796!3d9.037385747868658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1705580274602!5m2!1sen!2set" width="600" height="450"   loading="lazy" ></iframe>
        </div>
        <div className="basis-2/5  h-full  flex flex-col px-5 ">
            <div className="flex text-sm justify-between my-3">
                    <div className="font-semibold">Property Listing</div>
                    <div className="flex gap-2">
                        <span>Collapse</span>
                        <Image src={collapseImg} alt="" />
                    </div>
            </div>
            <div className="flex  py-2 w-full justify-between gap-2">
                {filters.map((data : filterInf) => (
                    <SelectOption key={data.list[0]} list={data.list} img={data.img}  />
                ))}

            </div>

            <div className="flex text-gray-500 mt-3 justify-between ">
                
                <p className="text-sm">showing <span className="font-bold">64</span>  search result</p>
                <div className="flex  ">
                    <span>
                        sort : 
                    </span>
                    <div className="relative flex flex-col gap-2 w-fit py-1 group   ">
                        <div className="flex justify-between rounded">
                            <div className="flex justify-between gap-2  px-2 ">
                                <span className="text-sm text-black">Default</span>
                            </div>
                            <ListIcon className="m-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
                        </div>
                        <div className="absolute z-10 group-hover:flex hidden flex-col top-6  w-full text-black bg-white rounded p-1">
                            {sortList.map((data : string) => (
                                <div key={data} className="flex hover:bg-blue-200 cursor-pointer duration-150 gap-2  px-1 py-1">
                                    <span className="text-xs text-black ">{data}</span>
                                </div>
                            ) )}
                
                        </div>
                     </div>
                     <div className="h-4/6 my-auto w-[1px] mx-5 bg-gray-400"></div>
                     <div className="flex gap-3">
                        <Image onClick={() => setIsGrid(true)} src={gridSvg} className={`cursor-pointer px-1 rounded-lg ${isGrid && "bg-blue-100"}`} alt="" />
                        <Image onClick={() => setIsGrid(false)} src={listSvg} className={`cursor-pointer px-1 rounded-lg ${!isGrid && "bg-blue-100"}`} alt="" />
                     </div>
                </div>

            </div>

            <div className="w-full my-3 mx-auto bg-gray-500 h-[2px] opacity-50 "></div>
            
            <div className={`${isGrid ? "grid grid-cols-2" : "flex flex-col gap-2"} overflow-scroll gap-2 pb-10`}>
              <Home isGrid={isGrid} />
              <Home isGrid={isGrid} />
              <Home isGrid={isGrid} />
              <Home isGrid={isGrid} />
              <Home isGrid={isGrid} />

            </div>

        </div>
    </div>
  )
}

export default Hero

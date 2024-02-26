"use client" 
import Image from "next/image"; 
import rentalIcon from "../../assets/images/rentalIcon.svg"
import SelectOption from "./select_option"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import gridSvg from  "../../assets/images/gridsvg.svg"
import Home from "./home";
import listSvg from  "../../assets/images/listsvg.svg"
import { useState } from "react";
import collapseImg from "../../assets/images/collapse.svg"
import { useQuery } from "@apollo/client";
import { GET_LISTING } from "@/graphql/features/listing";
interface filterInf {
    list : string[],
    img : any 
}

interface house {
    digital_assets_list : Array<{ url : string}>,
    listing_property : {
        bathroom_count : number,
        bedroom_count : number,
        square_ft : number,
    },
    address_data : string

}

const Hero = () => {
    const { loading , error, data } = useQuery(GET_LISTING)

    const [isGrid,setIsGrid] = useState(true)
    
    loading && console.log("loading")
    error && console.log("error")
    data && console.log(data)

    const sortList = ["Default" , "temporary1","temporary2"] 
    const filters : filterInf[] = [
        {
            list : ["Rental2","Rental1","Rental3"],
            img : rentalIcon
        },
        {
            list : ["Rental3","Rental2","Rental1","Rental4"],
            img : rentalIcon
        },
        {
            list : ["Rental4","Rental1"],
            img : rentalIcon
        },
        {
            list : ["Rental5","Rental2","Rental1"],
            img : rentalIcon
        },
    ]
  
  return (

    <div className='h-[100vh] max-w-[1700px] mx-auto  max-tablet:h-fit  max-tablet:max-h-fit max-h-[800px] relative z-20  bg-lightBg flex border-t border-gray-300'>
        <div className="w-full max-tablet:basis-full  max-tablet:px-10  max-small:px-5 max-tablet:w-full    h-full  flex flex-col px-5 ">
            <div className="flex text-sm justify-between my-3">
                    <div className="font-semibold">Property Listing</div>
                    <div className="flex gap-2">
                        <span>Collapse</span>
                        <Image src={collapseImg} alt="" />
                    </div>
            </div>
            <div className="flex  max-small:flex-wrap py-2 w-full tablet:justify-between   max-tablet:gap-5 gap-2">
                {filters.map((data : filterInf) => (
                    <SelectOption key={data.list[0]} list={data.list} img={data.img}  />
                ))}

            </div>

            <div className="flex text-gray-500 mt-3 justify-between  max-small:flex-col  ">
                
                <div className="text-sm max-small:mb-3">showing <span className="font-bold">64</span>  search result</div>
                <div className="flex  max-small:place-self-end">
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
                     <div className="h-4/6 my-auto w-[1px] mx-5 bg-gray-400 max-small:hidden"></div>
                     <div className="flex gap-3 max-small:hidden">
                        <Image onClick={() => setIsGrid(true)} src={gridSvg} className={`cursor-pointer px-1 rounded-lg w-full  ${isGrid && "bg-blue-100"}`} alt="" />
                        <Image onClick={() => setIsGrid(false)} src={listSvg} className={`cursor-pointer px-1 rounded-lg w-full ${!isGrid && "bg-blue-100"}`} alt="" />
                     </div>
                </div>

            </div>

            <div className="w-full my-3 mx-auto bg-gray-500 h-[2px] opacity-50 "></div>
            
            <div className={`${isGrid ? "grid grid-cols-2 max-small:grid max-small:grid-cols-1" : "flex flex-col gap-2  max-small:grid max-small:grid-cols-1"} tablet:overflow-scroll gap-2 pb-10`}>
              
              
              
              { 
                loading ? 
                <div>Loading</div> 
                :
                error ? 
                <div>error</div> 
                :
                data ?
                data.listing.map((house : house,ind : number) => <Home key={ind} house={house} isGrid={isGrid} />)
                :
                <div>......</div>
              }
            </div>

        </div>
    </div>
  )
}

export default Hero

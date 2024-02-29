"use client" 
import Image from "next/image"; 
import rentalIcon from "../../assets/images/rentalIcon.svg"
import SelectOption from "./select_option"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import gridSvg from  "../../assets/images/gridsvg.svg"
import Home from "./home";
import listSvg from  "../../assets/images/listsvg.svg"
import { useEffect, useState } from "react";
import collapseImg from "../../assets/images/collapse.svg"
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_LISTING } from "@/graphql/features/listing";
import Property from "./property"
import { houseInf } from "@/utils/interfaces";
interface filterInf {
    list : string[],
    img : any 
}


const Hero = () => {
    const { loading , error, data } = useQuery(GET_LISTING);

    
    loading && console.log("loading")
    error && console.log("error",error)
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

    <div className=' max-w-[1700px] mx-auto relative z-20  bg-lightBg flex border-t border-gray-300'>
        <div className="w-full max-tablet:basis-full px-20  max-tablet:px-10  max-small:px-5 max-tablet:w-full h-full  flex flex-col ">
            <div className="flex text-sm justify-between my-3">
                    <div className="font-semibold">Property Listings</div>
                  
            </div>
            <div className="flex  max-small:flex-wrap py-2 w-full   max-tablet:gap-5 gap-2">
                {filters.map((data : filterInf) => (
                    <SelectOption key={data.list[0]} list={data.list} img={data.img}  />
                ))}

            </div>

            <div className="flex text-gray-500 mt-3 gap-5  max-small:flex-col  ">
                
                <div className="text-sm max-small:mb-3">showing <span className="font-bold">64</span>  search result</div>
                <div className="flex   my-auto">
                    <span>
                        sort : 
                    </span>
                    <div className="relative flex flex-col gap-2 w-fit  group   ">
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
                     
                </div>

            </div>

            
            <div className={`grid grid-cols-3 mt-5 2xl:grid-cols-4 max-tablet:grid-cols-2 max-sm:grid-cols-1 overflow-scroll gap-10 pb-10`}>
              
              { 
                loading ? 
                <div>Loading</div> 
                :
                error ? 
                <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
                    {  error.graphQLErrors[0]?.message ?? "something goes wrong"}
                </div>
                :
                data ?
                data.listing.map((house : houseInf,ind : number) => <Property key={ind} house={house} />)
                :
                <div>......</div>
              }
            </div>

        </div>
    </div>
  )
}

export default Hero

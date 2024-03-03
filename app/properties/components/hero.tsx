"use client" 
import Image from "next/image"; 
import rentalIcon from "../../assets/images/rentalIcon.svg"
import SelectOption from "./select_option"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import {  useQuery } from "@apollo/client";
import { GET_LISTING,FILTER_LIST } from "@/graphql/features/listing";
import Property from "./property"
import Properties from "./properties"
import { houseInf } from "@/utils/interfaces";
import { useSelector } from "react-redux";
import { getUser } from "@/lib/auth";
import houseIcon from "../../assets/images/house.svg"
import amountIcon from "../../assets/images/amountIcon.svg"
import spaceIcon from "../../assets/images/space.svg"
import { useState } from "react";
import PriceOption from "./price_option";
import AreaOption from "./area_option";
interface filterInf {
    list : string[],
    img : any 
}


const Hero = () => {
    
    const priceFilter = [
        { name :  "$15k and Below", price : [0,15000]},
        {  name : "$15k and 30k" , price :  [15000,30000]},
        {  name : "$30k and 50k" , price :  [30000,50000]},
        {  name : "$50k and Above" , price :  [50000,10000000000]},
    ]
    const areaFilter = [
        {  name :  "125 sq ft and Below", price : [0,125]},
        {  name : "125 sq ft - 250 sq ft" , price :  [125,250]},
        {  name : "250 sq ft - 500 sq ft" , price :  [250,500]},
        {  name : "500 sq ft and Above" , price :  [500,10000000000]},
    ]
    const [where,setWhere] = useState<any>()
    const [variables,setVariables] = useState<any>({})
    const [curr,setCurr] = useState<string | null>(null)
    const reset = () => {
        setCurr(null)
        setWhere(null)
        setVariables({})
    }
    const filterByPrice  = (ls : number , lg : number) => {
        const curr = {
            where : {
                sale_price: { _gte: ls, _lte: lg } 
            }
        }
        // setVariables({ fr : ls,to : lg})
        setWhere(curr)
    }
    const filterByArea  = (ls : number , lg : number) => {
        const curr = {
            where: {listing_property: {square_ft: {_gte: ls, _lte: lg}}}
        }
        // setVariables({ fr : ls,to : lg})
        setWhere(curr)
    }
  
  return (

    <div className=' max-w-[1700px] mx-auto relative z-20  bg-lightBg flex border-t border-gray-300'>
        <div className="w-full max-tablet:basis-full px-20  max-tablet:px-10  max-small:px-5 max-tablet:w-full h-full  flex flex-col ">
            <div className="flex text-xl justify-between my-3">
                    <div className="font-semibold">Property Listings</div>
                  
            </div>
            <div className='flex justify-between border-b border-gray-300 mb-4 py-4 max-tablet:flex-col'>
                <div className='flex gap-5 flex-wrap  '>
                    <SelectOption list={["Rental","Sell","new"]} img={rentalIcon}  />
                    <SelectOption list={["House","Sell","new"]} img={houseIcon}  />
                    <PriceOption  
                        list={priceFilter} 
                        filter={filterByPrice} 
                        name="price" 
                        checkbox={true} 
                        img={amountIcon}  
                        curr={curr}
                        reset={reset}
                    />
                     <PriceOption  
                        list={areaFilter} 
                        filter={filterByArea} 
                        name="Area" 
                        checkbox={true} 
                        img={amountIcon}  
                        curr={curr}
                        reset={reset}
                    />
                    {/* <SelectOption list={["125 sq ft","Sell","new"]} img={spaceIcon}  /> */}
                </div>
                <div className='flex gap-2 text-lightGray me-12 place-self-end max-mobile:mt-5'>
                    <p>
                        Sort:
                    </p>
                    <div className="relative z-40 flex flex-col gap-2 w-fit px-2  group  ">
                        <div className="flex  justify-between rounded gap-1">
                            <span className="">Default</span>
                            <ListIcon className="my-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
                        </div>
                        <div className="absolute text-sm top-8 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
                        {["Default","new1","new2"].map((data , ind) => (
                            <div key={ind} className="flex  cursor-pointer duration-150 gap-2  px-2  py-1">
                                <input id={`${ind}  ${data}`} type="checkbox" placeholder="s" className="hover:text-mainBlue cursor-pointer"/>
                                <label htmlFor={`${ind}  ${data}`}  className=" text-black cursor-pointer hover:text-mainBlue">{data}</label>
                            </div>
                        ) )}
                        </div>
                    </div>
                </div>

        </div>
            <Properties  
                query={where ? FILTER_LIST : GET_LISTING} 
                variables={where}
            />
        </div>
    </div>
  )
}

export default Hero

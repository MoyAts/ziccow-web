"use client" 
import Image from "next/image"; 
import rentalIcon from "../../assets/images/rentalIcon.svg"
import SelectOption from "./select_option"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import {  useQuery } from "@apollo/client";
import { GET_LISTING } from "@/graphql/features/listing";
import Property from "./property"
import { houseInf } from "@/utils/interfaces";
import { useSelector } from "react-redux";
import { getUser } from "@/lib/auth";
import houseIcon from "../../assets/images/house.svg"
import amountIcon from "../../assets/images/amountIcon.svg"
import spaceIcon from "../../assets/images/space.svg"
interface filterInf {
    list : string[],
    img : any 
}


const Hero = () => {
    const { loading , error, data } = useQuery(GET_LISTING);
    const state = useSelector(getUser)
    loading && console.log("loading")
    error && console.log("error",error)
    data && console.log("+++++++++++++",data)

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
            <div className="flex text-xl justify-between my-3">
                    <div className="font-semibold">Property Listings</div>
                  
            </div>
            <div className='flex justify-between border-b border-gray-300 mb-4 py-4 max-tablet:flex-col'>
                <div className='flex gap-5 flex-wrap  '>
                    <SelectOption list={["Rental","Sell","new"]} img={rentalIcon}  />
                    <SelectOption list={["House","Sell","new"]} img={houseIcon}  />
                    <SelectOption list={["$15k - $30k","Sell","new"]} img={amountIcon}  />
                    <SelectOption list={["125 sq ft","Sell","new"]} img={spaceIcon}  />
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
                data.listing.map((house : houseInf,ind : number) => <Property userId={state?.userId ?? null} key={ind} house={house} />)
                :
                <div>......</div>
              }
            </div>

        </div>
    </div>
  )
}

export default Hero

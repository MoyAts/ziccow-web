"use client"
import { IoIosArrowBack as ListIcon } from "react-icons/io";
import Box from './box';
import amountIcon from "../../../assets/images/amountIcon.svg"
import PriceOption from "./price_option";
import RentalOption from "./rental_option";
import rentalIcon from "../../../assets/images/rentalIcon.svg"
import Boxes from "./boxes";
import { useState } from "react";
import { FILTER_LIST, GET_LISTING } from "@/graphql/features/listing";
import NameSlide from "./name_slide";
import AddComment from "./comments"
import { useSearchParams } from "next/navigation";

const Realestates = () => {

    const searchParams = useSearchParams()
    const search = searchParams.get('region')
    console.log(search)

    const priceFilter = [
        { name: "$15k and Below", price: [0, 15000] },
        { name: "$15k and 30k", price: [15000, 30000] },
        { name: "$30k and 50k", price: [30000, 50000] },
        { name: "$50k and Above", price: [50000, 10000000000] },
    ]
    const areaFilter = [
        { name: "125 sq ft and Below", price: [0, 125] },
        { name: "125 sq ft - 250 sq ft", price: [125, 250] },
        { name: "250 sq ft - 500 sq ft", price: [250, 500] },
        { name: "500 sq ft and Above", price: [500, 10000000000] },
    ]
    const houseFilter = [
        "Sell", "Rental"
    ]
    const [selectedRealEstate, setSelectedRealEstate] = useState("")

    const [where, setWhere] = useState<any>({
        where: {
            real_estate_id: {
                _is_null: false
            }
        },
        order_by: {}
    })
    const [curr, setCurr] = useState<string | null>(null)
    const [isSelected, setIsSelected] = useState(false)

    const [propertyType, setpropertyType] = useState<string>("")
    const [region, setRegion] = useState<string>("")

    const reset = () => {
        setCurr(null)
        setWhere({ where: {}, order_by: {} })
    }

    const reset_where = (name : string) => {
        setWhere((data : any)=>{
            let temp = {
                ...data.where,
            }
            delete temp[name]
            return {...data,"where" : temp}
        })
    }

    const filterByPrice = (ls: number, lg: number) => {
        setWhere((data: any) => {
            const filter = { 
                ...data.where,
                _or : [
                    { 
                        sale_price: { _gte: ls, _lte: lg },
                    },
                    { 
                        rental_price : { price : { _gte: ls, _lte: lg }}
                    },
                ]
            }
            return { ...data, "where": filter }
        })
    }

    const filterByArea = (ls: number, lg: number) => {
        setWhere((data: any) => {
            const filter = { 
                ...data.where,
                listing_property: { square_ft: { _gte: ls, _lte: lg } } 
            }
            return { ...data, "where": filter }
        })
    }

    const filterByHouseType = (val: string) => {
        setWhere((data: any) => {
            const filter = { 
                ...data.where,
                sale_type: { _eq: val } 
            }
            return { ...data, "where": filter }
        })
    }

    const sort_map = [
        { created_at: "asc" },
        { sale_price: "asc" },
        { created_at: "desc" },
    ]

    const sortList = (ind: number) => {
        setWhere((data: any) => {
            const order = sort_map[ind]
            return { ...data, "order_by": order }
        })
    }

    return (
        <div className="w-full bg-lightBg">
            <div className='h-fit w-full max-w-[1700px] pb-20 mx-auto px-20  max-tablet:px-5 pt-10'>
                <div className='flex  flex-col gap-7 max-tablet:flex-col max-tablet:items-center'>
                    <h1 className='flex gap-2 text-xl max-tablet:text-xl max-tablet:mb-5'>
                        <span>Popular </span>
                        <span className='text-mainBlue'>real estates</span>
                    </h1>
                    <div className="flex justify-between  max-md:flex-col max-md:gap-2 w-full">
                        <div className="flex gap-x-7 flex-wrap">
                            <RentalOption
                                list={houseFilter}
                                name="rentaloption"
                                img={rentalIcon}
                                reset={() => reset_where("sale_type")}
                                filter={filterByHouseType}
                            />
                            {
                            selectedRealEstate != "" && 
                                <PriceOption
                                    list={priceFilter}
                                    filter={filterByPrice}
                                    name="price"
                                    checkbox={true}
                                    img={amountIcon}
                                    reset={() => reset_where("_or")}
                                /> 
                            }
                            <PriceOption
                                list={areaFilter}
                                filter={filterByArea}
                                name="Area"
                                checkbox={true}
                                img={amountIcon}
                                reset={() => reset_where("sale_type")}

                            />

                        </div>
                        <div className='flex place-self-  gap-2 my-auto text-lightGray me-12  max-mobile:mt-5'>
                            <p className="">
                                Sort:
                            </p>
                            <div className="relative z-40 flex flex-col gap-2 w-fit px-2  group  ">
                                <div className="flex  justify-between rounded gap-1">
                                    <span className="">Default</span>
                                    <ListIcon className="my-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
                                </div>
                                <div className="absolute text-sm top-6 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
                                    {["Default", "Price", "Date"].map((data, ind) => (
                                        <div onClick={() => sortList(ind)} key={ind} className="flex  cursor-pointer duration-150 gap-2  px-2  py-1">
                                            <input id={`sort${ind}`} name="sort" type="radio" placeholder="s" className="hover:text-mainBlue cursor-pointer" />
                                            <label htmlFor={`sort${ind}`} className=" text-black cursor-pointer hover:text-mainBlue">{data}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <NameSlide 
                        selectedRealEstate={(reid: string) => {
                            setIsSelected(true)
                            setWhere({
                                where: {
                                    real_estate: {
                                        real_estate_uuid: {
                                            "_eq": reid
                                            }
                                        }
                                    },
                                    order_by: {}
                                }
                                )
                            }
                        }
                        setSelected={setSelectedRealEstate}
                        selected={selectedRealEstate}
                    />

                </div>
                <Boxes
                    query={where ? FILTER_LIST : GET_LISTING}
                    variables={{ ...where, status: { _eq: "ACTIVE" } }}
                />
            </div>
            { isSelected && 
                <div className="h-fit w-full max-w-[1700px] pb-20 mx-auto px-20  max-tablet:px-5 pt-10">
                    <AddComment />
                </div>
            }
        </div>
    )
}

export default Realestates

import React from 'react'
import Property from "./property"
import SelectOption from "./select_option"
import rentalIcon from "../../assets/images/rentalIcon.svg"
import houseIcon from "../../assets/images/house.svg"
import amountIcon from "../../assets/images/amountIcon.svg"
import spaceIcon from "../../assets/images/space.svg"
import { IoIosArrowBack as ListIcon} from "react-icons/io";

const bookmarks = () => {
  return (
    <div className='flex flex-col px-20 max-w-[1700px] mx-auto border-t border-gray-300'>
      <div className='flex justify-between border-b border-gray-300 mb-4 py-4'>
        <div className='flex gap-5'>
          <SelectOption list={["Rental","Sell","new"]} img={rentalIcon}  />
          <SelectOption list={["House","Sell","new"]} img={houseIcon}  />
          <SelectOption list={["$15k - $30k","Sell","new"]} img={amountIcon}  />
          <SelectOption list={["125 sq ft","Sell","new"]} img={spaceIcon}  />
        </div>
        <div className='flex gap-2 text-lightGray me-12'>
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
      <div className='w-full grid grid-cols-3  2xl:grid-cols-4  gap-5 pb-32 max-xl:grid-cols-3 justify-between '>
          <Property  />
          <Property  />
          <Property  />
          <Property  />
          <Property  />
          <Property  />
          <Property  />
          <Property  />
          <Property  />
      </div>
    </div>
  )
}

export default bookmarks
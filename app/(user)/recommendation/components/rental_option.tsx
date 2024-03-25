"use client" 
import Image from "next/image"; 
import { useState } from "react";
import { IoIosArrowBack as ListIcon} from "react-icons/io";

interface Props {
    list : string[],
    img : any ,
    checkbox? : boolean,
    name? : string,
    filter : Function,
    reset : Function
}

const SelectOption = ({list,img,checkbox,name,filter,reset} : Props) => {

  const [selected,setSelected] = useState<string | null>(null)
    
  const clear = () => {
    setSelected(null)
    reset()
  }

  return (
    <div className="relative z-20 flex flex-col gap-2 w-fit py-1 group rounded-lg  ">
        <div className={`${selected ? "bg-blue-200 shadow" : "bg-white"} min-w-[400px] flex justify-between  py-1 rounded px-2`}>
            <div className="flex justify-between gap-2  px-2 ">
                <Image src={img} width={16} className="" alt="" />
                <span className="">{selected ?? name == "Sites" ? "Sites" : "Sell Type"}</span>
            </div>
            <ListIcon className="m-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
        </div>
        <div className="absolute text-sm z-50 top-10 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
            {list.map((data , ind) => (
                <div onClick={() => {setSelected(data); filter(data)}} key={ind} className="flex  cursor-pointer duration-150 gap-2  px-2  py-1">
                    <input id={`${ind} ${list[0]} ${data}`} name={name ?? ""} type={"radio"} placeholder="s" className="hover:text-mainBlue cursor-pointer"/>
                    <label htmlFor={`${ind} ${list[0]} ${data}`}  className=" text-black cursor-pointer hover:text-mainBlue">{data}</label>
                </div>
            ) )}
            <div onClick={clear} key={list.length} className="flex  cursor-pointer duration-150 gap-2  px-2  py-1">
                Clear
            </div>
            
        </div>
    </div>
  )
}

export default SelectOption
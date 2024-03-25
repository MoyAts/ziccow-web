"use client" 
import Image from "next/image"; 
import { useState } from "react";
import { IoIosArrowBack as ListIcon} from "react-icons/io";

interface Props {
    list : any,
    img : any ,
    checkbox? : boolean,
    name? : string,
    filter : Function,
    reset : Function
}

const PriceOption = ({list,img,name,filter,reset} : Props) => {
    const [selectedValue, setSelectedValue] = useState<null | string>(null);
    const handleCheck = (data : any) =>{
           setSelectedValue(data.name)
            filter(data.price[0],data.price[1])
    }
    const clear = () => {
        setSelectedValue(null)
        reset()
    }
  return (
    <div className="relative z-20 flex flex-col gap-2 w-fit  py-1 group rounded-lg  ">
        <div className={`${selectedValue ? "bg-blue-200 shadow" : "bg-white"} flex justify-between py-1 rounded px-2`}>
            <div className="flex justify-between gap-2  px-2 ">
                <Image src={img} width={16} className="" alt="" />
                <span className="capitalize">{selectedValue  ??  name + " Filter"}</span>
            </div>
            <ListIcon className="m-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
        </div>
        <div className="absolute z-50 text-sm top-10 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
            {list.map((data : any, ind : number) => (
                <div key={ind} className="flex  cursor-pointer duration-150 gap-2  px-2  py-1">
                    <input 
                        id={`${ind} ${list[0].name} ${data}`} 
                        name={name ?? ""} type={"radio"} 
                        placeholder="s" 
                        className="hover:text-mainBlue cursor-pointer"
                        onChange={() => handleCheck(data)}
                    />
                    <label htmlFor={`${ind} ${list[0].name} ${data}`}  className=" text-black cursor-pointer hover:text-mainBlue">{data.name}</label>
                </div>
            ) )}
            <div className="flex  cursor-pointer duration-150 gap-2  px-2  py-1">
                    <input 
                        id={`clearit1`} 
                        name={name ?? ""} type={"radio"} 
                        placeholder="s" 
                        className="hover:text-mainBlue opacity-0 cursor-pointer"
                        onClick={() =>clear()}
                    />
                    <label htmlFor={`clearit1`}  className=" text-black cursor-pointer hover:text-mainBlue">Clear</label>

            </div>
            
        </div>
    </div>
  )
}

export default PriceOption
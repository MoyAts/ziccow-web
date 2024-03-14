"use client" 
import Image from "next/image"; 
import { IoIosArrowBack as ListIcon} from "react-icons/io";

interface Props {
    list : string[],
    img : any ,
    checkbox? : boolean,
    name? : string,
    filter : Function
}

const SelectOption = ({list,img,checkbox,name,filter} : Props) => {

  return (
    <div className="relative z-40 flex flex-col gap-2 w-fit py-1 group rounded-lg  ">
        <div className="flex justify-between bg-white py-1 rounded px-2">
            <div className="flex justify-between gap-2  px-2 ">
                <Image src={img} width={16} className="" alt="" />
                <span className="">Sell Type</span>
            </div>
            <ListIcon className="m-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
        </div>
        <div className="absolute text-sm top-10 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
            {list.map((data , ind) => (
                <div onClick={() => filter(data)} key={ind} className="flex  cursor-pointer duration-150 gap-2  px-2  py-1">
                    <input id={`${ind} ${list[0]} ${data}`} name={name ?? ""} type={"radio"} placeholder="s" className="hover:text-mainBlue cursor-pointer"/>
                    <label htmlFor={`${ind} ${list[0]} ${data}`}  className=" text-black cursor-pointer hover:text-mainBlue">{data}</label>
                </div>
            ) )}
            
        </div>
    </div>
  )
}

export default SelectOption
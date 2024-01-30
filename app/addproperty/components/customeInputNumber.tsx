"use client" 
import Image from "next/image"; 
import Link from "next/link";
import { LuMinus } from "react-icons/lu";
import { MdAdd } from "react-icons/md";

interface Props {
    preImg  : any,
    label  : any
}

const customeInputNumber = ( { preImg,label }: Props) => {
  return (
    <div className={'flex flex-col gap-2 capitalize w-full'}>
        <div className={'w-full  bg-white flex rounded-xl px-2 border pe-4' } style={{borderColor:"#DBD7DD"}}>
            <Image src={preImg} alt="" width={23} className={'mx-3 ' }/>
            <div className={'py-3  w-full outline-none rounded-lg '}>
            {label}
            </div>
            <div className="flex gap-6">
            <div className="px-1 py-1 cursor-pointer border border-gray-400 flex my-auto rounded-lg">
                <LuMinus className="m-auto" />
            </div>
            <div className="m-auto">5</div>
            <div className="px-1 py-1  cursor-pointer border border-gray-400 flex my-auto rounded-lg">
                <MdAdd className="m-auto" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default customeInputNumber
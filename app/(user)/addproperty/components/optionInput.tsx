"use client" 
import Image from "next/image"; 
import InputIcon from "../../../assets/images/inputIcon.svg"
import { useState } from "react";

interface Props {
  label : string,
  name : string,
  placeholder : string,
  pass? : boolean,
  inputClass? : string,
  imgClass? : string,
  labelClass? : string,
  divClass? : string,
  Icon? : any,
  ReactIcon? : any,
  IconClass? : any,
  preIcon? : any,
  value? : any,
  onChange? : any,
  isRequired? : boolean 
}

const OptionInput = ({label,name,onChange,isRequired = true,value,preIcon,placeholder,pass,inputClass,imgClass,labelClass,divClass,Icon,IconClass,ReactIcon} : Props) => {
  const [show,setShow] = useState(false)
  
  return (
    <div className={'flex flex-col gap-2 capitalize '  + divClass}>
        <label htmlFor="" className={'font-semibold ' + labelClass}>
        {isRequired && <span className="text-red-600">* </span>}
        {label}</label>
        <div onClick={() => setShow(data => !data)} className={'w-full cursor-pointer bg-white flex rounded-xl px-2 border ' } style={{borderColor:"#DBD7DD"}}>
            <Image src={preIcon ? preIcon : InputIcon} alt="" width={23} className={'me-3 ' +imgClass }/>
            <div className={`w-full py py-2 ${!value && "text-gray-500"}`}>{!value ? placeholder : value} </div>
            {Icon && <Image src={Icon} alt="" className={"w-fit " + IconClass} /> }
            {ReactIcon && <ReactIcon className={"w-fit " + IconClass} />}
        </div> 
        {<div className={`${!show && "h-0 hidden"} duration-1000 w-full relative bottom-2 shadow-xl bg-white  rounded-lg border  flex flex-col gap-2`}>
            <div 
              onClick={() => {
                 setShow(false); 
                 onChange((data  : any) => ({ ...data,"propertyManagment" : "Rental"}))
              }} 
              className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
              >Rental</div>
            <div 
              onClick={() => {
                setShow(false);
                onChange((data  : any) => ({ ...data,"propertyManagment" : "Sell"}))
                
              }} 
              className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
              >Sell</div>
        </div>
        }
    </div>
  )
}

export default OptionInput

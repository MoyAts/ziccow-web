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
  isRequired ?: boolean
}

const OptionInput5 = ({label,isRequired = false,name,onChange,value,preIcon,placeholder,pass,inputClass,imgClass,labelClass,divClass,Icon,IconClass,ReactIcon} : Props) => {
  const [show,setShow] = useState(false)
  const [other,setOther] = useState(false)
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const cities = [
    "Addis Ababa",
    "sheger city", 
    "bishoftu",
    "adama",
    "Jim",
    "MOJO",
    "qoqa",
    "Batu",
    "shashemene",
    "hawasa",
    "Arbaminch",
  ]
  const [lists,setLists] = useState(cities)
  const update = ({ target } : any) => {
    // setcurr(target.value)
    onChange((data : any) => ({...data,"address" : target.value}))
    setLists((_) => {
        if(target.value.length < 1){
            return cities;
        }
        try{
            const pattern = new RegExp(target.value, 'gi');
            const filteredArray = cities.filter((word) => pattern.test(word));
            return filteredArray
        }catch(err){
            return []
        }
    })
  }
  return (
    <div className={'flex flex-col gap-2 capitalize '  + divClass}>
        <label htmlFor="" className={'font-semibold ' + labelClass}>
          {isRequired && <span className="text-red-600">* </span>}
          {label}</label>
        <div onClick={() => setShow(data => !data)} className={'w-full cursor-pointer bg-white flex rounded-xl px-2 border ' } style={{borderColor:"#DBD7DD"}}>
            <Image src={preIcon ? preIcon : InputIcon} alt="" width={23} className={'me-3 ' +imgClass }/> 
            <input 
              type={"text"} 
              value={value ? value : ""} 
              onChange={update} name={name} 
              placeholder={placeholder} 
              onFocus={onFocus} 
              onBlur={onBlur}
              className={'py-3  w-full outline-none rounded-lg ' + inputClass}
            />
            {ReactIcon && <ReactIcon className={"w-fit " + IconClass} />}
        </div> 
        {<div className={`${!focused && "h-0 hidden"} duration-1000 w-full relative bottom-2 shadow-xl bg-white  rounded-lg border  flex flex-col gap-2`}>
            {
              lists.map(val =>(
                <div 
                key={val}
                onMouseDown={() => {
                  setFocused(false); 
                  onChange((data : any) => ({ ...data,"address" : val}))
                }} 
                className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
                >{val}</div>
              ))
              }
              
              
            
        </div>
        }
    </div>
  )
}

export default OptionInput5

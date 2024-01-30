"use client" 
import Image from "next/image"; 
import Link from "next/link";

interface Props2 {
    label : string,
    name : string
  }
  
  function radioDiv({name,label } : Props2) {
    return (
      <div className="flex gap-3">
          <input name={name} type="radio" id={label} placeholder="check" />
          <label htmlFor={label} className="">{label}</label>
        </div>
    )
  }
  

export default radioDiv
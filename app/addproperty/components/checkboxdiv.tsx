"use client" 
import Image from "next/image"; 
import Link from "next/link";

interface Props2 {
    label : string,
    isChecked? : boolean
  }
  
  function checkboxdiv({isChecked = false,label } : Props2) {
    return (
      <div className="flex gap-3">
          <input type="checkbox" id={label} placeholder="check" />
          <label htmlFor={label} className="">{label}</label>
        </div>
    )
  }
  

export default checkboxdiv
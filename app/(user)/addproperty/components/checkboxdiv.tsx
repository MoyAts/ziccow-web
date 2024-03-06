"use client" 

interface Props {
    label : string,
    name : string,
    isRadio : boolean,
    setChange : any,
    checked : boolean,
  }
  
  function checkboxdiv({label,isRadio,name,setChange,checked} : Props) {
    return (
      <div className="flex gap-3">
          <input onChange={setChange} type={isRadio ? "radio" : "checkbox"} name={name} id={label} placeholder="check" checked={checked} />
          <label htmlFor={label} className="">{label}</label>
        </div>
    )
  }
  

export default checkboxdiv
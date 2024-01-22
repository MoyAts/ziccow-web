import InputIcon from "../assets/images/inputIcon.svg"
import Image from "next/image"
interface Props {
  label : string,
  name : string,
  placeholder : string,
  pass? : boolean,
  inputClass? : string,
  imgClass? : string,
  labelClass? : string,
  divClass? : string,
}

const customeInput = ({label,name,placeholder,pass,inputClass,imgClass,labelClass,divClass} : Props) => {
  return (
    <div className={'flex flex-col gap-2 capitalize '  + divClass}>
        <label htmlFor="" className={'font-semibold ' + labelClass}>{label}</label>
        <div className={'w-full  bg-white flex rounded-xl px-2 border ' } style={{borderColor:"#DBD7DD"}}>
            <Image src={InputIcon} alt="" width={23} className={'me-3 ' +imgClass }/>
            <input type={pass && pass == true ? "password" : "text"} name={name} placeholder={placeholder} className={'py-3  w-full outline-none rounded-lg ' + inputClass}/>
        </div>
    </div>
  )
}

export default customeInput

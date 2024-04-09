"use client";
import Image from "next/image";
// import InputIcon from "../assets/images/inputIcon.svg"

// interface Props {
//   label : string,
//   name : string,
//   placeholder : string,
//   pass? : boolean,
//   inputClass? : string,
//   imgClass? : string,
//   labelClass? : string,
//   divClass? : string,
// }

// const customeInput = ({label,name,placeholder,pass,inputClass,imgClass,labelClass,divClass} : Props) => {
//   return (
//     <div className={'flex flex-col gap-2 capitalize '  + divClass}>
//         <label htmlFor="" className={'font-semibold ' + labelClass}>{label}</label>
//         <div className={'w-full  bg-white flex rounded-xl px-2 border ' } style={{borderColor:"#DBD7DD"}}>
//             <Image src={InputIcon} alt="" width={23} className={'me-3 ' +imgClass }/>
//             <input type={pass && pass == true ? "password" : "text"} name={name} placeholder={placeholder} className={'py-3  w-full outline-none rounded-lg ' + inputClass}/>
//         </div>
//     </div>
//   )
// }

// export default customeInput
import InputIcon from "../assets/images/inputIcon.svg";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  pass?: boolean;
  inputClass?: string;
  imgClass?: string;
  labelClass?: string;
  divClass?: string;
  Icon?: any;
  ReactIcon?: any;
  IconClass?: any;
  preIcon?: any;
  value?: any;
  onChange?: any;
  isRequired?: boolean;
}

const customeInput = ({
  label,
  name,
  onChange,
  isRequired = true,
  value,
  preIcon,
  placeholder,
  pass,
  inputClass,
  imgClass,
  labelClass,
  divClass,
  Icon,
  IconClass,
  ReactIcon,
}: Props) => {
  return (
    <div className={"flex flex-col gap-2 capitalize " + divClass}>
      <label htmlFor="" className={"font-semibold " + labelClass}>
        {isRequired && <span className="text-red-600">*</span>} {label}
      </label>
      <div
        className={"w-full  bg-white flex rounded-xl px-2 border "}
        style={{ borderColor: "#DBD7DD" }}
      >
        <Image
          src={preIcon ? preIcon : InputIcon}
          alt=""
          width={23}
          className={"me-3 " + imgClass}
        />
        <input
          type={pass && pass == true ? "password" : "text"}
          value={value ? value : ""}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className={"py-3  w-full outline-none rounded-lg " + inputClass}
        />
        {Icon && <Image src={Icon} alt="" className={"w-fit " + IconClass} />}
        {ReactIcon && <ReactIcon className={"w-fit " + IconClass} />}
      </div>
    </div>
  );
};

export default customeInput;

{
  /* <div className={'flex flex-col gap-2 capitalize '}>
                <label htmlFor="" className={'font-semibold '}></label>
                <div className={'w-full  bg-white flex rounded-xl px-2 border ' } style={{borderColor:"#DBD7DD"}}>
                    <img src={""} alt="" width={23} className={'me-3 ' }/>
                    <input type={"text"} name={"name"} placeholder={"placeholder"} className={'py-3  w-full outline-none rounded-lg '}/>
                </div>
            </div> */
}

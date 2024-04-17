"use client";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import InputIcon from "../assets/images/inputIcon.svg";
import { useState } from "react";

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

const CustomeInput = ({
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
  const [showPass, setShowPass] = useState(false);
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
          type={pass && pass == true && !showPass ? "password" : "text"}
          value={value ? value : ""}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className={"py-3  w-full outline-none rounded-lg " + inputClass}
        />
        {Icon && <Image src={Icon} alt="" className={"w-fit " + IconClass} />}
        {ReactIcon && <ReactIcon className={"w-fit " + IconClass} />}
        {pass && (
          <div className="flex my-auto cursor-pointer px-2">
            {showPass ? (
              <FaRegEye
                onClick={() => {
                  setShowPass(false);
                }}
                className="text-slate-700 text-lg"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => {
                  setShowPass(true);
                }}
                className="text-slate-700 text-lg"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomeInput;

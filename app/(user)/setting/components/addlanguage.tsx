"use client";
import Image from "next/image";
import InputIcon from "../../../assets/images/inputIcon.svg";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";
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
  updateValue: any;
  setForm: Function;
  langs: string[];
}

const AddLanguage = ({
  label,
  name,
  langs,
  setForm,
  updateValue,
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
  const lgs = [
    "Amharic",
    "Afaan oromo",
    "Tigray",
    "Somali",
    "Arabic",
    "French",
    "English",
    "Spanish",
    "Mandarin Chinese",
    "Hindi",
    "Russian",
    "Portuguese",
    "Indonesian",
    "Urdu",
    "German",
    "Japanese",
    "Swahili",
    "Telugu",
    "Bengali",
    "Marathi",
    "Turkish",
    "Tamil",
    "Italian",
    "Vietnamese",
  ];
  const [languages, setLanguages] = useState(lgs);
  const deleteLang = (value: string) => {
    const newDatas = langs.filter((d) => d != value);
    setForm((datas: any) => ({ ...datas, language_preference: newDatas }));
  };
  const [curr, setcurr] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const update = ({ target }: any) => {
    setcurr(target.value);
    setLanguages(() => {
      if (target.value.length < 1) {
        return lgs;
      }
      try {
        const pattern = new RegExp(target.value, "gi");
        const filteredArray = lgs.filter((word) => pattern.test(word));
        return filteredArray;
      } catch (err) {
        return [];
      }
    });
  };
  const change = (data: string) => {
    const newValue = langs.indexOf(data) == -1 ? [...langs, data] : langs;
    setForm((data: any) => ({ ...data, language_preference: newValue }));
    console.log("Change");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className={"flex flex-col gap-2 capitalize relative " + divClass}>
        <label htmlFor="" className={"font-semibold " + labelClass}>
          {label}
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
            value={curr}
            onChange={update}
            name={name}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            className={"py-3  w-full outline-none rounded-lg " + inputClass}
          />
          {Icon && <Image src={Icon} alt="" className={"w-fit " + IconClass} />}
          {ReactIcon && <ReactIcon className={"w-fit " + IconClass} />}
        </div>
        {languages.length > 0 && (
          <div
            className={`${!focused && "hidden"} mt-2 max-h-[200px] overflow-y-auto  absolute w-full py-4 bg-white top-[4.2rem] rounded-lg shadow`}
          >
            {languages.map(
              (data) =>
                langs.indexOf(data) == -1 && (
                  <div
                    key={data}
                    onMouseDown={() => change(data)}
                    className="ps-5 py-2 hover:bg-blue-200 cursor-pointer"
                  >
                    {data}
                  </div>
                ),
            )}
          </div>
        )}
      </div>
      {langs.length > 0 && (
        <div className="w-full bg-white py-3 px-3 rounded-lg flex gap-2 flex-wrap">
          {langs.map((data) => (
            <Choosed
              key={data}
              name={data}
              deleteCard={() => deleteLang(data)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Choosed = ({ name, deleteCard }: any) => {
  return (
    <div className="flex text-sm gap-2 px-2 py-1 rounded-xl bg-blue-200 w-fit">
      <p className="my-auto ">{name}</p>
      <div
        onClick={deleteCard}
        className="p-1 bg-blue-100 rounded-full cursor-pointer"
      >
        <CloseIcon className="my-auto text-lg " />
      </div>
    </div>
  );
};

export default AddLanguage;

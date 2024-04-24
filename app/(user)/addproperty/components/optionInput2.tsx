"use client";
import Image from "next/image";
import InputIcon from "../../../assets/images/inputIcon.svg";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_HOME_TYPES } from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { getState, LogInf } from "@/store/features/auth/authSlice";

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

const OptionInput = ({
  label,
  name,
  isRequired = true,
  onChange,
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
  const [show, setShow] = useState(false);

  const { loading, error, data } = useQuery(GET_HOME_TYPES, {
    fetchPolicy: "no-cache",
  });
  const state = useSelector(getState);
  const check_IA =
    state.isLogedIn == LogInf.LOGED_IN && state.user.internal_agent;
  let m: any = {};
  if (data) {
    for (let x = 0; x < data.house_type.length; x++) {
      const item = data.house_type[x];
      m[item.house_type_id] = item.type_name;
    }
  }
  return (
    <div className={"flex flex-col gap-2 capitalize " + divClass}>
      <label htmlFor="" className={"font-semibold " + labelClass}>
        {isRequired && <span className="text-red-600">* </span>}
        {label}
      </label>
      <div
        onClick={() => setShow((data) => !data)}
        className={
          "w-full cursor-pointer bg-white flex rounded-xl px-2 border "
        }
        style={{ borderColor: "#DBD7DD" }}
      >
        <Image
          src={preIcon ? preIcon : InputIcon}
          alt=""
          width={23}
          className={"me-3 " + imgClass}
        />
        <div className={`w-full py py-2 ${!value && "text-gray-500"}`}>
          {value ? m[value] : placeholder}
        </div>
        {Icon && <Image src={Icon} alt="" className={"w-fit " + IconClass} />}
        {ReactIcon && <ReactIcon className={"w-fit " + IconClass} />}
      </div>
      {
        <div
          className={`${!show && "h-0 hidden"} duration-1000 w-full relative bottom-2 shadow-xl bg-white  rounded-lg border  flex flex-col gap-2`}
        >
          {loading ? (
            <div>Loading</div>
          ) : error ? (
            <div>Error loading property type</div>
          ) : data ? (
            <div>
              {data.house_type.map((e: any) => {
                if (check_IA) {
                  if (e.is_realestate)
                    return (
                      <div
                        onClick={() => {
                          setShow(false);
                          onChange((dt: any) => ({
                            ...dt,
                            [name]: e.house_type_id,
                          }));
                        }}
                        key={e.house_type_id}
                        className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
                      >
                        {e.type_name}
                      </div>
                    );
                  else return <></>;
                } else {
                  if (e.is_realestate == false)
                    return (
                      <div
                        onClick={() => {
                          setShow(false);
                          onChange((dt: any) => ({
                            ...dt,
                            [name]: e.house_type_id,
                          }));
                        }}
                        key={e.house_type_id}
                        className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
                      >
                        {e.type_name} {e.is_realestate && "True"}
                      </div>
                    );
                  else return <></>;
                }
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      }
    </div>
  );
};

export default OptionInput;

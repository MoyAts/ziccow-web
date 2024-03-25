"use client"
import Image from "next/image";
import InputIcon from "../../../assets/images/inputIcon.svg"
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REAL_ESTATES } from "@/graphql/features/listing";

interface Props {
    label: string,
    name: string,
    placeholder: string,
    pass?: boolean,
    inputClass?: string,
    imgClass?: string,
    labelClass?: string,
    divClass?: string,
    Icon?: any,
    ReactIcon?: any,
    IconClass?: any,
    preIcon?: any,
    value?: any,
    onChange?: any
}

const RealEstateOptionInput = ({ label, name, onChange, value, preIcon, placeholder, pass, inputClass, imgClass, labelClass, divClass, Icon, IconClass, ReactIcon }: Props) => {
    const [show, setShow] = useState(false)
    const { loading, error, data } = useQuery(GET_REAL_ESTATES, {
        fetchPolicy: "no-cache"
    });

    let m: any = {
    }
    if (data) {
        for (let x = 0; x < data.real_estate.length; x++) {
            const item = data.real_estate[x];
            m[item.real_estate_uuid] = item.name;
        }
    }
    return (
        <div className={'flex flex-col gap-2 capitalize ' + divClass}>
            <label htmlFor="" className={'font-semibold ' + labelClass}>{label}</label>
            <div onClick={() => setShow(data => !data)} className={'w-full cursor-pointer bg-white flex rounded-xl px-2 border '} style={{ borderColor: "#DBD7DD" }}>
                <Image src={preIcon ? preIcon : InputIcon} alt="" width={23} className={'me-3 ' + imgClass} />
                <div className={`w-full py py-2 ${!value && "text-gray-500"}`}>{value ? m[value] : placeholder} </div>
                {Icon && <Image src={Icon} alt="" className={"w-fit " + IconClass} />}
                {ReactIcon && <ReactIcon className={"w-fit " + IconClass} />}
            </div>
            {<div className={`${!show && "h-0 hidden"} duration-1000 w-full relative bottom-2 shadow-xl bg-white  rounded-lg border  flex flex-col gap-2`}>
                {loading ? <div>Loading</div> : error ? <div>Error</div> :
                    <div> {data.real_estate.map((e : any) => (<>
                        <div
                            onClick={() => {
                                setShow(false);
                                onChange((dt: any) => ({ ...dt, [name]: e.real_estate_uuid }))
                            }}
                            className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
                        >{e.name}</div>
                    </>))}</div>
                }

            </div>}
        </div>
    )
}

export default RealEstateOptionInput

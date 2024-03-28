"use client"
import Image from "next/image";
import React, { useRef, useState } from 'react'
import CustomeInput from '../../../_components/customeInput'
import { MdNavigateNext } from "react-icons/md";
import goImg from "../../../assets/images/go.svg"
import { PropertyDetailInf } from "./interface";
import Checkboxdiv from "./checkboxdiv";
import OptionInput from "./optionInput";
import OptionInput3 from "./optionInput3";
import OptionInput4 from "./optionInput4";

interface Props {
  setForm: Function,
  form: PropertyDetailInf,
  setPage: any
}

const PropertyManagment = ({ form, setForm, setPage }: Props) => {
  const [err, setErr] = useState<null | string>(null)
  const [isRental, setIsRental] = useState<boolean | null>(null)
  const errRef = useRef<any>(null)
  const checkNumber = (value: any) => {
    try {
      var x = Math.floor(parseFloat(value));
      return x >= 0
    } catch (err) {
      return false
    }
  }
  const validate = () => {
    errRef && errRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    if (!checkNumber(form.sellingPrice)) {
      setErr("Wrong selling price")
    } else {
      setPage(3)
    }
  }
  return (
    <div className='w-full h-fit pb-32'>
      <div className='text-2xl mb-8'>Add property management options...</div>
      <div ref={errRef} className={`${!err && "hidden"} w-full my-3 font-semibold py-2 rounded-lg border-2 px-4 border-red-600 bg-red-300 text-red-900`}>
        {err}
      </div>
      <div>Which one of the following apply to you?</div>
      <div className='pt-4 flex w-full justify-between max-mobile:flex-col max-mobile:gap-2'>
        <Checkboxdiv
          label='I am a real estate agent'
          name='type'
          isRadio={true}
          checked={form.typeOfPerson != null && form.typeOfPerson == "agent"}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "typeOfPerson": "agent" }))}
        />
        <Checkboxdiv
          label='I am the owner'
          name='type'
          isRadio={true}
          checked={form.typeOfPerson != null && form.typeOfPerson == "owner"}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "typeOfPerson": "owner" }))}
        />
        <Checkboxdiv
          label='None of these apply to me'
          name='type'
          isRadio={true}
          checked={form.typeOfPerson != null && form.typeOfPerson == "none"}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "typeOfPerson": "none" }))}
        />
      </div>
      {/* <p className="text-danger mt-3 text-sm">Please select an option.</p> */}
      {/* <div className="mt-8">How soon would you like to sell?</div>
        <div className='pt-4 flex w-full justify-between max-mobile:flex-col max-mobile:gap-2'>
            <Checkboxdiv
               label='As soon as possible' 
               name='time'
               isRadio={true}
               checked={form.timeToSell != null && form.timeToSell == "now"}
               setChange={()=> setForm((data : PropertyDetailInf) => ({...data,"timeToSell" : "now"}))}
            />
             <Checkboxdiv
               label='Within a month' 
               name='time'
               isRadio={true}
               checked={form.timeToSell != null && form.timeToSell == "1month"}
               setChange={()=> setForm((data : PropertyDetailInf) => ({...data,"timeToSell" : "1month"}))}
            />
            <Checkboxdiv
               label='2-3 months' 
               name='time'
               isRadio={true}
               checked={form.timeToSell != null && form.timeToSell == "2-3month"}
               setChange={()=> setForm((data : PropertyDetailInf) => ({...data,"timeToSell" : "2-3month"}))}
            />
            <Checkboxdiv
               label='4+ months' 
               name='time'
               isRadio={true}
               checked={form.timeToSell != null && form.timeToSell == "4+month"}
               setChange={()=> setForm((data : PropertyDetailInf) => ({...data,"timeToSell" : "4+month"}))}
            />
            

        </div> */}
      <p className="text-lightGray mt-3 text-sm">Please select an option.</p>
      <div className='flex flex-col mt-8 gap-3'>

        <OptionInput
          onChange={setForm}
          ReactIcon={MdNavigateNext}
          IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
          name='propertymanagment' label='Property management' placeholder='type'
          value={form.propertyManagment}
        />
        {
          form.propertyManagment == "Rental" ?
            <div className="flex justify-between gap-5">
              <CustomeInput
                onChange={({ target }: any) => setForm((data: PropertyDetailInf) => ({ ...data, "rentalPrice": target.value }))}
                IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
                name='price' label='Rental price' placeholder='15,000'
                value={form.rentalPrice}
                divClass="w-full"
              />

              <OptionInput4
                onChange={setForm}
                ReactIcon={MdNavigateNext}
                IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
                name='cycle' label='Cycle' placeholder='cycle'
                value={form.cycle}
                divClass="w-full "
              />
            </div>
            :
            form.propertyManagment == "Sell" ?
              <CustomeInput
                onChange={({ target }: any) => setForm((data: PropertyDetailInf) => ({ ...data, "sellingPrice": target.value }))}
                IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
                name='price' label='Selling price' placeholder='15,000'
                value={form.sellingPrice}
              /> : <></>

        }

        <OptionInput3
          onChange={setForm}
          ReactIcon={MdNavigateNext}
          IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
          name='currency' label='Currency' placeholder='currency'
          value={form.currency}
        />

      </div>
      <div className="flex mt-8 justify-between ">
        <button className="text-mainBlue">Cancel</button>
        <button onClick={validate} className="px-5 py-2 rounded-lg bg-mainBlue hover:bg-blue-500 text-white flex gap-3">
          <Image src={goImg} className="my-auto" alt="" />
          <p>Next Step</p>
        </button>

      </div>

    </div>
  )
}

export default PropertyManagment
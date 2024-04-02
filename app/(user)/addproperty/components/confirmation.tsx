import React from 'react'
import Image from "next/image"
import img from "../../../assets/images/image.png"
import Features from "./features"
import goImg from "../../../assets/images/go.svg"
import dropimg from "../../../assets/images/dropimg.svg"
import { PropertyDetailInf } from './interface'
interface MainProps {
    addList : any
    setForm : Function,
    form : PropertyDetailInf,
    loading : boolean
  }
  
const Confirmation = ({ addList,setForm,form,loading } : MainProps ) => {
  return (
    <div className='w-full h-fit pb-32'>
        <div className='text-2xl max-mobile:text-xl mb-3'>Preview your entry before confirmation.</div>
        <div className='text-[28px] max-mobile:text-2xl text-lightGray'>Glam Apartment No.3</div>
        <div className="mt-5 grid grid-cols-2 max-mobile:grid-cols-1  max-mobile:h-fit gap-5">
          
          <ShowImage divClass="" image={form.previewImages[0]} />
          <div className="grid grid-cols-2 gap-5 h-full ">
            <div className="flex flex-col gap-5">
              <ShowImage divClass="text-xs" image={form.previewImages[1]} />
              <ShowImage divClass="text-xs" image={form.previewImages[2]} />
            </div>
            <div className="flex flex-col gap-5">
              <ShowImage divClass="text-xs" image={form.previewImages[3]}/>
              <ShowImage divClass="text-xs" image={form.previewImages[4]}/>
            </div>
          </div>

      </div>

        <div className='mt-5 flex flex-col gap-3' >
            
            <div className='text-3xl max-mobile:text-xl text-lightGray'>About the Property</div>
            <Info detail='Apartment, High rise' topic='Home Type' />
            <Info detail={form.address ?? ""} topic='Address' />
            <Info detail={form.yearBuilt} topic='Year Built' />
            <Info detail={form.propertyManagment ?? ""} topic='Property Management' />
            <Info detail={form.currency ?? ""} topic='Currency' />
            {
              form.propertyManagment == "Rental" ? 
              <Info detail={form.rentalPrice + " " + form.currency + " Per " + form.cycle } topic='Price' /> :
              <Info detail={form.sellingPrice + " " + form.currency} topic='Price' />
            }
            <Info detail={form.description} topic='Description'/>
            <Features form={form} />
            
        </div>

        <div className="flex  justify-between mt-12">
          <button className="text-mainBlue">Cancel</button>
          <button onClick={addList} className={`px-5 py-2 rounded-lg ${loading ? "bg-blue-300" : "bg-mainBlue hover:bg-blue-500"}  text-white flex gap-3`}>
            <Image src={goImg} className="my-auto" alt="" />
            <p>{loading ? "loading" : "Register Property"}</p>
          </button>
        </div>
   
    </div>
  )
}

interface Props{
    topic : string,
    detail : string
}

function Info({ topic , detail } : Props){
    return (
        <div className='flex flex-col gap-2 text-lightGray'>
            <div className='text-xl font-semibold text-gray-500'>{topic}</div>
            <div>{detail}</div>
        </div>
    )
}

export default Confirmation


interface Props2{
    divClass? : string,
    image : any,
  }
  
function ShowImage ({ divClass , image } : Props2) {
    return (
     <div className={"w-full rounded-xl bg-white border-2 h-full flex p-1"}>
          
          {
            image ?
          <Image src={image} className="w-full rounded-lg object-contain" height={100} width={100} alt="" />
          :
          <>
            <div className={"flex m-auto gap-3 flex-col w-3/4 items-center "}>
              <Image src={dropimg} className={"w-2/5 "} alt="" />
            </div>
           </>}
      </div>  
    )
}
  
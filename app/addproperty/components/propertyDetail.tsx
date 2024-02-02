"use client" 
import Image from "next/image"; 
import CustomeInput from "../../components/customeInput"
import searachImg from "../../assets/images/searchLocation.svg"
import { MdNavigateNext } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import CustomeInputNumber from "./customeInputNumber";
import CheckBoxDiv from "./checkboxdiv";
import dropimg from "../../assets/images/dropimg.svg"
import img3 from "../../assets/images/bed.svg"
import img4 from "../../assets/images/bathroom.svg"

const propertyDetail = () => {
  return (
    <div className='w-full h-fit pb-32'>
        <div className='text-2xl mb-8'>Tell us a bit about your home</div>
        <CustomeInput label='Property Name' name='label' placeholder='Tourist Plus Apartment' divClass='mb-5' />
        <CustomeInput label='Parcel Number' name='label' placeholder='012671164'  divClass='mb-5' />
        <CustomeInput 
          label='Enter the Home Address you’re going to sell.' 
          name='label' placeholder='6405 Yellowstone Blvd APT 314, Forest Hills, NY 11375.'  
          divClass='mb-5'
          Icon={searachImg} 
         />
        <CustomeInput 
          label='Home Type' 
          name='label' 
          placeholder='Apartment, High rise'  
          divClass='mb-5' 
          ReactIcon={MdNavigateNext}
          IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
        />
        <div className='flex gap-5 mb-8 w-full'>
            <CustomeInput label='Year Built' name='label' placeholder='1989' divClass='w-full'   />
            <CustomeInput 
              label='Square footage (above ground)' 
              name='label' placeholder='125 sq ft'
              IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
              ReactIcon={MdNavigateNext}
              divClass='w-full'  
            />
        </div>
        
        <div className="flex justify-between mb-8">
            <div className="text-xl">Facilities</div>
            <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
        </div>
        <div className='grid grid-cols-2 gap-5 mb-8 w-full'>
            <CustomeInputNumber preImg={img3} label={"No. of Bedrooms"} />
            <CustomeInputNumber preImg={img4} label={"No. of Bathrooms"} />
            <CustomeInputNumber preImg={img4} label={"No. of Kitchen"} />
            <CustomeInputNumber preImg={img4} label={"No. of Living room"} />
        </div>
        <div className="flex justify-between mb-8">
            <div className="text-xl">Additional Features</div>
            <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
        </div>
        <div className="text-xl mb-4">Interior</div>
        <div className="flex gap-24">
          <CheckBoxDiv label="Appliances are not included" />
          <CheckBoxDiv label="Appliances included" />
        </div>
        <p className="text-lightGray text-sm mt-2">Please select an option.</p>
        
        <div className="text-xl mb-4 mt-8">Property</div>
        <div className="flex gap-24">
          <CheckBoxDiv label="Parking features" />
          <CheckBoxDiv label="Lot features" />
        </div>
        <p className="text-lightGray text-sm mt-2">Please select an option.</p>

        <div className="text-xl mb-4 mt-8">Utilities</div>
        <div className="flex gap-32">

          <div className="flex flex-col gap-5">
            <CheckBoxDiv label="Room in a home" />
            <CheckBoxDiv label="Access to shared spaces." />
            <CheckBoxDiv label="Great for remote work" />
          </div>

          <div className="flex flex-col gap-5">
            <CheckBoxDiv label="Security 24/7" />
            <CheckBoxDiv label="Garbage shutter" />
            <CheckBoxDiv label="Back up or secondary electric power source" />
          </div>

        </div>
        <p className="text-lightGray text-sm mt-2">Please select an option.</p>

        <div className="text-xl mb-4 mt-8">Community</div>
        <div className="flex gap-5">
          <CheckBoxDiv label="Near Park" />
          <CheckBoxDiv label="Shopping District" />
          <CheckBoxDiv label="Shopping District" />
          <CheckBoxDiv label="Shopping District" />
        </div>

        <div className="text-xl mb-4 mt-8">Property Description</div>
        <div className="w-full bg-white text-lightGray px-5 py-4 rounded-lg">
            Welcome to Apartment 314 located on the third floor of Novo 64 in the heart of Forest Hills! <br />  This unit features a spacious living area with beautiful maple hardwood floors and expansive windows overlooking a quiet street. The kitchen features top of the line Jenn-Air stainless steel appliances, Caesarstone countertops, and an oversized island/breakfast bar. The spacious natural stone bathroom is outfitted with Kohler fixtures and European-style vanity. The unit has central heating and cooling and has lots of storage space throughout with three oversized closets in the front hallway and bedroom. 
        </div>
        <p className="text-lightGray text-sm mt-2">
          Start with a brief overview that describes your item’s finest features.
        </p>

        <div className="text-xl mb-4 mt-8">Upload Image(s)</div>
        <div className="mt-5 grid grid-cols-2 h-[350px] gap-5">
          
            <ImagePicker divClass="" />

            <div className="grid grid-cols-2 gap-5 h-full ">
              <div className="flex flex-col gap-5">
                <ImagePicker divClass="text-xs" />
                <ImagePicker divClass="text-xs" />
              </div>
              <div className="flex flex-col gap-5">
                <ImagePicker divClass="text-xs" />
                <ImagePicker divClass="text-xs" />
              </div>
            </div>

        </div>
        <p className="text-lightGray text-sm mt-2">
          Start with a brief overview that describes your item’s finest features.
        </p>

        <div className="flex mt-8 justify-between ">
          <button className="text-mainBlue">Cancel</button>
          <button className="px-5 py-3 rounded-lg bg-mainBlue hover:bg-blue-500 text-white flex gap-3">
            <div className="border border-blue-300 rounded  my-auto w-6 h-6 py-[2px] px-[2px]">
              <GrLinkNext />
            </div>
            <p>Next Step</p>
          </button>

        </div>
        


    </div>
  )
}

interface Props{
  divClass? : string,
}

function ImagePicker ({ divClass } : Props) {
  return (
   <div className={"w-full rounded-xl bg-white border-2 h-full flex "}>
        <div className={"flex m-auto gap-3 flex-col w-3/4 items-center "}>
          <Image src={dropimg} className={"w-2/5 "} alt="" />
          <div className={"flex text-center flex-col gap-1 " + divClass}>
            <p>
              Drop your image here, or select
            </p>
            <p className="text-mainBlue cursor-pointer">
              click to browse
            </p>
          </div>
        </div>
    </div>  
  )
}

export default propertyDetail
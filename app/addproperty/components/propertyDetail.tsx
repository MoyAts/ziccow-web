"use client" 
import Image from "next/image"; 
import CustomeInput from "../../_components/customeInput"
import searachImg from "../../assets/images/searchLocation.svg"
import { MdNavigateNext } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import CustomeInputNumber from "./customeInputNumber";
import CheckBoxDiv from "./checkboxdiv";
import img3 from "../../assets/images/bed.svg"
import img4 from "../../assets/images/bathroom.svg"
import type { PropertyDetailInf } from "./interface"
import { useRef, useState } from "react";
import goImg from "../../assets/images/go.svg"
import ImagePicker from "./imagePicker";
import OptionInput  from "@/app/addproperty/components/optionInput2";
interface MainProps {
  setForm : Function,
  form : PropertyDetailInf,
  setPage : any
}

const PropertyDetail = ({ form , setForm,setPage } : MainProps) => {
  const [images,setImages] = useState<any>([])
  const [err,setErr] = useState<string | null>(null)
  const errRef = useRef<any>(null)
  const setChange = ({ target } : any) => {
    setForm((data : PropertyDetailInf) => ({ ...data,[target.name] : target.value}))
  }
  const setUtitlities = (target :string) => {
    setForm((data : any) => {
      const newUtilities = {...data.utility,[target] :  !data.utility[target]}
      return {...data,utility : newUtilities}
    })
  }
  const updateFacilities = (target :string,newVal : number) => {
    if(newVal < 0) return 
    setForm((data : PropertyDetailInf) => {
      const newFacility = {...data.facilities,[target] : newVal}
      return {...data,facilities : newFacility}
    })
  }
  const setCommunity = (target :string) => {
      setForm((data : any) => {
        const newCommunity = {...data.community,[target] :  !data.community[target]}
        return {...data,community : newCommunity}
      })
    }

    const checkString = (value : string | null) => {
      if(value == null || value.length < 1){
        return false
      }
      return true
    } 
    const checkNumber = (value : any) => {
      try{
        var x = Math.floor(parseFloat(value));
        return x >= 0 
      }catch(err){
        return false
      }
    } 
    
    const validate = ()  =>{ 
      errRef && errRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", 
      });
      const errFound = (err : string) => {
        setErr(err)
      }
      if (!checkString(form.propertyName)){
        return errFound("Wrong Property Name")
      }
      if (!checkString(form.address)){
        return errFound("Wrong Address")
      }
      if (!checkNumber(form.yearBuilt)){
        return errFound("Wrong year built")
      }
      if (!checkNumber(form.squareFootage)){
        return errFound("Wrong square footage")
      }
      for(let i in form.previewImages){
        if(form.previewImages[i] != null){
          setErr("")
          setPage(2)
          return
        }
      }
      return errFound("Empty Images")

    }

  return (
    <div className='w-full h-fit pb-32'>
        <div className='text-2xl mb-8'>Tell us a bit about your home</div>
        <div ref={errRef} className={`${!err && "hidden"} w-full my-3 font-semibold py-2 rounded-lg border-2 px-4 border-red-600 bg-red-300 text-red-900`}>
          {err} 
        </div>
        <CustomeInput 
          value={form.propertyName} 
          onChange={setChange} 
          label='Real estate' 
          name={"propertyName"} 
          placeholder='Tourist Plus Apartment' 
          divClass='mb-5' 
        />
        <CustomeInput value={form.phone} onChange={setChange} label='Parcel Number' name={"phone"} placeholder='012671164'  divClass='mb-5' />
        <CustomeInput 
          label='Enter the Home Address you’re going to sell.' 
          name={"address"} placeholder='6405 Yellowstone Blvd APT 314, Forest Hills, NY 11375.'  
          divClass='mb-5'
          onChange={setChange}
          Icon={searachImg} 
          value={form.address}
         />
      
        <OptionInput 
          label='Home Types' 
          name='homeType' 
          onChange={setForm}
          placeholder='Apartment, High rise'  
          divClass='mb-5' 
          ReactIcon={MdNavigateNext}
          IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
          value={form.homeType}
        />
        
        <div className='flex gap-5 mb-8 w-full max-mobile:flex-col'>
            <CustomeInput 
              label='Year Built' 
              name='yearBuilt' placeholder='1989' 
              divClass='w-full'  
              onChange={setChange} 
              value={form.yearBuilt}
            />
            <CustomeInput 
              label='Square footage (above ground)' 
              name='squareFootage' placeholder='125 sq ft'
              IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
              ReactIcon={MdNavigateNext}
              divClass='w-full'
              onChange={setChange}  
              value={form.squareFootage}
            />
        </div>
        
        <div className="flex justify-between mb-8">
            <div className="text-xl">Facilities</div>
            <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
        </div>
        <div className='grid grid-cols-2 gap-5 mb-8 w-full max-tablet:grid-cols-1'>
            <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfBedrooms",form.facilities.numOfBedrooms + 1)} 
              onSub={() => updateFacilities("numOfBedrooms",form.facilities.numOfBedrooms - 1)} 
              value={form.facilities.numOfBedrooms}
              preImg={img3} label={"No. of Bedrooms"} 
            />
            <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfBathrooms",form.facilities.numOfBathrooms + 1)} 
              onSub={() => updateFacilities("numOfBathrooms",form.facilities.numOfBathrooms - 1)} 
              value={form.facilities.numOfBathrooms}
              preImg={img4} label={"No. of Bathrooms"}
            />
           
            <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfKitchens",form.facilities.numOfKitchens + 1)} 
              onSub={() => updateFacilities("numOfKitchens",form.facilities.numOfKitchens - 1)} 
              value={form.facilities.numOfKitchens}
              preImg={img4} label={"No. of Kitchen"} 
            />
            <CustomeInputNumber 
                onAdd={() => updateFacilities("numOfLivingrooms",form.facilities.numOfLivingrooms + 1)} 
                onSub={() => updateFacilities("numOfLivingrooms",form.facilities.numOfLivingrooms - 1)} 
                value={form.facilities.numOfLivingrooms}
                preImg={img4} label={"No. of Living room"} 
              />
            <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfGyms",form.facilities.numOfGyms + 1)} 
              onSub={() => updateFacilities("numOfGyms",form.facilities.numOfGyms - 1)} 
              value={form.facilities.numOfGyms}
              preImg={img4} 
              label={"No. of number of gymnasiums"} 
            />
             <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfLibs",form.facilities.numOfLibs + 1)} 
              onSub={() => updateFacilities("numOfLibs",form.facilities.numOfLibs - 1)} 
              value={form.facilities.numOfLibs}
              preImg={img4} 
              label={"No. of number of Libraries"} 
            />
            <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfMaidsRooms",form.facilities.numOfMaidsRooms + 1)} 
              onSub={() => updateFacilities("numOfMaidsRooms",form.facilities.numOfMaidsRooms - 1)} 
              value={form.facilities.numOfMaidsRooms}
              preImg={img4} 
              label={"No. of number of Maids Rooms"} 
            />
             <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfSpas",form.facilities.numOfSpas + 1)} 
              onSub={() => updateFacilities("numOfSpas",form.facilities.numOfSpas - 1)} 
              value={form.facilities.numOfSpas}
              preImg={img4} 
              label={"No. of number of Spas"} 
            />
             <CustomeInputNumber 
              onAdd={() => updateFacilities("numOfStores",form.facilities.numOfStores + 1)} 
              onSub={() => updateFacilities("numOfStores",form.facilities.numOfStores - 1)} 
              value={form.facilities.numOfStores}
              preImg={img4} 
              label={"No. of number of Stores"} 
            />
        </div>
        <div className="flex justify-between mb-8">
            <div className="text-xl">Additional Features</div>
            <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
        </div>
        <div className="text-xl mb-4">Interior</div>
        <div className="flex tablet:gap-24 max-small:gap-3 max-tablet:justify-between max-small:flex-col">
          <CheckBoxDiv 
            label="Appliances are not included" 
            name="Appliances" isRadio={true} 
            setChange={() => setForm((data : PropertyDetailInf) => ({ ...data,"appliances" : true}))} 
            checked = {form.appliances != null && form.appliances == true}
          />
          <CheckBoxDiv 
            label="Appliances included" 
            name="Appliances" isRadio={true} 
            setChange={() => setForm((data : PropertyDetailInf) => ({ ...data,"appliances" : false}))} 
            checked = {form.appliances != null && form.appliances == false}
          />
        </div>
        <p className="text-lightGray text-sm mt-2">Please select an option.</p>
        
        <div className="text-xl mb-4 mt-8">Property</div>
        <div className="flex tablet:gap-24 max-small:gap-3 max-tablet:justify-between max-small:flex-col">
          <CheckBoxDiv 
            label="Parking features" 
            name="property" isRadio={false} 
            setChange={() => setForm((data : PropertyDetailInf) => ({ ...data,"parkingFeature" : data.parkingFeature != null ? !data.parkingFeature : true }))} 
            checked = {form.parkingFeature != null && form.parkingFeature == true}
          />
          <CheckBoxDiv 
            label="Lot features" 
            name="property" isRadio={false} 
            setChange={() => setForm((data : PropertyDetailInf) => ({ ...data,"lotFeature" : data.lotFeature != null ? !data.lotFeature : true }))} 
            checked = {form.lotFeature != null && form.lotFeature == true}
          />

          
        </div>
        <p className="text-lightGray text-sm mt-2">Please select an option.</p>

        {/* <div className="text-xl mb-4 mt-8">Utilities</div>
        <div className="flex tablet:gap-32 max-small:gap-3 max-tablet:justify-between max-small:flex-col">

          <div className="flex flex-col gap-5">
            <CheckBoxDiv 
              label="Room in a home" 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("rooms")} 
              checked = {form.utility.rooms!}
            />
             <CheckBoxDiv 
              label="Access to shared spaces." 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("accessToSharedPlace")} 
              checked = {form.utility.accessToSharedPlace!}
            />
             <CheckBoxDiv 
              label="Great for remote work" 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("greateForRemoteWork")} 
              checked = {form.utility.greateForRemoteWork!}
            />
          </div>

          <div className="flex flex-col gap-5">
            <CheckBoxDiv 
              label="Security 24/7" 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("security")} 
              checked = {form.utility.security!}
            />
             <CheckBoxDiv 
              label="Garbage shutter." 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("garbageShutter")} 
              checked = {form.utility.garbageShutter!}
            />
             <CheckBoxDiv 
              label="Back up or secondary electric power source" 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("backupElectricity")} 
              checked = {form.utility.backupElectricity!}
            />
          </div>

        </div> */}
        <p className="text-lightGray text-sm mt-2">Please select an option.</p>

        <div className="text-xl mb-4 mt-8">Community</div>
        <div className="flex gap-5 flex-wrap">
            
            <CheckBoxDiv 
              label="Near Park" 
              name="communitys" isRadio={false} 
              setChange={() => setCommunity("nearPark")}
              checked = {form.community.nearPark!}
            />
            <CheckBoxDiv 
              label="Shopping District" 
              name="community" isRadio={false} 
              setChange={() => setCommunity("shoppingDistrict")}
              checked = {form.community.shoppingDistrict!}
            />
         
        </div>

        {/* <div className="text-xl mb-4 mt-8">Property Description</div>
        <div className="w-full bg-white text-lightGray px-5 py-4 rounded-lg">
            Welcome to {form.propertyName ?? "\"name\""} located in{form.address ?? "\"address\""}! 
            This unit features a spacious living area with 
            beautiful maple hardwood floors and expansive windows overlooking a 
            quiet street. 
        </div>
        <p className="text-lightGray text-sm mt-2">
          Start with a brief overview that describes your item’s finest features.
        </p> */}

        <div className="text-xl mb-4 mt-8">Upload Image(s)</div>
        <div className="mt-5 grid grid-cols-2 max-mobile:grid-cols-1  max-mobile:h-fit gap-5">
          
            <ImagePicker divClass="" images={images} setForm={setForm} setImages={setImages} form={form}  ind={0} />

            <div className="grid grid-cols-2 gap-5 h-full ">
              <div className="flex flex-col gap-5">
                <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form}  ind={1} />
                <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form}  ind={2} />
              </div>
              <div className="flex flex-col gap-5">
                <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form}  ind={3}/>
                <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form}  ind={4}/>
              </div>
            </div>

        </div>
        <p className="text-lightGray text-sm mt-2 max-mobile:mt-5">
          Start with a brief overview that describes your item’s finest features.
        </p>

        <div className="flex mt-8 justify-between ">
          <button className="text-mainBlue">Cancel</button>
          <button onClick={validate} className="px-5 py-3 rounded-lg bg-mainBlue hover:bg-blue-500 text-white flex gap-3">
            <Image src={goImg} className="my-auto" alt="" />
            <p>Next Step</p>
          </button>

        </div>
        
    </div>
  )
}

export default PropertyDetail
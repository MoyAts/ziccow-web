"use client"
import Image from "next/image";
import CustomeInput from "../../../_components/customeInput"
import searachImg from "../../../assets/images/searchLocation.svg"
import { MdNavigateNext } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import CustomeInputNumber from "./customeInputNumber";
import CheckBoxDiv from "./checkboxdiv";
import img3 from "../../../assets/images/bed.svg"
import img4 from "../../../assets/images/bathroom.svg"
import type { PropertyDetailInf } from "./interface"
import { useRef, useState } from "react";
import goImg from "../../../assets/images/go.svg"
import ImagePicker from "./imagePicker";
import OptionInput from "./optionInput2";
import RealEstateOptionInput from "./realEstateInput";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";
interface MainProps {
  setForm: Function,
  form: PropertyDetailInf,
  setPage: any
}

const PropertyDetail = ({ form, setForm, setPage }: MainProps) => {
  const state = useSelector(getState)
  const [images, setImages] = useState<any>([])
  const [err, setErr] = useState<string | null>(null)
  const errRef = useRef<any>(null)
  const setChange = ({ target }: any) => {
    setForm((data: PropertyDetailInf) => ({ ...data, [target.name]: target.value }))
  }
  const setUtitlities = (target: string) => {
    setForm((data: any) => {
      const newUtilities = { ...data.utility, [target]: !data.utility[target] }
      return { ...data, utility: newUtilities }
    })
  }
  const updateFacilities = (target: string, newVal: number) => {
    if (newVal < 0) return
    setForm((data: PropertyDetailInf) => {
      const newFacility = { ...data.facilities, [target]: newVal }
      return { ...data, facilities: newFacility }
    })
  }
  const setCommunity = (target: string) => {
    setForm((data: any) => {
      const newCommunity = { ...data.community, [target]: !data.community[target] }
      return { ...data, community: newCommunity }
    })
  }
  const setConstruction = (target: string) => {
    setForm((data: any) => {
      const newConstruction = { ...data.construction, [target]: !data.construction[target] }
      return { ...data, construction: newConstruction }
    })
  }

  const checkString = (value: string | null) => {
    if (value == null || value.length < 1) {
      return false
    }
    return true
  }
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
    const errFound = (err: string) => {
      setErr(err)
    }
    if (state.user.internal_agent == false && !checkString(form.propertyName)) {
      return errFound("Wrong Property Name")
    }
    if (!checkString(form.address)) {
      return errFound("Wrong Address")
    }
    if (!checkNumber(form.yearBuilt)) {
      return errFound("Wrong year built")
    }
    if (!checkNumber(form.squareFootage)) {
      return errFound("Wrong square footage")
    }
    for (let i in form.previewImages) {
      if (form.previewImages[i] != null) {
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
      {state.user.internal_agent == false ?
        <CustomeInput
          value={form.propertyName}
          onChange={setChange}
          label='Property Name'
          name={"propertyName"}
          placeholder='Tourist Plus Apartment'
          divClass='mb-5'
        />
        :
        <RealEstateOptionInput
          label='Real Estate'
          name='realEstateId'
          onChange={setForm}
          placeholder='Tsehay real estate'
          divClass='mb-5'
          ReactIcon={MdNavigateNext}
          IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
          value={form.realEstateId}
        />
      }

      <CustomeInput value={form.phone} onChange={setChange} label='Property Id ' name={"phone"} placeholder='012671164' divClass='mb-5' />
      <CustomeInput
        label='Enter the Home Address you’re going to sell/rent.'
        name={"address"} placeholder='e.g. A0001 “A” is the first letter of your name'
        divClass='mb-5'
        onChange={setChange}
        Icon={searachImg}
        value={form.address}
      />

      <OptionInput
        label='Property Types'
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
          label='Built up area (above ground)'
          name='squareFootage' placeholder='e.g. 125 sq ft'
          IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
          ReactIcon={MdNavigateNext}
          divClass='w-full'
          onChange={setChange}
          value={form.squareFootage}
        />
      </div>
      <CustomeInput
        label='Construction Status'
        name={"completionStatus"} placeholder='Eg. 80% completed'
        divClass='mb-5'
        onChange={setChange}
        Icon={searachImg}
        value={form.completionStatus}
      />

      <CustomeInput
        label='Payment Program'
        name={"paymentProgram"} placeholder='payment program'
        divClass='mb-5'
        onChange={setChange}
        Icon={searachImg}
        value={form.paymentProgram}
      />
      <CustomeInput
        label='3D Link (please add a link from matterport 3d viewer)'
        name={"matterportLink"} placeholder='add 3d link from matterport 3d viewer'
        divClass='mb-5'
        onChange={setChange}
        Icon={searachImg}
        value={form.matterportLink}
      />
      <div className="flex justify-between mb-8">
        <div className="text-xl">Facilities</div>
        <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
      </div>
      <div className='grid grid-cols-2 gap-5 mb-8 w-full max-tablet:grid-cols-1'>
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfBedrooms", form.facilities.numOfBedrooms + 1)}
          onSub={() => updateFacilities("numOfBedrooms", form.facilities.numOfBedrooms - 1)}
          value={form.facilities.numOfBedrooms}
          preImg={img3} label={"No. of Bedrooms"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfBathrooms", form.facilities.numOfBathrooms + 1)}
          onSub={() => updateFacilities("numOfBathrooms", form.facilities.numOfBathrooms - 1)}
          value={form.facilities.numOfBathrooms}
          preImg={img4} label={"No. of Bathrooms"}
        />

        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfKitchens", form.facilities.numOfKitchens + 1)}
          onSub={() => updateFacilities("numOfKitchens", form.facilities.numOfKitchens - 1)}
          value={form.facilities.numOfKitchens}
          preImg={img4} label={"No. of Kitchen"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfLivingrooms", form.facilities.numOfLivingrooms + 1)}
          onSub={() => updateFacilities("numOfLivingrooms", form.facilities.numOfLivingrooms - 1)}
          value={form.facilities.numOfLivingrooms}
          preImg={img4} label={"No. of Living room"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfGyms", form.facilities.numOfGyms + 1)}
          onSub={() => updateFacilities("numOfGyms", form.facilities.numOfGyms - 1)}
          value={form.facilities.numOfGyms}
          preImg={img4}
          label={"No. of number of gymnasiums"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfLibs", form.facilities.numOfLibs + 1)}
          onSub={() => updateFacilities("numOfLibs", form.facilities.numOfLibs - 1)}
          value={form.facilities.numOfLibs}
          preImg={img4}
          label={"No. of number of Libraries"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfMaidsRooms", form.facilities.numOfMaidsRooms + 1)}
          onSub={() => updateFacilities("numOfMaidsRooms", form.facilities.numOfMaidsRooms - 1)}
          value={form.facilities.numOfMaidsRooms}
          preImg={img4}
          label={"No. of number of Maids Rooms"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfSpas", form.facilities.numOfSpas + 1)}
          onSub={() => updateFacilities("numOfSpas", form.facilities.numOfSpas - 1)}
          value={form.facilities.numOfSpas}
          preImg={img4}
          label={"No. of number of Spas"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfStores", form.facilities.numOfStores + 1)}
          onSub={() => updateFacilities("numOfStores", form.facilities.numOfStores - 1)}
          value={form.facilities.numOfStores}
          preImg={img4}
          label={"No. of number of Stores"}
        />
        <CustomeInputNumber
          onAdd={() => updateFacilities("numOfPrayerRoom", form.facilities.numOfPrayerRoom + 1)}
          onSub={() => updateFacilities("numOfPrayerRoom", form.facilities.numOfPrayerRoom - 1)}
          value={form.facilities.numOfPrayerRoom}
          preImg={img4}
          label={"No. of number of Prayer Rooms"}
        />
      </div>
      <div className="flex justify-between mb-8">
        <div className="text-xl">Additional Features</div>
        <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
      </div>
      <div className="text-xl mb-4">Interior</div>
      <div className="flex tablet:gap-24 max-small:gap-3 max-tablet:justify-between max-small:flex-col">
        <CheckBoxDiv
          label="Fully Furnished"
          name="Appliances" isRadio={true}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "appliances": "fully_furnished" }))}
          checked={form.appliances != null && form.appliances == "fully_furnished"}
        />
        <CheckBoxDiv
          label="Semi-Furnished"
          name="Appliances" isRadio={true}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "appliances": "semi_furnished" }))}
          checked={form.appliances != null && form.appliances == "semi_furnished"}
        />
        <CheckBoxDiv
          label="Furnishing work not done"
          name="Appliances" isRadio={true}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "appliances": "not_furnished" }))}
          checked={form.appliances != null && form.appliances == "not_furnished"}
        />
        {/* <CheckBoxDiv
          label="Air conditioning system"
          name="Appliances" isRadio={true}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "appliances": "includes_ac" }))}
          checked={form.appliances != null && form.appliances == "includes_ac"}
        /> */}
      </div>
      <p className="text-lightGray text-sm mt-2">Please select an option.</p>

     
      <div className="text-xl mb-4 mt-8">Property Description (Home Details)</div>
      <textarea
        className="w-full bg-white text-lightGray px-5 py-4 rounded-lg"
        onChange={({ target }: any) => setForm((data: PropertyDetailInf) => ({ ...data, "description": target.value }))}
        name="" id="" cols={30} rows={10} placeholder="your description"
      />

      <div className="text-xl mb-4 mt-8">Utilities</div>
        <div className="flex tablet:gap-32 max-small:gap-3 max-tablet:justify-between max-small:flex-col">
          <div className="flex flex-col gap-5">
              <CheckBoxDiv
                label="Parking features"
                name="utility" isRadio={false}
                setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "parkingFeature": data.parkingFeature != null ? !data.parkingFeature : true }))}
                checked={form.parkingFeature != null && form.parkingFeature == true}
              />
              <CheckBoxDiv 
                label="Security 24/7" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("security")} 
                checked = {form.utility.security!}
            />
              <CheckBoxDiv 
                label="Basement" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("basement")} 
                checked = {form.utility.basement!}
            />
             
             <CheckBoxDiv 
                label="Back yard" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("backYard")} 
                checked = {form.utility.backYard!}
            />
              <CheckBoxDiv 
                label="water" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("water")} 
                checked = {form.utility.water!}
            />
            
             <CheckBoxDiv 
                label="electricity" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("electricity")} 
                checked = {form.utility.electricity!}
            />
          </div>

          <div className="flex flex-col gap-5">
          
            <CheckBoxDiv 
                label="Air Conditioning system" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("airConditioning")} 
                checked = {form.utility.airConditioning!}
            />
             <CheckBoxDiv 
                label="ground water" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("ground_water")} 
                checked = {form.utility.ground_water!}
            />

            <CheckBoxDiv 
                label="swimming" 
                name="utility" isRadio={false} 
                setChange={() => setUtitlities("swimming")} 
                checked = {form.utility.swimming!}
            />
           
             <CheckBoxDiv 
              label="Garbage shutter." 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("garbageShutter")} 
              checked = {form.utility.garbageShutter!}
            />
             <CheckBoxDiv 
              label="Back up electric power" 
              name="utility" isRadio={false} 
              setChange={() => setUtitlities("backupElectricity")} 
              checked = {form.utility.backupElectricity!}
            />
          </div>

        </div>
      <div className="text-lg mb-2 mt-3">Other</div>
      <textarea
        className="w-full bg-white text-lightGray px-5 py-4 rounded-lg h-32"
        onChange={({ target }: any) =>{
           const newData = {...form.utility,"other" : target.value }
           setForm((data: PropertyDetailInf) => ({ ...data, "utility": newData }))
        }}
        name="" id="" cols={10} rows={10} placeholder="your description"
      />
      <p className="text-lightGray text-sm mt-2">Please select an option.</p>

      <div className="text-xl mb-4 mt-8">Community</div>
      <div className="flex gap-5 flex-wrap">

        <CheckBoxDiv
          label="Primary School"
          name="communitys" isRadio={false}
          setChange={() => setCommunity("primarySchool")}
          checked={form.community.primarySchool!}
        />
        
        <CheckBoxDiv
          label="Secondary School"
          name="community" isRadio={false}
          setChange={() => setCommunity("secondarySchool")}
          checked={form.community.secondarySchool!}
        />
        <CheckBoxDiv
          label="College & University"
          name="community" isRadio={false}
          setChange={() => setCommunity("collegeAndUni")}
          checked={form.community.collegeAndUni!}
        />
        <CheckBoxDiv
          label="Hospital"
          name="community" isRadio={false}
          setChange={() => setCommunity("hospital")}
          checked={form.community.hospital!}
        />

        <CheckBoxDiv
          label="Supermarket"
          name="community" isRadio={false}
          setChange={() => setCommunity("supermarket")}
          checked={form.community.supermarket!}
        />
       

      </div>


      <div className="text-xl mb-4 mt-8">Construction Material</div>
      <div className="flex gap-5 flex-wrap">

        <CheckBoxDiv
          label="Ordinary Material"
          name="construction" isRadio={false}
          setChange={() => setConstruction("ordinaryMaterial")}
          checked={form.construction.ordinaryMaterial!}
        />
        <CheckBoxDiv
          label="It has unique construction material"
          name="construction" isRadio={false}
          setChange={() => setConstruction("uniqueMaterial")}
          checked={form.construction.uniqueMaterial!}
        />
        {
          form.construction.uniqueMaterial ?
            <CustomeInput
              label="Describe material if it's unique"
              name={"constructionCustom"} placeholder='add % completed Eg. 80% completed'
              divClass='mb-5'
              onChange={setChange}
              Icon={searachImg}
              value={form.constructionCustom}
            /> : <></>
        }
      </div>




      {/* <div className="text-xl mb-4 mt-8">Financial</div>
      <div className="flex gap-5 flex-wrap w-full">
        
      </div> */}



      <div className="text-xl mb-4 mt-8">Additional Costs</div>

      <CustomeInput
        label="Government payment (Ashura)"
        name={"govPaymentAshura"} placeholder='Estimated rental price per month Birr/month'
        divClass='mb-5'
        onChange={setChange}
        value={form.govPaymentAshura}
      />
      <CustomeInput
          label="Estimated rental price per month Birr/month"
          name={"estRentalPrice"} placeholder='Estimated rental price per month Birr/month'
          divClass='mb-5 w-full'
          onChange={setChange}
          value={form.estRentalPrice}
        />
      <CustomeInput
        label="Leasing payment"
        name={"leasingPayment"} placeholder='Estimated rental price per month Birr/month'
        divClass='mb-5'
        onChange={setChange}
        value={form.leasingPayment}
      />
      <CustomeInput
        label="Conveyancing payment Birr"
        name={"conveyancingPayment"} placeholder='Estimated rental price per month Birr/month'
        divClass='mb-5'
        onChange={setChange}
        value={form.conveyancingPayment}
      />
      <CustomeInput
        label="Commission payment %"
        name={"commission"} placeholder='Estimated rental price per month Birr/month'
        divClass='mb-5'
        onChange={setChange}
        value={form.commission}
      />


     



      <div className="text-xl mb-4 mt-8">Upload Image(s)</div>
      <div className="mt-5 grid grid-cols-2 max-mobile:grid-cols-1  max-mobile:h-fit gap-5">

        <ImagePicker divClass="" images={images} setForm={setForm} setImages={setImages} form={form} ind={0} />

        <div className="grid grid-cols-2 gap-5 h-full ">
          <div className="flex flex-col gap-5">
            <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form} ind={1} />
            <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form} ind={2} />
          </div>
          <div className="flex flex-col gap-5">
            <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form} ind={3} />
            <ImagePicker divClass="text-xs" images={images} setForm={setForm} setImages={setImages} form={form} ind={4} />
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
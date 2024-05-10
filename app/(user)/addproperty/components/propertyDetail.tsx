"use client";
import Image from "next/image";
import CustomeInput from "../../../_components/customeInput";
import searachImg from "../../../assets/images/searchLocation.svg";
import { MdNavigateNext } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import CustomeInputNumber from "./customeInputNumber";
import CheckBoxDiv from "./checkboxdiv";
import img3 from "../../../assets/images/bed.svg";
import img4 from "../../../assets/images/bathroom.svg";
import { initialForm, type PropertyDetailInf } from "./interface";
import { useEffect, useRef, useState } from "react";
import goImg from "../../../assets/images/go.svg";
import OptionInput from "./optionInput2";
import RealEstateOptionInput from "./realEstateInput";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";

import Checkboxdiv from "./checkboxdiv";
import OptionInputNew from "./optionInput";
import OptionInput3 from "./optionInput3";
import OptionInput4 from "./optionInput4";
import OptionInput5 from "./optionInput5";
import Amenity from "./amenity"
interface MainProps {
  setForm: Function;
  form: PropertyDetailInf;
  setPage: any;
}

const PropertyDetail = ({ form, setForm, setPage }: MainProps) => {
  const state = useSelector(getState);
  const [err, setErr] = useState<string | null>(null);
  const errRef = useRef<any>(null);
  const setChange = ({ target }: any) => {
    setForm((data: PropertyDetailInf) => ({
      ...data,
      [target.name]: target.value,
    }));
  };
  const setUtitlities = (target: string) => {
    setForm((data: any) => {
      const newUtilities = { ...data.utility, [target]: !data.utility[target] };
      return { ...data, utility: newUtilities };
    });
  };
  const updateFacilities = (target: string, newVal: number) => {
    if (newVal < 0) return;
    setForm((data: PropertyDetailInf) => {
      const newFacility = { ...data.facilities, [target]: newVal };
      return { ...data, facilities: newFacility };
    });
  };

 
  const checkString = (value: string | null) => {
    if (value == null || value.length < 1) {
      return false;
    }
    return true;
  };
  const checkNumber = (value: any) => {
    try {
      var x = Math.floor(parseFloat(value));
      return x >= 0;
    } catch (err) {
      return false;
    }
  };

  const validate = () => {
    // errRef &&
    //   errRef.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "center",
    //   });
    if (document) {
      document?.getElementById("top-div")?.scrollIntoView();
    }
    const errFound = (err: string) => {
      setErr(err);
    };
    if (
      state.user.internal_agent == true &&
      !checkString(form.realEstateId ?? "")
    ) {
      return errFound("Please choose real estate");
    }
    if (!checkString(form.phone)) {
      return errFound("Please insert property Id");
    }
    if (!checkString(form.address)) {
      return errFound("Please insert your address");
    }
    if (!checkString(form.homeType)) {
      return errFound("Please choose your property type");
    }
    if (state.user.internal_agent == false && !checkString(form.propertyName)) {
      return errFound("Please insert Property Name");
    }
    if (!checkNumber(form.squareFootage)) {
      return errFound("Please insert square footage");
    }
    if (!checkString(form.propertyManagment)) {
      return errFound("Please specify property management");
    }
    if (form.propertyManagment == "Rental") {
      if (!checkNumber(form.rentalPrice))
        return errFound("Please specify Rental Price " + form.rentalPrice);
      if (!checkString(form.cycle))
        return errFound("Please specify Rental Price cycle");
    } else {
      if (!checkNumber(form.sellingPrice))
        return errFound("Please specify selling Price " + form.sellingPrice);
    }
    setPage(2);
  };

  useEffect(() => {
    if (errRef.current) {
      errRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [errRef.current]);

  return (
    <div className="w-full h-fit pb-32">
      <div className="text-2xl mb-8">Tell us a bit about your home</div>
      <div
        ref={errRef}
        className={`${!err && "hidden"} w-full my-3 font-semibold py-2 rounded-lg border-2 px-4 border-red-600 bg-red-300 text-red-900`}
      >
        {err}
      </div>
      {state.user.internal_agent == false ? (
        <CustomeInput
          value={form.propertyName}
          onChange={setChange}
          label="Property Name / የቤቱ ስያሜ"
          name={"propertyName"}
          placeholder="Tourist Plus Apartment"
          divClass="mb-5"
          isRequired={true}
        />
      ) : (
        <RealEstateOptionInput
          label="Real Estate"
          name="realEstateId"
          onChange={setForm}
          placeholder="Tsehay real estate"
          divClass="mb-5"
          ReactIcon={MdNavigateNext}
          IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
          value={form.realEstateId}
        />
      )}

      <CustomeInput
        value={form.phone}
        onChange={setChange}
        label="Property Id / መለያ ቁጥር"
        name={"phone"}
        placeholder="012671164"
        divClass="mb-5"
        isRequired={true}
      />
      {
      state.user.internal_agent  && 
        <CustomeInput
          value={form.projectName}
          onChange={setChange}
          label="Project Name"
          name={"projectName"}
          placeholder="Project Name"
          divClass="mb-5"
          isRequired={false}
        />
      }

      <div className="flex  gap-4 max-md:flex-col">
        <div className="w-full">
          <CustomeInput
            value={form.locationDetail}
            onChange={setChange}
            label="Property site Location"
            name={"locationDetail"}
            placeholder="Add a clear detail of Property site location, city, town etc..."
            divClass="mb-5"
            isRequired={true}
          />
        </div>
        <div className="w-full">
          <OptionInput5
            label="Select the Home Address you’re going to sell/rent."
            name={"address_new"}
            placeholder="e.g Addis Ababa"
            divClass="mb-5"
            onChange={setForm}
            Icon={searachImg}
            value={form.address}
            isRequired={true}
          />
        </div>
      </div>

      <OptionInput
        label="Property Types / የቤቱ አይነት"
        name="homeType"
        onChange={setForm}
        placeholder="Apartment, High rise"
        divClass="mb-5"
        ReactIcon={MdNavigateNext}
        IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
        value={form.homeType}
      />

      <div className="flex flex-col my-5 gap-3">
        <OptionInputNew
          onChange={setForm}
          ReactIcon={MdNavigateNext}
          IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
          name="propertymanagment"
          label="Property managements / ሽያጭ ወይስ ኪራይ"
          placeholder="Property Managment"
          value={form.propertyManagment}
        />
        {form.propertyManagment == "Rental" ? (
          <div className="flex justify-between gap-5">
            <CustomeInput
              onChange={({ target }: any) =>
                setForm((data: PropertyDetailInf) => ({
                  ...data,
                  rentalPrice: target.value,
                }))
              }
              IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
              name="price"
              label="Rental price"
              placeholder="15,000"
              value={form.rentalPrice}
              divClass="w-full"
            />

            <OptionInput4
              onChange={setForm}
              ReactIcon={MdNavigateNext}
              IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
              name="cycle"
              label="Cycle"
              placeholder="cycle"
              value={form.cycle}
              divClass="w-full "
            />
          </div>
        ) : form.propertyManagment == "Sell" ? (
          <>
            <CustomeInput
              onChange={({ target }: any) =>
                setForm((data: PropertyDetailInf) => ({
                  ...data,
                  sellingPrice: target.value,
                }))
              }
              IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
              name="price"
              label="Selling price"
              placeholder="15,000"
              value={form.sellingPrice}
            />
            <CustomeInput
              label="Estimated rental price per month Birr/month"
              name={"estRentalPrice"}
              placeholder="Estimated rental price per month Birr/month"
              divClass="w-full"
              onChange={setChange}
              value={form.estRentalPrice}
              isRequired={false}
            />
          </>
        ) : (
          <></>
        )}

        <OptionInput3
          onChange={setForm}
          ReactIcon={MdNavigateNext}
          IconClass={"m-auto text-3xl rotate-90 text-mainBlue"}
          name="currency"
          label="Currency / ምንዛሬ"
          placeholder="currency"
          value={form.currency}
        />
      </div>

      <div className="flex gap-5 mb-8 w-full max-mobile:flex-col">
        <CustomeInput
          label="Year Built / የተሰራበት አመት"
          name="yearBuilt"
          placeholder="1989"
          divClass="w-full"
          onChange={setChange}
          value={form.yearBuilt}
          isRequired={false}
        />
        <CustomeInput
          label="Built up area / ያረፈበት ቦታ ስፋት"
          name="squareFootage"
          placeholder="e.g. 125 Meter square"
          IconClass={"text-3xl my-auto text-mainBlue rotate-90"}
          ReactIcon={MdNavigateNext}
          divClass="w-full"
          onChange={setChange}
          value={form.squareFootage}
        />
      </div>
      <CustomeInput
        label="Construction Status / ግንባታው ያለበት ሁኔታ"
        name={"completionStatus"}
        placeholder="Eg. 80% completed"
        divClass="mb-5"
        onChange={setChange}
        Icon={searachImg}
        isRequired={false}
        value={form.completionStatus}
      />

      <CustomeInput
        label="Payment Program / የአከፋፈል ሁኔታ"
        name={"paymentProgram"}
        placeholder="payment program"
        divClass="mb-5"
        onChange={setChange}
        Icon={searachImg}
        isRequired={false}
        value={form.paymentProgram}
      />
      <CustomeInput
        label="Specify Vedio Link (matterport 3d viewer , tiktok Video , Youtube Video Or other vedio link)"
        name={"matterportLink"}
        placeholder="matterport link , tiktok, youtube or other"
        divClass="mb-5"
        onChange={setChange}
        Icon={searachImg}
        isRequired={false}
        value={form.matterportLink}
      />

      <div className="flex justify-between my-5 mb-8">
        <div className="text-xl">Facilities / መገልገያ ክፍሎች</div>
        <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
      </div>
      { state.user.internal_agent && <Amenity setForm={setForm} form={form} />}
      <div className="py-3 font-semibold">Other Facilities </div>
      <div className="grid grid-cols-2 gap-5 mb-8 w-full max-tablet:grid-cols-1">
        {
        state.user.internal_agent == false 
        && 
          <CustomeInputNumber
            onAdd={() =>
              updateFacilities("numOfBedrooms", form.facilities.numOfBedrooms + 1)
            }
            onSub={() =>
              updateFacilities("numOfBedrooms", form.facilities.numOfBedrooms - 1)
            }
            value={form.facilities.numOfBedrooms}
            preImg={img3}
            label={"No. of Bedrooms"}
          />
        }
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities(
              "numOfBathrooms",
              form.facilities.numOfBathrooms + 1,
            )
          }
          onSub={() =>
            updateFacilities(
              "numOfBathrooms",
              form.facilities.numOfBathrooms - 1,
            )
          }
          value={form.facilities.numOfBathrooms}
          preImg={img4}
          label={"No. of Bathrooms"}
        />

        <CustomeInputNumber
          onAdd={() =>
            updateFacilities("numOfKitchens", form.facilities.numOfKitchens + 1)
          }
          onSub={() =>
            updateFacilities("numOfKitchens", form.facilities.numOfKitchens - 1)
          }
          value={form.facilities.numOfKitchens}
          preImg={img4}
          label={"No. of Kitchen"}
        />
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities(
              "numOfLivingrooms",
              form.facilities.numOfLivingrooms + 1,
            )
          }
          onSub={() =>
            updateFacilities(
              "numOfLivingrooms",
              form.facilities.numOfLivingrooms - 1,
            )
          }
          value={form.facilities.numOfLivingrooms}
          preImg={img4}
          label={"No. of Living room"}
        />
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities("numOfGyms", form.facilities.numOfGyms + 1)
          }
          onSub={() =>
            updateFacilities("numOfGyms", form.facilities.numOfGyms - 1)
          }
          value={form.facilities.numOfGyms}
          preImg={img4}
          label={"No. of number of gymnasiums"}
        />
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities("numOfLibs", form.facilities.numOfLibs + 1)
          }
          onSub={() =>
            updateFacilities("numOfLibs", form.facilities.numOfLibs - 1)
          }
          value={form.facilities.numOfLibs}
          preImg={img4}
          label={"No. of number of Libraries"}
        />
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities(
              "numOfMaidsRooms",
              form.facilities.numOfMaidsRooms + 1,
            )
          }
          onSub={() =>
            updateFacilities(
              "numOfMaidsRooms",
              form.facilities.numOfMaidsRooms - 1,
            )
          }
          value={form.facilities.numOfMaidsRooms}
          preImg={img4}
          label={"No. of number of Maids Rooms"}
        />
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities("numOfSpas", form.facilities.numOfSpas + 1)
          }
          onSub={() =>
            updateFacilities("numOfSpas", form.facilities.numOfSpas - 1)
          }
          value={form.facilities.numOfSpas}
          preImg={img4}
          label={"No. of number of Spas"}
        />
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities("numOfStores", form.facilities.numOfStores + 1)
          }
          onSub={() =>
            updateFacilities("numOfStores", form.facilities.numOfStores - 1)
          }
          value={form.facilities.numOfStores}
          preImg={img4}
          label={"No. of number of Stores"}
        />
        <CustomeInputNumber
          onAdd={() =>
            updateFacilities(
              "numOfPrayerRoom",
              form.facilities.numOfPrayerRoom + 1,
            )
          }
          onSub={() =>
            updateFacilities(
              "numOfPrayerRoom",
              form.facilities.numOfPrayerRoom - 1,
            )
          }
          value={form.facilities.numOfPrayerRoom}
          preImg={img4}
          label={"No. of number of Prayer Rooms"}
        />
      </div>
      <div className="flex justify-between mb-8">
        <div className="text-xl">Additional Features</div>
        <MdNavigateNext className="text-3xl my-auto text-mainBlue -rotate-90" />
      </div>
      <div className="text-xl mb-4">Interior condition / ወስጣዊ ሁኔታ</div>
      <div className="flex tablet:gap-24 max-small:gap-3 max-tablet:justify-between max-small:flex-col">
        <CheckBoxDiv
          label="Fully Furnished"
          name="Appliances"
          isRadio={true}
          setChange={() =>
            setForm((data: PropertyDetailInf) => ({
              ...data,
              appliances: "fully_furnished",
            }))
          }
          checked={
            form.appliances != null && form.appliances == "fully_furnished"
          }
        />
        <CheckBoxDiv
          label="Semi-Furnished"
          name="Appliances"
          isRadio={true}
          setChange={() =>
            setForm((data: PropertyDetailInf) => ({
              ...data,
              appliances: "semi_furnished",
            }))
          }
          checked={
            form.appliances != null && form.appliances == "semi_furnished"
          }
        />
        <CheckBoxDiv
          label="Furnishing work not done"
          name="Appliances"
          isRadio={true}
          setChange={() =>
            setForm((data: PropertyDetailInf) => ({
              ...data,
              appliances: "not_furnished",
            }))
          }
          checked={
            form.appliances != null && form.appliances == "not_furnished"
          }
        />
        {/* <CheckBoxDiv
          label="Air conditioning system"
          name="Appliances" isRadio={true}
          setChange={() => setForm((data: PropertyDetailInf) => ({ ...data, "appliances": "includes_ac" }))}
          checked={form.appliances != null && form.appliances == "includes_ac"}
        /> */}
      </div>
      <p className="text-lightGray text-sm mt-2">Please select an option.</p>

      <div className="text-xl mb-4 mt-8">
        Property Description (Home Details) / የቤቱ አጭር ገለፃ
      </div>
      <textarea
        className="w-full bg-white text-lightGray px-5 py-4 rounded-lg"
        onChange={({ target }: any) => {
          if (target.value.length > 300) return "";
          setForm((data: PropertyDetailInf) => ({
            ...data,
            description: target.value,
          }));
        }}
        value={form.description}
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="your description"
      />
      <span>{form.description.length}/300</span>

      <div className="text-xl mb-4 mt-8">Utilities / መገልገያዎች</div>
      <div className="flex tablet:gap-32 max-small:gap-3 max-tablet:justify-between max-small:flex-col">
        <div className="flex flex-col gap-5">
          <CheckBoxDiv
            label="Parking features"
            name="utility"
            isRadio={false}
            setChange={() =>
              setForm((data: PropertyDetailInf) => ({
                ...data,
                parkingFeature:
                  data.parkingFeature != null ? !data.parkingFeature : true,
              }))
            }
            checked={form.parkingFeature != null && form.parkingFeature == true}
          />
          <CheckBoxDiv
            label="Security 24/7"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("security")}
            checked={form.utility.security!}
          />
          <CheckBoxDiv
            label="Basement"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("basement")}
            checked={form.utility.basement!}
          />

          <CheckBoxDiv
            label="Back yard"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("backYard")}
            checked={form.utility.backYard!}
          />
          <CheckBoxDiv
            label="water"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("water")}
            checked={form.utility.water!}
          />

          <CheckBoxDiv
            label="electricity"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("electricity")}
            checked={form.utility.electricity!}
          />
        </div>

        <div className="flex flex-col gap-5">
          <CheckBoxDiv
            label="Air Conditioning system"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("airConditioning")}
            checked={form.utility.airConditioning!}
          />
          <CheckBoxDiv
            label="ground water"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("ground_water")}
            checked={form.utility.ground_water!}
          />

          <CheckBoxDiv
            label="swimming"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("swimming")}
            checked={form.utility.swimming!}
          />

          <CheckBoxDiv
            label="Garbage shutter."
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("garbageShutter")}
            checked={form.utility.garbageShutter!}
          />
          <CheckBoxDiv
            label="Back up electric power"
            name="utility"
            isRadio={false}
            setChange={() => setUtitlities("backupElectricity")}
            checked={form.utility.backupElectricity!}
          />
        </div>
      </div>
      <div className="mb-2 mt-3">Other</div>
      <textarea
        className="w-full bg-white text-lightGray px-5 py-4 rounded-lg h-32"
        onChange={({ target }: any) => {
          if (target.value.length > 300) return "";
          const newData = { ...form.utility, other: target.value };
          setForm((data: PropertyDetailInf) => ({ ...data, utility: newData }));
        }}
        value={form.utility.other}
        name=""
        id=""
        cols={10}
        rows={10}
        placeholder="your description"
      />
      <span>{form.utility.other.length}/300</span>

      <p className="text-lightGray text-sm mt-2 max-mobile:mt-5">
        Start with a brief overview that describes your item’s finest features.
      </p>

      <div className="flex mt-8 justify-between ">
        <button
          onClick={() => {
            const result = confirm(
              "Every thing you added will be removed. Are you sure you want to cancel All!",
            );
            if (result) {
              setForm(initialForm);
              setPage(1);
            }
          }}
          className="text-mainBlue"
        >
          Cancel
        </button>
        <button
          onClick={validate}
          className="px-5 py-3 rounded-lg bg-mainBlue hover:bg-blue-500 text-white flex gap-3"
        >
          <Image src={goImg} className="my-auto" alt="" />
          <p>Next Step</p>
        </button>
      </div>
    </div>
  );
};

export default PropertyDetail;

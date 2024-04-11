"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import CustomeInput from "../../../_components/customeInput";
import { MdNavigateNext } from "react-icons/md";
import goImg from "../../../assets/images/go.svg";
import searachImg from "../../../assets/images/searchLocation.svg";
// import OptionInput from "./optionInput";
// import OptionInput3 from "./optionInput3";
// import OptionInput4 from "./optionInput4";
import CheckBoxDiv from "./checkboxdiv";
import ImagePicker from "./imagePicker";
import { PropertyDetailInf, initialForm } from "./interface";

interface Props {
  setForm: Function;
  form: PropertyDetailInf;
  setPage: any;
}

const PropertyManagment = ({ form, setForm, setPage }: Props) => {
  const [err, setErr] = useState<null | string>(null);
  const [isRental, setIsRental] = useState<boolean | null>(null);
  const errRef = useRef<any>(null);
  const [images, setImages] = useState<any>([]);

  const checkNumber = (value: any) => {
    try {
      var x = Math.floor(parseFloat(value));
      return x >= 0;
    } catch (err) {
      return false;
    }
  };
  const checkString = (value: string | null) => {
    if (value == null || value.length < 1) {
      return false;
    }
    return true;
  };

  const validate = () => {
    errRef &&
      errRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

    if (!checkNumber(form.govPaymentAshura)) {
      return setErr("Please insert valid govermental price ashura");
    }
    if (!checkNumber(form.leasingPayment)) {
      return setErr("Please insert valid leasing payment");
    }
    if (!checkNumber(form.conveyancingPayment)) {
      return setErr("Please insert valid Conveyancing payment");
    }
    if (!checkString(form.commission)) {
      return setErr("Please insert valid Commission Payment");
    }

    for (let i in form.previewImages) {
      if (form.previewImages[i] != null) {
        setErr("");
        setPage(3);
        return;
      }
    }
    return setErr("Empty Images");
  };
  const setCommunity = (target: string) => {
    setForm((data: any) => {
      const newCommunity = {
        ...data.community,
        [target]: !data.community[target],
      };
      return { ...data, community: newCommunity };
    });
  };
  const setConstruction = (target: string) => {
    setForm((data: any) => {
      const newConstruction = {
        ...data.construction,
        [target]: !data.construction[target],
      };
      return { ...data, construction: newConstruction };
    });
  };

  const setChange = ({ target }: any) => {
    setForm((data: PropertyDetailInf) => ({
      ...data,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="w-full h-fit pb-32">
      <div className="text-2xl mb-8">Add property management options...</div>
      <div
        ref={errRef}
        className={`${!err && "hidden"} w-full my-3 font-semibold py-2 rounded-lg border-2 px-4 border-red-600 bg-red-300 text-red-900`}
      >
        {err}
      </div>
      {/* <div>Which one of the following apply to you?</div>
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
      </div> */}

      <div className="text-xl mb-4 mt-8">Community</div>
      <div className="flex gap-5 flex-wrap">
        <CheckBoxDiv
          label="Primary School"
          name="communitys"
          isRadio={false}
          setChange={() => setCommunity("primarySchool")}
          checked={form.community.primarySchool!}
        />

        <CheckBoxDiv
          label="Secondary School"
          name="community"
          isRadio={false}
          setChange={() => setCommunity("secondarySchool")}
          checked={form.community.secondarySchool!}
        />
        <CheckBoxDiv
          label="College & University"
          name="community"
          isRadio={false}
          setChange={() => setCommunity("collegeAndUni")}
          checked={form.community.collegeAndUni!}
        />
        <CheckBoxDiv
          label="Hospital"
          name="community"
          isRadio={false}
          setChange={() => setCommunity("hospital")}
          checked={form.community.hospital!}
        />

        <CheckBoxDiv
          label="Supermarket"
          name="community"
          isRadio={false}
          setChange={() => setCommunity("supermarket")}
          checked={form.community.supermarket!}
        />
      </div>
      <div className="mb-2 mt-3">Other</div>
      <textarea
        className="w-full bg-white text-lightGray px-5 py-4 rounded-lg h-32"
        onChange={({ target }: any) => {
          if (target.value.length > 250) return "";
          const newData = { ...form.community, other: target.value };
          setForm((data: PropertyDetailInf) => ({
            ...data,
            community: newData,
          }));
        }}
        value={form.community.other}
        name=""
        id=""
        cols={10}
        rows={10}
        placeholder="your description"
      />
      <span>{form.community.other.length}/250</span>

      <div className="text-xl mb-4 mt-8">About construction material</div>
      <div className="flex gap-5 flex-wrap">
        <CheckBoxDiv
          label="Ordinary Material"
          name="construction"
          isRadio={false}
          setChange={() => setConstruction("ordinaryMaterial")}
          checked={form.construction.ordinaryMaterial!}
        />
        <CheckBoxDiv
          label="It has unique construction material"
          name="construction"
          isRadio={false}
          setChange={() => setConstruction("uniqueMaterial")}
          checked={form.construction.uniqueMaterial!}
        />
        {form.construction.uniqueMaterial ? (
          <CustomeInput
            label="Describe material if it's unique"
            name={"constructionCustom"}
            placeholder="add % completed Eg. 80% completed"
            divClass="mb-5"
            onChange={setChange}
            Icon={searachImg}
            value={form.constructionCustom}
          />
        ) : (
          <></>
        )}
      </div>

      {/* <div className="text-xl mb-4 mt-8">Financial</div>
      <div className="flex gap-5 flex-wrap w-full">
        
      </div> */}
      {form.propertyManagment == "Sell" && (
        <>
          <div className="text-xl mb-4 mt-8">Additional Cost Information </div>

          <CustomeInput
            label="Government payment (Ashura)"
            name={"govPaymentAshura"}
            placeholder="Government payment"
            divClass="mb-5"
            onChange={setChange}
            value={form.govPaymentAshura}
          />

          <CustomeInput
            label="Leasing payment"
            name={"leasingPayment"}
            placeholder="Leasing payment"
            divClass="mb-5"
            onChange={setChange}
            value={form.leasingPayment}
          />
          <CustomeInput
            label="Conveyancing payment Birr"
            name={"conveyancingPayment"}
            placeholder="Conveyancing payment Birr"
            divClass="mb-5"
            onChange={setChange}
            value={form.conveyancingPayment}
          />
          <CustomeInput
            label="Commission payment %"
            name={"commission"}
            placeholder="Commission payment eg: 45%"
            divClass="mb-5"
            onChange={setChange}
            value={form.commission}
          />
        </>
      )}

      <div className="text-xl mb-4 mt-8">Upload Image(s)</div>
      <div className="mt-5 grid grid-cols-2 max-mobile:grid-cols-1  max-mobile:h-fit gap-5">
        <ImagePicker
          divClass=""
          images={images}
          setForm={setForm}
          setImages={setImages}
          form={form}
          ind={0}
        />

        <div className="grid grid-cols-2 gap-5 h-full ">
          <div className="flex flex-col gap-5">
            <ImagePicker
              divClass="text-xs"
              images={images}
              setForm={setForm}
              setImages={setImages}
              form={form}
              ind={1}
            />
            <ImagePicker
              divClass="text-xs"
              images={images}
              setForm={setForm}
              setImages={setImages}
              form={form}
              ind={2}
            />
          </div>
          <div className="flex flex-col gap-5">
            <ImagePicker
              divClass="text-xs"
              images={images}
              setForm={setForm}
              setImages={setImages}
              form={form}
              ind={3}
            />
            <ImagePicker
              divClass="text-xs"
              images={images}
              setForm={setForm}
              setImages={setImages}
              form={form}
              ind={4}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <ImagePicker
            divClass="text-xs"
            images={images}
            setForm={setForm}
            setImages={setImages}
            form={form}
            ind={5}
          />
          <ImagePicker
            divClass="text-xs"
            images={images}
            setForm={setForm}
            setImages={setImages}
            form={form}
            ind={6}
          />
        </div>
        <div className="flex gap-5">
          <ImagePicker
            divClass="text-xs"
            images={images}
            setForm={setForm}
            setImages={setImages}
            form={form}
            ind={7}
          />
          <ImagePicker
            divClass="text-xs"
            images={images}
            setForm={setForm}
            setImages={setImages}
            form={form}
            ind={8}
          />
        </div>
      </div>

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
          className="px-5 py-2 rounded-lg bg-mainBlue hover:bg-blue-500 text-white flex gap-3"
        >
          <Image src={goImg} className="my-auto" alt="" />
          <p>Next Step</p>
        </button>
      </div>
    </div>
  );
};

export default PropertyManagment;

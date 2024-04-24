"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import PropertyDetail from "./propertyDetail";
import PropertyManagment from "./propertyManagment";
import Confirmation from "./confirmation";
import Confirmed from "./confirmed";

import accept from "../../../../assets/images/goAccept.svg";
import goImg from "../../../../assets/images/goBlack.svg";
import CancelImg from "../../../../assets/images/cancelentry.svg";
import { PropertyDetailInf, initialForm, toLocalInf } from "./interface";
import { useMutation } from "@apollo/client";
import { Add_LISTING_NEW, UPDATE_LIST } from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";
import { houseInf } from "@/utils/interfaces";

interface Props {
  house: houseInf;
  list_id: string;
}

const Form = ({ house, list_id }: Props) => {
  const state = useSelector(getState);
  const errRef = useRef<any>(null);
  const [form, setForm] = useState(toLocalInf(house));
  const [page, setPage] = useState(1);
  const [loading2, setLoading2] = useState(false);
  const [sendList, { loading, error, data, reset }] = useMutation(UPDATE_LIST);

  if (data) {
    page != 3 && setPage(3);
  }
  if (loading) {
    console.log("Loading");
    reset();
  }

  if (error) {
    console.log(error);
    alert(error.graphQLErrors[0].message ?? "Something goes Wrong");
    reset();
  }

  const changePage = (num: number) => {
    document.getElementById("nav-bar")?.scrollIntoView();
    setPage(num);
  };

  const uploadImage = async (image: any) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "mymymy");
    data.append("cloud_name", "de7yugvwl");
    data.append("folder", "Cloudinary-React");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${"de7yugvwl"}/image/upload/`,
        {
          method: "POST",
          body: data,
        },
      );
      const res = await response.json();
      return res.url;
    } catch (e) {
      alert("check you connection please!");
    }
    return null;
  };

  const updateList = async () => {
    const name = state.user.internal_agent
      ? {
          real_estate_id: form.realEstateId ?? null,
        }
      : {};
    const sellType =
      form.propertyManagment != "Sell"
        ? {
            sale_price: null,
            rental_price: {
              data: {
                cycle: form.cycle,
                price: form.rentalPrice,
              },
            },
          }
        : {
            sale_price: form.sellingPrice,
            rental_price: null,
          };
    sendList({
      variables: {
        listing_id: list_id,
        _set: {
          ...name,
          // ...sellType,
          house_type_id: form.homeType,
          property_number: form.phone,
          property_name: form.propertyName ?? "",
          address_data: form.address,
          build_date: form.yearBuilt,
          description: form.description,
          sale_type: form.propertyManagment,
          currency: form.currency,
          listing_property: {
            data: {
              bathroom_count: form.facilities.numOfBathrooms,
              bedroom_count: form.facilities.numOfBedrooms,
              gymnasium: form.facilities.numOfGyms,
              kitchen_count: form.facilities.numOfKitchens,
              library: form.facilities.numOfLibs,
              living_room_count: form.facilities.numOfLivingrooms,
              maids_room: form.facilities.numOfMaidsRooms,
              spa: form.facilities.numOfSpas,
              square_ft: form.squareFootage,
              store_rooms: form.facilities.numOfStores,
              praying_room: form.facilities.numOfPrayerRoom,
            },
          },
          completion_status: form.completionStatus,
          matterport_link: form.matterportLink,
          payment_program: form.paymentProgram,
          est_rental_price: form.estRentalPrice,
          gov_payment_ashura: form.govPaymentAshura,
          leasing_payment: form.leasingPayment,
          conveyancing_payment: form.conveyancingPayment,
          commission_payment: form.commission,
          extra_features: {
            data: {
              applicances: form.appliances,
              parking_feature: form.parkingFeature,
              primary_school: form.community.primarySchool,
              secondary_school: form.community.secondarySchool,
              college_and_uni: form.community.collegeAndUni,
              hospital: form.community.hospital,
              supermarket: form.community.supermarket,
              ordinary_material: form.construction.ordinaryMaterial,
              unique_material: form.construction.uniqueMaterial,
              construction_custom: form.constructionCustom,
              air_conditioning_system: form.utility.airConditioning,
              basement: form.utility.basement,
              back_yard: form.utility.backYard,
              service_rooms: form.utility.service_rooms,
              electricity: form.utility.electricity,
              garbage_shutter: form.utility.garbageShutter,
              water: form.utility.water,
              ground_water: form.utility.ground_water,
              security_system: form.utility.security,
              swimming: form.utility.swimming,
              other_community: form.community.other,
              other_utility: form.utility.other,
            },
          },
        },
      },
    });
    setLoading2(false);
  };

  return (
    <div className="min-h-[400px] relative">
      <div className="flex justify-between relative  mt-12 max-tablet:flex-col">
        <div className="flex  lg:sticky h-fit bg--300 top-[100px] lg:pb-32 bg--300 tablet:flex-col mobile:gap-12 max-mobile:flex-col max-mobile:gap-4 basis-5/12 text-lightGray max-tablet:mb-7 ">
          <p
            onClick={() => setPage(1)}
            className={`${page == 1 && "font-semibold text-black"} gap-3    duration-200 flex justify-between`}
          >
            <p className={`cursor-pointer ${page > 1 && "text-accept"} `}>
              1. Update Informations
            </p>
            <div className="">
              {page == 1 ? (
                <Image src={goImg} alt="go" className="w-5 me-12" />
              ) : (
                <Image src={accept} alt="go" className="w-5 me-12" />
              )}
            </div>
          </p>
          <p
            onClick={() => (page > 1 || true) && setPage(2)}
            className={`${page == 2 && "font-semibold text-black"} gap-3    duration-200 flex justify-between`}
          >
            <p className={`cursor-pointer ${page > 2 && "text-accept"} `}>
              2. Update Image
            </p>
            <div className=" flex justify-center items-center">
              {page == 2 ? (
                <Image src={goImg} alt="go" className="w-5 me-12" />
              ) : page > 2 ? (
                <Image src={accept} alt="go" className="w-5 me-12" />
              ) : (
                <></>
              )}
            </div>
          </p>

          {/* <p
            ref={errRef}
            onClick={() => page > 2 && setPage(3)}
            className={`${page == 3 && "font-semibold text-black"} gap-3  cursor-pointer duration-200 flex justify-between`}
          >
            <p className="cursor-pointer">3. Confirmation</p>
            <div className=" flex justify-center items-center">
              {page == 3 ? (
                <Image src={goImg} alt="go" className="w-5 me-12" />
              ) : page > 3 ? (
                <Image src={accept} alt="go" className="w-5 me-12" />
              ) : (
                <></>
              )}
            </div>
          </p> */}
        </div>
        {page == 1 ? (
          <PropertyDetail
            updateList={updateList}
            setForm={setForm}
            form={form}
          />
        ) : page == 2 ? (
          <PropertyManagment setPage={() => {}} setForm={setForm} form={form} />
        ) : (
          <Confirmed listing_id={data.insert_listing.returning[0].listing_id} />
        )}
      </div>
    </div>
  );
};

export default Form;

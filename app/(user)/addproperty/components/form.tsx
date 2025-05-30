"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import PropertyDetail from "./propertyDetail";
import PropertyManagment from "./propertyManagment";
import Confirmation from "./confirmation";
import Confirmed from "./confirmed";

import accept from "../../../assets/images/goAccept.svg";
import goImg from "../../../assets/images/goBlack.svg";
import CancelImg from "../../../assets/images/cancelentry.svg";
import { PropertyDetailInf, initialForm,Amenity } from "./interface";
import { useMutation } from "@apollo/client";
import { Add_LISTING_NEW } from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";
import { INSERT_REALESTATE_AMENITY } from "@/graphql/features/realestate";

const Form = () => {
  const state = useSelector(getState);
  const errRef = useRef<any>(null);
  const [form, setForm] = useState(initialForm);
  const [page, setPage] = useState(1);
  const [loading2, setLoading2] = useState(false);
  const [sendList, { loading, error, data, reset }] =
    useMutation(Add_LISTING_NEW);
  const [insertAmenity,insertAmenityStatus] = useMutation(INSERT_REALESTATE_AMENITY)

  if (page != 4 && insertAmenityStatus.data) {
    setPage(4);
    console.log(insertAmenityStatus.data)
    insertAmenityStatus.reset()
  }
  if(insertAmenityStatus.error){
    console.log(insertAmenityStatus.error)
    alert("Nop")
  }
  if(data && state.user.internal_agent == false && page != 4){
    setPage(4)
  }
  let [ch,setCh] = useState(true)

  if(data && state.user.internal_agent && ch){
    console.log("AAAAAAA",data && state.user.internal_agent && ch)
    setCh(false)
    console.log(data)
    let listing_id = data.insert_listing.returning[0].listing_id
    let amenities : Amenity[] = []

    if(form.circulation.trim().length > 0) {
      let data : Amenity = {
        amenity : "circulation",
        area : form.circulation,
        listing_id,
      }
      amenities.push(data)
    }
  
    form.shop.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "shop",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    form.bedroom0.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "studio",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    form.bedroom1.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "1bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    form.bedroom2.map((val : string) => {
      console.log(val)
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "2bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    form.bedroom3.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "3bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    form.bedroom4.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "4bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    console.log(amenities)
    insertAmenity({
      variables : {
        datas : amenities,
      }
    })
  }



  if (error) {
    console.log("THis form ", form);
    console.log("THis error ", error);
    alert(error.graphQLErrors[0].message);
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
      console.log(e, "--");
      alert("check you connection please!");
    }
    return null;
  };
  const addList = async () => {
    let imgs: any = [];
    setLoading2(true);
    for (let i in form.images) {
      let url = null;
      if (form.images[i]) {
        url = await uploadImage(form.images[i]);
        imgs.push({
          url,
          type: `${i}`,
          primary: imgs.length < 1,
        });
      }
    }
    setForm((data: any) => ({ ...data, urls: [...imgs] }));
    const name = state.user.internal_agent
      ? {
          real_estate_id: form.realEstateId ?? null,
          project_name : form.projectName
        }
      : {
          // real_estate: {
          //   data: {
          //     name: form.propertyName,
          //   },
          // },
        };
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
        objects: {
          ...name,
          ...sellType,
          house_type_id: form.homeType,
          type_of_person: form.typeOfPerson,
          property_number: form.phone,
          property_name: form.propertyName ?? "",
          address_data: form.address + ", " + form.locationDetail,
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
              secondary_electricity: form.utility.backupElectricity,
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

          digital_assets: {
            data: imgs,
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
              1. Property Management
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
              2. Property details
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

          <p
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
          </p>
        </div>
        {page == 1 ? (
          <PropertyDetail setPage={changePage} setForm={setForm} form={form} />
        ) : page == 2 ? (
          <PropertyManagment
            setPage={changePage}
            setForm={setForm}
            form={form}
          />
        ) : page == 3 ? (
          <Confirmation
            loading={loading || loading2}
            form={form}
            setForm={setForm}
            addList={addList}
          />
        ) : (
          <Confirmed listing_id={data.insert_listing.returning[0].listing_id} />
        )}
      </div>
    </div>
  );
};

export default Form;

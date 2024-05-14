"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import PropertyDetail from "./propertyDetail";
import PropertyManagment from "./propertyManagment";
import Confirmation from "./confirmation";
import Confirmed from "./confirmed";

import accept from "../../../../../assets/images/goAccept.svg";
import goImg from "../../../../../assets/images/goBlack.svg";
import CancelImg from "../../../../../assets/images/cancelentry.svg";
import { PropertyDetailInf, initialForm, toLocalInf } from "./interface";
import { useMutation,useQuery } from "@apollo/client";
import {
  Add_LISTING_NEW,
  UPDATE_EXTRA_FEATURE,
  UPDATE_LIST,
  UPDATE_LISTING_PROPERTY,
} from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";
import { houseInf } from "@/utils/interfaces";
import { Amenity } from "@/app/(user)/addproperty/components/interface";
import { DELETE_REALESTATE_AMENITY, GET_REALESTATE_AMENITY, INSERT_REALESTATE_AMENITY } from "@/graphql/features/realestate";

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
  let mp : any = {
    "shop" : "shop",
    "circulation" : "circulation",
    "studio" : "bedroom0",
    "1bedroom" : "bedroom1",
    "2bedroom" : "bedroom2",
    "3bedroom" : "bedroom3",
    "4bedroom" : "bedroom4",
  }
  const [amenityNewData,setAmenityNewData] = useState({
    shop : [""],
    circulation : "",
    bedroom0 : [""],
    bedroom1 : [""],
    bedroom4 : [""],
    bedroom3 : [""],
    bedroom2 : [""],
  })
  const [insertAmenity,insertAmenityStatus] = useMutation(INSERT_REALESTATE_AMENITY)

  const [updateExtraFeature, extraFeatureStatus] =
    useMutation(UPDATE_EXTRA_FEATURE);
  
  const [updateListingProperty, listingPropertyStatus] = useMutation(
    UPDATE_LISTING_PROPERTY,
  );

  const [deleteAmenity, deleteAmenityStatus] = useMutation(
    DELETE_REALESTATE_AMENITY,{
      variables : {
        list_id,
      },
      onCompleted () {
        updateAmenity()
      }
    },
    
  );

  const getAmenityStatus = useQuery(GET_REALESTATE_AMENITY,{
    variables :{
      list_id,
    },
   
  })  


  const updateAmenity = () => {
    let amenities : Amenity[] = []
    let listing_id = list_id
    if(amenityNewData.circulation.trim().length > 0) {
      let data : Amenity = {
        amenity : "circulation",
        area : amenityNewData.circulation,
        listing_id,
      }
      amenities.push(data)
    }
  
    amenityNewData.shop.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "shop",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    amenityNewData.bedroom0.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "studio",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    amenityNewData.bedroom1.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "1bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    amenityNewData.bedroom2.map((val : string) => {
      console.log(val)
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "2bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    amenityNewData.bedroom3.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "3bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    amenityNewData.bedroom4.map((val : string) => {
      if(val.trim().length < 1) return
      let data : Amenity = {
        amenity : "4bedroom",
        area : val,
        listing_id,
      }
      amenities.push(data)
    })
    insertAmenity({
      variables : {
        datas : amenities,
      }
    })
  }

  console.log(amenityNewData,"************")

  
  const [checked,setChecked] = useState(true)
 
  if(getAmenityStatus.data && checked){
    setChecked(false)  
    if(getAmenityStatus.data.real_estate_amenity.length > 0){
      let newData : any = amenityNewData
      getAmenityStatus.data.real_estate_amenity.map((d : any)=>{
        if(d.amenity == 'circulation'){
          newData[mp[d.amenity]] = d.area
        } else if(newData[mp[d.amenity]][0] == ""){
          newData[mp[d.amenity]][0] = d.area
        } else{
          newData[mp[d.amenity]].push(d.area) 
        }
      })
      console.log("LLLL+++++LLL",newData)
      setAmenityNewData(newData)
    } 
  }

  
  const [sendList, { loading, error, data, reset }] = useMutation(UPDATE_LIST);

  if (data && extraFeatureStatus.data && listingPropertyStatus.data && ((!form.realEstateId) || insertAmenityStatus.data)) {
    reset();
    extraFeatureStatus.reset();
    alert("Listing updated successfully!!!");
    // page != 3 && setPage(3);
  }

  

  if (loading || extraFeatureStatus.loading) {
    console.log("Loading");
  }

  if (error) {
    alert(error?.graphQLErrors[0]?.message ?? "Something goes Wrong");
    reset();
  }
  if(deleteAmenityStatus.error){
    alert(deleteAmenityStatus.error?.graphQLErrors[0]?.message ?? "Something goes Wrong while deleting");

  }
  if(insertAmenityStatus.error){
    alert(insertAmenityStatus.error?.graphQLErrors[0]?.message ?? "Something goes Wrong while inserting data");
  }

  if (extraFeatureStatus.error) {
    console.log(extraFeatureStatus.error);
    alert(
      extraFeatureStatus?.error?.graphQLErrors[0]?.message ??
        "Something goes Wrong",
    );
    extraFeatureStatus.reset();
  }
  if (listingPropertyStatus.error) {
    console.log(listingPropertyStatus.error);
    alert(
      listingPropertyStatus.error.graphQLErrors[0].message ??
        "Something goes Wrong",
    );
    listingPropertyStatus.reset();
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
    updateExtraFeature({
      variables: {
        id: form.extra_features_id,
        set: {
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
    });
    updateListingProperty({
      variables: {
        id: house.listing_property_id ?? "",
        set: {
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
    });

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

          completion_status: form.completionStatus,
          matterport_link: form.matterportLink,
          payment_program: form.paymentProgram,
          est_rental_price: form.estRentalPrice,
          gov_payment_ashura: form.govPaymentAshura,
          leasing_payment: form.leasingPayment,
          conveyancing_payment: form.conveyancingPayment,
          commission_payment: form.commission,
          // extra_features: {
          //   data:
          // },
        },
      },
    });
    form.realEstateId && deleteAmenity()
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
            {/* <p className={`cursor-pointer ${page > 2 && "text-accept"} `}>
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
            </div> */}
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
            amenityNewData={amenityNewData} 
            setAmenityNewData={setAmenityNewData} 
          />
        ) : page == 2 ? (
          <PropertyManagment 
            setPage={() => {}} 
            setForm={setForm} 
            form={form} 
          />
        ) : (
          <Confirmed listing_id={data.insert_listing.returning[0].listing_id} />
        )}
      </div>
    </div>
  );
};

export default Form;

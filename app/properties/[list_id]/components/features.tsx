"use client";
import { houseInf } from "@/utils/interfaces";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  house: houseInf;
}

const features = ({ house }: Props) => {
  return (
    <div className="mt-8 h-fit ">
      <div className="text-3xl font-semibold">what's available ?</div>
      <div className="flex justify-between max-sm:flex-col max-sm:gap-2  mt-5">
        <div className="w-full ">
          <div className="text-lg mt-5 font-semibold my">Interior</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022']  before:mr-2">
              Bedrooms: {house.listing_property.bedroom_count}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Bathrooms: {house.listing_property.bathroom_count}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Kitchens: {house.listing_property.kitchen_count}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Living Rooms: {house.listing_property.living_room_count}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Gymnasium: {house.listing_property.gymnasium}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Library: {house.listing_property.library}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Maids Room: {house.listing_property.maids_room}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Spas: {house.listing_property.spa}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Storage: {house.listing_property.store_rooms}
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Praying Room: {house.listing_property.praying_room ?? 0}
            </li>

            {/* <li className="before:content-['\2022']  before:mr-2">
                        Full bathrooms: 1
                    </li> */}
          </ul>

          <div className="text-lg mt-5 font-semibold my">
            Other interior features
          </div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022']  before:mr-2">
              Built-up area: {house.listing_property.square_ft} M<sup>2</sup>
            </li>
          </ul>
        </div>

        <div className="w-full ">
          <div className="text-lg mt-5 font-semibold my">Type & style</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022']  before:mr-2">
              {house.house_type?.type_name ?? "Apartment"}
            </li>
            {/* <li className="before:content-['\2022']  before:mr-2">
                        Property subType: Apartment, {house.real_estate?.name ?? "Real State"}
                    </li> */}
          </ul>
          <div className="text-lg mt-5 font-semibold my">Condition</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022']  before:mr-2">
              Year built: {house.build_date}
            </li>
          </ul>

          <div className="text-lg mt-5 font-semibold my">Payments</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022']  before:mr-2">
              Conveyancing program : {house.conveyancing_payment} Birr
            </li>

            <li className="before:content-['\2022']  before:mr-2">
              Goverment Payment Ashura : {house.gov_payment_ashura} Birr
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Leasing Payment : {house.leasing_payment} Birr
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Commission Payment : {house.commission_payment} %
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Estimated Rent Price : {house.est_rental_price} Birr
            </li>
            <li className="before:content-['\2022']  before:mr-2">
              Payment Program : {house.payment_program} Birr
            </li>
          </ul>
        </div>
      </div>

      {house.extra_features?.construction_custom && (
        <>
          <div className="text-lg mt-5 font-semibold ">Construction custom</div>
          <div className="text-lightGray ps-5">
            {house.extra_features.construction_custom}
          </div>
        </>
      )}

      <div className="flex justify-between max-sm:flex-col max-sm:gap-2  my-5">
        <div className="w-full ">
          <div className="text-lg  font-semibold my">Utiliity</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022']  before:mr-2 flex gap-2 flex-wrap">
              <p>Air Conditioning System :</p>
              {house.extra_features?.air_conditioning_system ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>Back yard :</p>
              {house.extra_features?.back_yard ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>Parking feature :</p>
              {house.extra_features?.parking_feature ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>Lot feature :</p>
              {house.extra_features?.lot_features ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>basement :</p>
              {house.extra_features?.basement ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>electricity :</p>
              {house.extra_features?.electricity ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>garbage shutter :</p>
              {house.extra_features?.garbage_shutter ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>water :</p>
              {house.extra_features?.water ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>secondary electricity :</p>
              {house.extra_features?.secondary_electricity ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>security system :</p>
              {house.extra_features?.security_system ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>swimming :</p>
              {house.extra_features?.swimming ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalizze before:mr-2 flex gap-2 flex-wrap">
              <p>ground water :</p>
              {house.extra_features?.ground_water ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
          </ul>
          {house.extra_features?.other_utility && (
            <div className=" mt-5 flex gap-2 flex-wrap">
              <p className="font-semibold">Other utility specifications</p>
              <ul className="ps-5">
                <li className="text-lightGray">
                  {house.extra_features?.other_utility}
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-full">
          <div className="text-lg mt-5 font-semibold my">
            Construction Status
          </div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022']  before:mr-2">
              Complition status :{" "}
              {house.completion_status
                ? house.completion_status + "%"
                : "Unknown"}
            </li>
            {house.extra_features.unique_material && (
              <li className="before:content-['\2022']  before:mr-2">
                Unique Materials
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="flex justify-between max-sm:flex-col max-sm:gap-2  ">
        <div className="w-full ">
          {/* <div className="text-lightGray font-semibold text-xl">Community & neighborhood</div> */}
          <div className="text-lg  font-semibold my">
            Community and neighborhood
          </div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            {/* <li className="before:content-['\2022']  before:mr-2">
                            Near a local park
                        </li> */}

            <li className="before:content-['\2022']  before:mr-2 flex gap-2 flex-wrap">
              <p>College and Universities :</p>
              {house.extra_features?.college_and_uni ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022']  before:mr-2 flex gap-2 flex-wrap">
              <p>hospital :</p>
              {house.extra_features?.hospital ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022']  before:mr-2 flex gap-2 flex-wrap">
              <p>Secondary School :</p>
              {house.extra_features?.secondary_school ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022']  before:mr-2 flex gap-2 flex-wrap">
              <p>Supermarket :</p>
              {house.extra_features?.supermarket ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022']  before:mr-2 flex gap-2 flex-wrap">
              <p>Unique Material :</p>
              {house.extra_features?.unique_material ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
          </ul>
          {house.extra_features?.other_community && (
            <div className=" mt-5 flex gap-2 flex-wrap">
              <p className="font-semibold">Other community specifications</p>
              <ul className="ps-5">
                <li className="text-lightGray">
                  {house.extra_features?.other_community}
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="w-full ">
          {/* <div className="text-lg mt-5 font-semibold my">Property Location</div>
                    <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                        <li className="before:content-['\2022']  before:mr-2">
                           {house.address_data}
                        </li>
                    </ul> */}
          {/* <div className="text-lightGray font-semibold text-xl">HOA & financial</div>
                    <div className="text-lg mt-5 font-semibold my">HOA</div>
                    <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                        <li className="before:content-['\2022']  before:mr-2">
                            Has HOA: Yes
                        </li>
                        <li className="before:content-['\2022']  before:mr-2">
                            HOA fee: $335 monthly
                        </li>
                        <li className="before:content-['\2022']  before:mr-2">
                            Services included
                        </li>
                    </ul> */}
          {/* <div className="text-lg mt-5 font-semibold my">Other financial information</div>
                    <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                        <li className="before:content-['\2022']  before:mr-2">
                            Buyer agency compensation: 2%
                        </li>
                    </ul> */}
        </div>
      </div>
    </div>
  );
};

export default features;

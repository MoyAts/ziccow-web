"use client";
import { houseInf } from "@/utils/interfaces";
import { PropertyDetailInf } from "./interface";

import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";

const Features = ({ form }: { form: PropertyDetailInf }) => {
  const state = useSelector(getState);
  return (
    <div className="mt-8 h-fit text-lightGray ">
      <div className="text-2xl  font-semibold">Facts & Features</div>
      <div className="flex justify-between mt-5">
        <div className="w-full ">
          <div className="text-lightGray font-semibold text-xl">Interior</div>
          <div className="text-lg mt-5 font-semibold my">Facilities</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            {state.user.internal_agent == false && (
              <li className="before:content-['\2022'] capitalize  before:mr-2">
                Bedrooms: {form.facilities.numOfBedrooms}
              </li>
            )}
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Bathrooms: {form.facilities.numOfBathrooms}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Built up area: {form.squareFootage}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Living rooms up area: {form.facilities.numOfLivingrooms}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Living rooms up area: {form.facilities.numOfLivingrooms}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Kitchens : {form.facilities.numOfKitchens}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Libraries : {form.facilities.numOfLibs}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Maids Room : {form.facilities.numOfMaidsRooms}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Spas : {form.facilities.numOfSpas}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Stores : {form.facilities.numOfStores}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Gyms : {form.facilities.numOfGyms}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Prayer room : {form.facilities.numOfPrayerRoom}
            </li>
          </ul>
          {/* <div className="text-lg mt-5 font-semibold my">Appliances</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022'] capitalize  before:mr-2">
                    {form.appliances ? "Appliances included" : "Appliances not included"} 
                    
                    </li>
                </ul> */}
        </div>

        <div className="w-full ">
          <div className="text-lightGray font-semibold text-xl">
            Construction
          </div>
          <div className="text-lg mt-5 font-semibold my">Type & style</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Home type: {form.propertyManagment}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              construction Material :{" "}
              {form.construction.ordinaryMaterial
                ? "ordinary material"
                : "Unknown"}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Completion status : {form.completionStatus} %
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Matterport Link : {form.matterportLink}
            </li>
          </ul>
          <div className="text-lg mt-5 font-semibold my">Condition</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              New construction: No
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Year built: {form.yearBuilt}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="w-full ">
          <div className="text-lightGray font-semibold text-xl">Utilities</div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>Air Conditioning System :</p>
              {form.utility.airConditioning ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>swimming :</p>
              {form.utility.swimming ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>Ground water :</p>
              {form.utility.ground_water ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>back yard :</p>
              {form.utility.backYard ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>water :</p>
              {form.utility.water ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>electricity :</p>
              {form.utility.electricity ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>service room :</p>
              {form.utility.service_rooms ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>basement :</p>
              {form.utility.basement ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>backup electricity :</p>
              {form.utility.backupElectricity ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>

            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>garbage shutter :</p>
              {form.utility.garbageShutter ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>security :</p>
              {form.utility.security ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
          </ul>
          {form.utility?.other && (
            <div className=" mt-5 flex gap-2 flex-wrap flex-col">
              <p className="font-semibold">Other Utility specifications</p>
              <ul className="ps-5">
                <li className="text-lightGray">{form.utility?.other}</li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-full ">
          <div className="text-lightGray font-semibold text-xl">Property</div>

          <div className="text-lg mt-5 font-semibold my">
            Other property information
          </div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Property id: {form.phone}
            </li>
          </ul>
          <div className="text-lg mt-5 font-semibold my">
            Other interior features
          </div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Built up area: {form.squareFootage}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Total interior livable area: {form.squareFootage} sqft
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="w-full ">
          <div className="text-lightGray font-semibold text-xl">
            Community & neighborhood
          </div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>Primary school :</p>
              {form.community.primarySchool ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>secondary school :</p>
              {form.community.secondarySchool ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>College and University :</p>
              {form.community.collegeAndUni ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>hospital :</p>
              {form.community.hospital ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2 flex gap-2 flex-wrap">
              <p>super market :</p>
              {form.community.supermarket ? (
                <FaCheck className="my-auto text-green-600" />
              ) : (
                <IoCloseSharp className="my-auto text-red-600" />
              )}
            </li>
          </ul>
          {form.community?.other && (
            <div className=" mt-5 flex gap-2 flex-wrap flex-col">
              <p className="font-semibold">Other community specifications</p>
              <ul className="ps-5">
                <li className="text-lightGray">{form.community?.other}</li>
              </ul>
            </div>
          )}
        </div>

        <div className="w-full ">
          <div className="text-lg  font-semibold my">
            Other financial information
          </div>
          <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Estimated rental price : {form.estRentalPrice}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Government Payment : {form.govPaymentAshura}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Leasing/Property Tax : {form.leasingPayment}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Bank Loan : {form.conveyancingPayment}
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Commission Payment: {form.commission} %
            </li>
            <li className="before:content-['\2022'] capitalize  before:mr-2">
              Payment Program: {form.paymentProgram} %
            </li>
          </ul>
        </div>
      </div>

      {state.user.internal_agent && (
        <div className="flex justify-between mt-5">
          <div className="w-full">
            <div className="text-lg  font-semibold my">Other informations</div>
            {form.circulation && (
              <>
                <div className="mt-2">Circulation</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                  <li className="before:content-['\2022'] capitalize  before:mr-2">
                    {form.circulation}
                  </li>
                </ul>
              </>
            )}
            <div className="mt-2">Studio</div>
            <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
              {(form.bedroom0[0] != "" || form.bedroom0.length > 1) &&
                form.bedroom0.map(
                  (data, ind) =>
                    data.length > 1 && (
                      <li
                        key={ind}
                        className="before:content-['\2022'] capitalize  before:mr-2"
                      >
                        Type {ind + 1} : {data} M2
                      </li>
                    ),
                )}
            </ul>
            <div className="mt-2">1 Bedroom</div>
            <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
              {(form.bedroom1[0] != "" || form.bedroom1.length > 1) &&
                form.bedroom1.map(
                  (data, ind) =>
                    data.length > 1 && (
                      <li
                        key={ind}
                        className="before:content-['\2022'] capitalize  before:mr-2"
                      >
                        Type {ind + 1} : {data} M2
                      </li>
                    ),
                )}
            </ul>

            <div className="mt-2">2 Bedroom</div>
            <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
              {(form.bedroom2[0] != "" || form.bedroom2.length > 1) &&
                form.bedroom2.map(
                  (data, ind) =>
                    data.length > 1 && (
                      <li
                        key={ind}
                        className="before:content-['\2022'] capitalize  before:mr-2"
                      >
                        Type {ind + 1} : {data} M2
                      </li>
                    ),
                )}
            </ul>

            <div className="mt-2">3 Bedroom</div>
            <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
              {(form.bedroom3[0] != "" || form.bedroom3.length > 1) &&
                form.bedroom3.map(
                  (data, ind) =>
                    data.length > 1 && (
                      <li
                        key={ind}
                        className="before:content-['\2022'] capitalize  before:mr-2"
                      >
                        Type {ind + 1} : {data} M2
                      </li>
                    ),
                )}
            </ul>

            <div className="mt-2">4 Bedroom</div>
            <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
              {(form.bedroom4[0] != "" || form.bedroom4.length > 1) &&
                form.bedroom4.map(
                  (data, ind) =>
                    data.length > 1 && (
                      <li
                        key={ind}
                        className="before:content-['\2022'] capitalize  before:mr-2"
                      >
                        Type {ind + 1} : {data} M2
                      </li>
                    ),
                )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;

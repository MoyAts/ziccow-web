"use client"
import { houseInf } from "@/utils/interfaces"

 

interface Props {
    house : houseInf
}

const features = ({ house } : Props) => {
  return (
    <div className="mt-8 h-fit ">
        <div className="text-3xl font-semibold">Facts & Features</div>
        <div className='flex justify-between mt-5'>
            <div className='w-full '>
                <div className="text-lightGray font-semibold text-xl">Interior</div>
                <div className="text-lg mt-5 font-semibold my">Bedrooms & bathrooms</div>
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
                   
                    {/* <li className="before:content-['\2022']  before:mr-2">
                        Full bathrooms: 1
                    </li> */}
                </ul>
                <div className="text-lg mt-5 font-semibold my">Appliances</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022']  before:mr-2">
                        Appliances included
                    </li>
                </ul>
                <div className="text-lg mt-5 font-semibold my">Other interior features</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022']  before:mr-2">
                        Total structure area: {house.listing_property.square_ft}
                    </li>
                    <li className="before:content-['\2022']  before:mr-2">
                        Built up area: {house.listing_property.square_ft} sqft
                    </li>
                </ul>
            </div>

            <div className='w-full '>
                <div className="text-lightGray font-semibold text-xl">Construction</div>
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
                        New construction: No
                    </li>
                    <li className="before:content-['\2022']  before:mr-2">
                        Year built: {house.build_date}
                    </li>
                </ul>
            </div>
        </div>









        <div className='flex justify-between mt-5'>
            <div className='w-full '>
                <div className="text-lightGray font-semibold text-xl">Property</div>
                <div className="text-lg mt-5 font-semibold my">Parking</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                   {
                    house.extra_features?.parking_feature  &&
                    <li className="before:content-['\2022']  before:mr-2">
                        Parking features
                    </li>
                    }
                </ul>
                <div className="text-lg mt-5 font-semibold my">Lot</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                {house.extra_features?.lot_features &&  <li className="before:content-['\2022']  before:mr-2">
                        Lot features: Near Public Transit
                    </li>}
                </ul>
                <div className="text-lg mt-5 font-semibold my">Other property information</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022']  before:mr-2">
                        Parcel number: 012671164
                    </li>
                </ul>
            </div>

{/* 
            <div className='w-full '>
                <div className="text-lightGray font-semibold text-xl">Utilities</div>
                <div className="text-lg mt-5 font-semibold my">Utility</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022']  before:mr-2">
                        Parking features
                    </li>
                    <li className="before:content-['\2022']  before:mr-2">
                        Garbage shutter
                    </li>
                    <li className="before:content-['\2022']  before:mr-2">
                        Ground water
                    </li>
                    <li className="before:content-['\2022']  before:mr-2">
                        Security systems
                    </li>
                    <li className="before:content-['\2022']  before:pr-2 flex">
                        Back up or secondary electric power source
                    </li>
                    <li className="before:content-['\2022']  before:mr-2">
                        Great for remote work
                    </li>
                </ul>
            </div> */}
        
        </div>



        <div className='flex justify-between mt-5'>
            
            <div className='w-full '>
                <div className="text-lightGray font-semibold text-xl">Community & neighborhood</div>
                <div className="text-lg mt-5 font-semibold my">Community</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022']  before:mr-2">
                        Near a local park
                    </li>
                </ul>
                <div className="text-lg mt-5 font-semibold my">Location</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022']  before:mr-2">
                        4kilo around parliament
                    </li>
                </ul>
            </div>

            <div className='w-full '>
                <div className="text-lightGray font-semibold text-xl">HOA & financial</div>
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
                </ul>
                <div className="text-lg mt-5 font-semibold my">Other financial information</div>
                <ul className="flex flex-col mt-1 ps-5 gap-1 text-lightGray">
                    <li className="before:content-['\2022']  before:mr-2">
                        Buyer agency compensation: 2%
                    </li>
                </ul>
            </div>
            
        </div>



      
    </div>
  )
}

export default features


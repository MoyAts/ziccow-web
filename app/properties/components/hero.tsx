"use client";
import rentalIcon from "../../assets/images/rentalIcon.svg";
import { IoIosArrowBack as ListIcon } from "react-icons/io";
import { GET_LISTING, FILTER_LIST } from "@/graphql/features/listing";
import Properties from "./properties";
import amountIcon from "../../assets/images/amountIcon.svg";
import { useState } from "react";
import PriceOption from "./price_option";
import RentalOption from "./rental_option";
import Search from "./search";
import { useSearchParams } from "next/navigation";

const Hero = () => {
  const searchParams = useSearchParams();
  const searchDataParam = searchParams.get("search");
  const saleTypeDataParam = searchParams.get("propertyManagment");

  const priceFilter = [
    { name: "$15k and Below", price: [0, 15000] },
    { name: "$15k and 30k", price: [15000, 30000] },
    { name: "$30k and 50k", price: [30000, 50000] },
    { name: "$50k and Above", price: [50000, 10000000000] },
  ];
  const areaFilter = [
    { name: "125 M2", price: [0, 125] },
    { name: "125 M2 - 250 M2", price: [125, 250] },
    { name: "250 M2 - 500 M2", price: [250, 500] },
    { name: "500 M2 and Above", price: [500, 10000000000] },
  ];
  const houseFilter = ["Sell", "Rental"];
  let must: any = {
    real_estate_id: { _is_null: true },
    status: { _eq: "ACTIVE" },
  };
  const intialSearchQuery = searchDataParam?.trim()
    ? [
        {
          address_data: {
            _ilike: searchDataParam.trim() ? `%${searchDataParam}%` : "",
          },
        },
        {
          house_type: {
            type_name: {
              _ilike: searchDataParam.trim() ? `%${searchDataParam}%` : "",
            },
          },
        },
      ]
    : [];
  if (saleTypeDataParam?.trim())
    must["sale_type"] = { _eq: saleTypeDataParam?.trim() };
  const initialData =
    intialSearchQuery.length > 0
      ? {
          where: {
            ...must,
            _or: [...intialSearchQuery],
          },
          order_by: { created_at: "desc" },
        }
      : { where: must, order_by: { created_at: "desc" } };

  const [where, setWhere] = useState<any>(initialData);
  const [curr, setCurr] = useState<string | null>(null);

  const [propertyType, setpropertyType] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const resetPrice = () => {
    setWhere((wh: any) => {
      let temp = { ...wh.where };
      delete temp["sale_price"];
      delete temp["rental_price"];
      return {
        ...wh,
        where: { ...temp },
      };
    });
  };
  const resetArea = () => {
    setWhere((wh: any) => {
      let temp = { ...wh.where };
      console.log(temp, "listing_property");
      delete temp["listing_property"];
      return {
        ...wh,
        where: { ...temp },
      };
    });
  };
  const filterByPrice = (ls: number, lg: number) => {
    setWhere((data: any) => {
      let price = {};
      if (data.where?.sale_type?._eq && data.where.sale_type._eq == "Rental") {
        price = {
          rental_price: {
            price: {
              _gte: ls,
              _lte: lg,
            },
          },
        };
      } else {
        //   price = { sale_price: { _gte: ls, _lte: lg } };
        return data;
      }
      return {
        ...data,
        where: { ...data.where, ...price },
      };
    });
  };
  const filterByArea = (ls: number, lg: number) => {
    setWhere((data: any) => {
      return {
        ...data,
        where: {
          ...data.where,
          listing_property: { square_ft: { _gte: ls, _lte: lg } },
        },
      };
    });
  };
  const filterByHouseType = (val: string) => {
    setWhere((data: any) => {
      let temp = { ...data.where };
      if (val == "Sell") {
        delete temp["rental_price"];
      }
      return { ...data, where: { ...temp, sale_type: { _eq: val } } };
    });
  };
  const sort_map = [
    { created_at: "asc" },
    { sale_price: "asc" },
    { created_at: "desc" },
  ];
  const sortList = (ind: number) => {
    setWhere((data: any) => {
      const order = sort_map[ind];
      return { ...data, order_by: order };
    });
  };
  const search = (region: string, propertyType: string) => {
    setWhere((data: any) => {
      if (!region.trim() && !propertyType.trim()) {
        return initialData;
      }
      const val = {
        _or: [
          {
            address_data: { _ilike: region.trim() ? `%${region}%` : "" },
          },
          {
            house_type: {
              type_name: {
                _ilike: propertyType.trim() ? `%${propertyType}%` : "",
              },
            },
          },
        ],
      };
      return { ...data, where: val };
    });
  };

  return (
    <>
      <Search
        search={search}
        region={region}
        propertyType={propertyType}
        setRegion={setRegion}
        setPropertyType={setpropertyType}
      />
      <div className=" max-w-[1700px] mx-auto relative z-20  bg-lightBg flex border-t border-gray-300">
        <div className="w-full max-tablet:basis-full px-20  max-tablet:px-10  max-small:px-5 max-tablet:w-full h-full  flex flex-col ">
          <div className="flex text-xl justify-between my-3">
            <div className="font-semibold">Property Listings</div>
          </div>
          <div className="flex justify-between border-b border-gray-300 mb-4 py-4 max-tablet:gap-5 max-tablet:flex-col">
            <div className="flex gap-5 flex-wrap  ">
              <RentalOption
                list={houseFilter}
                name="rentaloption"
                img={rentalIcon}
                // reset={reset}
                filter={filterByHouseType}
              />
              {where.where?.sale_type?._eq == "Rental" && (
                <PriceOption
                  list={priceFilter}
                  filter={filterByPrice}
                  name="price"
                  checkbox={true}
                  img={amountIcon}
                  curr={curr}
                  reset={resetPrice}
                />
              )}
              <PriceOption
                list={areaFilter}
                filter={filterByArea}
                name="Area"
                checkbox={true}
                img={amountIcon}
                curr={curr}
                reset={resetArea}
              />
            </div>
            <div className="flex gap-2 my-auto text-lightGray me-12 place-self-end max-mobile:mt-5">
              <p>Sort:</p>
              <div className="relative  flex flex-col gap-2 w-fit px-2  group  ">
                <div className="flex  justify-between rounded gap-1">
                  <span className="">Default</span>
                  <ListIcon className="my-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
                </div>
                <div className="absolute z-40 text-sm top-6 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
                  {["Default", "Price", "Date"].map((data, ind) => (
                    <div
                      onClick={() => sortList(ind)}
                      key={ind}
                      className="flex  cursor-pointer duration-150 gap-2  px-2  py-1"
                    >
                      <input
                        id={`sort${ind}`}
                        name="sort"
                        type="radio"
                        placeholder="s"
                        className="hover:text-mainBlue cursor-pointer"
                      />
                      <label
                        htmlFor={`sort${ind}`}
                        className=" text-black cursor-pointer hover:text-mainBlue"
                      >
                        {data}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Properties
            query={where ? FILTER_LIST : GET_LISTING}
            setWhere={setWhere}
            variables={{ ...where, status: { _eq: "ACTIVE" } }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

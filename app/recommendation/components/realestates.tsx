"use client";
import { IoIosArrowBack as ListIcon } from "react-icons/io";
import Box from "./box";
import amountIcon from "../../assets/images/amountIcon.svg";
import PriceOption from "./price_option";
import RentalOption from "./rental_option";
import rentalIcon from "../../assets/images/rentalIcon.svg";
import Boxes from "./boxes";
import { useEffect, useState } from "react";
import { FILTER_LIST, GET_LISTING } from "@/graphql/features/listing";
import NameSlide from "./name_slide";
import AddComment from "./addComment";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { getState, LogInf } from "@/store/features/auth/authSlice";

const Realestates = ({ fromHome = false }: { fromHome?: boolean }) => {
  const state = useSelector(getState);
  const searchParams = useSearchParams();
  const region = useState(searchParams.get("region"));
  const initialRealestateType = useState(searchParams.get("realestateType"));
  const [propertyType, setPropertyType] = useState(
    searchParams.get("propertyType"),
  );
  let temp: any = {
    where: {
      real_estate_id: {
        _is_null: false,
      },
    },
    order_by: {},
  };

  if (propertyType) {
    temp = {
      where: { real_estate: { name: { _eq: propertyType } } },
      order_by: {},
    };
  }

  const priceFilter = [
    { name: "$15k and Below", price: [0, 15000] },
    { name: "$15k and 30k", price: [15000, 30000] },
    { name: "$30k and 50k", price: [30000, 50000] },
    { name: "$50k and Above", price: [50000, 10000000000] },
  ];
  const areaFilter = [
    { name: "125 sq ft and Below", price: [0, 125] },
    { name: "125 sq ft - 250 sq ft", price: [125, 250] },
    { name: "250 sq ft - 500 sq ft", price: [250, 500] },
    { name: "500 sq ft and Above", price: [500, 10000000000] },
  ];
  const houseFilter = ["Sell", "Rental"];
  const [selectedRealEstate, setSelectedRealEstate] = useState("");

  const [where, setWhere] = useState<any>(temp);
  const [curr, setCurr] = useState<string | null>(null);
  const [realEstate, setRealEstate] = useState<null | string>(null);

  const reset = () => {
    setCurr(null);
    setWhere(temp);
  };

  const reset_where = (name: string) => {
    setWhere((data: any) => {
      let temp = {
        ...data.where,
      };
      delete temp[name];
      return { ...data, where: temp };
    });
  };

  const filterByPrice = (ls: number, lg: number) => {
    setWhere((data: any) => {
      const filter = {
        ...data.where,
        _or: [
          {
            sale_price: { _gte: ls, _lte: lg },
          },
          {
            rental_price: { price: { _gte: ls, _lte: lg } },
          },
        ],
      };
      return { ...data, where: filter };
    });
  };

  const filterByArea = (ls: number, lg: number) => {
    setWhere((data: any) => {
      const filter = {
        ...data.where,
        listing_property: { square_ft: { _gte: ls, _lte: lg } },
      };
      return { ...data, where: filter };
    });
  };

  const filterByHouseType = (val: string) => {
    setWhere((data: any) => {
      const filter = {
        ...data.where,
        sale_type: { _eq: val },
      };
      return { ...data, where: filter };
    });
  };

  const sort_map = [
    { created_at: "asc" },
    { sale_price: "asc" },
    { created_at: "desc" },
  ];

  const [isSell, setIsSell] = useState(true);

  const sortList = (ind: number) => {
    setWhere((data: any) => {
      const order = sort_map[ind];
      return { ...data, order_by: order };
    });
  };

  return (
    <div className="w-full bg-lightBg ">
      <div className="h-fit w-full max-w-[1700px] pb-20 mx-auto px-20  max-tablet:px-5 pt-10">
        <div className="flex  flex-col gap-7 max-tablet:flex-col max-tablet:items-center">
          <h1 className="flex gap-2 text-3xl max-tablet:text-xl max-tablet:mb-5">
            <span className="">Real Estats</span>
          </h1>
          {propertyType && (
            <h1 className="flex gap-2 mt-5 text-2xl max-tablet:text-xl max-tablet:mb-5">
              <span className="text-mainBlue">{propertyType ?? ""}</span>
            </h1>
          )}

          <div className="flex justify-between  max-md:flex-col max-md:gap-2 w-full">
            <div className="flex gap-x-7 flex-wrap ">
              <label
                className="flex gap-1  max-md:mx-auto max-md:mb-4  place-items-center ps-[0.15rem] hover:cursor-pointer"
                htmlFor="flexSwitchCheckDefault"
              >
                <div className={`${isSell ? "text-black" : "text-gray-400"}`}>
                  Sell
                </div>
                <input
                  onClick={() => {
                    setIsSell((data: boolean) => {
                      filterByHouseType(data ? "Rental" : "Sell");
                      return !data;
                    });
                  }}
                  className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-mainBlue before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-mainBlue after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-mainBlue checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-mainBlue checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-blue-300 checked:focus:bg-blue-300 checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-slate-300 dark:after:bg-surface-dark dark:checked:bg-blue-500 dark:checked:after:bg-blue-500"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <div className={`${!isSell ? "text-black" : "text-gray-400"}`}>
                  Rent
                </div>
              </label>

              <div className="flex gap-2 max-md:hidden">
                <RentalOption
                  list={["Gerji", "Bisrate Gebriel", "Ayer Tena", "Bulbula"]}
                  name="Sites"
                  img={rentalIcon}
                  reset={() => {}}
                  filter={() => {}}
                />
                {selectedRealEstate != "" && (
                  <PriceOption
                    list={priceFilter}
                    filter={filterByPrice}
                    name="price"
                    checkbox={true}
                    img={amountIcon}
                    reset={() => reset_where("_or")}
                  />
                )}
                <PriceOption
                  list={areaFilter}
                  filter={filterByArea}
                  name="Area"
                  checkbox={true}
                  img={amountIcon}
                  reset={() => reset_where("listing_property")}
                />
              </div>
            </div>
            <div className="flex gap-2 my-auto text-lightGray me-12  max-mobile:mt-5">
              <p className="">Sort:</p>
              <div className="relative  flex flex-col gap-2 w-fit px-2  group  ">
                <div className="flex  justify-between rounded gap-1">
                  <span className="">Default</span>
                  <ListIcon className="my-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
                </div>
                <div className="absolute  z-40 text-sm top-6 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
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
          <NameSlide
            selectedRealEstate={(reid: string, name: string) => {
              setRealEstate(reid);
              setPropertyType(name);
              setWhere({
                where: {
                  real_estate: {
                    real_estate_uuid: {
                      _eq: reid,
                    },
                  },
                },
                order_by: {},
              });
            }}
            initialRealestateType={initialRealestateType}
            setSelected={setSelectedRealEstate}
            selected={selectedRealEstate}
          />
        </div>
        <div className="flex gap-2 md:hidden">
          <RentalOption
            list={["Gerji", "Bisrate Gebriel", "Ayer Tena", "Bulbula"]}
            name="Sites"
            img={rentalIcon}
            reset={() => {}}
            filter={() => {}}
          />
          {selectedRealEstate != "" && (
            <PriceOption
              list={priceFilter}
              filter={filterByPrice}
              name="price"
              checkbox={true}
              img={amountIcon}
              reset={() => reset_where("_or")}
            />
          )}
          <PriceOption
            list={areaFilter}
            filter={filterByArea}
            name="Area"
            checkbox={true}
            img={amountIcon}
            reset={() => reset_where("listing_property")}
          />
        </div>
        <Boxes
          query={where ? FILTER_LIST : GET_LISTING}
          variables={{ ...where, status: { _eq: "ACTIVE" } }}
        />
      </div>
      {!fromHome && realEstate && state.isLogedIn == LogInf.LOGED_IN && (
        <>
          <div className="h-fit w-full max-w-[1700px] pb-20 mx-auto px-20  max-tablet:px-5 pt-10">
            <AddComment realEstate={realEstate} />
          </div>
        </>
      )}
    </div>
  );
};

export default Realestates;

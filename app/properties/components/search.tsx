import React, { useEffect, useRef, useState } from "react";
import { GoLocation as LocationIcon } from "react-icons/go";
import { FaRegBuilding as BuildingIcon } from "react-icons/fa";
import { CiSearch as SearchIcon } from "react-icons/ci";
import Notification from "../../_components/notification";
import Link from "next/link";
import Image from "next/image";
import navaddImg from "../../assets/images/navadd.svg";
import { useSelector } from "react-redux";
import { LogInf, getState } from "@/store/features/auth/authSlice";
import notificationIcon from "../../assets/images/notification.svg";
import { useQuery } from "@apollo/client";
import { GET_HOME_TYPES } from "@/graphql/features/listing";

interface Props {
  region: string;
  setRegion: Function;
  setPropertyType: Function;
  propertyType: string;
  search: Function;
}

const Search = ({
  region,
  setRegion,
  setPropertyType,
  propertyType,
  search,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const cities = [
    "Addis Ababa",
    "sheger city",
    "bishoftu",
    "adama",
    "Jim",
    "MOJO",
    "qoqa",
    "Batu",
    "shashemene",
    "hawasa",
    "Arbaminch",
  ];
  const [lists, setLists] = useState(cities);
  const update = ({ target }: any) => {
    setRegion(target.value);
    setLists((_) => {
      if (target.value.length < 1) {
        return cities;
      }
      try {
        const pattern = new RegExp(target.value, "gi");
        const filteredArray = cities.filter((word) => pattern.test(word));
        return filteredArray;
      } catch (err) {
        return [];
      }
    });
  };
  const [showNotification, setShowNotification] = useState(false);
  const state = useSelector(getState);
  const url =
    state.isLogedIn == LogInf.LOGED_IN ? "/addproperty" : "/auth/signup";
  const { loading, error, data } = useQuery(GET_HOME_TYPES, {
    fetchPolicy: "no-cache",
  });

  const [show, setShow] = useState(false);
  const dropdownRef = useRef<any>(null);
  const notifRef = useRef<any>(null);

  // Handle clicks outside the dropdown list
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
    if (notifRef.current && !notifRef.current.contains(event.target)) {
      setShowNotification(false);
    }
  };

  // Attach event listener to handle outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="pb-5 relative">
      <div className="w-full mb-2 mt-2 max-mobile: h-[1px] bg-slate-300"></div>
      <div className="flex pt-2 justify-between px-20 max-small:px-5 max-tablet:px-10 max-mobile:flex-col ">
        <div className="flex gap-4 max-mobile:flex-col ">
          <div className="border w-fit flex px-2 rounded-xl font-light max-mobile:w-full bg-white">
            <LocationIcon className="text-mainBlue m-auto" />

            <input
              type={"text"}
              value={region}
              onChange={update}
              name={"search region"}
              placeholder={"search with region"}
              onFocus={onFocus}
              onBlur={onBlur}
              className={"py-2 ps-2 w-full outline-none rounded-lg "}
            />
            {
              <div
                className={`${!focused && "h-0 hidden"} absolute z-[4353] max-h-[300px] overflow-auto top-14 w-fit duration-1000 shadow-xl bg-white  rounded-lg border  flex flex-col gap-2`}
              >
                {lists.map((val) => (
                  <div
                    key={val}
                    onMouseDown={() => {
                      setFocused(false);
                      setRegion(val);
                    }}
                    className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
                  >
                    {val}
                  </div>
                ))}
              </div>
            }
          </div>
          <div className="border max-mobile:w-full relative w-fit flex px-2 rounded-xl font-light bg-white">
            <BuildingIcon className="text-mainBlue m-auto " />
            {/* <input type="text" onChange={({ target } : any) => setPropertyType(target.value)} className="px-3 py-2 outline-none" placeholder="Enter property type" /> */}
            <button
              onClick={() => setShow((d) => !d)}
              className={`px-3 w-full py-2 my-auto text-start  ${propertyType == "" && "text-gray-400"}`}
            >
              {" "}
              {propertyType != "" ? propertyType : "select property type"}
            </button>
            {loading ? (
              <div>...</div>
            ) : error ? (
              <div>Error</div>
            ) : (
              show && (
                <div
                  ref={dropdownRef}
                  className="absolute top-12 shadow-xl rounded-lg z-40 bg-white w-fit  overflow-scroll"
                >
                  {data.house_type.map((e: any) => (
                    <>
                      <div
                        onClick={() => {
                          setShow((s) => !s);
                          setPropertyType(e.type_name);
                        }}
                        className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
                      >
                        {e.type_name}
                      </div>
                    </>
                  ))}
                </div>
              )
            )}
          </div>

          <button
            onClick={() => search(region, propertyType)}
            className={` flex gap-2  hover:bg-blue-600 max-mobile:w-full rounded-lg bg-mainBlue w-fit text-white m-auto  px-3 py-2 text-sm  flex-row-reverse`}
          >
            <span className="max-tablet:hidden">Search</span>
            <div className={`m-auto border p-[1px] rounded border-none`}>
              <SearchIcon className={`m-auto text-lg`} />
            </div>
          </button>
        </div>
        <div className="flex gap-5 relative">
          <div ref={notifRef}>{showNotification && <Notification />}</div>
          {state.isLogedIn == LogInf.LOGED_IN && (
            <>
              <div
                onClick={() => setShowNotification((data) => !data)}
                className="flex max-tablet:hidden  relative cursor-pointer hover:bg-blue-200 h-fit my-auto p-[3px] rounded-lg"
              >
                <Image src={notificationIcon} width={20} alt="" className="" />
              </div>
              {/* <Link href="/message" className="flex max-tablet:hidden cursor-pointer hover:bg-blue-200 h-fit my-auto p-[3px] rounded-lg">
                  <Image src={messageIcon} width={20} alt="" />
                </Link> */}
            </>
          )}
          <Link
            href={url}
            className="flex  text-mainBlue gap-1 max-mobile:mt-2 text-sm"
          >
            <Image src={navaddImg} className="m-auto" alt="" />
            <p className="m-auto ">Add new Listing</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;

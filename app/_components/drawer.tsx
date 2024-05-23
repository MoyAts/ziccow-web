import Link from "next/link";
import React, { useState } from "react";
// import img from "../assets/images/Widget 5.svg"
import img from "../assets/images/zirrow.jpg";

import Image from "next/image";
import closeImg from "../assets/images/Group (5).svg";
import aboutImg from "../assets/images/Group (3).svg";
import serviceImg from "../assets/images/Group (4).svg";
import propertyImg from "../assets/images/property.svg";
import confirmImg from "../assets/images/confirm.svg";
import { IoIosArrowBack as ListIcon } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  LogInf,
  getState,
  logoutUser,
} from "../../store/features/auth/authSlice";
import ProfileCard from "./profileCard";
import ShowImage from "./showImage";

interface Props {
  setIsDrawer: Function;
}

const Drawer = ({ setIsDrawer }: Props) => {
  const state = useSelector(getState);
  const [toggle, setToggle] = useState(false);
  const [listToggle, setListToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const isLogedIn = state.isLogedIn == LogInf.LOGED_IN;
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="absolute h-fit pb-10 w-full  z-[9999]  bg-gray-200 ">
      <div className="bg-mainDark w-full py-3 text-white mb-5 text-center">
        Having Troubles? Call 0000
      </div>
      <ShowImage
        imageLink={state.user?.profile_pic ?? ""}
        open={open}
        setOpen={setOpen}
      />
      <div className="flex justify-between px-10 max-sm:px-5 relative">
        <div className="my-auto  flex gap-2 cursor-pointer">
          {isLogedIn ? (
            state.user.profile_pic ? (
              <Image
                src={state.user.profile_pic}
                width={100}
                height={100}
                className="rounded-full w-[4em] h-[4em]"
                alt="Profile"
                onClick={() => setOpen(true)}
              />
            ) : (
              <div className="w-[3em] grid place-items-center capitalize h-[3em] rounded-full bg-mainBlue text-white">
                {state?.user?.firstName.length > 0
                  ? state?.user?.firstName[0]
                  : "U"}
              </div>
            )
          ) : (
            <Link href={"/"}>
              <Image src={img} width={40} alt="" />
            </Link>
          )}
          {isLogedIn ? (
            <div 
              className="flex gap-5"
              onClick={() => setShowProfile((data) => !data)}
            >
              <div
                className="font-semibold capitalize text-g my-auto"
                >
                {state.user?.firstName ? state.user.firstName : "Name"}
              </div>
              <ListIcon
                className={`text-xl my-auto duration-200  ${showProfile ? "-" : ""}rotate-90 text-blue-500`}
                />
            </div>
          ) : (
            <Link href={"/"} className="font-semibold text-g my-auto">
              Zirrow General Trading
            </Link>
          )}
        </div>
        <div className="cursor-pointer" onClick={() => setIsDrawer(false)}>
          <Image src={closeImg} alt="" />
        </div>
      </div>
      <div className="w-full border-t mt-5 ">
        {isLogedIn && (
          <ProfileCard
            logoutUser={() => {
              dispatch(logoutUser());
            }}
            mobile={true}
            show={showProfile}
            setShow={setShowProfile}
            state={state}
          />
        )}
      </div>

      <div
        className={` ${!toggle ? "h-[80vh] mt-12" : " my-10"} overflow-y-scroll flex flex-col  px-10 max-sm:px-5`}
      >
        <div className="flex flex-col gap-10">
          <Link href="/about" className="flex gap-4">
            <Image src={aboutImg} alt="" />
            <div className="text-xl">About Us</div>
          </Link>
          <div
            onClick={() => setToggle((data) => !data)}
            className="flex cursor-pointer justify-between"
          >
            <div className="flex gap-4">
              <Image src={serviceImg} alt="" />
              <div className="text-xl">Services</div>
            </div>
            <ListIcon
              className={`text-xl duration-200  ${toggle ? "-" : ""}rotate-90 text-blue-500`}
            />
          </div>
          {toggle && (
            <div className={` ps-8 flex flex-col gap-5 `}>
              <div className="z-50 flex flex-col basis-1/3">
                <Link
                  href={"/properties"}
                  className="text-mainBlue font-semibold text-lg"
                >
                  Buy a Property
                </Link>
                <div className="z-50 flex flex-col gap-1 mt-2">
                  <p className=" text-lightGray">
                    Homes for sale, New listings, Open houses, Recent home
                    sales, For sale by owner.
                  </p>
                </div>
              </div>
              <div className="z-50 flex flex-col basis-1/3">
                <Link
                  href={"/addproperty"}
                  className="text-mainBlue font-semibold text-lg"
                >
                  Add new listing
                </Link>
                <div className="z-50 flex flex-col gap-1 mt-2">
                  <p className=" text-lightGray">
                    Selling agents, Post for sale, Seller’s guide, Home values,
                    Real estate app.
                  </p>
                </div>
              </div>
              <div className="z-50 flex flex-col basis-1/3">
                <Link
                  href={"/addproperty"}
                  className="text-mainBlue font-semibold text-lg"
                >
                  Rent a Property
                </Link>
                <div className="z-50 flex flex-col gap-1 mt-2">
                  <p className=" text-lightGray">
                    Rental buildings, Apartments for rent, Houses for rent, Your
                    rental listing, Affordability calculator, Rent Guide, Real
                    estate app.
                  </p>
                </div>
              </div>
            </div>
          )}

          <Link href="#" className="flex gap-4">
            <Image src={propertyImg} alt="" />
            <div className="text-xl">Group Buy</div>
          </Link>
        </div>
      </div>

      {isLogedIn ? (
        <div className="w-full px-5 text-lg">
          <Link
            href={"/contactus"}
            className="w-full  flex justify-center gap-5 bg-mainBlue rounded-2xl text-white py-3"
          >
            <div>Contact Us</div>
            <Image src={confirmImg} width={23} className=" my-auto" alt="" />
          </Link>
        </div>
      ) : (
        <div className="w-full px-5 text-lg flex flex-col gap-5">
          <Link
            href={"/auth/register"}
            className="w-full flex justify-center gap-5 bg-mainBlue rounded-2xl text-white py-3"
          >
            <Image src={confirmImg} width={23} className=" my-auto" alt="" />
            <div>Reginster now</div>
          </Link>
          <Link
            href={"/conactus"}
            className="w-full text-center font-semibold text-mainBlue"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Drawer;

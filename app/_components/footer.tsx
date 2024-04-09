"use client";
import Image from "next/image";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/zirrow.jpg";
import { FaArrowUp as UpArrowIcon } from "react-icons/fa6";
import emailImg from "../assets/images/emailFooter.svg";
import locationImg from "../assets/images/locationFooter.svg";
import phoneImg from "../assets/images/phoneFooter.svg";
import { FaAngleLeft as LeftIcon } from "react-icons/fa6";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
const footer = () => {
  return (
    <div className="w-full bg-mainDark ">
      <div
        id="contactus"
        className="h-fit pb-12 max-w-[1700px] mx-auto text-white px-20 pt-20 max-tablet:px-10 bg-mainDark"
      >
        <div className="flex justify-between max-tablet:flex-col">
          <div className="basis-4/12 flex flex-col gap-3 mb-4">
            <div className="flex gap-3 my-2">
              <Image src={logo} width={30} alt="" />
              <Link href="/" className="text-xl">
                {" "}
                Zirrow General Trading{" "}
              </Link>
            </div>
            <p className=" text-gray-400">
              <div className="capitalize font-normal text-white mb-4">
                about us
              </div>
              At Zirrow, we understand that every individual has unique needs
              and preferences when it comes to real estate. That's why we offer
              a personalized approach to our services, taking the time to listen
              to your goals and requirements, and working tirelessly to find the
              perfect property for you.
            </p>
            <h4 className="mt-6 mb-2">Recent Region</h4>
            <div className="w-full bg-white py-4 flex justify-between rounded-xl cursor-pointer ps-5 pe-3">
              <div className="text-lightGray">Piyassa</div>
              <LeftIcon className="text-mainBlue -rotate-90 my-auto" />
            </div>
          </div>
          <div className="basis-1/12"> </div>

          <div className="flex basis-7/12 justify-between max-tablet:mt-10 max-sm:flex-col max-sm:gap-7">
            <div className="flex flex-col gap- max-sm:w-full3 w-2/6 ">
              <h3 className="text-xl">Company</h3>
              <ul className=" flex flex-col gap-5 mt-3 text-gray-400 capitalize">
                <Link
                  href={"/about"}
                  className="hover:text-blue-500 cursor-pointer duration-200"
                >
                  About us
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-blue-500 cursor-pointer duration-200"
                >
                  Team
                </Link>
                <Link
                  href={"/recommendation"}
                  className="hover:text-blue-500 cursor-pointer duration-200"
                >
                  Real Estate
                </Link>
                <Link
                  href={"/properties"}
                  className="hover:text-blue-500 cursor-pointer duration-200"
                >
                  Properties
                </Link>
                <Link
                  href={"/properties"}
                  className="hover:text-blue-500 cursor-pointer duration-200"
                >
                  service
                </Link>
                <Link
                  href={"/contactus"}
                  className="hover:text-blue-500 cursor-pointer duration-200"
                >
                  contact us
                </Link>
              </ul>
            </div>

            <div className="flex flex-col gap-3 max-sm:w-full  w-2/6">
              <h3 className="text-xl">Legal</h3>
              <ul className=" flex flex-col gap-5 mt-3 text-gray-400">
                <li
                  className="hover:text-blue-500 cursor-pointer duration-200"
                  onClick={() => (location.href = "#home")}
                >
                  Terms of service
                </li>
                <li
                  className="hover:text-blue-500 cursor-pointer duration-200"
                  onClick={() => (location.href = "#services")}
                >
                  Privacy policy
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 max-sm:w-full  w-2/6">
              <h3 className="text-xl">Contacts</h3>
              <ul className=" flex flex-col gap-5 mt-3 text-gray-400">
                <li className=" duration-200 flex gap-3">
                  <Image src={locationImg} alt="" />
                  <p>
                    Head office: next to totot cultural foods MM mart building
                    office no 4-08 Branch office tayitu hotel office no 374/189
                  </p>
                </li>
                <li className="hover:text-blue-500 cursor-pointer duration-200 flex gap-3">
                  <Image src={emailImg} alt="" />
                  <p>zirrowproperties@gmail.com</p>
                </li>
                <li className="hover:text-blue-500 cursor-pointer duration-200 flex gap-3">
                  <Image src={phoneImg} alt="" />
                  <p>+251949688383</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] my-10 bg-gray-400 "></div>

        <div className="flex justify-between flex-wrap gap-y-5 text-gray-400">
          <div className="flex gap-4">
            <Link
              href={
                "https://x.com/Zirrowprop43444?t=MNpJsJT9cR9j3w2nn-Heuw&s=08"
              }
            >
              <FaXTwitter className="text-2xl text-blue-500 cursor-pointer hover:text-white duration-200" />
            </Link>
            <Link href={"https://ww.w.instagram.com/zirrow2024"}>
              <FaInstagram className="text-2xl text-blue-500 cursor-pointer hover:text-white duration-200" />
            </Link>
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100065515388888&mibextid=ZbWKwL"
              }
            >
              <CiFacebook className="text-2xl text-blue-500 cursor-pointer hover:text-white duration-200" />
            </Link>
            <Link href={"https://www.youtube.com/@Zirrow0000"}>
              <FaYoutube className="text-2xl text-blue-500 cursor-pointer hover:text-white duration-200" />
            </Link>
            <Link href={"https://www.tiktok.com/@zirrow0?_t=8iDeN9loXV0&_r=1"}>
              <FaTiktok className="text-2xl text-blue-500 cursor-pointer hover:text-white duration-200" />
            </Link>
          </div>
          <p className="max-mobile:hidden">
            Zirrow General Trading Â© 2024. All Rights Reserved.
          </p>
          <button
            onClick={() => (location.href = "#header")}
            className="capitalize flex gap-2 hover:text-white"
          >
            <UpArrowIcon className="m-auto" />
            <span className="m-auto">back to top</span>
          </button>
        </div>

        <p className="mobile:hidden text-gray-400 text-center mt-12">
          Zirrow General Trading Â© 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default footer;

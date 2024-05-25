"use client";
import Image from "next/image";
import Link from "next/link";

import Nav from "../../_components/nav";
import bg from "../../assets/images/Background_-_Copy-removebg-preview.png";
import CustomeInput from "../../_components/customeInput";
import { useMutation } from "@apollo/client";
import { ADD_CONTACT_US } from "@/graphql/features/user";
import { useState } from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Hero = ({ setIsDrawer }: any) => {
  const [send, { loading, error, data }] = useMutation(ADD_CONTACT_US, {
    fetchPolicy: "no-cache",
  });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full bg-[#547b87] bg-opacity-[85%]  ">
      <Nav setIsDrawer={setIsDrawer} withsearch={false} />
      <div className="w-full max-w-[1700px] items-center  h-[100vh]  max-tablet:h-fit max-h-[800px] relative flex mx-auto">
        <div className="absolute w-full bottom-0 ">
          <Image
            src={bg}
            alt=""
            className="w-full h-full object-cover max-h-[800px]"
          />
        </div>
        <div className="pt-12 max-tablet:pt-5 max-tablet:pb-12   z-0 flex w-full justify-around max-tablet:flex-col max-tablet:gap-0 gap-10 text-white px-20 max-mobile:px-5 max-tablet:px-10">
          <div className="flex flex-col my-10 w-full ">
            <h1 className="text-[45px] max-mobile:text-[30px] max-tablet:justify-center max-tablet:items-center max-small:flex-col flex tablet:flex-col max-tablet:gap-2 max-tablet:mb-10 mb-10 ">
              <span> Contact Us with</span>
              <span className="tablet:leading-[15px] max-mobile:leading-[15px]">
                any Questions.
              </span>
            </h1>
            <p className="text-lg max-tablet:text-center">
              Your success is our success, and we can’t wait to help you achieve
              your goals.{" "}
            </p>
            <p className="text-sm mt-2 font-light max-tablet:text-center">
              Get in touch today to see why our approach makes all the
              difference! Stay connected with us and be the first to know about
              exciting updates and promotions by following our social media
              channels below! Thank you for your support
            </p>
            <div className="flex gap-8 w-full mt-auto ">
              <Link
                href={
                  "https://x.com/Zirrowprop43444?t=MNpJsJT9cR9j3w2nn-Heuw&s=08"
                }
              >
                <FaXTwitter className="text-3xl text-slate-50 hover:scale-110  cursor-pointer hover:text-white duration-200" />
              </Link>
              <Link href={"https://ww.w.instagram.com/zirrow2024"}>
                <FaInstagram className="text-3xl text-slate-50 hover:scale-110  cursor-pointer hover:text-white duration-200" />
              </Link>
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=100065515388888&mibextid=ZbWKwL"
                }
              >
                <CiFacebook className="text-3xl text-slate-50 hover:scale-110  cursor-pointer hover:text-white duration-200" />
              </Link>
              <Link href={"https://www.youtube.com/@Zirrow0000"}>
                <FaYoutube className="text-3xl text-slate-50 hover:scale-110  cursor-pointer hover:text-white duration-200" />
              </Link>
              <Link
                href={
                  "https://www.tiktok.com/@zirrow_general_trading?_t=8mEbdkW8fTS&_r=1"
                }
              >
                <FaTiktok className="text-3xl text-slate-50 hover:scale-110  cursor-pointer hover:text-white duration-200" />
              </Link>
            </div>
          </div>

          <div className="h-fit mt-1 w-fit max-tablet:w-full shadow-xl px-5 py-5 rounded-lg bg-lightBg text-black">
            <p className="text-sm text-center">
              Submit the form, and a member of our team will get back to you as
              soon as possible.
            </p>
            <div className="flex flex-col mt-3 gap-3">
              <CustomeInput
                label="Name"
                name="name"
                placeholder="name"
                labelClass="text-sm"
                onChange={({ target }: any) => setName(target.value)}
                value={name}
              />
              <CustomeInput
                label="Email Address"
                name="Email"
                placeholder="Email"
                labelClass="text-sm"
                onChange={({ target }: any) => setEmail(target.value)}
                value={email}
              />
              <div className="flex flex-col gap-3 capitalize">
                <label htmlFor="" className="font-semibold  text-sm">
                  Your Text
                </label>
                <textarea
                  placeholder="Write text here..."
                  name=""
                  id=""
                  cols={30}
                  rows={4}
                  className="bg-white  p-2 outline-none rounded-lg border "
                  onChange={({ target }: any) => setMessage(target.value)}
                  value={message}
                ></textarea>
              </div>
              {error && (
                <div className="w-full text-red-800 text-sm text-center">
                  Something goes Wrong
                </div>
              )}
              <button
                onClick={() => {
                  send({
                    variables: {
                      email,
                      name,
                      message,
                    },
                  });
                }}
                className={`w-full capitalize ${loading ? "bg-blue-500" : data ? "bg-green-600" : "bg-mainBlue"} py-2 rounded-lg text-white hover:bg-blue-700 duration-200`}
              >
                {loading ? "loading" : data ? "Sent" : "submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

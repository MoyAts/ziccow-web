"use client";

import logoG from "../../../assets/images/googleLogo.svg";
import img from "../../../assets/images/zirrow.jpg";

import CustomeInput from "../../../_components/customeInput";
import bg from "../../../assets/images/Background.png";
import Link from "next/link";
import Image from "next/image";
import goImage from "../../../assets/images/go.svg";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  LOGIN_SOCIAL_MEDIA,
  SIGNUP_SOCIAL_MEDIA,
} from "../../../../graphql/features/auth";
import Error from "@/app/_components/error";
import ClientError from "@/app/_components/clientError";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/features/auth/authSlice";

const AfterEmail = ({ params: { id } }: { params: { id: string } }) => {
  const dispatch = useDispatch();
  const initialData: { [key: string]: string } = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    token: id,
  };
  const [form, setForm] = useState(initialData);
  const [formError, setFormError] = useState("");

  const setChange = ({ target }: any) => {
    setForm((data) => ({ ...data, [target.name]: target.value }));
  };

  const checkError = (): boolean => {
    for (let key in form) {
      if (form.hasOwnProperty(key)) {
        if (form[key] == "") {
          setFormError(`${key} is required`);
          return false;
        }
      }
    }
    if (form.confirm != form.password) {
      setFormError(`Wrong confirm password is required`);
      return false;
    }
    setFormError("");
    return true;
  };

  const [signup, { loading, error, data }] = useMutation(SIGNUP_SOCIAL_MEDIA);

  if (data) {
    const { socialSignup } = data;
    dispatch(
      loginUser({
        token: socialSignup.token,
        userId: socialSignup.user.user_id,
      }),
    );
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  }

  const submit = () => {
    if (checkError()) {
      signup({
        variables: {
          ...form,
        },
      });
    }
  };

  return (
    <div
      className="h-fit min-h-[100vh] bg-red w-full relative flex text-sm"
      style={{ background: "#CCE3FC" }}
    >
      {/* <div className="w-full   flex absolute left-0 right-0 top-0 bottom-0 bg-slate-900 z-50 bg-opacity-50">
                <Popup />
            </div> */}
      <Image
        src={bg}
        alt=""
        className="absolute left-0 top-0 bottom-0 right-0 w-full h-full"
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-opacity-30 bg-lightBlue"></div>
      <div
        className="h-fit min-h-[100vh] w-3/5 max-lg:w-4/5 max-tablet:px-10 max-sm:w-full max-sm:px-5 flex z-10 mx-auto px-40  pb-20 pt-12"
        style={{ background: "#F3EFF5" }}
      >
        <div className="mx-auto">
          <Link
            href={"/"}
            className="w-full my-auto justify-center flex gap-2 cursor-pointer"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "#home";
              }
            }}
          >
            <Image src={img} width={40} alt="" />
            <h1 className="font-semibold text-g my-auto">
              Zirrow General Trading
            </h1>
          </Link>
          <p className="text-center mx-auto mt-3 pb-6 text-lightGray">
            Zirrow is making it simpler to sell, buy, and rent your properties
            to move forward.
          </p>
          <h3 className="capitalize text-xl my-5 font-semibold">Continue</h3>
          <Error error={error} />
          {formError && <ClientError error={formError} />}
          <form
            className="flex flex-col gap-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex justify-between gap-7 max-mobile:flex-col">
              <CustomeInput
                name="firstName"
                value={form.firstName}
                onChange={setChange}
                label={"First Name"}
                placeholder={"first name"}
                divClass="w-full"
              />
              <CustomeInput
                name="lastName"
                value={form.lastName}
                onChange={setChange}
                label={"Last Name"}
                placeholder={"last name"}
                divClass="w-full"
              />
            </div>
            <CustomeInput
              name="phone"
              value={form.phone}
              onChange={setChange}
              label={"phone number"}
              placeholder={"phone number"}
            />
            <CustomeInput
              name="email"
              value={form.email}
              onChange={setChange}
              label={"email address"}
              placeholder={"email"}
            />

            <button
              onClick={submit}
              disabled={loading}
              className={` w-full flex gap-3 justify-center  duration-200  py-3 text-white rounded-xl ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-mainBlue hover:bg-blue-600"}`}
            >
              <p className="font-semibold capitalize">
                {loading ? "Loading..." : "Finish"}
              </p>
              <Image src={goImage} alt="" className="my-auto w-6" />
            </button>

            <p className="flex justify-center gap-2">
              Already have an account?
              <Link href={"/auth/login"} className="text-blue-800 font-bold">
                Login instead
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AfterEmail;

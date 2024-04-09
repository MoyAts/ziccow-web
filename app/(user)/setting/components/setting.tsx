import React, { useRef, useState } from "react";
import logoutImg from "../../../assets/images/logout.svg";
import Image from "next/image";
import Security from "./security";
import Personal from "./personal";
import { useDispatch, useSelector } from "react-redux";
import { getState, updateLocalProfile } from "@/store/features/auth/authSlice";
import { IoAdd } from "react-icons/io5";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE_PICTURE } from "@/graphql/features/user";
import AlertModal from "@/app/_components/alert";
const Setting = () => {
  const [isSecurity, setIsSecurity] = useState(false);
  const state = useSelector(getState);
  const ref = useRef<any>(null);
  const [load, setLoad] = useState(false);
  const [mainUrl, setMainUrl] = useState(null);
  const [currImg, setCurrImg] = useState<any>();
  const [networkImg, setNetworkImg] = useState<any>();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setNetworkImg(file);
    setCurrImg(URL.createObjectURL(file!));
  };

  const [updateNetworkProfile, { loading, error, data, reset }] = useMutation(
    UPDATE_PROFILE_PICTURE,
  );

  const uploadImage = async (image: any) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "mymymy");
    data.append("cloud_name", "de7yugvwl");
    data.append("folder", "Cloudinary-React");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${"de7yugvwl"}/image/upload`,
        {
          method: "POST",
          body: data,
        },
      );
      const res = await response.json();
      console.log(res);
      return res.url;
    } catch (e) {
      console.log(e, "--");
      alert("check you connection please!");
    }
    return null;
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const uploadProfile = async () => {
    setLoad(true);
    if (!currImg) return;
    const url = await uploadImage(networkImg);
    if (!url) return alert("Network Error");
    setMainUrl(url);
    setLoad(false);
    updateNetworkProfile({
      variables: {
        profile_pic: url,
        user_id: state.user.userId,
      },
    });
  };

  if (error) {
    alert("Error");
    reset();
  }
  if (data) {
    setCurrImg(null);
    dispatch(updateLocalProfile(mainUrl));
    reset();
  }

  return (
    <>
      <Modal
        isOpen={currImg != null && networkImg}
        onRequestClose={() => setCurrImg(null)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-lg font-semibold">Confirm your image</div>
        <div className="flex flex-col items-center  gap-2">
          {currImg && (
            <Image
              src={currImg}
              alt="zm"
              className={"w-[300px]  mt-12"}
              width={100}
              height={100}
            />
          )}
          <button
            onClick={uploadProfile}
            className="px-3 py-2 rounded-lg bg-mainBlue text-white"
          >
            {load || loading ? "loading..." : "upload"}
          </button>
        </div>
      </Modal>
      <div className="flex flex-col pt-10 px-20 max-tablet:px-10 max-mobile:px-5 mx-auto h-fit pb-32  max-tablet:pt-5 border-t max-w-[1700px]">
        <div className="w-full flex justify-between  max-mobile:mt-0 max-mobile:flex-col-reverse">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2">
              <div className="relative">
                <input
                  type="file"
                  multiple
                  hidden
                  placeholder="image"
                  ref={ref}
                  onChange={onSelect}
                />
                {state.user?.profile_pic || currImg ? (
                  <div className="">
                    <Image
                      src={currImg ?? state.user?.profile_pic ?? ""}
                      className=" w-[3.5em] h-[3.5em] rounded-full"
                      width={100}
                      height={100}
                      alt="profile"
                    />
                  </div>
                ) : (
                  <div className="cursor-pointer capitalize bg-blue-200 my-auto p-2 w-10 h-10 rounded-full flex items-center justify-center">
                    {state.user?.firstName !== null &&
                    typeof state.user?.firstName !== "undefined" &&
                    state.user?.firstName.length > 0
                      ? state.user?.firstName[0]
                      : state.user?.email![0]}
                  </div>
                )}
                <div
                  onClick={() => {
                    ref.current && ref.current.click();
                  }}
                  className="cursor-pointer absolute bottom-0 right-0 rounded-full flex  w-[1.5em] h-[1.5em] bg-mainBlue"
                >
                  <IoAdd className="m-auto text-white" />
                </div>
              </div>
              <h1 className="text-[35px]">Account Setting</h1>
            </div>
            <p>Personalize your account and manage your sign-in preferences.</p>
          </div>

          <div
            onClick={() => setIsOpen(true)}
            className="flex gap-2 max-mobile:hidden cursor-pointer"
          >
            <Image src={logoutImg} alt="logout" className="my-auto" />
            <p className="my-auto text-[#BB730D]">Logout</p>
          </div>
          <AlertModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="flex justify-between mt-12 max-tablet:flex-col">
          <div className="flex tablet:flex-col gap-5 basis-5/12 text-lightGray max-tablet:mb-12">
            <p
              onClick={() => setIsSecurity(false)}
              className={`${!isSecurity && "font-semibold text-black"} cursor-pointer duration-200`}
            >
              1. Personal info
            </p>
            <p
              onClick={() => setIsSecurity(true)}
              className={`${isSecurity && "font-semibold text-black"}  cursor-pointer duration-200`}
            >
              2. Security
            </p>
          </div>
          {isSecurity ? <Security /> : <Personal />}
        </div>
      </div>
    </>
  );
};

export default Setting;

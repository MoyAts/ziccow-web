"use client";
import Image from "next/image";
import propertyImg from "../../../assets/images/property.svg";
import img from "../../../assets/images/solar_medal-ribbons-star-bold-duotone.png";
import saveImg from "../../../assets/images/save.svg";
import shareImg from "../../../assets/images/share.svg";
import ImageSlider from "./image_slider";
import GeneralInformation from "./general_information";
import About from "./about";
import MatterPortEmbed from "./matterPortEmbed";
import Price from "./price";
import Features from "./features";
import Graph from "./graph";
import TimeLine from "./time_line";
import Broker from "./broker";
import Nearby from "./nearby";
import { houseInf } from "@/utils/interfaces";
import AddComment from "./addComment";
import BuildStar from "./buildstar";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { calculateTimeDifference } from "@/lib/auth";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useEffect, useState, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_LISTING_VIEW,
  ADD_TO_BOOKMARK,
  GET_NUMBER_OF_SAVES,
} from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { AuthInf, getState } from "@/store/features/auth/authSlice";
import Notification from "@/app/_components/notification";
interface Props {
  house: houseInf;
  list_id: string;
}

const Detail = ({ house, list_id }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const r = params.get("r");
  const id = house?.real_estate?.real_estate_uuid;
  const currentUrl = "https://zirrowproperties.com/properties/" + list_id;
  const [showShare, setShowShare] = useState(false);
  const state: AuthInf = useSelector(getState);
  const [addtobookmark, { loading, data, error, reset }] = useMutation(
    ADD_TO_BOOKMARK,
    {
      variables: {
        list_id,
        user_id: state.user?.userId,
      },
    },
  );
  const [addListView, addViewStatus] = useMutation(ADD_LISTING_VIEW, {
    variables: {
      listing_id: list_id,
    },
    fetchPolicy: "no-cache",
  });

  const saveQueryStatus = useQuery(GET_NUMBER_OF_SAVES, {
    variables: {
      list_id,
    },
    fetchPolicy: "no-cache",
  });

  if (data) {
    saveQueryStatus.refetch();
    // reset();
  }
  const owner = house.owner?.user_id == state.user?.userId;

  const ref = useRef<any>(null);
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowShare(false);
    }
    // if (ref.current && !ref.current.contains(event.target)) {
    //   setShowShare(false);
    // }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    addListView();
  }, []);
  const propertName =
    house?.real_estate_id == null
      ? house.property_name ?? "Property"
      : house?.real_estate_name ?? house?.real_estate?.name ?? "Real Estate";
  return (
    <div className="w-full mt-12 h-fit px-20 max-w-[1700px]  max-tablet:px-10 max-small:px-5 mx-auto">
      <div className="flex text-sm gap-2 items-center">
        <div
          onClick={() =>
            r && r == "true"
              ? router.push(`/recommendation?realestateType=${id}`)
              : router.back()
          }
          className="me-4"
        >
          <IoArrowBackSharp className="text-3xl cursor-pointer text-mainBlue" />
        </div>
        <div className="flex gap-1">
          <Image src={propertyImg} alt="" />
          <div>Property </div>
        </div>
        <div>/</div>
        <div>{house.sale_type ?? "unknown"} </div>
        <div>/</div>
        <div>{propertName}</div>
        {/* <div>{house?.real_estate_name ?? house?.real_estate?.name ?? "Real State"}</div> */}
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex gap-7">
          <h1 className="text-[35px] max-tablet:text-[25px]">{propertName}</h1>
          {owner && (
            <div className="my-auto px-2 py-1 rounded-lg bg-mainBlue text-white text-xs shadow-lg">
              You are the owner
            </div>
          )}
          {house?.verified && (
            <div className="flex gap-1 m-auto">
              <Image src={img} width={25} alt="" />
              <p className="my-auto text-mainBlue">Verified </p>
            </div>
          )}
          {/* <div className="flex gap-2 my-auto ">
          <BuildStar num={3} />
        </div> */}
        </div>

        <div className="flex gap-10  max-tablet:hidden relative">
          {/* <div className="relative flex gap-2 cursor-pointer"> */}
          {/* <Notification />
            <div className="my-auto">
               Notification
            </div>
          </div> */}
          {data == null && (
            <div
              onClick={() => addtobookmark()}
              className="flex gap-2 cursor-pointer"
            >
              <Image src={saveImg} className="my-auto" alt="" />
              <div className="my-auto ">
                {loading ? "..." : error ? "error" : data ? "" : "Save"}
              </div>
            </div>
          )}
          <div ref={ref} className="flex gap-2">
            <Image src={shareImg} alt="" className="my-auto" />
            <p
              role="button"
              onClick={() => setShowShare((data: boolean) => true)}
              className="my-auto cursor-pointer"
            >
              share
            </p>
            <div
              className={`absolute ${showShare ? "scale-100" : "scale-0"} duration-150 flex flex-col gap-3 top-12 left-0 w-fit px-5 py-3 bg-white rounded-lg shadow-2xl`}
            >
              {/* <div className="text-sm">
                  Share This property
                </div> */}
              <div className="flex gap-3">
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(currentUrl);
                    setShowShare(false);
                  }}
                  className="w-7 h-7 rounded-full flex bg-mainBlue cursor-pointer"
                >
                  <IoCopyOutline className="text-lg text-white m-auto" />
                </div>
                <WhatsappShareButton url={currentUrl}>
                  {<WhatsappIcon className="w-7 h-7 rounded-full" />}
                </WhatsappShareButton>
                <FacebookShareButton url={currentUrl}>
                  {<FacebookIcon className="w-7 h-7 rounded-full" />}
                </FacebookShareButton>
                <TwitterShareButton url={currentUrl}>
                  {<TwitterIcon className="w-7 h-7 rounded-full" />}
                </TwitterShareButton>
                <TelegramShareButton url={currentUrl}>
                  {<TelegramIcon className="w-7 h-7 rounded-full" />}
                </TelegramShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-mobile:flex-col max-small:gap-5">
        <div className="flex gap-4 my-auto">
          <div className="flex gap-1">
            <span>{calculateTimeDifference(house?.created_at) ?? ""}</span>
            <span className="text-lightGray">on Zirrow</span>
          </div>
          <div className="w-[1px] h-5 my-auto bg-gray-300"></div>
          <div className="flex gap-1">
            <span>{house?.views_count ?? 0}</span>
            <span className="text-lightGray">View</span>
          </div>
          <div className="w-[1px] h-5 my-auto bg-gray-300"></div>
          <div className="flex gap-1">
            <span>
              {saveQueryStatus.loading
                ? "..."
                : saveQueryStatus.error
                  ? "error"
                  : saveQueryStatus.data
                    ? saveQueryStatus.data.bookmark.length
                    : ""}
            </span>
            <span className="text-lightGray">Saves</span>
          </div>
        </div>
        <div className="flex gap-10 tablet:hidden place-self-start max-mobile:mt-5 relative">
          {data == null && (
            <div
              onClick={() => addtobookmark()}
              className="flex gap-2 cursor-pointer"
            >
              <Image src={saveImg} className="my-auto" alt="" />
              <div className="my-auto ">
                {loading ? "..." : error ? "error" : data ? "" : "Save"}
              </div>
            </div>
          )}
          <div ref={ref} className="flex gap-2">
            <Image src={shareImg} alt="" className="my-auto" />
            <p
              role="button"
              onClick={() => setShowShare((data: boolean) => true)}
              className="my-auto cursor-pointer"
            >
              share
            </p>
            <div
              className={`absolute z-50 ${showShare ? "scale-100" : "scale-0"} duration-150 flex flex-col gap-3 top-12 left-0 w-fit px-5 py-3 bg-white rounded-lg shadow-2xl`}
            >
              <div className="text-sm">Share This property</div>
              <div className="flex gap-3">
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(currentUrl);
                    setShowShare(false);
                  }}
                  className="w-7 h-7 rounded-full flex bg-mainBlue cursor-pointer"
                >
                  <IoCopyOutline className="text-lg text-white m-auto" />
                </div>
                <WhatsappShareButton url={currentUrl}>
                  {<WhatsappIcon className="w-7 h-7 rounded-full" />}
                </WhatsappShareButton>
                <FacebookShareButton url={currentUrl}>
                  {<FacebookIcon className="w-7 h-7 rounded-full" />}
                </FacebookShareButton>
                <TwitterShareButton url={currentUrl}>
                  {<TwitterIcon className="w-7 h-7 rounded-full" />}
                </TwitterShareButton>
                <TelegramShareButton url={currentUrl}>
                  {<TelegramIcon className="w-7 h-7 rounded-full" />}
                </TelegramShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full pb-12 gap-10 pt-8 max-tablet:hidden">
        <div className="w-7/12 flex flex-col">
          <ImageSlider house={house} />
          <About description={house?.description} />
          {house?.matterport_link && (
            <MatterPortEmbed link={house?.matterport_link} height={400} />
          )}
          <Features house={house} />
          {/* <Nearby /> */}
        </div>
        <div className="w-5/12 flex flex-col">
          <GeneralInformation house={house} />
          <Price house={house} />
          {house?.owner && (
            <TimeLine
              list_id={house?.listing_id}
              owner_id={house?.owner.user_id}
            />
          )}
          {house?.owner && <Broker house={house} />}
          <AddComment
            listing_id={house?.listing_id}
            broker_id={house.owner?.user_id}
          />
        </div>
      </div>

      <div className="flex flex-col w-full pb-12 gap-10 pt-8 tablet:hidden">
        <ImageSlider house={house} />
        <About description={house?.description} />
        {house?.matterport_link && (
          <MatterPortEmbed link={house?.matterport_link} height={400} />
        )}
        <GeneralInformation house={house} />
        <Price house={house} />
        {house?.owner && (
          <TimeLine
            list_id={house?.listing_id}
            owner_id={house?.owner.user_id}
          />
        )}
        {house?.owner && <Broker house={house} />}
        <Features house={house} />
        <AddComment
          listing_id={house?.listing_id}
          broker_id={house.owner?.user_id}
        />
      </div>
    </div>
  );
};

export default Detail;

"use client";
import Image from "next/image";
import locationIcon from "../../../assets/images/location.svg";
import bookMarkSvg from "../../../assets/images/bookmark.svg";
import bookMarkedSvg from "../../../assets/images/bookmarked.svg";

import img3 from "../../../assets/images/space.svg";
import img4 from "../../../assets/images/bed.svg";
import img5 from "../../../assets/images/bathroom.svg";
import { houseInf } from "@/utils/interfaces";
import { useMutation } from "@apollo/client";
import { DELET_BOOKMARK } from "@/graphql/features/listing";
import Link from "next/link";
import { TbToolsKitchen2 } from "react-icons/tb";

interface Props {
  house: houseInf;
  userId: string | null;
  uuid: string;
}

const Home = ({ house, userId, uuid }: Props) => {
  const [deleteBookmark, { loading, data, error }] = useMutation(
    DELET_BOOKMARK,
    {
      variables: {
        uuid: uuid,
      },
      fetchPolicy: "no-cache",
    },
  );

  if (error) {
    alert("something goes wrong");
  }

  return (
    <div
      className={`flex w-full shrink-0 gap-2 bg-white  p-1 rounded-lg text-lightGray flex-col`}
    >
      <Link
        href={"/properties/" + house?.listing_id ?? ""}
        className="rounded-lg asis-1/3 flex"
      >
        {house.digital_assets[0]?.url && (
          <Image
            src={house.digital_assets[0].url}
            className="rounded-lg w-full object-cover my-auto"
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
            alt=""
          />
        )}
      </Link>
      <div className="flex h-full  flex-grow"></div>
      <div className={`flex flex-col basis-2/3 py-2 px-1  `}>
        <div className={` flex justify-between`}>
          <h1 className="text-lg my-auto me-2 text-black">
            {house?.real_estate?.name ?? "Real state"}
          </h1>
          <div
            className={`  w-fit  bg-blue-300 text-black text-sm px-2 rounded-lg h-fit my-auto bg-opacity-55`}
          >
            {house?.house_type?.type_name ?? "Unknown house type"}
          </div>
        </div>

        <p className="text-sm flex flex-wrap mb-2 mt-2">
          {house?.real_estate?.name ?? "unknown"}{" "}
          {house?.address_data ?? "unknown"}
        </p>

        <div className="justify-between  text-black grid grid-cols-2 gap-2 flex-wrap">
          <div className="flex mt-2 gap-1 ">
            <Image src={img5} width={19} className="my-auto" alt="" />
            <span className="text-sm my-auto">
              {house.listing_property?.square_ft ?? 0} M<sup>2</sup> Built up
              area
            </span>
          </div>
          <div className="flex mt-2 gap-1  place-self-end">
            <Image src={img4} width={15} className="my-auto" alt="" />
            <span className="text-sm my-auto">
              {house.listing_property?.bedroom_count ?? 0} Bathroom
            </span>
          </div>
          <div className="flex mt-2 gap-1  ">
            <Image src={img3} width={13} className="my-auto" alt="" />
            <span className="text-sm my-auto">
              {house.listing_property?.bedroom_count ?? 0} Bedroom
            </span>
          </div>
          <div className="flex mt-2 gap-1 place-self-end">
            {/* <Image src={img4} width={19} className="my-auto" alt="" /> */}
            <TbToolsKitchen2 width={19} className="text-gray-500" />
            <span className="text-sm my-auto">
              {house.listing_property?.kitchen_count ?? 0} Kitchenss
            </span>
          </div>
        </div>
        <div className="flex justify-between pe-2 mt-2">
          {house.sale_price && (
            <h1 className="">
              <span className="text-xl font-semibold text-black">
                {house.sale_price}
              </span>
              <span className="">/month</span>
            </h1>
          )}
          {loading ? (
            "..."
          ) : data ? (
            <Image src={bookMarkSvg} className="w-6 " alt="" />
          ) : (
            <Image
              onClick={() => deleteBookmark()}
              src={bookMarkedSvg}
              className="w-6 cursor-pointer"
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

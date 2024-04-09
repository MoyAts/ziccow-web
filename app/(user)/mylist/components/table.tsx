"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import deleteImg from "../../../assets/images/delete.svg";
import { useQuery } from "@apollo/client";
import { GET_MY_LISTING } from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { getUser } from "@/lib/auth";
import { houseInf } from "@/utils/interfaces";
const Table = () => {
  const state = useSelector(getUser);
  const { loading, error, data } = useQuery(GET_MY_LISTING, {
    variables: {
      userId: state?.userId,
    },
  });
  loading && console.log("loading");
  error && console.log("error", error);
  data && console.log(data);

  return (
    <div className="w-full overflow-x-auto  max-tablet:px-10 max-mobile:px-5">
      <table className=" bg-white mt-10 min-w-full rounded-t-lg">
        <thead>
          <tr>
            <th className="py-4 px-4 border-b border-gray-300 text-left"></th>
            <th className="py-4 px-4 border-b border-gray-300 text-left">
              Property Name
            </th>
            <th className="py-4 px-4 border-b border-gray-300 text-left">
              Issued date
            </th>
            <th className="py-4 px-4 border-b border-gray-300 text-left">
              Property type
            </th>
            <th className="py-4 px-4 border-b border-gray-300 text-left">
              Property Management
            </th>
            <th className="py-4 px-4 border-b border-gray-300 text-left">
              Status
            </th>
            <th className="py-4 px-4 border-b border-gray-300 text-left"></th>
          </tr>
        </thead>
        <tbody className="bg-lightBg">
          {data &&
            data.listing.map((data: houseInf, ind: number) => (
              <tr key={ind} className="h-14">
                <td className="py-2 ps-4 border-b border-gray-300  text-left">
                  <input type="checkbox" placeholder="check" />
                </td>
                <Link href={"/properties/" + data.listing_id}>
                  <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left font-semibold text-mainBlue">
                    {data.real_estate?.name ?? "Unknown"}
                  </td>
                </Link>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left"></td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left">
                  {data.sale_type ?? "Sell"}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left">
                  {data.real_estate?.name ?? "Unknown"}
                </td>
                <td
                  className={`py-2 px-4 border-b border-gray-300 min-w-[160px] text-left `}
                >
                  {data.status ?? "Unknown"}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left ">
                  <div className="flex gap-2 cursor-pointer">
                    <Image src={deleteImg} className="w-4 my-auto" alt="" />
                    <p className="text-danger font-semibold">Delete</p>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

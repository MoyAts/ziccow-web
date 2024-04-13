"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import deleteImg from "../../../assets/images/delete.svg";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MY_LISTING, DELET_MYLIST } from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { getUser } from "@/lib/auth";
import { houseInf } from "@/utils/interfaces";
const Table = () => {
  const state = useSelector(getUser);
  const { loading, error, data, refetch } = useQuery(GET_MY_LISTING, {
    variables: {
      userId: state?.userId,
    },
    fetchPolicy: "no-cache",
  });

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
              <List key={ind} data={data} refetch={refetch} />
            ))}
          {loading && <>Loading</>}
        </tbody>
      </table>
    </div>
  );
};

const List = ({ data, refetch }: { data: houseInf; refetch: Function }) => {
  const [deleteList, deleteListStatus] = useMutation(DELET_MYLIST);
  if (deleteListStatus.data) {
    refetch();
  }
  return (
    <tr className="h-14">
      <td className="py-2 ps-4 border-b border-gray-300  text-left">
        <input type="checkbox" placeholder="check" />
      </td>
      <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left font-semibold text-mainBlue">
        <Link href={"/properties/" + data.listing_id}>
          {data.real_estate?.name ?? data.real_estate?.name ?? "Unknown"}
        </Link>
      </td>
      <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left"></td>
      <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left">
        {data.sale_type ?? "Sell"}
      </td>
      <td
        className={`py-2 px-4 border-b border-gray-300 min-w-[160px] text-left `}
      >
        {data.status ?? "Unknown"}
      </td>
      <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left ">
        <button
          onClick={() => {
            const res = confirm(
              "Are you sure you want to delete this property ?",
            );
            if (res) {
              deleteList({
                variables: {
                  uuid: data.listing_id,
                },
              });
            }
          }}
          className="flex gap-2 cursor-pointer"
        >
          <Image src={deleteImg} className="w-4 my-auto" alt="" />
          <p className="text-danger font-semibold">
            {deleteListStatus.loading
              ? "Deleting..."
              : deleteListStatus.error
                ? "Error happend"
                : deleteListStatus.data
                  ? "Deleted"
                  : "Delete"}
          </p>
        </button>
      </td>
    </tr>
  );
};

export default Table;

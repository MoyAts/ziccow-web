"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import deleteImg from "../../../assets/images/delete.svg";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_MY_LISTING,
  DELET_MYLIST,
  UPDATE_STATUS_MYLIST,
} from "@/graphql/features/listing";
import { useSelector } from "react-redux";
import { calculateTimeDifference, getUser } from "@/lib/auth";
import { houseInf } from "@/utils/interfaces";
import { MdUpdate, MdEdit } from "react-icons/md";
const Table = () => {
  const state = useSelector(getUser);
  const [showStatus, setShowStatus] = useState<null | string>();

  const { loading, error, data, refetch } = useQuery(GET_MY_LISTING, {
    variables: {
      userId: state?.userId,
    },
    // fetchPolicy : "no-cache"
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

            <th className="py-4 px-4 border-b border-gray-300 text-left"></th>
          </tr>
        </thead>
        <tbody className="bg-lightBg">
          {data &&
            data.listing.map((data: houseInf, ind: number) => (
              <List
                setShowStatus={setShowStatus}
                showStatus={showStatus}
                key={ind}
                data={data}
                refetch={refetch}
              />
            ))}
          {loading && <>Loading</>}
        </tbody>
      </table>
    </div>
  );
};

const List = ({
  data,
  refetch,
  showStatus,
  setShowStatus,
}: {
  data: houseInf;
  refetch: Function;
  showStatus: any;
  setShowStatus: Function;
}) => {
  const [deleteList, deleteListStatus] = useMutation(DELET_MYLIST);
  const [updateList, updateListStatus] = useMutation(UPDATE_STATUS_MYLIST);
  const time = calculateTimeDifference(data.created_at);
  if (deleteListStatus.data || updateListStatus.data) {
    refetch();
  }

  if (updateListStatus.error) {
    alert("Issues when updating data");
  }
  const updateStatus = (status: string) => {
    setShowStatus(null);
    updateList({
      variables: {
        uuid: data.listing_id,
        status,
      },
    });
  };
  return (
    <tr className="h-14">
      <td className="py-2 ps-4 border-b border-gray-300  text-left">
        <input type="checkbox" placeholder="check" />
      </td>
      <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left font-semibold text-mainBlue">
        <Link href={"/properties/" + data.listing_id}>
          {!data.real_estate_id
            ? data.property_name
            : data.real_estate?.name ?? data.real_estate?.name ?? "Unknown"}
        </Link>
      </td>
      <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left">
        {time} ago
      </td>
      <td className="py-2  px-4 border-b border-gray-300 min-w-[160px] text-left">
        {data.sale_type ?? "Sell"}
      </td>
      <td
        className={`py-2  px-4 border-b   relative border-gray-300 min-w-[160px] text-left `}
      >
        <div className="flex gap-2">
          <p>
            {updateListStatus.loading ? "Loading" : data.status ?? "Unknown"}
          </p>
          {!updateListStatus.loading && (
            <input
              onClick={() => {
                if (data.status == "ACTIVE") {
                  updateStatus("SOLED");
                } else {
                  updateStatus("ACTIVE");
                }
              }}
              placeholder="nothing"
              className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-mainBlue before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-mainBlue after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-mainBlue checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-mainBlue checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-blue-300 checked:focus:bg-blue-300 checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-slate-300 dark:after:bg-surface-dark dark:checked:bg-blue-500 dark:checked:after:bg-blue-500"
              type="checkbox"
              role="switch"
              checked={data.status == "ACTIVE"}
            />
          )}
          {/* <MdUpdate
            onClick={() =>
              setShowStatus((d: any) =>
                d == data.listing_id ? null : data.listing_id,
              )
            }
            className="text-mainBlue my-auto cursor-pointer"
          /> */}
        </div>
        {/* {showStatus == data.listing_id && (
          <div className="absolute w-fit z-50 left-28 top-0 rounded shadow-lg bg-white">
            <div className="px-3 py-1 bg-mainBlue text-white">Status</div>
            <ul className="mt-2  py-1 flex flex-col gap-2 text-sm">
              <li
                onClick={() => updateStatus("PENDING")}
                role="button"
                className="text-blue-500 ps-1 pe-3 cursor-pointer hover:text-mainBlue"
              >
                PENDING
              </li>
              <li
                onClick={() => updateStatus("SOLED")}
                role="button"
                className="text-blue-500 ps-1 pe-3 cursor-pointer hover:text-mainBlue"
              >
                SOLED
              </li>
            </ul>
            
          </div>
        )} */}
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
      <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left ">
        <Link
          href={"/mylist/edit/" + data.listing_id}
          className="flex gap-2 cursor-pointer"
        >
          <MdEdit className="w-4 my-auto text-mainBlue" />
          <p className="text-mainBlue font-semibold">Edit</p>
        </Link>
      </td>
    </tr>
  );
};

export default Table;

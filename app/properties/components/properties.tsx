import { houseInf } from "@/utils/interfaces";
import React from "react";
import Property from "./property";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_LISTING } from "@/graphql/features/listing";
import { getUser } from "@/lib/auth";
import loadingImg from "@/app/assets/images/loading.svg";
import Image from "next/image";
const Properties = ({ query, variables }: any) => {
  let newWhere = { where: variables.where ?? {}, order_by: variables.order_by };
  newWhere.where["real_estate_id"] = { _is_null: true };
  newWhere.where["status"] = { _eq: "PENDING" };
  console.log(newWhere, "After");

  const { loading, error, data } = useQuery(query, {
    variables: newWhere,
  });
  const state = useSelector(getUser);

  return (
    <div
      className={`grid relative grid-cols-3 mt-5 2xl:grid-cols-4 max-tablet:grid-cols-2 max-sm:grid-cols-1 overflow-scroll gap-10 pb-10`}
    >
      {loading ? (
        <div className="w-full grow flex min-h-[300px] col-span-10 2xl:cols-span-4">
          <Image
            src={loadingImg}
            width={100}
            height={100}
            alt="loading"
            className="m-auto"
          />
        </div>
      ) : error ? (
        <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
          {error?.graphQLErrors[0]?.message ?? "something goes wrong"}
        </div>
      ) : data.listing != null ? (
        data.listing.length == 0 ? (
          <div className="col-span-10 text-2xl font-semibold text-center flex h-[200px]">
            <p className="m-auto">Sorry, Nothing Found in Your Search :(</p>
          </div>
        ) : (
          data.listing.map((house: houseInf, ind: number) => (
            <Property userId={state?.userId ?? null} key={ind} house={house} />
          ))
        )
      ) : (
        <div>......</div>
      )}
    </div>
  );
};

export default Properties;

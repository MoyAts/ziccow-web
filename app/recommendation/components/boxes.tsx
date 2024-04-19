import React from "react";
import Box from "./box";
import { useQuery } from "@apollo/client";
import { houseInf } from "@/utils/interfaces";
import loadingImg from "@/app/assets/images/loading.svg";
import Image from "next/image";

const Boxes = ({ query, variables }: any) => {
  let newWhere = { where: variables.where ?? {}, order_by: variables.order_by };
  newWhere.where["status"] = { _eq: "PENDING" };
  const { loading, error, data } = useQuery(query, {
    variables,
  });

  return (
    <div className="mt-28 grid max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-tablet:gap-15 grid-cols-3 gap-10">
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
          {error.graphQLErrors[0]?.message ?? "something goes wrong"}
        </div>
      ) : data ? (
        data.listing.length == 0 ? (
          <div className="col-span-10 text-2xl font-semibold text-center flex h-[200px]">
            <p className="m-auto">Sorry, Nothing Found in Your Search :(</p>
          </div>
        ) : (
          data.listing.map((house: houseInf, ind: number) => (
            <Box key={ind} house={house} />
          ))
        )
      ) : (
        <div>......</div>
      )}
    </div>
  );
};

export default Boxes;

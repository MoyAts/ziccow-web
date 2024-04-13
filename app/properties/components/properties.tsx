import { houseInf } from "@/utils/interfaces";
import React from "react";
import Property from "./property";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_LISTING } from "@/graphql/features/listing";
import { getUser } from "@/lib/auth";

const Properties = ({ query, variables }: any) => {
  let newWhere = { where: variables.where ?? {}, order_by: variables.order_by };
  newWhere.where["real_estate_id"] = { _is_null: true };
  newWhere.where["status"] = { _eq: "PENDING" };

  const { loading, error, data } = useQuery(query, {
    variables: newWhere,
  });
  const state = useSelector(getUser);

  return (
    <div
      className={`grid grid-cols-3 mt-5 2xl:grid-cols-4 max-tablet:grid-cols-2 max-sm:grid-cols-1 overflow-scroll gap-10 pb-10`}
    >
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
          {error.graphQLErrors[0]?.message ?? "something goes wrong"}
        </div>
      ) : data ? (
        data.listing.map((house: houseInf, ind: number) => (
          <Property userId={state?.userId ?? null} key={ind} house={house} />
        ))
      ) : (
        <div>......</div>
      )}
    </div>
  );
};

export default Properties;

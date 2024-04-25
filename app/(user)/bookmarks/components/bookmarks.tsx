import React from "react";
import Property from "./property";
import SelectOption from "./select_option";
import rentalIcon from "../../../assets/images/rentalIcon.svg";
import houseIcon from "../../../assets/images/house.svg";
import amountIcon from "../../../assets/images/amountIcon.svg";
import spaceIcon from "../../../assets/images/space.svg";
import { IoIosArrowBack as ListIcon } from "react-icons/io";
import { useSelector } from "react-redux";
import { GET_BOOKMARK } from "@/graphql/features/listing";
import { useQuery } from "@apollo/client";
import { getUser } from "@/lib/auth";

const Bookmarks = () => {
  const state = useSelector(getUser);
  const { loading, error, data } = useQuery(GET_BOOKMARK, {
    variables: {
      user_id: state?.userId,
    },
    fetchPolicy: "no-cache",
  });
  return (
    <div className="flex flex-col px-20 max-w-[1700px] max-tablet:px-10 max-mobile:px-5 mx-auto border-t border-gray-300">
      <div className=" hidden justify-between border-b border-gray-300 mb-4 py-4 max-tablet:flex-col">
        <div className="flex gap-5 flex-wrap  ">
          <SelectOption list={["Rental", "Sell", "new"]} img={rentalIcon} />
          <SelectOption list={["House", "Sell", "new"]} img={houseIcon} />
          <SelectOption
            list={["$15k - $30k", "Sell", "new"]}
            img={amountIcon}
          />
          <SelectOption list={["125 sq ft", "Sell", "new"]} img={spaceIcon} />
        </div>
        <div className="flex gap-2 text-lightGray me-12 place-self-end max-mobile:mt-5">
          <p>Sort:</p>
          <div className="relative z-40 flex flex-col gap-2 w-fit px-2  group  ">
            <div className="flex  justify-between rounded gap-1">
              <span className="">Default</span>
              <ListIcon className="my-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
            </div>
            <div className="absolute text-sm top-8 shadow group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
              {["Default", "new1", "new2"].map((data, ind) => (
                <div
                  key={ind}
                  className="flex  cursor-pointer duration-150 gap-2  px-2  py-1"
                >
                  <input
                    id={`${ind}  ${data}`}
                    type="checkbox"
                    placeholder="s"
                    className="hover:text-mainBlue cursor-pointer"
                  />
                  <label
                    htmlFor={`${ind}  ${data}`}
                    className=" text-black cursor-pointer hover:text-mainBlue"
                  >
                    {data}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 grid grid-cols-3  2xl:grid-cols-4 max-tablet:grid-cols-2 max-mobile:grid-cols-1  gap-5 pb-32 max-xl:grid-cols-3 justify-between ">
        {loading ? (
          <div className="w-full grow flex min-h-[300px] col-span-10 2xl:cols-span-4">
            <div className={"lds-ripple m-auto "}>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : error ? (
          <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
            {error?.graphQLErrors[0]?.message ?? "something goes wrong"}
          </div>
        ) : data.bookmark.length < 1 ? (
          <div className="col-span-10 text-2xl font-semibold text-center flex h-[200px]">
            <p className="m-auto">Sorry, Nothing Found :(</p>
          </div>
        ) : (
          data.bookmark.map((house: any, ind: number) => (
            <Property
              uuid={house.uuid}
              userId={state?.userId ?? null}
              key={ind}
              house={house.listing}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmarks;

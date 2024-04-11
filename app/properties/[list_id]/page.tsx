"use client";
import GetStarted from "../../_components/get_started";
import Hero from "./components/hero";
import Detail from "./components/detail";
import { GET_LIST_BY_ID } from "@/graphql/features/listing";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import Drawer from "@/app/_components/drawer";
import { useState } from "react";
import Link from "next/link";

const Page = ({ params: { list_id } }: { params: { list_id: string } }) => {
  const router = useRouter();
  const { loading, data, error } = useQuery(GET_LIST_BY_ID, {
    variables: {
      list_id,
    },
  });
  if (error) {
    // router.replace("/properties")
    // console.log(error);
    return <h1>Not found</h1>;
  }
  if (data) {
    console.log("--", data);
  }

  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={` ${isDrawer && "hidden"}  relative bg-lightBg`}>
        <GetStarted />
        <Hero setIsDrawer={setIsDrawer} />
        {loading && "loading"}
        {data && data.listing.length == 0 && (
          <div className="w-full h-full bg-white flex">
            <div className="mt-32 mx-auto flex flex-col  justify-center align-middle">
              <div className="capitalize text-xl text-center">
                sorry :( property not found
              </div>
              <Link
                href="/properties"
                className="text-blue text-center text-blue-500 font-semibold"
              >
                {" "}
                Go Back
              </Link>
            </div>
          </div>
        )}
        {data && data.listing.length > 0 && (
          <Detail house={data.listing[0]} list_id={list_id} />
        )}
      </div>
    </div>
  );
};

export default Page;

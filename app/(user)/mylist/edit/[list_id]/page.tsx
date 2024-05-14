"use client";
import Nav from "../../../../_components/nav";
import Footer from "../../../../_components/footer";
import Hero from "./components/hero";
import GetStarted from "../../../../_components/get_started";
import { useState } from "react";
import Drawer from "../../../../_components/drawer";
import { useRouter } from "next/navigation";
import { GET_LIST_BY_ID } from "@/graphql/features/listing";
import { useQuery } from "@apollo/client";

const Page = ({ params: { list_id } }: { params: { list_id: string } }) => {
  const [isDrawer, setIsDrawer] = useState(false);
  const router = useRouter();
  const { loading, data, error } = useQuery(GET_LIST_BY_ID, {
    variables: {
      list_id,
    },
  });
  
  if (error) {
    router.replace("/properties");
  }
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={` ${isDrawer && "hidden"} bg-lightBg `}>
        <GetStarted />
        <Nav setIsDrawer={setIsDrawer} withsearch={false} />
        {data && data.listing.length > 0 && (
          <Hero house={data.listing[0]} list_id={list_id} />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Page;

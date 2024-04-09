"use client";
import Hero from "./components/hero";
import PropertyTypes from "./components/property_types";
import Realestates from "./components/realestates";
import Footer from "../_components/footer";
import Join from "../_components/join";
import GetStarted from "../_components/get_started";
import Drawer from "../_components/drawer";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [isDrawer, setIsDrawer] = useState(false);

  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={` ${isDrawer && "hidden"}  relative bg-lightBg`}>
        <GetStarted />
        <Hero setIsDrawer={setIsDrawer} />
        {/* <PropertyTypes /> */}
        <Realestates />
        <Join />
        <Footer />
      </div>
    </div>
  );
};

export default Page;

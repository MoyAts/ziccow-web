"use client";
import React, { useState } from "react";
import Nav from "../../_components/nav";
import GetStarted from "../../_components/get_started";
import Footer from "../../_components/footer";
import Hero from "./components/hero";
import Join from "../../_components/join";
import Drawer from "@/app/_components/drawer";

const Page = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={`relative ${isDrawer && "hidden"} bg-lightBg `}>
        <GetStarted />
        <Nav setIsDrawer={setIsDrawer} withsearch={true} />
        <Hero />
        <Join />
        <Footer />
      </div>
    </div>
  );
};

export default Page;

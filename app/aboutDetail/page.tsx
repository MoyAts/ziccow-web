"use client";

import { useState } from "react";
import Drawer from "../_components/drawer";
import Footer from "../_components/footer";
import GetStarted from "../_components/get_started";
import Nav from "../_components/nav";
import Hero from "./components/hero";
const Page = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={`relative ${isDrawer && "hidden"} bg-lightBg `}>
        <GetStarted />
        <Nav setIsDrawer={setIsDrawer} withsearch={false} />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Page;

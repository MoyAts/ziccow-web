"use client";
import Nav from "../../_components/nav";
import Footer from "../../_components/footer";
import Hero from "./components/hero";
import GetStarted from "../../_components/get_started";
import { useState } from "react";
import Drawer from "../../_components/drawer";

const Page = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={` ${isDrawer && "hidden"} bg-lightBg `}>
        <GetStarted />
        <Nav setIsDrawer={setIsDrawer} withsearch={false} />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Page;

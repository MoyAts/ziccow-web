"use client";

import Hero from "./components/hero";
import Enjoy from "./components/enjoy";
import Difference from "./components/difference";
import Properties from "./components/properties";
import View from "./components/view";
import DowloadApp from "./components/dowload_app";
import Footer from "../_components/footer";
import Join from "../_components/join";
import GetStarted from "../_components/get_started";
import Drawer from "../_components/drawer";
import { useState } from "react";

const Home = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={`relative ${isDrawer && "hidden"} bg-lightBg`} id="home">
        <div className="w-full bg-mainBlue sticky top-0 z-[2000] h-12 flex  max-mobile:hidden">
          <div className="w-full max-w-[1700px]  gap-3 m-auto px-20 max-tablet:px-10   bg-mainBlue text-white font-light text-sm top-0 flex justify-center">
            <div className="font-semibold">Site is under construction</div>
          </div>
        </div>
        <GetStarted />
        <Hero setIsDrawer={setIsDrawer} />
        <Enjoy />
        <Difference />
        <View />
        <Properties />
        <DowloadApp />
        <Join />
        <Footer />
      </div>
    </div>
  );
};
export default Home;

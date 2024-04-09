"use client";
import Nav from "../../_components/nav";
import Footer from "../../_components/footer";
import GetStarted from "../../_components/get_started";
import Bookmarks from "./components/bookmarks";
import Drawer from "@/app/_components/drawer";
import { useState } from "react";

const Page = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer} />}
      <div className={`relative ${isDrawer && "hidden"} bg-lightBg `}>
        <GetStarted />
        <Nav setIsDrawer={setIsDrawer} withsearch={false} />
        <Bookmarks />
        <Footer />
      </div>
    </div>
  );
};

export default Page;

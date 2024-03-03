"use client" 

import Hero from "./components/Hero"
import About from "./components/about"
import Help from "./components/help"
import Teams from "./components/teams"
import Contact from "../_components/contact"
import Footer from "../_components/footer"
import GetStarted from "../_components/get_started"
import Honor from "./components/honor"
import Drawer from "../_components/drawer"
import { useState } from "react"

const Page = () => {
  const [isDrawer,setIsDrawer] = useState(false)
    return (
    <div>
        {isDrawer && <Drawer setIsDrawer={setIsDrawer}/>}
        <div className={`relative ${isDrawer && "hidden"} bg-lightBg `}>
          <GetStarted />
          <Hero setIsDrawer={setIsDrawer}/>
          <About />
          <Help />
          <Teams />
          {/* <Honor /> */}
          <Contact />
          <Footer /> 
        </div>
    </div>
  )
}

export default Page

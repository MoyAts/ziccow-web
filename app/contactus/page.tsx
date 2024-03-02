"use client" 

import Hero from "./components/Hero"
import Footer from "../_components/footer"
import GetStarted from "../_components/get_started"
import Drawer from "../_components/drawer"
import { useState } from "react"
const Page = () => {
  const [isDrawer,setIsDrawer] = useState(false)
  return (
    <div>
        {
          isDrawer && <Drawer setIsDrawer={setIsDrawer}/>
        }
        <div className={` ${isDrawer && "hidden"}  relative`}>
          <GetStarted />
          <Hero setIsDrawer={setIsDrawer} />
          <Footer />
      </div>
    </div>
  )
}

export default Page

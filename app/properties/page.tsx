"use client" 
import Hero from "./components/hero"
import Nav from "../_components/nav"
import GetStarted from "../_components/get_started"
import Footer from "../_components/footer"
import Drawer from "../_components/drawer"
import { useState } from "react"
const Pages = () => {
  const [isDrawer,setIsDrawer] = useState(false)
  return (
    <div>
        {
          isDrawer && <Drawer setIsDrawer={setIsDrawer}/>
        }
        <div className={` ${isDrawer && "hidden"}  relative bg-lightBg`}>
            <GetStarted />
            <Nav setIsDrawer={setIsDrawer} withsearch={true} />
            <Hero />
            <Footer />
      
        </div>
    </div>
  )
}

export default Pages

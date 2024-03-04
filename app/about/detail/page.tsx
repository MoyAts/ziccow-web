"use client" 

import { useState } from "react"
import Drawer from "../../_components/drawer"
import Footer from "../../_components/footer"
import GetStarted from "../../_components/get_started"
import Nav from "../../_components/nav"
import Hero from "./components/hero"

const Page = ({ searchParams } : any) => {
  const [isDrawer,setIsDrawer] = useState(false)
  return (
    <div>
        {isDrawer && <Drawer setIsDrawer={setIsDrawer}/>}
        <div className={`relative ${isDrawer && "hidden"} bg-lightBg `}>
          <GetStarted />
          <Nav  setIsDrawer={setIsDrawer} withsearch={false} />
          <Hero id={searchParams.id} />
          <Footer />
      </div>
    </div>
  )
}

export default Page

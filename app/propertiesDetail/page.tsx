"use client" 
import GetStarted from "../_components/get_started"
import Hero from "./components/hero"
import Detail from "./components/detail"
import Drawer from "../_components/drawer"
import { useState } from "react"

const Page = () => {
  const [isDrawer,setIsDrawer] = useState(false)
  return (
    <div>
        {
          isDrawer && <Drawer setIsDrawer={setIsDrawer}/>
        }
      <div className={` ${isDrawer && "hidden"}  relative bg-lightBg`}>
        <GetStarted />
        <Hero setIsDrawer={setIsDrawer} />
        <Detail />
      </div>
    </div>
  )
}

export default Page

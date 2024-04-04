"use client"
import React, { useState } from 'react'
import Nav from '../../_components/nav'
import SettingInfo from './components/setting'
import Footer from "../../_components/footer"
import Drawer from '@/app/_components/drawer'

const Page = () => {
  const [isDrawer,setIsDrawer] = useState(false)
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer}/>}
      <div className={` ${isDrawer && "hidden"} bg-lightBg `}>
        <Nav setIsDrawer={setIsDrawer} withsearch={false}/>
        <SettingInfo />
        <Footer />
      </div>
    </div>
  )
}

export default Page

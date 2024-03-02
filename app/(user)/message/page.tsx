"use client"
import React, { useState } from 'react'
import Nav from '../../_components/nav'
import Detail from './components/detail'
import Footer from '../../_components/footer'
import Contact from "../../_components/contact"
import Drawer from '@/app/_components/drawer'

const Page = () => {
  const [isDrawer,setIsDrawer] = useState(false)
  return (
    <div>
      {isDrawer && <Drawer setIsDrawer={setIsDrawer}/>}
      <div className={` ${isDrawer && "hidden"} bg-lightBg `}>
        <Nav setIsDrawer={setIsDrawer} withsearch={true} />
        <Detail />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Page

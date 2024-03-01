"use client" 
import React from 'react'
import Nav from '../../_components/nav' 
import GetStarted from "../../_components/get_started"
import Footer from "../../_components/footer"
import Hero from "./components/hero"
import Join from '../../_components/join'

const page = () => {
  return (
    <div className='bg-lightBg relative'>
        <GetStarted />
        <Nav withsearch={true} />
        <Hero />
        <Join />
        <Footer />
    </div>
  )
}

export default page
"use client" 
import React from 'react'
import Nav from '../components/nav' 
import GetStarted from "../components/get_started"
import Footer from "../components/footer"
import Hero from "./components/hero"
import Join from '../components/join'

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
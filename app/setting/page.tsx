"use client"
import React from 'react'
import Nav from '../components/nav'
import SettingInfo from './components/setting'
import Footer from "../components/footer"

const page = () => {
  return (
    <div className='bg-lightBg'> 
        <Nav withsearch={true}/>
        <SettingInfo />
        <Footer />
    </div>
  )
}

export default page

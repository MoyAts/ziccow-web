"use client"
import React from 'react'
import Nav from '../../_components/nav'
import Detail from './components/detail'
import Footer from '../../_components/footer'
import Contact from "../../_components/contact"
const page = () => {
  return (
    <div className='bg-lightBg'>
      <Nav withsearch={true} />
      <Detail />
      <Contact />
      <Footer />
    </div>
  )
}

export default page

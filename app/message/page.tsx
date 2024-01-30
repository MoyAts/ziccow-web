"use client"
import React from 'react'
import Nav from '../components/nav'
import Detail from './components/detail'
import Footer from '../components/footer'
import Contact from "../components/contact"
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

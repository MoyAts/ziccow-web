"use client"
import React from 'react'
import Nav from '../components/nav'
import Detail from './components/detail'
import Footer from '../components/footer'
const page = () => {
  return (
    <div className='bg-lightBg'>
      <Nav withsearch={true} />
      <Detail />
      <Footer />
    </div>
  )
}

export default page

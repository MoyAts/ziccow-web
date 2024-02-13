"use client" 
import Hero from "./components/hero"
import PropertyTypes from './components/property_types'
import Realestates from './components/realestates'
import Footer from "../_components/footer"
import Join from "../_components/join"
import GetStarted from "../_components/get_started"
const page = () => {
  return (
    <div className='relative' >
      <GetStarted />
      <Hero />
      <PropertyTypes />
      <Realestates />
      <Join />
      <Footer /> 
      
    </div>
  )
}

export default page

"use client" 

import Hero from "./components/Hero"
import Footer from "../_components/footer"
import GetStarted from "../_components/get_started"
const page = () => {
  return (
    <div className='relative'>
      <GetStarted />
      <Hero />
      <Footer />
    </div>
  )
}

export default page

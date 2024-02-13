"use client" 
import Nav from '../_components/nav' 
import GetStarted from "../_components/get_started"
import Footer from "../_components/footer"
import Hero from "./components/hero"

const page = () => {
  return (
    <div className='bg-lightBg relative'>
        <GetStarted />
        <Nav withsearch={false} />
        <Hero />
        <Footer />
    </div>
  )
}

export default page
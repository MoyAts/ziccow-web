"use client" 

import Footer from "../_components/footer"
import GetStarted from "../_components/get_started"
import Nav from "../_components/nav"
import Hero from "./components/hero"
const page = () => {
  return (
    <div className='relative bg-lightBg'>
      <GetStarted />
      <Nav withsearch={false} />
      <Hero />
      <Footer />
    </div>
  )
}

export default page

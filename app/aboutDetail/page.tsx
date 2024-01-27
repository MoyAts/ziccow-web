"use client" 

import Footer from "../components/footer"
import GetStarted from "../components/get_started"
import Nav from "../components/nav"
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

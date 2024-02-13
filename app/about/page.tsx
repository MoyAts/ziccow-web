"use client" 

import Hero from "./components/Hero"
import About from "./components/about"
import Help from "./components/help"
import Teams from "./components/teams"
import Contact from "../_components/contact"
import Footer from "../_components/footer"
import GetStarted from "../_components/get_started"
import Honor from "./components/honor"
const page = () => {
  return (
    <div className='relative bg-lightBg'>
      <GetStarted />
      <Hero />
      <About />
      <Help />
      <Teams />
      <Honor />
      <Contact />
      <Footer /> 
    </div>
  )
}

export default page

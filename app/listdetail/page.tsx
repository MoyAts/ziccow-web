"use client" 
import Nav from '../components/nav' 
import GetStarted from "../components/get_started"
import Footer from "../components/footer"
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
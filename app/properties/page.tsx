"use client" 
import Hero from "./components/hero"
import Nav from "../_components/nav"
import GetStarted from "../_components/get_started"
import Footer from "../_components/footer"
const pages = () => {
  return (
    <div className="relative bg-lightBg">
        <GetStarted />
        <Nav withsearch={true} />
        <Hero />
        <Footer />
      
    </div>
  )
}

export default pages

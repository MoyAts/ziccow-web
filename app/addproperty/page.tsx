"use client" 
import Image from "next/image"; 
import Link from "next/link";
import Nav from "../_components/nav"
import Footer from "../_components/footer"
import Hero from "./components/hero"
import GetStarted from "../_components/get_started"
const page = () => {
  return (
    <div className='bg-lightBg'>
        <GetStarted />
        <Nav withsearch={false} />
        <Hero />
        <Footer />
    </div>
  )
}

export default page
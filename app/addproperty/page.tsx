"use client" 
import Image from "next/image"; 
import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer"
import Hero from "./components/hero"

const page = () => {
  return (
    <div className='bg-lightBg'>
        <Nav withsearch={false} />
        <Hero />
        <Footer />
    </div>
  )
}

export default page
"use client" 
import GetStarted from "../_components/get_started"
import Hero from "./components/hero"
import Detail from "./components/detail"
const page = () => {
  return (
    <div className='relative bg-lightBg'>
      <GetStarted />
      <Hero />
      <Detail />
    </div>
  )
}

export default page

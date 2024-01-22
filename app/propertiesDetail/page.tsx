"use client"

import GetStarted from "../components/get_started"
import Hero from "./components/hero"
import Detail from "./components/detail"

const page = () => {
  return (
    <div className='relative'>
      <GetStarted />
      <Hero />
      <Detail />
      {/* <Footer /> */}
    </div>
  )
}

export default page

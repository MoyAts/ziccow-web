
import Hero from "./components/Hero"
import About from "./components/about"
import Help from "./components/help"
import Teams from "./components/teams"
import Contact from "./components/contact"
import Footer from "../components/footer"
import GetStarted from "../components/get_started"

const page = () => {
  return (
    <div className='relative'>
      <GetStarted />
      <Hero />
      <About />
      <Help />
      <Teams />
      <Contact />
      <Footer /> 
      
    </div>
  )
}

export default page

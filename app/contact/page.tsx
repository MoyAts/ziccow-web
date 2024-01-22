
import Hero from "./components/Hero"
import Footer from "../components/footer"
import GetStarted from "../components/get_started"
const page = () => {
  return (
    <div className='relative'>
      <GetStarted />
      <Hero />
      <Footer />
    </div>
  )
}

export default page

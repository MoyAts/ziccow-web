"use client"
import Hero from "./components/hero"
import Enjoy from "./components/enjoy"
import Difference from "./components/difference"
import Properties from "./components/properties"
import View from "./components/view"
import DowloadApp from "./components/dowload_app"
import Footer from "../components/footer"
import Join from "../components/join"
import GetStarted from "../components/get_started"
const home = () => {
    return (
    <div className='relative bg-lightBg' id="home">
        <GetStarted />
        <Hero />
        <Enjoy />
        <Difference />
        <Properties />
        <View /> 
        <DowloadApp />
        <Join />
        <Footer />
    </div>
    )
}
export default home
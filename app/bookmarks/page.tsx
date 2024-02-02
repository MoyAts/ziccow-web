"use client" 
import Nav from "../components/nav"
import Footer from "../components/footer"
import GetStarted from "../components/get_started"
import Bookmarks from "./components/bookmarks"
const page = () => {
  return (
    <div className='bg-lightBg'>
        <GetStarted />
        <Nav withsearch={true} />
        <Bookmarks />
        <Footer />
    </div>
  )
}

export default page
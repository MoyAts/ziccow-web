"use client" 
import Nav from "../_components/nav"
import Footer from "../_components/footer"
import GetStarted from "../_components/get_started"
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
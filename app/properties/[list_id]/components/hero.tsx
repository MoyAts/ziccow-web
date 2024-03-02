"use client" 
import Nav from '../../../_components/nav'

const hero = ({ setIsDrawer } : any) => {
  return (
    <div className="w-full bg-lightBg flex flex-col ">
        <Nav setIsDrawer={setIsDrawer} withsearch={false} />
    </div>
  )
}

export default hero

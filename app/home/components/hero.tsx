"use client" 
import Image from "next/image"; 
import Link from "next/link";
import bg from "../../assets/images/Background (4).png"
import img2 from "../../assets/images/a.svg"
import img3 from "../../assets/images/solar_city-bold-duotone.svg"
import Nav from '../../_components/nav';
import searchImg from "../../assets/images/search.svg"
import mobileSearchImg from "../../assets/images/mobilesearch.svg"
import { useState } from "react";
interface Props{
    setIsDrawer : Function
}
const Hero = ({ setIsDrawer } : Props) => {
  

    const [search,setSearch] = useState("")
  return (
    <div className="w-full bg-[#6b6d77] tablet:h-[112vh] max-tablet:h-fit max-tablet:pb-32 max-mobile:pb-8     mx-auto  tablet:max-h-[800px] relative flex flex-col ">
        <Nav withsearch={false} setIsDrawer={setIsDrawer} />
            <div className="absolute w-full tablet:h-[112vh] max-tablet:h-full  mx-auto  tablet:max-h-[800px]">
                <Image src={bg} alt="" className='w-full mx-auto  h-full object-cover'/>
            </div>
            <div className='flex max-tablet:pt-32  px-10 max-small:px-5 flex-col items-center justify-center  tablet:max-h-[850px] max-tablet:h-full z-[500]  h-[112vh] w-full max-w-[1700px] mx-auto  '>
                <div className=' text-[50px] max-mobile:text-[35px]  flex flex-col gap-0  text-white text-center'>Find a home that suits you.</div>
                <p className=' text-white font-light text-center' style={{color : "#E8E8E9"}}>Want to find a suitable home? We are ready to help you find one that suits your lifestyle and needs</p>
                <div className='w-8/12 max-tablet:w-10/12 max-small:w-full mt-10 mx-auto  bg-white py-2 flex justify-between rounded-2xl px-2'>
                    <div className='flex gap-2 px-2 w-full '>
                        <Image src={img2} className='w-[27px]' alt="" />
                        <input onChange={({target} : any) => setSearch(target.value)} className='outline-none my-auto w-full py-3' style={{color:"#6D6C6E"}} placeholder='Enter a location, property type or budget' />
                    </div>
                    <Link href={!search.trim() ? "/properties" : "/properties/?search="+search}  className="mobile:hidden w-fit px-6 flex justify-center ">
                        <Image src={mobileSearchImg} className="w-6" alt="" />
                    </Link>
                    <Link href={!search.trim() ? "/properties" : "/properties/?search="+search} className='flex gap-2 w-fit max-mobile:hidden  bg-mainBlue text-white px-6 text-sm justify-center hover:bg-blue-500 py-3 rounded-lg'>
                        <Image src={searchImg} className="" alt="" />
                        <span className='my-auto w-full max-mobile:hidden'>See&nbsp;Suggestions</span>
                    </Link>
                </div>

                <p className='text-[#E8E8E9] mt-32 text-lg font-light'>Or browse through the highlights</p>
                <div className='flex   justify-center max-mobile:flex-col max-mobile:gap-4 gap-12 w-full mt-16 xl:mt-10 z-[1000] '>
                    <Link href={"/properties"} className='flex flex-col justify-center gap-4 items-center px-5 max-mobile:px-2 py-4 duration-700 hover:bg-slate-300 rounded-xl hover:bg-opacity-35'>
                        <Image src={img3} width={50} alt="" />
                        <p className='text-white text-center  font-semibold'>Buy a property</p>
                    </Link>
                    <div className='h-10 my-auto bg-gray-200 w-[1px] max-mobile:hidden'></div>
                    <Link href={"/properties"}  className='flex flex-col justify-center gap-4 items-center px-5 max-mobile:px-2 py-4 duration-700 hover:bg-slate-300 rounded-xl hover:bg-opacity-35'>
                        <Image src={img3} width={50} alt="" />
                        <p className='text-white text-center  font-semibold'>Rent a property</p>
                    </Link>
                    <div className='h-10 my-auto bg-gray-200 w-[1px] max-mobile:hidden'></div>
                    <Link href={"/addproperty"}  className='flex flex-col justify-center gap-4 items-center px-5 max-mobile:px-2 py-4 duration-700 hover:bg-slate-300 rounded-xl hover:bg-opacity-35'>
                        <Image src={img3} width={50} alt="" />
                        <p className='text-white text-center  font-semibold'>Add New Listing</p>
                    </Link>
                    <div className='h-10 my-auto bg-gray-200 w-[1px] max-mobile:hidden'></div>
                    <Link href={"/recommendation"}  className='flex flex-col justify-center gap-4 items-center px-5 max-mobile:px-2 py-4 duration-700 hover:bg-slate-300 rounded-xl hover:bg-opacity-35'>
                        <Image src={img3} width={50} alt="" />
                        <p className='text-white text-center  font-semibold'>Explore Realestates</p>
                    </Link>
                    
                </div>
            </div>
    </div>
  )
}

export default Hero

"use client" 
import Image from "next/image"; 
import Link from "next/link";
import Box from "./box"
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../assets/images/image (2).png"
import img2 from "../../assets/images/image (3).png"


const properties = () => {
  return (
    <div className="w-full mb-12 max-tablet:mb-5 h-[105vh]   tablet:max-h-[800px] max-tablet:h-fit">
      <div id='properties' className='h-full max-w-[1700px]   tablet:max-h-[800px]  max-tablet:h-fit mx-auto max-tablet:mx-none  px-20 max-small:px-5 max-tablet:px-10' >
        <div className='py-5 flex justify-between  '>
          <div className='my-auto flex flex-col'>
            <h1 className='text-[38px] max-mobile:text-center'>
              Properties in <span className='text-blue-500'>your area</span> 
            </h1>
            <p className='text-lightGray text-lg max-mobile:hidden'>
              Suggested based on homes you recently viewed
            </p>
          </div>
          <Link href={"/properties"} className='my-auto max-small:hidden text-blue-500 flex gap-3 group duration-200 cursor-pointer'>
            <span>
              View more 
            </span>
            <FaLongArrowAltRight className='my-auto relative left-0 duration-200  group-hover:left-3' />
          </Link>
        </div>

        <div className='pt-10 h-[87%] mobile:max-h-[600px] flex gap-10 max-mobile:flex-col mobile:overflow-x-scroll '>
            <Box img={img2}/>
            <Box img={img1}/>
            <Box img={img2}/>
            <Box img={img1}/>
            <Box img={img2}/>
        </div>
        
      </div>
    </div>
  )
}

export default properties

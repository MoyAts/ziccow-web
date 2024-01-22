import Box from "./box"
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../assets/images/image (2).png"
import img2 from "../../assets/images/image (3).png"
import Image from "next/image";
import Link from "next/link";

const properties = () => {
  return (
    <div className="w-full">
      <div id='properties' className='h-[100vh] max-w-[1700px]   max-h-[800px] mx-auto ps-20' >
        <div className='py-5 flex justify-between pe-20'>
          <div className='my-auto flex flex-col gap-2'>
            <h1 className='text-3xl'>
              Properties in <span className='text-blue-500'>your area</span> 
            </h1>
            <p className='text-light text-xs'>
              Suggested based on homes you recently viewed
            </p>
          </div>
          <Link href={"/properties"} className='my-auto text-blue-500 flex gap-3 group duration-200 cursor-pointer'>
            <span>
              View more 
            </span>
            <FaLongArrowAltRight className='my-auto relative left-0 duration-200  group-hover:left-3' />
          </Link>
        </div>

        <div className='mt-12 flex gap-10 overflow-x-scroll pe-10'>
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

import Image from "next/image"
import Button from '../components/button'
import { FaCheck as CheckIcon } from "react-icons/fa6";
import diskImg from "../assets/images/disk.svg"

const GetStarted = () => {
  return (
    <div className='w-full bg-mainDark  sticky top-0 z-[2000]'>
      <div className='w-full max-w-[1700px] mx-auto   px-20 h-10  bg-mainDark text-white font-light text-xs top-0 flex justify-between'>
          <div className='flex '>
              <p className='my-auto me-2'>Ready, and looking for properties?</p>
              <Button text='get started' buttonClass='my-2 px-2 ' iconClass='text-sm' textClass='text-xs m-auto capitalize' action={()=>{}} Icon={CheckIcon}  />
          </div>
          <div className='my-auto flex gap-1'>
            <Image src={diskImg} alt="" />
            Having Troubles? Get Help
          </div>
      </div>
    </div>
  )
}

export default GetStarted

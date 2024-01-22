import img from "../../assets/images/Image (5).png"
import { FaArrowUp as ArrowIcon } from "react-icons/fa6";
import Image from "next/image";

const box = () => {
  return (
    <div className='flex w-full flex-col text-sm  gap-1 '>
        <div className='rounded-lg w-full overflow-hidden duration-200'>
            <Image src={img} className='w-full hover:scale-105 duration-200 rounded-lg' alt="" />
        </div>
        <h1 className='font-semibold'>Forest Retreat</h1>
        <p>Are you looking to find your dream home or invest in a lucrative property.</p>
        <button className='flex w-fit gap-2 text-mainBlue mt-2 group'>
            <span>
                View More
            </span>
            <ArrowIcon className='rotate-90 duration-200 m-auto relative ' />
        </button>
    </div>
  )
}

export default box

import phone from "../../assets/images/phone.svg"
import { MdOutlineMail as EmailIcon } from "react-icons/md";
import Image from "next/image"

const join = () => {
  return (
    <div className='w-full h-fit   max-w-[1700px] mx-auto bg-mainDark flex gap-12 py-12 px-20 text-white' >
    <div className='basis-1/2  '  >
        <h1 className='w-/3 text-[38px]   mb-10'>
            <span className='text-mainBlue '>
                Have questions 
            </span>
            <span >
            ? Contact us by email or telephone.
            </span> 
        </h1>
    </div>
    <p className='basis-1/2 text-sm my-auto flex justify-center gap-10  text-gray-400 '>
        
        <button className='flex gap-2 text-lg px-4 py-2 hover:bg-slate-600 hover:bg-opacity-30 rounded-lg border w-fit text-white '>
            <Image src={phone} alt="" className="my-auto" />
            <span className=''>(123) 456-7890</span>
        </button> 

        <button className='flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white '>
            <EmailIcon className="m-auto text-xl"  />
            <span className=''>Join out agents</span>
        </button> 
    </p>
  </div>
  )
}

export default join

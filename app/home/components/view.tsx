import Link from "next/link";
import img1 from "../../assets/images/Rectangle 17.png"
import img2 from "../../assets/images/Rectangle 25.png"
import img4 from "../../assets/images/Rectangle 27.png"
import img5 from "../../assets/images/Rectangle 28.png"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import Image from "next/image";
const view = () => {
  return (
    <div className=' w-full h-[130vh]  max-h-[900px] flex flex-col items-center '>
      <p className='text-blue-400 text-center font-light'>Real estates across the town</p>
      <h1 className='text-[35px] font-semibold '>View our featured top <span className='text-blue-600'>real estates.</span>  </h1>
      <div className='flex  gap-7 mt-14 '>

        <div className='flex flex-col gap-7 '>
            
            <div className='flex justify-between gap-10'>
                <div className='relative '>
                    <Image src={img1} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl'>234</h1>
                        <p className='text-sm font-light'>Flintstone Homes</p>
                    </div>
                </div>
                <div className='relative '>
                    <Image src={img2} alt="" />
                    <div className='absolute bottom-5 left-5 text-white'>
                        <h1 className='text-2xl'>234</h1>
                        <p className='text-sm font-light'>Flintstone Homes</p>
                    </div>
                </div>
            </div>

            <div className='relative '>
                <Image src={img4} alt="" />
                <div className='absolute bottom-5 left-5 text-white'>
                    <h1 className='text-2xl'>234</h1>
                    <p className='text-sm font-light'>Flintstone Homes</p>
                </div>
            </div>

        </div>
        <div className='flex gap-7 flex-col'>

            <div className='relative '>
                <Image src={img4} alt="" />
                <div className='absolute bottom-5 left-5 text-white'>
                    <h1 className='text-2xl'>234</h1>
                    <p className='text-sm font-light'>Flintstone Homes</p>
                </div>
            </div>

            <div className='relative '>
                <Image src={img5} alt="" />
                <div className='absolute bottom-5 left-5 text-white'>
                    <h1 className='text-2xl'>234</h1>
                    <p className='text-sm font-light'>Flintstone Homes</p>
                </div>
            </div>

        </div>
      </div>
        <Link href={"/recommendation"} className='flex gap-2  mt-10 px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white mx-auto '>
            <span>view real state</span>
            <div className='m-auto border p-1 rounded-lg'>
                <ListIcon className='rotate-180' />
            </div>
        </Link>
    </div>
  )
}

export default view

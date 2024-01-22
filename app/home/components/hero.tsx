import bg from "../../assets/images/main_bg.jpeg"
import { CiSearch } from "react-icons/ci";
import img2 from "../../assets/images/a.svg"
import img3 from "../../assets/images/solar_city-bold-duotone.svg"
import Nav from '../../components/nav';
import Link from "next/link";
import Image from "next/image";

const hero = () => {
  return (
    <div className="w-full bg-[#376f7e]  flex flex-col">
        <Nav withsearch={false} />
        <div className='w-full max-w-[1700px] h-[100vh] max-h-[850px] relative flex mx-auto '>
            <Image src={bg} alt="" className='absolute object-cover bottom-0 top-0 max-h-[850px] w-full h-[100vh]'/>
            {/* <div className="w-full bg-red-50 left-0 right-0 bottom-0 top-0 z-[10000]"></div> */}
            <div className='absolute  flex flex-col items-center  h-[100vh] w-full   pt-40'>
                <h1 className=' text-[45px]  flex flex-col gap-0  text-white'>Find a home that suits you.</h1>
                <p className=' text-white font-light' style={{color : "#E8E8E9"}}>Want to find a suitable home? We are ready to help you find one that suits your lifestyle and needs</p>
                <div className='w-8/12 mt-10 mx-auto -10 mb bg-white py-2 flex justify-between rounded-2xl px-2'>
                    <div className='flex gap-2 px-2 w-7/12'>
                        <Image src={img2} className='w-[25px]' alt="" />
                        <input className='outline-none my-auto w-full py-3' style={{color:"#6D6C6E"}} placeholder='Enter a location, property type or budget' />
                    </div>
                    <Link  href={"/properties"} className='flex gap-2 bg-blue-600 text-white px-6 text-sm justify-center hover:bg-blue-500 py-3 rounded-lg'>
                        <CiSearch className='my-auto text-xl'/>
                        <span className='my-auto '>See Suggestions</span>
                    </Link>
                </div>

                <p className='text-[#E8E8E9] mt-10 text-sm font-light'>Or browse through the highlights</p>
                <div className='flex justify-center gap-12 w-full mt-12 z-[1000]'>
                    <div className='flex flex-col justify-center items-center px-5 py-4 duration-700 hover:bg-slate-300 rounded-xl hover:bg-opacity-35'>
                        <Image src={img3} width={50} alt="" />
                        <p className='text-white text-sm font-light'>Buy a property</p>
                    </div>
                    <div className='h-10 my-auto bg-gray-200 w-[1px]'></div>
                    <div className='flex flex-col justify-center items-center px-5 py-4 duration-700 hover:bg-slate-300 rounded-xl hover:bg-opacity-35'>
                        <Image src={img3} width={50} alt="" />
                        <p className='text-white text-sm font-light'>Rent a property</p>
                    </div>
                    <div className='h-10 my-auto bg-gray-200 w-[1px]'></div>
                    <div className='flex flex-col justify-center items-center px-5 py-4 duration-700 hover:bg-slate-300 rounded-xl hover:bg-opacity-35'>
                        <Image src={img3} width={50} alt="" />
                        <p className='text-white  text-sm font-light'>Sell a property</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero

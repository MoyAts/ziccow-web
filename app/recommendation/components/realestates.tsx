"use client" 
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import Box from './box';
const realestates = () => {
  return (
    <div className="w-full bg-lightBg">
        <div className='h-fit w-full max-w-[1700px] pb-20 mx-auto px-20 max-tablet:px-10 max-tablet:px-5 pt-10'>
            <div className='flex justify-between max-tablet:flex-col max-tablet:items-center'>
                <h1 className='flex gap-2 text-xl max-tablet:text-xl max-tablet:mb-5'>
                    <span>Popular </span>
                    <span className='text-mainBlue'>real estates</span>
                </h1>
                <div className='flex gap-6 max-tablet:w-full max-tablet:justify-between'>
                    <div className='p-2 bg-blue-200 cursor-not-allowed rounded-full w-[2em] h-[2em] flex text-white'>
                        <ListIcon className='m-auto' />
                    </div>
                    <div className='flex gap-5 font-light overflow-hidden' >
                        <div className='text-center px-6 py-1 border rounded-xl border-black cursor-pointer duration-200'>
                            All
                        </div>
                        <div className='text-center px-6 py-1 border rounded-xl hover:border-black cursor-pointer duration-200'>
                            Home
                        </div>
                        <div className='text-center px-6 py-1 border rounded-xl hover:border-black cursor-pointer duration-200'>
                            Tsehay
                        </div>
                        <div className='text-center px-6 py-1 border rounded-xl hover:border-black cursor-pointer duration-200'>
                            Gift
                        </div>
                        <div className='text-center px-6 py-1 border rounded-xl hover:border-black cursor-pointer duration-200'>
                            Flintstone
                        </div>
                    </div>

                    <div className='p-2 bg-mainBlue cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
                        <ListIcon className='m-auto rotate-180' />
                    </div>
                </div>
            </div>
            <div className='mt-10 grid max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-tablet:gap-15 grid-cols-3 gap-10'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    </div>
  )
}

export default realestates

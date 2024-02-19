"use client" 
import Image from "next/image"; 
import Link from "next/link";
import img1 from "../../assets/images/Rectangle 17.png"
import img2 from "../../assets/images/Rectangle 25.png"
import img4 from "../../assets/images/Rectangle 27.png"
import img5 from "../../assets/images/Rectangle 28.png"

import goImage from "../../assets/images/go.svg"

const view = () => {
  return (
    <div className="h-fit  pt-10 max-tablet:pt-32 flex mb-[8em] ">
        <div className=' w-full max-w-[1700px] mx-auto flex flex-col items-center px-20 max-small:px-5 max-tablet:px-10'>
        <p className='text-blue-400 text-center text-lg font-light'>Real estates across the town</p>
        <div className='text-[45px] max-tablet:text-[35px]  font-semibold text-center'>View our featured top <span className='text-blue-600'>real estates.</span>  </div>
        <Link href={"/recommendation"}  className='flex gap-2 mt-8 px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue max-mobile:w-full max-mobile:justify-center w-fit  text-white mx-auto text-lg'>
            <span>view real state</span>
            <Image src={goImage} alt="" className="my-auto w-6" />
         </Link>
        <div className='flex  gap-7 mt-12  w-full max-tablet:flex-col '>

                <div className='flex flex-col gap-10 w-1/2 max-tablet:w-full '>
                    
                    <div className='flex justify-between gap-10 max-mobile:flex-col'>
                        <div className='relative w-full '>
                            <Image src={img1} alt="" className="w-full max-mobile:max-h-[300px] object-cover rounded-3xl" />
                            <div className='absolute bottom-5 left-5 text-white'>
                                <div className='text-[35px]  max-mobile:text-[40px]'>234</div>
                                <p className='text-xl max-tablet:lg font-light '>Flintstone Homes</p>
                            </div>
                        </div>
                        <div className='relative w-full '>
                            <Image src={img2} alt="" className="w-full  max-mobile:max-h-[300px] object-cover rounded-3xl" />
                            <div className='absolute bottom-5 left-5 text-white'>
                                <div className='text-[35px]  max-mobile:text-[40px]'>234</div>
                                <p className='text-xl max-tablet:lg font-light '>Flintstone Homes</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-full  '>
                        <Image src={img4} alt="" className="w-full" />
                        <div className='absolute bottom-5 left-5 text-white'>
                            <div className='text-[35px]  max-mobile:text-[40px]'>234</div>
                            <p className='text-xl max-tablet:lg font-light '>Flintstone Homes</p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-10 my-auto max-tablet:w-full w-1/2'>

                    <div className='relative w-full '>
                        <Image src={img4} alt="" className="w-full" />
                        <div className='absolute bottom-5 left-5 text-white'>
                            <div className='text-[35px]  max-mobile:text-[40px]'>234</div>
                            <p className='text-xl max-tablet:lg font-light '>Flintstone Homes</p>
                        </div>
                    </div>

                    <div className='relative w-full '>
                        <Image src={img5} alt="" className="w-full" />
                        <div className='absolute bottom-5 left-5 text-white'>
                            <div className='text-[35px]  max-mobile:text-[40px]'>234</div>
                            <p className='text-xl max-tablet:lg font-light '>Flintstone Homes</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default view

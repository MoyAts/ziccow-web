"use client" 
import Image from "next/image"; 
import img1 from "../../assets/images/solar_city-bold-duotone (1).svg"


const propertyTypes = () => {
  return (
    <div className="w-full bg-mainDark">
      <div className='h-[50vh] text-white py-10 w-full max-w-[1700px] max-h-[400px] max-tablet:h-fit mx-auto px-20 '>
        <h1 className='text-xl max-tablet:text-center'>Property Types</h1>
        <div className='grid grid-cols-3 font-light mt-10 justify-between'>
             <div className='flex gap-5'>
                <div className="w-fit flex flex-col justify-center gap-3">
                    <Image className='w-1/2 mx-auto' src={img1} alt="" />
                    <h4 className='mx-auto'>Private House</h4>
                    <p className='text-xs mx-auto'>12 Properties</p>
                </div>
                <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              </div>
              <div className='flex gap-5'>
                <div className="w-fit flex flex-col justify-center gap-3">
                    <Image className='w-1/2 mx-auto' src={img1} alt="" />
                    <h4 className='mx-auto'>Private House</h4>
                    <p className='text-xs mx-auto'>12 Properties</p>
                </div>
                <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              </div>
              <div className='flex gap-5'>
                <div className="w-fit flex flex-col justify-center gap-3">
                    <Image className='w-1/2 mx-auto' src={img1} alt="" />
                    <h4 className='mx-auto'>Private House</h4>
                    <p className='text-xs mx-auto'>12 Properties</p>
                </div>
                <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              </div>
              <div className='flex gap-5'>
                <div className="w-fit flex flex-col justify-center gap-3">
                    <Image className='w-1/2 mx-auto' src={img1} alt="" />
                    <h4 className='mx-auto'>Private House</h4>
                    <p className='text-xs mx-auto'>12 Properties</p>
                </div>
                <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              </div>
              <div className='flex gap-5'>
                <div className="w-fit flex flex-col justify-center gap-3">
                    <Image className='w-1/2 mx-auto' src={img1} alt="" />
                    <h4 className='mx-auto'>Private House</h4>
                    <p className='text-xs mx-auto'>12 Properties</p>
                </div>
                <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              </div>
              <div className='flex gap-5'>
                <div className="w-fit flex flex-col justify-center gap-3">
                    <Image className='w-1/2 mx-auto' src={img1} alt="" />
                    <h4 className='mx-auto'>Private House</h4>
                    <p className='text-xs mx-auto'>12 Properties</p>
                </div>
                <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              </div>
             
        </div>
      </div>
    </div>
  )
}

export default propertyTypes

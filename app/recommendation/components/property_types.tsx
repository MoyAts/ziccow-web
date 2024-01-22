import img1 from "../../assets/images/solar_city-bold-duotone (1).svg"
import Image from "next/image"

const propertyTypes = () => {
  return (
    <div className="w-full bg-mainDark">
      <div className='h-[50vh] text-white py-10 w-full max-w-[1700px] max-h-[400px] mx-auto px-[10em]'>
        <h1 className='text-xl'>Property Types</h1>
        <div className='flex font-light mt-10 justify-between'>
              <div className='w-fit flex flex-col justify-center gap-3'>
                  <Image className='w-1/2 mx-auto' src={img1} alt="" />
                  <h4 className='mx-auto'>Private House</h4>
                  <p className='text-xs mx-auto'>12 Properties</p>
              </div>
              <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              <div className='w-fit flex flex-col justify-center gap-3'>
                  <Image className='w-1/2 mx-auto' src={img1} alt="" />
                  <h4 className='mx-auto'>Private House</h4>
                  <p className='text-xs mx-auto'>12 Properties</p>
              </div>
              <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              <div className='w-fit flex flex-col justify-center gap-3'>
                  <Image className='w-1/2 mx-auto' src={img1} alt="" />
                  <h4 className='mx-auto'>Private House</h4>
                  <p className='text-xs mx-auto'>12 Properties</p>
              </div>
              <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              <div className='w-fit flex flex-col justify-center gap-3'>
                  <Image className='w-1/2 mx-auto' src={img1} alt="" />
                  <h4 className='mx-auto'>Private House</h4>
                  <p className='text-xs mx-auto'>12 Properties</p>
              </div>
              <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              <div className='w-fit flex flex-col justify-center gap-3'>
                  <Image className='w-1/2 mx-auto' src={img1} alt="" />
                  <h4 className='mx-auto'>Private House</h4>
                  <p className='text-xs mx-auto'>12 Properties</p>
              </div>
              <div className='my-auto h-[3em] w-[1px] bg-slate-300'></div>
              <div className='w-fit flex flex-col justify-center gap-3'>
                  <Image className='w-1/2 mx-auto' src={img1} alt="" />
                  <h4 className='mx-auto'>Private House</h4>
                  <p className='text-xs mx-auto'>12 Properties</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default propertyTypes

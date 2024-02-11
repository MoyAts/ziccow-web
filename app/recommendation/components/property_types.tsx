"use client" 
import Image from "next/image"; 
import img1 from "../../assets/images/solar_city-bold-duotone (1).svg"


const propertyTypes = () => {
  return (
    <div className="w-full bg-mainDark">
      <div className='h-[50vh] text-white py-10 w-full max-w-[1700px] max-h-[400px] max-tablet:h-fit mx-auto px-20 max-tablet:px-10 max-mobile:px-5 '>
        <h1 className='text-xl max-tablet:text-center'>Property Types</h1>
         <Desktop />
         <Tablet />
      </div>
    </div>
  )
}

const Desktop = () => {
  return (
  <div className='flex max-tablet:hidden font-light mt-10 justify-between'>
  <div className='flex gap-5'>
     <div className="w-fit flex flex-col justify-center gap-3">
         <Image className='w-1/2 mx-auto' src={img1} alt="" />
         <h4 className='mx-auto'>Private House</h4>
         <p className='text-xs mx-auto'>12 Properties</p>
     </div>
   </div>
   <div className='flex gap-5'>
     <div className="w-fit flex flex-col justify-center gap-3">
         <Image className='w-1/2 mx-auto' src={img1} alt="" />
         <h4 className='mx-auto'>Private House</h4>
         <p className='text-xs mx-auto'>12 Properties</p>
     </div>
   </div>
   <div className='flex gap-5'>
     <div className="w-fit flex flex-col justify-center gap-3">
         <Image className='w-1/2 mx-auto' src={img1} alt="" />
         <h4 className='mx-auto'>Private House</h4>
         <p className='text-xs mx-auto'>12 Properties</p>
     </div>
   </div>
   <div className='flex gap-5'>
     <div className="w-fit flex flex-col justify-center gap-3">
         <Image className='w-1/2 mx-auto' src={img1} alt="" />
         <h4 className='mx-auto'>Private House</h4>
         <p className='text-xs mx-auto'>12 Properties</p>
     </div>
   </div>
   <div className='flex gap-5'>
     <div className="w-fit flex flex-col justify-center gap-3">
         <Image className='w-1/2 mx-auto' src={img1} alt="" />
         <h4 className='mx-auto'>Private House</h4>
         <p className='text-xs mx-auto'>12 Properties</p>
     </div>
   </div>
   <div className='flex gap-5'>
     <div className="w-fit flex flex-col justify-center gap-3">
         <Image className='w-1/2 mx-auto' src={img1} alt="" />
         <h4 className='mx-auto'>Private House</h4>
         <p className='text-xs mx-auto'>12 Properties</p>
     </div>
 </div>
</div>
  )
}


const Tablet = () => {
  return (
  <div className='flex flex-col tablet:hidden font-light mt-10 justify-between gap-10'>
        <div className="flex justify-between">
          <div className="w-fit flex flex-col justify-center gap-3">
                <Image className='w-1/2 mx-auto' src={img1} alt="" />
                <h4 className='mx-auto'>Private House</h4>
                <p className='text-xs mx-auto'>12 Properties</p>
            </div>
            <div className='my-auto h-[3em] max-sm:hidden w-[1px] bg-slate-300'></div>
            <div className="w-fit flex flex-col justify-center gap-3">
                <Image className='w-1/2 mx-auto' src={img1} alt="" />
                <h4 className='mx-auto'>Private House</h4>
                <p className='text-xs mx-auto'>12 Properties</p>
            </div>
            <div className='my-auto h-[3em] max-sm:hidden w-[1px] bg-slate-300'></div>
            <div className="w-fit flex flex-col justify-center gap-3">
                <Image className='w-1/2 mx-auto' src={img1} alt="" />
                <h4 className='mx-auto'>Private House</h4>
                <p className='text-xs mx-auto'>12 Properties</p>
            </div>
        </div>
        <div className="flex justify-between">
          <div className="w-fit flex flex-col justify-center gap-3">
                <Image className='w-1/2 mx-auto' src={img1} alt="" />
                <h4 className='mx-auto'>Private House</h4>
                <p className='text-xs mx-auto'>12 Properties</p>
            </div>
            <div className='my-auto h-[3em] max-sm:hidden w-[1px] bg-slate-300'></div>
            <div className="w-fit flex flex-col justify-center gap-3">
                <Image className='w-1/2 mx-auto' src={img1} alt="" />
                <h4 className='mx-auto'>Private House</h4>
                <p className='text-xs mx-auto'>12 Properties</p>
            </div>
            <div className='my-auto h-[3em] max-sm:hidden w-[1px] bg-slate-300'></div>
            <div className="w-fit flex flex-col justify-center gap-3">
                <Image className='w-1/2 mx-auto' src={img1} alt="" />
                <h4 className='mx-auto'>Private House</h4>
                <p className='text-xs mx-auto'>12 Properties</p>
            </div>
        </div>
        
        
        
        
        
    </div>
  )
}


export default propertyTypes

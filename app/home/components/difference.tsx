"use client" 
import Image from "next/image"; 
import img from "../../assets/images/Mask group (2).png"

const difference = () => {
  return (
    <div className="w-full">
        <div id='services' className='h-[100vh] max-w-[1700px] mx-auto  max-h-[700px]   flex px-20  ' >
            <div className='flex flex-col my-auto gap-3 w-6/12 '>
                <h4 className='text-lg text-blue-500 leading-'>What makes us different?</h4>
                <h1 className='text-[54px] w-full' style={{lineHeight:1}}>
                    <span className=''>
                        We assist buyers in finding their  
                    </span>
                    <span className='text-blue-500 ms-2 '>
                        dream homes.
                    </span>
                </h1>
                <p className='text-lg w-4/5 text-gray-700 mt-3'>
                    Our agents will guide you through the entire buying process, from property.
                </p>
            </div>
            <div className='flex w-1/2 myauto  '>
                <div className="my-auto w-full"> 
                    <Image src={img} alt="" className='w-full object-cover' />
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default difference

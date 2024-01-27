"use client" 
import Image from "next/image"; 
import img1 from "../../assets/images/solar_shield-check-bold-duotone.svg"
import img2 from "../../assets/images/solar_medal-ribbons-star-bold-duotone.png"

const help = () => {
  return (
    <div className="w-full bg-lightBg">
      <div className='px-20 pt-12 h-[100vh] max-w-[1700px] max-h-[600px]  mx-auto flex flex-col'>
          <h2 className='text-center text-3xl'>Discover our <span className='text-blue-600'>unique benefits.</span> </h2>
          <p className='text-center mt-3 px-32 text-gray-500 mb-5'>
            If you’re looking for a property to buy, sell or rent you can be sure that we will be providing you a better service than any other company with such services. 
          </p>

          <div className='flex justify-between mt-12 gap-10'>
            
          <div className='bg-white w-fit px-5 py-8 rounded-3xl group duration-200 shadow hover:-translate-y-2 flex flex-col gap-4'>
                <Image src={img1} className='m-auto group-hover:rotate-[360deg] duration-200' alt="" />
                <h1 className='text-center text-lg font-semibold'>
                    Reliability
                </h1>
                <p className='m-auto w-4/5 text-center text-gray-600'>
                    We keep our promises, providing upfront timelines and bringing predictability.
                </p>
            </div>

            <div className='bg-white w-fit px-5 py-8 rounded-3xl group duration-200 shadow hover:-translate-y-2 flex flex-col gap-4'>
                <Image src={img2} className='m-auto  group-hover:rotate-[360deg] duration-200' alt="" />
                <h1 className='text-center text-lg font-semibold'>
                    Quality First
                </h1>
                <p className='m-auto w-4/5 text-center text-gray-600'>
                    All projects are backed by our fantastic support and 100% satisfaction guarantee.
                </p>
            </div>

            <div className='bg-white w-fit px-5 py-8 rounded-3xl group duration-200 shadow hover:-translate-y-2 flex flex-col gap-4'>
                <Image src={img1} className='m-auto  group-hover:rotate-[360deg] duration-200' alt="" />
                <h1 className='text-center text-lg font-semibold'>
                    Competitive Pricing
                </h1>
                <p className='m-auto w-4/5 text-center text-gray-600'>
                    Offering you a very competitive price without compromising on quality.
                </p>
            </div>

          

          </div>
        </div>
    </div>
  )
}

export default help

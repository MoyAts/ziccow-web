import Image from 'next/image'
import Header from '../components/header'
import bg from '/public/unsplash_B0aCvAVSX8E.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-[#CCE3FC]">
      <Header />
      <div className='w-full flex justify-center px-10 pt-[163px]' style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom', backgroundPositionX: 'right' }}>
        <div className='w-full max-w-[1080px] bg-gradient-conic ' >
          <div className='flex flex-col gap-[16px] w-[425px]'>
            <h1 className='font-Lexend text-[57px] leading-[64px]' >Find a home that suits you.</h1>
            <p className='text-[22px] leading-[28px] text-[#6D6C6E]'>Want to find a suitable home? We are ready to help you find one that suits your lifestyle and needs.</p>
            <div className='flex w-full gap-3 justify-between pt-8 pb-[90px]'>
              <div className=''>
                <h1 className='font-Lexend text-[24px] font-medium'>12 Years</h1>
                <p className='text-sm font-medium text-[#6D6C6E]'>Experience</p>
              </div>
              <div className=''>
                <h1 className='font-Lexend text-[24px] font-medium'>12 Years</h1>
                <p className='text-sm font-medium text-[#6D6C6E]'>Experience</p>
              </div>
              <div className=''>
                <h1 className='font-Lexend text-[24px] font-medium'>12 Years</h1>
                <p className='text-sm font-medium text-[#6D6C6E]'>Experience</p>
              </div>
            </div>
          </div>
          <form className='flex w-full justify-center pb-[90px]'>
            <label className=" mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className=" w-[916px] block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
          </form>
        </div>
      </div>
      
    </main>
    
  )
}


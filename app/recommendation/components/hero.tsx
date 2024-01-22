import bg from "../../assets/images/unsplash_B0aCvAVSX8E.png"
import Nav from "../../components/nav"

import Image from "next/image"

const hero = () => {
  return (
    <div className='w-full  relative z-20 flex flex-col'>
        <Nav withsearch={true} />
        <div className='absolute left-0 right-0 bottom-0 top-0 bg-mainDark opacity-[85%] z-10'></div>
        <div className="w-full max-w-[1700px] items-center  h-[100vh] max-h-[750px] relative flex mx-auto">
            <Image src={bg} className='absolute w-7/12 bottom-0 right-0 -z-10 ' alt="" />
            <div  className=' px-[5em] z-50 flex flex-col  text-white text-3xl'>
                <h1 className='text-[45px] flex flex-col gap-2'>
                    <span >
                        Discover new products and  
                    </span>
                    <span>
                        possibilities
                    </span>
                </h1>
                <p className='text-sm mt-8 flex flex-col font-light'>
                    <span>
                        Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term 
                    </span>
                    <span>
                        value and drive economic growth.
                    </span>
                </p>

                <div className='flex mt-10 font-light text-sm justify-between gap-12'>
                
                    <div className='flex flex-col group px-2 py-4 duration-300 rounded-lg hover:bg-gray-400 hover:bg-opacity-50'>
                        <div className='h-[4px] w-full bg-slate-500 group-hover:bg-mainBlue'></div>
                        <h1 className='font-semibold my-2'>Extraordinary</h1>
                        <p>
                            Provide a robust synopsis for high level overviews and iterative approaches.
                        </p>
                    </div>
                    
                    <div className='flex flex-col  px-2 py-4 group duration-300 rounded-lg hover:bg-gray-400 hover:bg-opacity-50'>
                        <div className='h-[4px] w-full bg-slate-500 group-hover:bg-mainBlue'></div>
                        <h1 className='font-semibold my-2'>Extraordinary</h1>
                        <p>
                            Provide a robust synopsis for high level overviews and iterative approaches.
                        </p>
                    </div>

                    <div className='flex flex-col  px-2 py-4 group duration-300 rounded-lg hover:bg-gray-400 hover:bg-opacity-50'>
                        <div className='h-[4px] w-full bg-slate-500 group-hover:bg-mainBlue'></div>
                        <h1 className='font-semibold my-2'>Extraordinary</h1>
                        <p>
                            Provide a robust synopsis for high level overviews and iterative approaches.
                        </p>
                    </div>

                </div>

        </div>
        </div>

       

    </div>
  )
}

export default hero

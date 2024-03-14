"use client" 
import Image from "next/image"; 
import bg from "../../assets/images/unsplash_B0aCvAVSX8E.png"
import Nav from "../../_components/nav"
import { IoIosArrowBack as ListIcon} from "react-icons/io";

const hero = ({ setIsDrawer }: any) => {
  return (
    <div className='w-full  relative z-20 flex flex-col'>
        <Nav setIsDrawer={setIsDrawer} withsearch={true} />
        <div className='absolute left-0 right-0 bottom-0 top-0 bg-mainDark opacity-[85%] z-10'></div>
        <div className="w-full max-w-[1700px]  items-center  h-[100vh]   relative flex  mx-auto">
            <Image src={bg} className='absolute w-7/12 bottom-0 right-0 -z-10 ' alt="" />
            <div  className=' px-20 max-tablet:ps-10 max-mobile:px-0 z-50 flex justify-between gap-2   text-white text-3xl'>
            <div className=' my-auto bg-gray-300 bg-opacity-30 cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
               <ListIcon className='m-auto' />
            </div>
              <div className="flex flex-col ">
                    <h1 className='text-[45px] ps-12 max-mobile:px-5  flex flex-col gap-2 pe-10'>
                        <span >
                            Discover new products and  
                        </span>
                        <span>
                            possibilities
                        </span>
                    </h1>
                    <p className='ps-12 text-lg max-w-[80%] mt-8 max-mobile:px-5 flex gap-2 flex-wrap font-light'>
                        Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
                <div className=' my-auto bg-gray-300 bg-opacity-30 cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
                    <ListIcon className='m-auto rotate-180' />
                </div>
   

                {/* <div className='flex overflow-auto max-mobile:px-5 max-mobile:flex-col w-fit   mt-10 font-light text-sm justify-between gap-12'>
                
                    <div className='flex max-mobile:min-w-full shrink-0  max-mobile:w-full  mobile:max-w-[300px] flex-col group px-2 py-4 duration-300 rounded-lg hover:bg-gray-400 hover:bg-opacity-50'>
                        <div className='h-[4px] w-full bg-slate-500 group-hover:bg-mainBlue'></div>
                        <h1 className='font-semibold my-2'>Extraordinary</h1>
                        <p className="flex flex-wrap w-full ">
                            Provide a robust synopsis for high level overviews and iterative approaches.
                        </p>
                    </div>
                    
                    <div className='flex max-mobile:min-w-full shrink-0  max-mobile:w-full  mobile:max-w-[300px] flex-col  px-2 py-4 group duration-300 rounded-lg hover:bg-gray-400 hover:bg-opacity-50'>
                        <div className='h-[4px] w-full bg-slate-500 group-hover:bg-mainBlue'></div>
                        <h1 className='font-semibold my-2'>Extraordinary</h1>
                        <p className="flex flex-wrap w-full ">
                            Provide a robust synopsis for high level overviews and iterative approaches.
                        </p>
                    </div>

                    <div className='flex max-mobile:min-w-full shrink-0  max-mobile:w-full  mobile:max-w-[300px] flex-col  px-2 py-4 group duration-300 rounded-lg hover:bg-gray-400 hover:bg-opacity-50'>
                        <div className='h-[4px] w-full bg-slate-500 group-hover:bg-mainBlue'></div>
                        <h1 className='font-semibold my-2'>Extraordinary</h1>
                        <p className="flex flex-wrap w-full ">
                            Provide a robust synopsis for high level overviews and iterative approaches.
                        </p>
                    </div>

                </div> */}


        </div>
        <div className=" absolute bottom-0  w-full z-[9999] flex  text-white justify-center text-center py-4">
            <div className="px-4 bg-white bg-opacity-20 py-1 rounded-lg w-fit">2 / 3</div>
        </div>
        
        </div>

       

    </div>
  )
}

export default hero

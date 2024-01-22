import { IoIosArrowBack as ListIcon} from "react-icons/io";

const join = () => {
  return (
    <div className="w-full bg-mainDark">
        <div className='w-full border-b-[1px]  border-gray-600 max-w-[1700px] mx-auto bg-mainDark flex gap-12 py-24 px-20 text-white' >
            <div className='basis-1/2  '  >
                <h1 className='w-/3 text-[38px] flex gap-1 flex-col mb-10'>
                    <span>
                        Want to talk to become a 
                    </span>
                    <span className='text-mainBlue leading-[12px]'>
                        real estate agent 
                        <span className="text-white"> ?</span>
                    </span> 
                </h1>
                <p className='text-sm font-light '>
                    A great agent makes all the difference. Find out how real estate advertising on Ziccow can help you get more leads.
                </p>
            </div>
            <p className='basis-1/2 text-sm my-auto flex text-gray-400 '>
                <button className='flex gap-2 m-auto text-lg px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white '>
                    <span className=''>Join out agents</span>
                    <div className='m-auto border p-1 rounded-lg'>
                        <ListIcon className='rotate-180' />
                    </div>
                </button> 
            </p>
    </div>
    </div>
  )
}

export default join

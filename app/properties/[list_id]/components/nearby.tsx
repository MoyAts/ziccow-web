"use client" 
import { IoIosArrowBack  as NextButton} from "react-icons/io";
import Property from "./property";
const nearby = () => {
  return (
    <div className='mt-12 h-fit mb-12'>
        <div className="flex justify-between">
            <div className='font-semibold text-xl '>Nearby Properties</div>
            <div className="flex gap-4 my-auto">
                <div className="p-2 bg-blue-200 rounded-full cursor-pointer">
                    <NextButton />
                </div>
                <div className="p-2 bg-mainBlue rounded-full cursor-pointer text-white">
                    <NextButton className="rotate-180" />
                </div>
            </div>
        </div>
        <div className="flex w-full overflow-auto gap-6 mt-12">
            <Property  />
            <Property  />
            <Property  />
            <Property  />
            <Property  />
            <Property  />
        </div>
    </div>
  )
}

export default nearby
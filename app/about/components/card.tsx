"use client" 
import Image from "next/image"; 
import photoImg from "../../assets/images/person.png"

const card = () => {
  return (
    <div className='w-1/3 max-tablet:w-1/2 max-sm:w-full shrink-0  h-1/3 max-tablet:h-full'>
        <div className="w-full relative ">
            <Image src={photoImg} className="w-full" alt="" />
            <div className="absolute top-0 right-0 border border-[#C2BFC4] text-[#555456] px-3 py-1 rounded-3xl">CEO and Founder</div>
        </div>
        <div className="flex flex-col gap-2 bg-white rounded-b-lg py-2 px-4 pb-5">
            <p className="font-bold pt-3">John Carter</p>
            <p>
                Semper phasellus eget eu egestas odio pretium aliquam ipsum quam augue.
            </p>
        </div>
    </div>
  )
}

export default card

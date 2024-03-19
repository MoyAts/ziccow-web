"use client"
import Image from "next/image";
import goImg from "../assets/images/go.svg"

const join = () => {
    return (
        <div className="w-full bg-mainDark flex justify-center ">
            <div className='w-full border-b-[1px]  border-gray-600  max-w-[1560px] max-tablet:px-10 px-20 bg-mainDark flex max-tablet:flex-col max-tablet:gap-8 max-mobile:px-5 gap-12 py-24 text-white' >
                <div className='basis-2/3 max-tablet:basis-1'  >
                    <div className='text-[45px] max-tablet:text-center max-tablet:text-[35px]  flex-col max-tablet:mb-4 mb-10'>
                        <span>
                            Want to talk to become a &nbsp;
                        </span>
                        <span className='text-mainBlue leading-[12px]'>
                            real estate agent
                            <span className="text-white"> ?</span>
                        </span>
                    </div>
                    <p className='font-light max-tablet:text-center '>
                        A great agent makes all the difference. Find out how real estate advertising on Zirrow can help you get more leads.
                    </p>
                </div>
                <p className='basis-1/3 max-tablet:basis-full  max-mobile:mx-0 max-tablet:mx-auto  text-sm my-auto flex flex-row-reverse text-gray-400 '>
                    <a href="/auth/register" className='flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg max-mobile:justify-center bg-mainBlue max-mobile:w-full w-fit text-white '>
                        <span className='text-[16px]'>Join out agents</span>
                        <Image src={goImg} className="w-6 my-auto" alt="" />
                    </a>
                </p>
            </div>
        </div>
    )
}

export default join

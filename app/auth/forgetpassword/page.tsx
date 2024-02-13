"use client"
import logoG from "../../assets/images/googleLogo.svg"
import img from "../../assets/images/Widget 5.svg"
import CustomeInput from "../../_components/customeInput"
import { FaCheck as CheckIcon } from "react-icons/fa6";
import bg from "../../assets/images/Background.png"
import checkImg from "../../assets/images/confirm.svg"

import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className='h-fit min-h-[100vh] bg-red w-full relative flex text-sm' style={{background:"#CCE3FC"}}>
        <Image src={bg} alt="" className='absolute left-0 top-0 bottom-0 right-0 w-full h-full' />
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-opacity-30 bg-lightBlue'></div>
        <div className='h-fit min-h-[100vh] w-3/5 max-lg:w-4/5 max-md:px-12 max-sm:w-full max-sm:px-5 flex z-10 mx-auto px-40 pb-20 pt-12' style={{background: "#F3EFF5"}}>

            <div className='mx-auto'>
                
                <div className='w-full my-auto justify-center flex gap-2 cursor-pointer' onClick={() => location.href = "#home"}>
                    <Image src={img} alt="" />
                    <h1 className='font-semibold text-g my-auto'>
                        Ziccow General Trading
                    </h1>
                </div>
                <p className='text-center mx-auto mt-3 pb-6 text-lightGray'>
                    Ziccow is making it simpler to sell, buy, and rent your properties to move forward.
                </p>
                <h3 className='capitalize text-xl mt-5'>Reset Password</h3>
                <div className='mx-auto mt-1 mb-2 pb-6 text-lightGray'>
                    No worries, just enter the email associated with your account and we’ll send a token to reset your password.
                </div>
                
                <form className='flex flex-col gap-7' onSubmit={e => e.preventDefault()}>
                    <CustomeInput name='a' label={"OTP"} placeholder={"OTP"}/>
                    
                    <Link href={"/auth/reset"} className='w-full flex mt-12 gap-3 justify-center hover:bg-blue-600 duration-200 bg-mainBlue py-3 text-white rounded-xl'>
                        <p className='font-semibold'>
                            create an account
                        </p>
                        <Image src={checkImg} alt={""}/>
                    </Link>

                    <div className='flex gap-10 '>
                        <div className='border-b h-[.5px] border-gray-500 w-1/2 my-auto'></div>
                        <p>or</p>
                        <div className='border-b  border-gray-500 w-1/2 my-auto'></div>
                    </div>

                    <button className='w-full border flex gap-3 justify-center bg-white py-3  rounded-xl'>
                    <Image src={logoG} alt="" />
                        <p className='font-semibold'>
                            Sign up with Google
                        </p>
                    </button>

                    <p className='flex justify-center gap-2'>
                        Already have an account? 
                        <Link href={"/auth/login"} className='text-blue-800 font-bold'>
                            Login instead 
                        </Link>
                    </p>
                    

                </form>
            </div>


        </div>
      
    </div>
  )
}

export default index

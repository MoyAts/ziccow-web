"use client"

import logoG from "../../assets/images/googleLogo.svg";
import img from "../../assets/images/Widget 5.svg"
import CustomeInput from "../../_components/customeInput"
import bg from "../../assets/images/Background.png"
import Link from "next/link";
import Image from "next/image";
import goImage from "../../assets/images/go.svg"
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {REGISTER_GQL} from "../../../graphql/auth"
import Error from "@/app/_components/error";
import ClientError from "@/app/_components/clientError";

interface DataInt {
    firstName : "",
    lastName : "",
    phone : "",
    email : "",
    password : "",
    confirm : "",
}

const Register = () => {
    const initialData : { [key: string]: string } = {
        firstName : "",
        lastName : "",
        phone : "",
        email : "",
        password : "",
        confirm : "",
    }
    const initialError = {
        firstName : null,
        lastName : null,
        phone : null,
        email : null,
        password : null,
        confirm : null,
    }
    const [form,setForm] = useState(initialData)
    const [formError,setFormError] = useState("")

    const setChange = ({ target } : any) =>{ 
        setForm(data => ({...data,[target.name] : target.value}))
    }

    const checkError = () : boolean =>{
        for (let key in form) {
            if (form.hasOwnProperty(key)) {
                if(form[key] == "" && key != "phone"){
                    setFormError(`${key} is required`)
                    return false
                }
            }
        }
        if(form.confirm != form.password){
            setFormError(`Wrong confirm password is required`)
            return false
        }
        setFormError("")
        return true
    }    


    const [signup,{loading,error,data}] = useMutation(REGISTER_GQL)
    
    if(data){
        console.log(data)
        location.href = "/auth/login"
    }

    const submit = () => {
        if(checkError()){
            signup({
                variables : {
                    ...form,
                }
            })
        }
    }

    return (
        <div className='h-fit min-h-[100vh] bg-red w-full relative flex text-sm' style={{background:"#CCE3FC"}}>
                <Image src={bg} alt="" className='absolute left-0 top-0 bottom-0 right-0 w-full h-full' />
                <div className='absolute left-0 right-0 top-0 bottom-0 bg-opacity-30 bg-lightBlue'></div>
            <div className='h-fit min-h-[100vh] w-3/5 max-lg:w-4/5 max-tablet:px-10 max-sm:w-full max-sm:px-5 flex z-10 mx-auto px-40  pb-20 pt-12' style={{background: "#F3EFF5"}}>

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
                    <h3 className='capitalize text-xl my-5 font-semibold'>Sign up</h3>
                    <Error error={error} />
                    {formError && <ClientError error={formError} />}
                    <form className='flex flex-col gap-7' onSubmit={e => e.preventDefault()}>
                        <div className="flex justify-between gap-7 max-mobile:flex-col">
                            <CustomeInput name='firstName' onChange={setChange} label={"First Name"} placeholder={"first name"} divClass="w-full"/>
                            <CustomeInput name='lastName' onChange={setChange} label={"Last Name"} placeholder={"last name"} divClass="w-full"/>
                        </div>
                        <CustomeInput name='phone' onChange={setChange} label={"phone number"} placeholder={"phone number"}/>
                        <CustomeInput name='email' onChange={setChange} label={"email address"} placeholder={"email"}/>
                        <CustomeInput name='password' onChange={setChange} pass={true} label={"create password"} placeholder={"password"} />
                        <CustomeInput name='confirm' onChange={setChange} pass={true} label={"confirm password"} placeholder={"password"} />
                        <div className='ps-2 flex justify-between'>
                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='s' />
                                <p className='text-lightGray'>Remember this device</p>
                            </div>
                        </div>
                                
                        <button onClick={submit} disabled={loading} className={` w-full flex gap-3 justify-center  duration-200  py-3 text-white rounded-xl ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-mainBlue hover:bg-blue-600"}`}>
                            
                            <p className='font-semibold'>
                               {loading ? "Loading...": "create an account"} 
                            </p>
                            <Image src={goImage} alt="" className="my-auto w-6" />

                        </button>


                        <div className='flex gap-10'>
                            <div className='border-b h-[.5px] border-gray-500 w-1/2 my-auto'></div>
                            <p className='font-semibold '>or</p>
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

export default Register

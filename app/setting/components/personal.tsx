import React, { useRef, useState } from 'react'
import CustomeInput from '@/app/_components/customeInput'
import goImg from "../../assets/images/go.svg"
import Image from 'next/image'
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '@/graphql/features/user'
import Error from '@/app/_components/error'
import { useSelector,useDispatch } from 'react-redux'
import { getState,UserFromApi,userFetched } from "@/store/features/auth/authSlice"

interface formInf{
    firstName : string,
    lastName : string,
    phone : string,
    email : string,
    userName : string,
}

const Personal = () => {
    const initialData : formInf = {
        firstName : "",lastName : "" , email : "", phone : "",userName : ""
    }
    const dispatch = useDispatch()
    const [updateUser,{loading,error,data,reset}] = useMutation(UPDATE_USER)
    const [form,setForm] = useState<formInf>(initialData)
    const [err,setErr] = useState<string | null>(null)
    const errRef = useRef<any>(null)
    const onChange = ({ target } : any) => setForm((data) => ({...data,[target.name] : target.value}))
    const userData = useSelector(getState)
    const scrollToTop = () => {
        errRef && errRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center", 
        });
    }
    if(data){
        const userData = data.update_user.returning[0]
        const userFromApi : UserFromApi = {
            email : userData.email,
            first_name : userData.first_name,
            last_name : userData.last_name,
            user_id : userData.user_id
        }
        dispatch(userFetched(userFromApi))
        scrollToTop()
        alert("You successfuly updated your status.")
        reset()
    }
    if(error){
        scrollToTop()
        console.log("error")
    }
    if(loading){
        console.log("loading")
    }
    const submit = () => {
        if(form.firstName.length < 2){
           scrollToTop()
           return setErr("invalid first name")
        } 
        if(form.lastName.length < 2){
            scrollToTop()
            return setErr("invalid last name")
        } 
        if(form.email.length < 2){
            scrollToTop()
            return setErr("invalid email")
        } 
        if(form.phone.length < 2){
            scrollToTop()
            return setErr("invalid phone number")
        } 
        setErr(null)
        updateUser({ variables : {
            _eq : userData.user.userId,
            first_name : form.firstName,
            last_name : form.lastName,
            email : form.email,
            phone_number : form.phone,
        }})
    }
  return (
    <div className='w-full '>
       <h2 ref={errRef} className='text-2xl font-semibold mb-8'>Profile Information</h2>  
        <Error error={error ? error : err}/>
        <div>

        </div>
        <form action=" mt-8" onSubmit={(e) => e.preventDefault()}>
            <div className='flex justify-between gap-5'>
                <CustomeInput name="firstName" value={form.firstName} onChange={onChange} divClass='w-full' label='Full Name' placeholder='Enter your name'  />
                <CustomeInput name="lastName" value={form.lastName} onChange={onChange} divClass='w-full' label='Full Name' placeholder='Enter your name'  />
            </div>
            <p className='text-sm my-2 text-lightGray mb-7'>Your first and last given names.</p>
            <CustomeInput  name="userName" value={form.userName} onChange={onChange} label='User Name' placeholder='Enter your name'  />
            <p className='text-sm my-2 text-lightGray mb-7'>Your screen name across the platform.</p>
            <div className='flex gap-5 w-full '>
                <CustomeInput name="phone" value={form.phone} onChange={onChange} label='Phone Number' placeholder='Enter your phone number' divClass='w-full'  />
                <CustomeInput name="email" value={form.email} onChange={onChange} label='Email Address' placeholder='Enter your email' divClass='w-full'  />
            </div>
            <div className='flex justify-between mt-8'>
                <button className='px-2 py-2 text-mainBlue'> Cancel </button>
                <button onClick={submit} className='flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white '>
                    <Image src={goImg} className="w-6 my-auto" alt="" />
                    <span className='text-[16px] my-auto'>
                    {loading ? "loading" : "Save Changes"}   
                    </span>
                </button> 

            </div>
        </form>
    </div>
  )
}

export default Personal

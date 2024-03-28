import React, { useRef, useState } from 'react'
import CustomeInput from '@/app/_components/customeInput'
import goImg from "../../../assets/images/go.svg"
import Image from 'next/image'
import { useMutation, useQuery } from '@apollo/client'
import { GET_USER_SETTING, UPDATE_USER } from '@/graphql/features/user'
import Error from '@/app/_components/error'
import { useSelector,useDispatch } from 'react-redux'
import { getState,UserFromApi,userFetched } from "@/store/features/auth/authSlice"

interface formInf{
    firstName : string,
    lastName : string,
    phone : string,
    email : string,
    userName : string,
    twitter : string,
    facebook : string,
    whatsapp : string,
    instagram : string,
}

const Personal = () => {
    const userData : any = useSelector(getState)
    const initialData : formInf = {
        firstName: "", lastName: "", email: "", phone: "", userName: "",
        twitter: '',
        facebook: '',
        whatsapp: '',
        instagram: ''
    }
    const dispatch = useDispatch()
    const getUserState = useQuery(GET_USER_SETTING,{
        variables : {
            user_id : userData.user.userId,
        },
        onCompleted : () =>{
            const fetchedUser = getUserState.data.user_by_pk
            console.log(fetchedUser,"fetched")
            setForm((data) => ({
                        ...data,
                        "firstName" : fetchedUser.first_name,"lastName" : fetchedUser.last_name,
                        "email" : fetchedUser.email,"phone" : fetchedUser.phone_number,
                        "twitter" : fetchedUser.social_twitter,
                        "facebook" : fetchedUser.social_facebook,
                        "instagram" : fetchedUser.social_instagram,
                        "whatsapp" : fetchedUser.social_whatsapp,
                    
                    }))
        }
    })
    
    
    const [updateUser,{loading,error,data,reset}] = useMutation(UPDATE_USER)
    const [form,setForm] = useState<formInf>(initialData)
    const [err,setErr] = useState<string | null>(null)
    const errRef = useRef<any>(null)
    
    const onChange = ({ target } : any) => setForm((data) => ({...data,[target.name] : target.value}))
    
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
            user_id : userData.user_id,
            onboarding_complete : userData.onboarding_complete,
            internal_agent : false
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
            twitter : form.twitter,
            facebook : form.facebook,
            instagram : form.instagram,
            whatsapp : form.whatsapp,
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
                <CustomeInput name="firstName" value={form.firstName} onChange={onChange} divClass='w-full' label='First Name' placeholder='Enter your name'  />
                <CustomeInput name="lastName" value={form.lastName} onChange={onChange} divClass='w-full' label='Last Name' placeholder='Enter your name'  />
            </div>
            <p className='text-sm my-2 text-lightGray mb-7'>Your first and last given names.</p>
           <div className='flex gap-5 w-full mb-5'>
                <CustomeInput name="phone" value={form.phone} onChange={onChange} label='Phone Number' placeholder='Enter your phone number' divClass='w-full'  />
                <CustomeInput name="email" value={form.email} onChange={onChange} label='Email Address' placeholder='Enter your email' divClass='w-full'  />
            </div>
            <p className='text-xl font-semibold mb-2'>Social Media</p>
            <p className='text-sm my-2 text-lightGray mb-7'>Your social media links.</p>
            
            <div className='flex gap-5 w-full mb-5'>
                <CustomeInput name="whatsapp" value={form.whatsapp} onChange={onChange} label='Whatsapp' placeholder='Enter your whatsapp' divClass='w-full'  />
                <CustomeInput name="facebook" value={form.facebook} onChange={onChange} label='Facebook' placeholder='Enter your facebook' divClass='w-full'  />
            </div>
            <div className='flex gap-5 w-full mb-5'>
                <CustomeInput name="instagram" value={form.instagram} onChange={onChange} label='Instagram' placeholder='Enter your instagram' divClass='w-full'  />
                <CustomeInput name="twitter" value={form.twitter} onChange={onChange} label='Twitter' placeholder='Enter your twitter' divClass='w-full'  />
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

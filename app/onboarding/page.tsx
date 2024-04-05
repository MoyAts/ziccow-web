"use client"
import { useState } from "react"

import img from "../assets/images/Widget 5.svg"
import CustomeInput from "../_components/customeInput"
import bg from "../assets/images/Background.png"
import Link from "next/link";
import Image from "next/image";
import goImage from "../assets/images/go.svg"
import { useMutation } from "@apollo/client"
import { ADD_ONBOARDING_DATA } from "../../graphql/features/user"
import { useDispatch } from "react-redux"
import AddLanguage from "./components/addlanguage"

const LoginPage = () => {
    const dispatch = useDispatch()
    // const router = useRouter();
    const [language, setLanguage] = useState('');
    const [education, setEducation] = useState('');
    const [work, setWork] = useState('');
    const [uierror,setUierror] = useState('')
    const [login,{loading,error,data}] = useMutation(ADD_ONBOARDING_DATA, {
        fetchPolicy : "no-cache"
    })
   
  
    if(data) {
        console.log(data)
        if (typeof window !== "undefined") {
            window.location.href = "/";
        }
    }
    const submit = () => {
        if(language.length < 2){
            return setUierror("invalid language preference")
        }
        if(work.length < 2){
            return setUierror("invalid work experience")
        }
        if(education.length < 2){
            return setUierror("invalid education level")
        }
        login({ variables: { 
            lang : language,
            work ,
            education ,
        }})
    }

    return (
        <div className='h-fit min-h-[100vh] bg-red w-full relative flex text-sm' style={{background:"#CCE3FC"}}>
            <Image src={bg} alt="" className='absolute left-0 top-0 bottom-0 right-0 w-full h-full' />
            <div className='absolute left-0 right-0 top-0 bottom-0 bg-opacity-30 bg-lightBlue'></div>
            <div className='h-fit min-h-[100vh] w-3/5 max-lg:w-4/5  max-sm:w-full max-sm:px-5 flex z-10 mx-auto px-40 max-tablet:px-10 pb-20 pt-12' style={{background: "#F3EFF5"}}>

                <div className='mx-auto'>
                    
                    <div className='w-full my-auto justify-center flex gap-2 cursor-pointer' onClick={() => location.href = "#home"}>
                        <Image src={img} alt="" />
                        <h1 className='font-semibold text-g my-auto'>
                            Zirrow General Trading
                        </h1>
                    </div>
                    <p className='text-center mx-auto mt-3 pb-6 text-lightGray'>
                        Zirrow is making it simpler to sell, buy, and rent your properties to move forward.
                    </p>
                    <h3 className='capitalize text-xl my-5 font-semibold'>Info</h3>
                    
                    {   (error || uierror) && 
                        <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
                            { error ?  error.graphQLErrors[0].message : uierror}
                        </div>
                    }
                    <form className='flex flex-col gap-7' onSubmit={e => e.preventDefault()}>
                        
                        <AddLanguage 
                            updateValue={setLanguage} 
                            name='language' 
                            label={"Languate Preference"} 
                            placeholder={"Language"}
                        />
                        <CustomeInput 
                            value={education} 
                            onChange={({target} : any) => setEducation(target.value)} 
                            name='education' label={"Education Level"} placeholder={"education"}
                        />
                          <CustomeInput 
                            value={work} 
                            onChange={({target} : any) => setWork(target.value)} 
                            name='work' label={"Work Experience"} placeholder={"work"}
                        />
                        <div className='ps-2 flex justify-between'>
                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='s' />
                                <p className='text-lightGray'>Remember this device</p>
                            </div>
                            <Link href={"/auth/forgetpassword"} className='text-mainBlue'>Forgot Password</Link>
                        </div>
                        <button onClick={submit} disabled={loading} className={` w-full flex gap-3 justify-center  duration-200  py-3 text-white rounded-xl ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-mainBlue hover:bg-blue-600"}`}>
                            
                            <p className='font-semibold'>
                               {loading ? "Loading...": "Login"} 
                            </p>
                            <Image src={goImage} alt="" className="my-auto w-6" />

                        </button>


                      
                    </form>
                </div>


            </div>
        
        </div>
    )
}


export default LoginPage

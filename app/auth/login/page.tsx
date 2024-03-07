"use client"
import { useState } from "react"

import logoG from "../../assets/images/googleLogo.svg"
import img from "../../assets/images/Widget 5.svg"
import CustomeInput from "../../_components/customeInput"
import bg from "../../assets/images/Background.png"
import Link from "next/link";
import Image from "next/image";
import goImage from "../../assets/images/go.svg"
import { useMutation } from "@apollo/client"
import { LOGIN_GQL,LOGIN_SOCIAL_MEDIA } from "../../../graphql/features/auth"
import { saveUser } from "../../../lib/auth"
import { useDispatch } from "react-redux"
import { loginUser } from "@/store/features/auth/authSlice"
import { useRouter } from 'next/navigation';
import { loginWithEmail } from "@/utils/firebase";
import { FaPhone } from "react-icons/fa6";

const LoginPage = () => {
    
    const dispatch = useDispatch()
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [temp,setTemp] = useState(false)
    const [login,{loading,error,data}] = useMutation(LOGIN_GQL, {
        fetchPolicy : "no-cache"
    })
    const [login2,responses] = useMutation(LOGIN_SOCIAL_MEDIA, {
        fetchPolicy : "no-cache"
    })
    const loginEmail = async () => {
        const data : any = await loginWithEmail()
        const token = data.user.accessToken
        login2({
            variables : {
                token 
            }
        })
    }
    if(responses.data){
        const { socialLogin } = responses.data 
        dispatch(loginUser({token:socialLogin.token, userId : socialLogin.user.user_id}))
        location.href = "/"
    }
    if(responses.error){
        console.log(responses.error)
        console.log(error)
    }
    if(responses.loading){
        console.log("loading...")
    }
    if(data) {
        console.log(data)
        dispatch(loginUser({token:data.loginEmail.token, userId : data.loginEmail.user.user_id}))
        location.href = "/"
    }
    const submit = () => {
        login({ variables: { email, password },})
    }

    return (
        <div className='h-fit min-h-[100vh] bg-red w-full relative flex text-sm' style={{background:"#CCE3FC"}}>
            <Image src={bg} alt="" className='absolute left-0 top-0 bottom-0 right-0 w-full h-full' />
            <div className='absolute left-0 right-0 top-0 bottom-0 bg-opacity-30 bg-lightBlue'></div>
            <div className='h-fit min-h-[100vh] w-3/5 max-lg:w-4/5  max-sm:w-full max-sm:px-5 flex z-10 mx-auto px-40 max-tablet:px-10 pb-20 pt-12' style={{background: "#F3EFF5"}}>

                <div className='mx-auto'>
                    
                    <Link href={"/"} className='w-full my-auto justify-center flex gap-2 cursor-pointer' onClick={() => location.href = "#home"}>
                        <Image src={img} alt="" />
                        <h1 className='font-semibold text-g my-auto'>
                            Zirrow General Trading
                        </h1>
                    </Link>
                    <p className='text-center mx-auto mt-3 pb-6 text-lightGray'>
                        Zirrow is making it simpler to sell, buy, and rent your properties to move forward.
                    </p>
                    <h3 className='capitalize text-xl my-5 font-semibold'>Sign in</h3>
                    {(error || responses.error) && <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
                        { error ? error.graphQLErrors[0].message : responses.error ? responses.error.graphQLErrors[0].message : ""}
                    </div>}
                    <form className='flex flex-col gap-7' onSubmit={e => e.preventDefault()}>
                        
                        <CustomeInput value={email} onChange={({target} : any) => setEmail(target.value)} name='email' label={"email address"} placeholder={"email"}/>
                        <CustomeInput value={password} onChange={({target} : any) => setPassword(target.value)} name='' pass={true} label={"password"} placeholder={"password"} />
                        <div className='ps-2 flex justify-between'>
                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='s' />
                                <p className='text-lightGray'>Remember this device</p>
                            </div>
                            {/* <Link href={"/auth/forgetpassword"} className='text-mainBlue'>Forgot Password</Link> */}
                        </div>
                        <button onClick={submit} disabled={loading} className={` w-full flex gap-3 justify-center  duration-200  py-3 text-white rounded-xl ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-mainBlue hover:bg-blue-600"}`}>
                            
                            <p className='font-semibold'>
                               {loading ? "Loading...": "Login"} 
                            </p>
                            <Image src={goImage} alt="" className="my-auto w-6" />

                        </button>

                        <div className='flex gap-10'>
                            <div className='border-b h-[.5px] border-gray-500 w-1/2 my-auto'></div>
                            <p className='font-semibold '>or</p>
                            <div className='border-b  border-gray-500 w-1/2 my-auto'></div>
                        </div>

                        <button onClick={loginEmail} className='w-full border flex gap-3 justify-center bg-white py-3  rounded-xl'>
                            <Image src={logoG} alt="" />
                            <p className='font-semibold'>
                                Login with Google
                            </p>
                        </button>
                        <Link href={"/auth/login/phone"} className='w-full border flex gap-3 justify-center bg-white py-3  rounded-xl'>
                                <FaPhone className="my-auto" />
                                <p className='font-semibold'>
                                    Login with phone number
                                </p>
                        </Link>

                        <p className='flex justify-center gap-2'>
                            Not registered yet? 
                            <Link href={"/auth/register"} className='text-blue-800 font-bold'>
                                Create an account 
                            </Link>
                        </p>

                        

                    </form>
                </div>


            </div>
        
        </div>
    )
}


export default LoginPage

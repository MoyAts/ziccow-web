"use client"
import { useEffect, useState } from "react"

import img from "../../../assets/images/Widget 5.svg"
import CustomeInput from "../../../_components/customeInput"
import bg from "../../../assets/images/Background.png"
import Link from "next/link";
import Image from "next/image";
import goImage from "../../../assets/images/go.svg"
import { auth } from "../../../../utils/firebase"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useMutation } from "@apollo/client"
import { LOGIN_SOCIAL_MEDIA } from "@/graphql/features/auth"

const PhoneLoginPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState('');
    const [setupPhone,setSetupPhone] = useState(false)
    const [loading, setLoading] = useState(false);
    const [login2,responses] = useMutation(LOGIN_SOCIAL_MEDIA, {
        fetchPolicy : "no-cache"
    })

    const checkOtp = async () => {
        if(user){
            try{
                setLoading(true)
                const data = await user.confirm(otp)
                const token = data.user.accessToken
                login2({ variables : {
                    token
                }})
                setError("")
            }catch(e){
                setError("wron confirmation code")
                console.log(e)
            }finally{
                setLoading(false)
            }
            return
        }
    }
    const sendOtp = () => {
        if(phone && phone.length > 7){
            setLoading(true)
            const setup = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'small',
                'callback': (response : any) => {
                    console.log(response)
                    console.log("working")
                    setError("")
                },
                'expired-callback': () => {
                    console.log("expired")
                    setError("expired otp")
                    setLoading(false)
                }
            });
            signInWithPhoneNumber(auth, phone, setup)
            .then((confirmationResult) => {
                console.log(confirmationResult)
                setUser(confirmationResult)
                setSetupPhone(true)
                setError("")
            }).catch((error) => {
                console.table(error)
                setError(error.message ?? "unable to send message")
            }).finally(()=>{
                setLoading(false)
            });
        }else{
            setError("wrong phone number")
        }
    }
   
    if(responses.data){
        console.log(responses.data)
    }

    if(responses.loading){
        console.log("loading")
    }

    if(responses.error){
        console.log(responses.error)
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
                            Ziccow General Trading
                        </h1>
                    </div>
                    <p className='text-center mx-auto mt-3 pb-6 text-lightGray'>
                        Ziccow is making it simpler to sell, buy, and rent your properties to move forward.
                    </p>
                    <h3 className='capitalize text-xl my-5 font-semibold'>Sign up With Phone</h3>
                   
                    <form className='flex flex-col gap-7' onSubmit={e => e.preventDefault()}>
                    {
                    (error) && <div className="w-full rounded-xl border-2 mt-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
                        { error }
                    </div>
                    }
                        {
                            !setupPhone ? 
                            <>
                                <div id="recaptcha-container" 
                                    data-sitekey="6LcsaxsdAAAAAEBn0sPDCEncnU9564MisyRuDzD_"
                                    data-callback="sendForm"
                                    data-size="invisible">
                                </div>
                                <CustomeInput 
                                    value={phone} 
                                    onChange={({target} : any) => setPhone(target.value)} 
                                    name='phone' label={"Phone Number"} 
                                    placeholder={"phone number"}
                                /> 
                            </>
                                :
                            <CustomeInput 
                                value={otp} 
                                onChange={({target} : any) => setOtp(target.value)} 
                                name='otp' label={"Otp"} 
                                placeholder={"otp message"}
                            /> 

                        }
                        
                       {
                       !setupPhone ?
                       <button onClick={sendOtp} disabled={loading} className={` w-full flex gap-3 justify-center  duration-200  py-3 text-white rounded-xl ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-mainBlue hover:bg-blue-600"}`}>
                            
                            <p className='font-semibold'>
                               {loading ? "Loading...": "Send Otp"} 
                            </p>
                            <Image src={goImage} alt="" className="my-auto w-6" />

                        </button>
                        :
                        <button onClick={checkOtp} disabled={loading} className={` w-full flex gap-3 justify-center  duration-200  py-3 text-white rounded-xl ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-mainBlue hover:bg-blue-600"}`}>
                            
                            <p className='font-semibold'>
                            {loading ? "Loading...": "Confirm"} 
                            </p>
                            <Image src={goImage} alt="" className="my-auto w-6" />

                        </button>
                        
                        }

                        <div className='flex gap-10'>
                            <div className='border-b h-[.5px] border-gray-500 w-1/2 my-auto'></div>
                            <p className='font-semibold '>or</p>
                            <div className='border-b  border-gray-500 w-1/2 my-auto'></div>
                        </div>

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


export default PhoneLoginPage

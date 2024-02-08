import CustomeInput from '@/app/components/customeInput'
import goImg from "../../assets/images/go.svg"
import Image from 'next/image'
const security = () => {
  return (
    <div className='w-full '>
        <h2 className='text-2xl font-semibold mb-8'>Sign-in & Security</h2>  
        <form action=" mt-8">
            <div className='flex max-tablet:flex-col w-full gap-5 mb-7'>
                <CustomeInput label='Create Password' name='fullName' placeholder='Enter your password' divClass='w-full' pass={true}  />
                <CustomeInput label='Confirm Password' name='fullName' placeholder='Enter your password' divClass='w-full' pass={true}  />
            </div>
            <CustomeInput label='Google Sign-in' name='fullName' placeholder='Enter your email'  />
            <p className='text-sm mt-2 mb-7 text-lightGray'>You've linked your Google account to Ziccow and are using it to sign in.</p>
            
            <div className='mb-7 flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <p className='text-lg'>2-Step Verification</p>
                </div>
                <p className='text-lightGray'>
                    Make your account extra secure. Along with your password, you'll need to enter a code that we text to your phone each time you sign in.
                </p>
            </div>

            <div className='mb-7 flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <p className='text-lg'>Deactivate my account</p>
                </div>
                <p className='text-lightGray'>
                    This will shut down your account, but retain your information. You won't be able to sign in again until your account is reactivated.
                </p>
            </div>

            <div className='flex justify-between mt-12'>
                <button className='px-2 py-2 text-mainBlue'> Cancel </button>
                <button className='flex gap-2 text-lg px-4 py-2 hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white '>
                    <Image src={goImg} className="w-6 my-auto" alt="" />
                    <span className='text-[16px] my-auto'>Save Changes</span>
                </button> 

            </div>



        </form>
      
    </div>
  )
}

export default security

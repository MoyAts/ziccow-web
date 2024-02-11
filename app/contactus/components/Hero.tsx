"use client" 
import Image from "next/image"; 
import Link from "next/link";

import Nav from "../../components/nav"
import bg from "../../assets/images/Background_-_Copy-removebg-preview.png"
import CustomeInput from "../../components/customeInput"
const Hero = () => {
  return (
    <div className='w-full bg-[#547b87] bg-opacity-[85%]  '>
        <Nav withsearch={false} /> 
        <div className="w-full max-w-[1700px] items-center  h-[100vh]  max-tablet:h-fit max-h-[800px] relative flex mx-auto">
          <div className="absolute w-full bottom-0 ">
              <Image src={bg} alt="" className='w-full h-full object-cover max-h-[800px]'/>
          </div>
          <div className="pt-12 max-tablet:pt-5 max-tablet:pb-12   z-0 flex w-full justify-around max-tablet:flex-col max-tablet:gap-0 gap-10 text-white px-20 max-mobile:px-5 max-tablet:px-10">
            <div className="flex flex-col my-10 w-full ">
                  <h1 className="text-[45px] max-mobile:text-[30px] max-tablet:justify-center max-tablet:items-center max-small:flex-col flex tablet:flex-col max-tablet:gap-2 max-tablet:mb-10 mb-10 ">
                    <span> Contact Us with</span>
                    <span className="tablet:leading-[15px] max-mobile:leading-[15px]">any Questions.</span>
                  </h1>
                  <p className="text-lg max-tablet:text-center">Your success is our success, and we can’t wait to help you achieve  your goals. </p>
                  <p className="text-sm mt-2 font-light max-tablet:text-center">Get in touch today to see why our approach makes all the difference! </p>
            </div>

              <div className="h-fit mt-1 w-fit max-tablet:w-full shadow-xl px-5 py-5 rounded-lg bg-lightBg text-black">
                  <p className="text-sm">
                    Submit the form, and a member of our team will get back to you as soon as possible.
                  </p>
                  <div className="flex flex-col mt-3 gap-3">

                    <CustomeInput label="Name" name="name" placeholder="name" labelClass="text-sm" />
                    <CustomeInput label="Email Address" name="Email" placeholder="Email" labelClass="text-sm" />
                    <div className="flex flex-col gap-3 capitalize">
                      <label htmlFor="" className="font-semibold  text-sm">Your Text</label>
                      <textarea placeholder="Write text here..." name="" id="" cols={30} rows={4} className="bg-white  p-2 outline-none rounded-lg border "></textarea>
                    </div>
                    <button className="w-full bg-mainBlue py-2 rounded-lg text-white hover:bg-blue-700 duration-200"> 
                      submit form
                    </button>
                  </div>
            </div>

          </div>
      </div> 

    </div>
  )
}

export default Hero

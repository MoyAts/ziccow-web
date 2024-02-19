"use client" 
import Image from "next/image"; 
import mockupimg from "../../assets/images/mockup-removebg-preview.png"
import playstoreIcon from "../../assets/images/1.svg"
import appstoreIcon from "../../assets/images/2.svg"

const DowloadApp = () => {
  return (
    <div className='flex flex-col  h-full  pb-20 max-tablet:pb-5 max-mobile:px-5  max-tablet:px-10 max-w-[1700px]  mobile:mx-auto items-center pt-5' >
        <div className="flex tablet:h-5/6 w-full relative bg--300">
            <Image src={mockupimg} className="object-contain w-[65%] max-tablet:w-full max-mobile:w-[100vh]  mobile:mx-auto h-full" alt="" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-lightBg"></div>
        </div>
        <div className="text-[45px]  max-sm:text-center  mt-12 font-normal">
           <span className="text-mainBlue">Download&#32;</span> 
           Our App Now.
        </div>
        <p className=" text-center my-3">
            Please feel free to download our app on the app store or google play store to evaluate our product.
        </p>
        <div className="flex gap-12 max-mobile:gap-12 max-mobile:mb-6  max-mobile:flex-col mt-12">
            <Image src={playstoreIcon} alt="" className="cursor-pointer  hover:scale-110 duration-200" />
            <Image src={appstoreIcon} alt="" className="cursor-pointer  hover:scale-110 duration-200"  />
        </div>
        
        
    </div>
  )
}

export default DowloadApp

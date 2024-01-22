import mockupimg from "../../assets/images/mockup-removebg-preview.png"
import playstoreIcon from "../../assets/images/1.svg"
import appstoreIcon from "../../assets/images/2.svg"
import Image from "next/image"
const DowloadApp = () => {
  return (
    <div className='flex flex-col  max-h-[800px] h-[110vh] items-center pt-5' >
        <div className="flex w-1/2 relative">
            <Image src={mockupimg} className="mx-auto" alt="" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <h1 className="flex gap-2 text-[40px] font-normal">
           <span className="text-mainBlue">Download</span> 
            Our App Now.
        </h1>
        <p className="mt-1 text-sm">
            Please feel free to download our app on the app store or google play store to evaluate our product.
        </p>
        <div className="flex gap-12 mt-10">
            <img src={playstoreIcon} alt="" />
            <img src={appstoreIcon} alt="" />
        </div>
        
        
    </div>
  )
}

export default DowloadApp

"use client" 
import Image from "next/image"; 
import img from "../../../assets/images/anthony-esau-N2zk9yXjmLA-unsplash (1).jpg"
import { IoIosArrowBack as NextIcon} from "react-icons/io";
import { houseInf } from "@/utils/interfaces";
import { useState } from "react";
import Lightbox  from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useRef } from "react"
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface Props {
    house : houseInf
}

const ImageSlider = ({ house } : Props) => {
    const zoomRef = useRef(null);
    const [open, setOpen] = useState(false);
    const imgs = [...house.digital_assets]
    const len = imgs.length
    const [curr,setCurr] = useState(0)
    const add = () => {
        setCurr(val => (val + 1 < imgs.length) ? val + 1 : val )
    }
    const sub = () => {
        setCurr(val => (val - 1 > -1) ? val - 1 : val )
    }
    return (<>
     

      <Lightbox
        open={open}
        plugins={[ Zoom]}
        carousel={{ finite: true }}
        zoom={{ 
            ref: zoomRef,
            maxZoomPixelRatio : 10,
         }}
        close={() => setOpen(false)}
        slides={
           imgs.map((data : any,ind : number) => {
                return {
                    src: data.url,
                    alt: "image " + ind,
                }
            })
         }
      />
         <div className='p-2  bg-red-00 h-fit'>
             <div className='w-full h-[65vh] max-h-[500px] rounded-lg relative'>
                 <div onClick={sub} className={`absolute cursor-pointer left-2 hover:opacity-100 duration-200 flex bottom-1/2 mt-2 w-10 h-10 text-white rounded-full ${ curr > 0 ? "bg-mainBlue" : "bg-blue-200"}`}>
                     <NextIcon className={` m-auto ${curr <= 0 && "text-mainBlue"} `} />
                 </div>
                 <div onClick={add} className={`absolute cursor-pointer flex right-2 hover:opacity-100 duration-200 bottom-1/2 mt-2 w-10 h-10 text-white rounded-full ${ len > 0 && curr + 1 < len ? "bg-mainBlue" : "bg-blue-200"}`}>
                     <NextIcon className={`m-auto rotate-180 ${ !(len > 0 && curr + 1 < len) && "text-mainBlue"}`} />
                 </div>
                 <Image 
                     onClick={() =>setOpen(true)}
                     src={imgs.length > 0 ? imgs[curr]?.url : ""}
                     width={100} height={100} 
                     className='w-full cursor-zoom-in h-full object-cover rounded-lg' 
                     alt="" 
                     unoptimized={true}
                 />        
             </div>
          {/* <div className="mt-4 gap-5 grid grid-cols-4 justify-between overflow-hidden">
                 <div onClick={() => alert("alert")} className="w-full flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                     <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
                 </div>
                 <div onClick={() => alert("alert")} className="w-full flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                     <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
                 </div>

                 <div onClick={() => alert("alert")} className="w-full flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                     <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
                 </div>
                 <div onClick={() => alert("alert")} className="w-full relative flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                     <Image src={img}  className='w-full duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
                     <div className="absolute left-0 right-0 bottom-0 top-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
                         <p className="text-white text-3xl">6+</p>
                     </div>
                 </div>
             </div>  */}
         </div>


    </>)
}


export default ImageSlider

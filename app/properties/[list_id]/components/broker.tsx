"use client" 
import Image from "next/image"; 
import userImg from "../../../assets/images/Photo.png"
import phoneImg from "../../../assets/images/datelight.svg"
import InputIcon from "../../../assets/images/inputIcon.svg"
import send from "../../../assets/images/send.svg"
import userSvg from "../../../assets/images/user.svg"
import { houseFeaturedInf, houseInf } from "@/utils/interfaces";
import { CiLinkedin } from "react-icons/ci";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

interface Props {
    house : houseInf
}
const broker = ({ house } : Props) => {
    return (
      <div className="mt-5 bg-white py-4 px-4 rounded-xl shadow h-fit">
          <div className="flex gap-2 text-xl font-semibold">
             <Image src={userSvg} className="w-7" alt="" />
              <p>
                Broker’s Info 
              </p>
          </div>

          <div className="flex flex-col my-4 mt-6 gap-5 text-[16px] text-lightGray">
            
           
            <div className="px-2 pb-4 flex justify-between">
                <div className="flex gap-2">
                    {house.owner?.profile_pic ?<Image 
                        src={house.owner?.profile_pic ?? ""} 
                        width={100}
                        height={100}
                        className="w-16 h-16 rounded-full" 
                        alt="" 
                    /> : <div className="p-2 flex rounded-full w-[44px] bg-blue-500 text-white h-[44px]">
                            <p className="m-auto text-xl">
                                {house.owner?.first_name ? house.owner?.first_name[0] : "U"}
                            </p>
                        </div>}
                    <div className="flex flex-col my-auto">
                        <div>Jan 03, 2024</div>
                        <div className="text-slate-700">{house.owner?.first_name}</div>
                    </div>
                </div>
                <Image src={phoneImg} className="w-7 my-auto" alt="" />
            </div>
            

            <div className={'flex flex-col gap-2 capitalize '}>
                <div className={'w-full  bg-white flex rounded-2xl px-2 py-1 border ' } style={{borderColor:"#DBD7DD"}}>
                    <Image src={InputIcon} alt="" width={23} className={'ms-2 me-3'}/>
                    <input type={"text"} name={"name"} placeholder={"Name"} className={'py-3  w-full outline-none rounded-lg '}/>
                </div>
                <div className={'w-full  bg-white flex rounded-2xl px-2 py-1 border ' } style={{borderColor:"#DBD7DD"}}>
                    <Image src={InputIcon} alt="" width={23} className={'ms-2 me-3 '}/>
                    <input type={"text"} name={"name"} placeholder={"Email"} className={'py-3  w-full outline-none rounded-lg '}/>
                </div>
                <textarea  name="note" id="" placeholder="Message" cols={20} rows={4} className="border outline-none px-2 py-2 rounded-2xl" />
                <button className="w-full py-4 text-white items-center justify-center rounded-2xl bg-mainBlue flex gap-3">
                    <p className="text-lg">Send Message</p>
                    <Image src={send} alt="" />
                </button>
                <div className="flex gap-2 justify-between mt-4">
                   {house.owner?.social_facebook &&
                    <Link href={house.owner?.social_facebook ?? ""}>
                        <FaFacebookF className="text-3xl" />
                    </Link>
                    }
                    {house.owner?.social_whatsapp &&
                    <Link href={house.owner?.social_whatsapp ?? ""}>
                        <FaWhatsapp className="text-3xl" />
                    </Link>
                    }
                     {house.owner?.social_telegram &&
                    <Link href={house.owner?.social_telegram ?? ""}>
                        <BsTelegram className="text-3xl" />
                    </Link>
                    }
                    {house.owner?.social_instagram &&
                    <Link href={house.owner?.social_instagram ?? ""}>
                        <FaInstagram className="text-3xl" />
                    </Link>
                    }
                    {house.owner?.social_twitter &&
                    <Link href={house.owner?.social_twitter ?? ""}>
                        <BsTwitterX className="text-3xl" />
                    </Link>
                    }
                   
                </div>
                
            </div>
  
  
          
  
          </div>
  
      </div>
    )
  }
  
  export default broker
  
"use client"
import { useState } from "react";

import { IoIosArrowBack as ListIcon} from "react-icons/io";
import { PiSignInBold as SignInIcon} from "react-icons/pi";
import { GoLocation  as LocationIcon} from "react-icons/go";
import { FaRegBuilding as BuildingIcon } from "react-icons/fa";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { IoIosAddCircleOutline as AddIcon } from "react-icons/io";

import img from "../assets/images/Widget 5.svg"
import notificationIcon from '../assets/images/notification.svg';
import messageIcon from '../assets/images/message.svg';

import MegaMenu from "./mega_menu";
import Button from "./button";
import Notification from "./notification";
import ProfileCard from "./profileCard";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

interface Props {
  withsearch : boolean 
}

const nav = ({ withsearch } : Props) => {
  const pathname = usePathname();
  const [showProfile,setShowProfile] = useState(false)
  const [showNotification,setShowNotification] = useState(false)
  const isLogedIn = true;
  return (
        <div className='w-full  z-[1000] bg-lightBg bg-transparent relative'>
          <div className="flex w-full bg-lightBg rounded-b-3xl justify-center">
            <div className={`w-full max-w-[1700px] pb-4 flex flex-col ${withsearch == false  && "rounded-b-3xl"} `} >
                <div className={"flex  pt-3 h-fit min-h-14  justify-between px-20"}>
                    <div className='my-auto  flex gap-2 cursor-pointer' >
                        <Image src={img} alt="" />
                        <Link href={"/"} className='font-semibold text-g'>
                          Ziccow General Trading
                      </Link>
                    </div>
                    <div className='flex capitalize my-auto  gap-12'>
                        <Link href={"/about"} className={`hover:text-blue-500 cursor-pointer text-sm ${pathname == "/about" && "text-blue-500"}`} >About</Link>
                        <div className=' group text-sm flex gap-2 ' >
                            <span className="group-hover:text-blue-500">
                              services
                            </span>
                            <ListIcon className="-rotate-90 group-hover:text-blue-500 group-hover:rotate-90 duration-200 my-auto" />
                            <div className={`absolute duration-200 scale-0 origin-top z-[1000] w-full left-0 top-[3.3em] group-hover:scale-100 `}>
                              <MegaMenu />
                            </div>
                        </div>
                        <Link href={"/properties"} className='hover:text-blue-500 cursor-pointer text-sm ' >properties</Link>
                        <Link href={"/contact"} className='hover:text-blue-500 cursor-pointer text-sm ' >contact us</Link>
                    </div>
                    {
                      isLogedIn ? 
                      <div  className="relative">
                        <div onClick={() => setShowProfile(data => !data)} className="flex gap-5" >
                          <div className="cursor-pointer bg-blue-200 my-auto p-2 w-10 h-10 rounded-full flex items-center justify-center">
                            JD
                          </div>
                          <p className="cursor-pointer my-auto text-lightGray">John Doe</p>
                        </div>
                       <ProfileCard show={showProfile} />
                      </div>
                    :

                      <Link href={'/auth/login'} className='text-blue-500 capitalize flex gap-3'>
                        <SignInIcon className="text-xl m-auto" />
                        <span className="m-auto">
                          Sign in
                        </span>
                      </Link>
                    }
                </div>
                {
                withsearch &&
                <>
                  <div className="w-full mb-2 mt-2  h-[1px] bg-slate-300"></div>
                  
                  <div className="flex pt-2 justify-between px-[5em] ">

                      <div className="flex gap-4">
                          <div className="border w-fit flex px-2 rounded-xl font-light bg-white">
                            <LocationIcon className="text-mainBlue m-auto" />
                            <input type="text" className="px-3 py-2 outline-none" placeholder="Enter location" />
                          </div>
                          <div className="border w-fit flex px-2 rounded-xl font-light bg-white">
                            <BuildingIcon className="text-mainBlue m-auto " />
                            <input type="text" className="px-3 py-2 outline-none" placeholder="Enter location" />
                          </div>

                          <Button text="Search" buttonClass="px-3 py-2 text-sm  flex-row-reverse" iconClass="text-lg " iconDivClass="border-none" Icon={SearchIcon} action={()=>{}} />

                      </div>

                    <div className="flex gap-5 relative">
                     {showNotification && <Notification />}
                     {isLogedIn &&
                        <>
                          <div onClick={()=>setShowNotification(data => !data)} className="flex relative cursor-pointer hover:bg-blue-200 h-fit my-auto p-[3px] rounded-lg">
                            <Image src={notificationIcon} width={20} alt="" className="" />
                          </div>
                          <div className="flex cursor-pointer hover:bg-blue-200 h-fit my-auto p-[3px] rounded-lg">
                            <Image src={messageIcon} width={20} alt="" />
                          </div>
                        </>
                      }
                      <div className="flex text-mainBlue gap-1 text-sm">
                        <AddIcon className="m-auto text-lg" />
                        <p className="m-auto ">
                          Add new Listing
                        </p>
                      </div>
                    </div>


                  </div>
                </> 
                }
            
            </div>
          </div>

        </div>

  )
}

export default nav

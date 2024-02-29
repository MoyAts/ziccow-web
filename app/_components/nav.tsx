import img from "../assets/images/Widget 5.svg"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import { PiSignInBold as SignInIcon} from "react-icons/pi";
import MegaMenu from "./mega_menu";
import { GoLocation  as LocationIcon} from "react-icons/go";
import { FaRegBuilding as BuildingIcon } from "react-icons/fa";
import { CiSearch as SearchIcon } from "react-icons/ci";
import Button from "./button";
import { IoIosAddCircleOutline as AddIcon } from "react-icons/io";
import Notification from "./notification";
import notificationIcon from '../assets/images/notification.svg';
import messageIcon from '../assets/images/message.svg';
import Image from "next/image";
import ProfileCard from "./profileCard";
import { useState } from "react";
import Link from "next/link";
import { IoMdMenu as MenuIcon } from "react-icons/io";
import navaddImg from "../assets/images/navadd.svg"

import type { RootState } from '../../store/store'
import { AuthInf } from "../../store/features/auth/authSlice";
import { useSelector, useDispatch } from 'react-redux'
import { getState,logoutUser,LogInf} from '../../store/features/auth/authSlice'

interface Props {
  withsearch : boolean 
}

const Nav = ({ withsearch } : Props) => {
  const state : AuthInf = useSelector(getState)
  const dispatch = useDispatch()
  const [showProfile,setShowProfile] = useState(false)
  const [showNotification,setShowNotification] = useState(false)
  
  return (
        <div className='w-full z-[1000] bg-lightBg bg-transparent relative'>
          <div className="flex w-full bg-lightBg  mobile:rounded-b-3xl justify-center">
            <div className={`w-full max-w-[1700px] pb-4 flex flex-col ${withsearch == false  && " mobile:rounded-b-3xl"} `} >
                <div className={"flex  pt-3 h-fit min-h-14  justify-between px-20 max-small:px-5 max-tablet:px-10 "}>
                    <div className='my-auto  flex gap-2 cursor-pointer' >
                        <Image src={img} alt="" />
                        <Link href={"/"} className='font-semibold text-g'>
                          <p className="tablet:hidden">Ziccow</p>
                          <p className="max-tablet:hidden">Ziccow General Trading</p>
                        </Link>
                    </div>
                    
                    <div className="h-full cursor-pointer mobile:hidden flex">
                      <MenuIcon className="text-3xl my-auto text-mainBlue" />
                    </div>


                    <div className='flex capitalize my-auto max-mobile:hidden gap-12 max-tablet:gap-8 max-tablet:text-[16px]'>
                        <Link href={"/about"} className='hover:text-blue-500 cursor-pointer ' >About</Link>
                        <div className=' group flex gap-2 ' >
                            <span  className="group-hover:text-blue-500">
                              services 
                            </span>
                            <ListIcon className="-rotate-90 group-hover:text-blue-500 group-hover:rotate-90 duration-200 my-auto" />
                            <div className={`absolute duration-200 scale-0 origin-top z-[1000] w-full left-0 top-[3.3em] group-hover:scale-100 `}>
                              <MegaMenu />
                            </div>
                        </div>
                        <Link href={"/properties"} className='hover:text-blue-500 cursor-pointer ' >properties</Link>
                        <Link href={"/contactus"} className='hover:text-blue-500 cursor-pointer ' >contact us</Link>
                    </div>
                    {
                    state.isLogedIn == LogInf.LOADING ?
                    <>LOADING </> : 
                    state.isLogedIn == LogInf.LOGED_IN ?

                      <div  className="relative max-tablet:text-[16px] max-mobile:hidden">
                        <div onClick={() => setShowProfile(data => !data)} className="flex gap-5 max-tablet:gap-3" >
                          <div className="cursor-pointer capitalize bg-blue-200 my-auto p-2 w-10 h-10 rounded-full flex items-center justify-center">
                            {state.user?.firstName !== null && typeof state.user?.firstName !== 'undefined' && state.user?.firstName.length > 0 ? state.user?.firstName[0] : state.user?.email![0] }
                          </div>
                          <p className="cursor-pointer my-auto text-lightGray">{state.user?.firstName}</p>
                        </div>
                       <ProfileCard logoutUser={() => { dispatch(logoutUser())}} show={showProfile} state={state} />
                      </div>
                    :

                      <Link href={'/auth/login'} className='text-blue-500 max-mobile:hidden capitalize flex gap-3'>
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
                  <div className="w-full mb-2 mt-2 max-mobile:hidden h-[1px] bg-slate-300"></div>
                  
                  <div className="flex pt-2 justify-between px-20 max-small:px-5 max-tablet:px-10 max-mobile:hidden ">

                      <div className="flex gap-4">
                          <div className="border w-fit flex px-2 rounded-xl font-light bg-white">
                            <LocationIcon className="text-mainBlue m-auto" />
                            <input type="text" className="px-3 py-2 outline-none" placeholder="Enter location" />
                          </div>
                          <div className="border w-fit flex px-2 rounded-xl font-light bg-white">
                            <BuildingIcon className="text-mainBlue m-auto " />
                            <input type="text" className="px-3 py-2 outline-none" placeholder="Enter location" />
                          </div>

                          <button onClick={() => {}} className={` flex gap-2  hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white m-auto  px-3 py-2 text-sm  flex-row-reverse`}>
                            <span className="max-tablet:hidden" >Search</span>
                            <div className={`m-auto border p-[1px] rounded border-none`}>
                              <SearchIcon className={`m-auto text-lg`} />
                            </div>
                          </button>

                      </div>

                    <div className="flex gap-5 relative">
                     {showNotification && <Notification />}
                     {state.isLogedIn == LogInf.LOGED_IN &&
                        <>
                          <div onClick={()=>setShowNotification(data => !data)} className="flex max-tablet:hidden  relative cursor-pointer hover:bg-blue-200 h-fit my-auto p-[3px] rounded-lg">
                            <Image src={notificationIcon} width={20} alt="" className="" />
                          </div>
                          <Link href="/message" className="flex max-tablet:hidden cursor-pointer hover:bg-blue-200 h-fit my-auto p-[3px] rounded-lg">
                            <Image src={messageIcon} width={20} alt="" />
                          </Link>
                        </>
                      }
                      <Link href="/addproperty" className="flex text-mainBlue gap-1 text-sm">
                        <Image src={navaddImg} className="m-auto" alt="" />
                        <p className="m-auto ">
                          Add new Listing
                        </p>
                      </Link>
                    </div>


                  </div>
                </> 
                }
            
            </div>
          </div>

        </div>

  )
}

export default Nav

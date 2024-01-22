"use clinet"
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/images/Widget 5.svg"
import { FaArrowUp as UpArrowIcon } from "react-icons/fa6";
import emailImg from "../assets/images/emailFooter.svg"
import locationImg from "../assets/images/locationFooter.svg"
import phoneImg from "../assets/images/phoneFooter.svg"
import Image from "next/image";
const footer = () => {
  return (
    <div className="w-full bg-mainDark ">

        <div id='contactus' className='h-fit pb-12 max-w-[1700px] mx-auto text-white px-20 pt-20 bg-mainDark'>

                <div className='flex justify-between'>
                    
                    <div className='basis-4/12 flex flex-col gap-3 mb-4'>
                        <div className='flex gap-3 my-2'>
                            <Image src={logo} alt="" />
                            <h3> Ziccow General Trading </h3>
                        </div>
                        <p className='text-sm text-gray-400'>
                            <h1 className="capitalize font-normal text-white mb-4" >about us</h1>
                            At Ziccow, we understand that every individual has unique needs and preferences when it comes to real estate. That's why we offer a personalized approach to our services, taking the time to listen to your goals and requirements, and working tirelessly to find the perfect property for you.
                        </p>
                        <h4 className="mt-6 mb-2">Recent Region</h4>
                        <select title="select" id="" className="p-2 mb-4 text-black rounded-xl px-3 outline-none" >
                            <option value="" selected={true} className="text-black">Bole, Addis Ababa</option>
                            <option value="" selected={false} className="text-black">Bole, Addis Ababa</option>
                        </select>
                    </div>
                    <div className="basis-1/12"> </div>

                    <div className='flex flex-col gap-3 basis-2/12'>
                        <h3>Company</h3>
                        <ul className='text-sm flex flex-col gap-5 mt-3 text-gray-400'>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >About us</li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >Team</li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >Real Estate</li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >Properties</li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >service</li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >contact us</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3 basis-2/12'>
                        <h3>Legal</h3>
                        <ul className='text-sm flex flex-col gap-5 mt-3 text-gray-400'>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >Terms of service</li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200' >Privacy policy</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3 basis-3/12'>
                        <h3>Contacts</h3>
                        <ul className='text-sm flex flex-col gap-5 mt-3 text-gray-400'>
                            <li className='hover:text-blue-500 cursor-pointer duration-200 flex gap-3'>
                                <Image src={locationImg} alt="" />
                                <p>
                                    ABC Building, 3rd Floor.
                                    123 Main St, Addis Ababa, Ethiopia
                                </p>
                            </li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200 flex gap-3'>
                                <Image src={emailImg} alt="" />
                                <p>
                                    info@ziccowgt.com
                                </p>
                            </li>
                            <li className='hover:text-blue-500 cursor-pointer duration-200 flex gap-3'>
                                <Image src={phoneImg} alt="" />
                                <p>
                                    (123) 456-7890
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='w-full h-[1px] my-10 bg-gray-400'></div>

                <div className='flex justify-between text-sm text-gray-400'>
                
                    <div className='flex gap-4'>
                        <FiTwitter  className='text-2xl text-blue-500 cursor-pointer hover:text-white duration-200' />
                        <FaInstagram className='text-2xl text-blue-500 cursor-pointer hover:text-white duration-200' />
                        <CiFacebook className='text-2xl text-blue-500 cursor-pointer hover:text-white duration-200' />
                    </div>
                    <p className=''>Ziccow General Trading © 2024. All Rights Reserved.</p>
                    <button  className="capitalize flex gap-2 hover:text-white">
                        <UpArrowIcon className="m-auto" />
                        <span className="m-auto">
                            back to top
                        </span>    
                    </button>
                </div>

        </div>
</div>
  )
}

export default footer

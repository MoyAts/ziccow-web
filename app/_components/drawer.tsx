import Link from 'next/link'
import React, { useState } from 'react'
import img from "../assets/images/Widget 5.svg"
import Image from 'next/image'
import closeImg from "../assets/images/Group (5).svg"
import aboutImg from "../assets/images/Group (3).svg"
import serviceImg from "../assets/images/Group (4).svg"
import propertyImg from "../assets/images/property.svg"
import confirmImg from "../assets/images/confirm.svg"
import { IoIosArrowBack as ListIcon} from "react-icons/io";
import { useSelector } from 'react-redux'
import { LogInf,getState} from "../../store/features/auth/authSlice"

interface Props {
    setIsDrawer : Function
}

const Drawer = ({setIsDrawer} : Props) => {
    const state = useSelector(getState)
    const [toggle,setToggle] = useState(false)
    const isLogedIn = state.isLogedIn == LogInf.LOGED_IN
    return (
        <div className='absolute h-fit pb-10 w-full  z-[9999]  '>
            <div className='bg-mainDark w-full py-3 text-white mb-5 text-center'>
                Having Troubles? Call 0000
            </div>
            <div className='flex justify-between px-10 max-sm:px-5'>
                <div className='my-auto  flex gap-2 cursor-pointer' >
                    <Image src={img} alt="" />
                    <Link href={"/"} className='font-semibold text-g'>
                        <p className="">{
                           isLogedIn && state.user?.firstName ? state.user.firstName :  "Zirrow General Trading"
                        }</p>
                    </Link>
                </div>
                <div className='cursor-pointer' onClick={() => setIsDrawer(false)}>
                    <Image src={closeImg} alt='' />
                </div>
            </div>
            <div className='w-full border-t mt-5'></div>
            
            <div className={` ${!toggle ? "h-[80vh] mt-12" : " my-10"} overflow-y-scroll flex flex-col  px-10 max-sm:px-5`}>

                <div className='flex flex-col gap-10'>
                    <Link href="/about" className='flex gap-4'>
                        <Image src={aboutImg} alt='' />
                        <div className="text-xl">
                            About Us
                        </div>
                    </Link>
                    <div onClick={() => setToggle(data => !data)} className='flex cursor-pointer justify-between'>
                        <div className='flex gap-4'>
                            <Image src={serviceImg} alt='' />
                            <div className="text-xl">
                                Services
                            </div>
                        </div>
                        <ListIcon className={`text-xl duration-200  ${toggle ? "-" : ""}rotate-90 text-blue-500`} />
                    </div>
                    {
                        toggle &&
                        <div className={` ps-8 flex flex-col gap-5 `}>
                            <div className='z-50 flex flex-col basis-1/3'>
                                <Link href={"/properties"} className='text-mainBlue font-semibold text-lg'>Buy a Property</Link>
                                <div className='z-50 flex flex-col gap-1 mt-2'>
                                    <p className=' text-lightGray'>
                                        Homes for sale, New listings, Open houses, Recent home sales, For sale by owner.
                                    </p>
                                </div>
                            </div>
                            <div className='z-50 flex flex-col basis-1/3'>
                                <Link href={"/addproperty"} className='text-mainBlue font-semibold text-lg'>Sell a Property</Link>
                                <div className='z-50 flex flex-col gap-1 mt-2'>
                                    <p className=' text-lightGray'>
                                        Selling agents, Post for sale, Seller’s guide, Home values, Real estate app.   
                                    </p>
                                </div>
                            </div>
                            <div className='z-50 flex flex-col basis-1/3'>
                                <Link href={"/addproperty"} className='text-mainBlue font-semibold text-lg'>Rent a Property</Link>
                                <div className='z-50 flex flex-col gap-1 mt-2'>
                                    <p className=' text-lightGray'>
                                        Rental buildings, Apartments for rent, Houses for rent, Your rental listing, Affordability calculator, Rent Guide, Real estate app.   
                                    </p>
                                </div>
                            </div>

                        </div>
                    }

                    <Link href="/properties" className='flex gap-4'>
                        <Image src={propertyImg} alt='' />
                        <div className="text-xl">
                            Properties
                        </div>
                    </Link>

                </div>

        </div>

        {
        isLogedIn ?
        <div className='w-full px-5 text-lg'>
            <Link href={"/contactus"} className='w-full  flex justify-center gap-5 bg-mainBlue rounded-2xl text-white py-3'>
                <div>
                    Contact Us
                </div>
                <Image src={confirmImg} width={23} className=' my-auto' alt='' />
            </Link>
        </div>
        :
        <div className='w-full px-5 text-lg flex flex-col gap-5'>
            <Link href={"/auth/register"} className='w-full flex justify-center gap-5 bg-mainBlue rounded-2xl text-white py-3'>
                <Image src={confirmImg} width={23} className=' my-auto' alt='' />
                <div>
                    Reginster now
                </div>
            </Link>
            <Link href={"/conactus"} className='w-full text-center font-semibold text-mainBlue'>
                Contact Us
            </Link>

        </div>
        }

        </div>
    )
}

export default Drawer

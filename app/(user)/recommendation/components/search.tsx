"use client"
import React, { useState } from 'react'
import { GoLocation  as LocationIcon} from "react-icons/go";
import { FaRegBuilding as BuildingIcon } from "react-icons/fa";
import { CiSearch as SearchIcon } from "react-icons/ci";
import Notification from "../../../_components/notification";
import Link from 'next/link';
import Image from 'next/image';
import navaddImg from "../../../assets/images/navadd.svg"
import { useSelector } from 'react-redux';
import { LogInf, getState } from '@/store/features/auth/authSlice';
import { useQuery } from '@apollo/client';
import { GET_HOME_TYPES } from '@/graphql/features/listing';

interface Props{
    region: string, 
    setRegion:Function, 
    setPropertyType:Function, 
    propertyType:string,
    search : Function
}

const Search = ({ region , setRegion, setPropertyType , propertyType , search} : Props) => {
  const [showNotification,setShowNotification] = useState(false)
  const state = useSelector(getState)
  const url = state.isLogedIn == LogInf.LOGED_IN ? "/addproperty" : "/auth/signup"
  
  const { loading, error, data } = useQuery(GET_HOME_TYPES, {
    fetchPolicy: "no-cache"
  });

  const [show,setShow] = useState(false)
  // const [propertyType,setPropertyType] = useState<null | string>(null)
  

  return (
    <div className='pb-5 rounded-b-xl '>
      <div className="w-full mb-2 mt-2 max-mobile:hidden h-[1px] bg-slate-300"></div>
        <div className="flex pt-2  justify-between px-20 max-small:px-5 max-tablet:px-10 max-mobile:hidden ">
            <div className="flex gap-4">
                <div className="border w-fit flex px-2 rounded-xl font-light bg-white">
                  <LocationIcon className="text-mainBlue m-auto" />
                  <input type="text" onChange={({ target } : any) => setRegion(target.value)} className="px-3 py-2 outline-none" placeholder="Enter a region" />
                </div>
                <div className="border relative  flex px-2 rounded-xl min-w-[200px] font-light bg-white">
                  <BuildingIcon className="text-mainBlue my-auto " />
                  {/* <input type="text" onChange={({ target } : any) => setPropertyType(target.value)} 
                  */}
                  {/* <input type="text"  className="" placeholder={`${loading ? "loading" :"Enter property type"}`} />  */}
                  <button onClick={()=>setShow(d => !d)} className={`px-3 w-full py-2 my-auto  ${propertyType == "" && "text-gray-400"}`} > {propertyType != "" ? propertyType : "select property type" }</button>
                  {loading ? <div>Loading</div> : error ? <div>Error</div> :
                       show && <div className='absolute top-12 shadow-xl rounded-lg z-40 bg-white  overflow-scroll'> {
                        data.house_type.map((e : any) => (<>
                            <div
                                onClick={() => {
                                    setShow(s => !s);
                                    setPropertyType(e.type_name)
                                }}
                                className="py-2 px-6 hover:bg-slate-100 cursor-pointer rounded-lg border-b"
                            >
                              {e.type_name}
                            </div>
                        </>))
                        }
                      </div>
                    }

                </div>
  
                <button onClick={() => search()} className={` flex gap-2  hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white m-auto  px-3 py-2 text-sm  flex-row-reverse`}>
                  <span className="max-tablet:hidden" >Search</span>
                  <div className={`m-auto border p-[1px] rounded border-none`}>
                    <SearchIcon className={`m-auto text-lg`} />
                  </div>
                </button>
            </div>
          <div className="flex gap-5 relative">
            {showNotification && <Notification />}
            <Link href={url} className="flex text-mainBlue gap-1 text-sm">
              <Image src={navaddImg} className="m-auto" alt="" />
              <p className="m-auto ">
                Add new Listing
              </p>
            </Link>
            
          </div>
        </div>
      </div> 
  )
}

export default Search

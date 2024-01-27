"use client" 
import Image from "next/image"; 
import timeLineImg from "../../assets/images/timeline.svg"
import dateImg from "../../assets/images/date.svg"
import InputIcon from "../../assets/images/inputIcon.svg"
import { IoIosArrowBack as InfoIcon } from "react-icons/io";
import timeIcon from "../../assets/images/timeIcon.svg"
import checkIcon from "../../assets/images/Group (2).svg"

const timeLine = () => {
    return (
      <div className="mt-5 bg-white py-4 px-4 rounded-xl shadow h-fit">
          <div className="flex gap-2 text-xl font-semibold">
             <Image src={timeLineImg} className="w-7" alt="" />
              <p>
                Tour Timeline
              </p>
          </div>

          <div className="flex flex-col my-4 mt-6 gap-5 text-[16px] text-lightGray">
            
           
            <div className="px-2 pb-4 flex justify-between">
                <div className="flex flex-col gap-2">
                    <div>Jan 03, 2024</div>
                    <div className="text-slate-700">Today</div>
                </div>
                <Image src={dateImg} className="w-7 my-auto" alt="" />
            </div>
            
            <div className="flex justify-between">

                <div className="duration-300 hover:bg-blue-100 cursor-pointer py-2 px-3 rounded-lg flex flex-col gap-2 justify-center items-center">
                    <p className="text-xl">Mon</p>
                    <p>01</p>
                </div>

                <div className="duration-300 hover:bg-blue-100 cursor-pointer py-2 px-3 rounded-lg flex flex-col gap-2 justify-center items-center">
                    <p className="text-xl">Tue</p>
                    <p>02</p>
                </div>

                <div className="duration-300 hover:bg-blue-100 cursor-pointer py-2 px-3 rounded-lg flex flex-col gap-2 justify-center items-center">
                    <p className="text-xl">Wed</p>
                    <p>03</p>
                </div>

                <div className="duration-300 hover:bg-blue-100 cursor-pointer py-2 px-3 rounded-lg flex flex-col gap-2 justify-center items-center">
                    <p className="text-xl">Thu</p>
                    <p>04</p>
                </div>

                <div className="duration-300 hover:bg-blue-100 bg-blue-200 cursor-pointer py-2 px-3 rounded-lg flex flex-col gap-2 justify-center items-center">
                    <p className="text-xl">Fri</p>
                    <p className="text-mainBlue">05</p>
                </div>

                <div className="duration-300 hover:bg-blue-100 cursor-pointer py-2 px-3 rounded-lg flex flex-col gap-2 justify-center items-center">
                    <p className="text-xl">Sat</p>
                    <p>06</p>
                </div>

            </div>

            <div className={'flex flex-col gap-2 capitalize '}>
                <div className={'w-full  bg-white flex rounded-2xl px-2 py-1 border ' } style={{borderColor:"#DBD7DD"}}>
                    <Image src={InputIcon} alt="" width={23} className={'ms-2 me-3'}/>
                    <input type={"text"} name={"name"} placeholder={"In-person touring"} className={'py-3  w-full outline-none rounded-lg '}/>
                    <InfoIcon className="text-3xl my-auto text-mainBlue -rotate-90" />
                </div>
                <div className={'w-full  bg-white flex rounded-2xl px-2 py-1 border ' } style={{borderColor:"#DBD7DD"}}>
                    <Image src={InputIcon} alt="" width={23} className={'ms-2 me-3 '}/>
                    <input type={"text"} name={"name"} placeholder={"5:30 PM"} className={'py-3  w-full outline-none rounded-lg '}/>
                    <Image src={timeIcon} alt="" width={23} className={'w-7 my-auto text-mainBlue -rotate-90'}/>
                </div>
                <button className="w-full py-4 text-white items-center justify-center rounded-2xl bg-mainBlue flex gap-3">
                    <p>Request this time</p>
                    <Image src={checkIcon} alt="" />
                </button>
            </div>
  
  
          
  
          </div>
  
      </div>
    )
  }
  
  export default timeLine
  
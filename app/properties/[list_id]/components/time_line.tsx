"use client";
import Image from "next/image";
import timeLineImg from "../../../assets/images/timeline.svg";
import dateImg from "../../../assets/images/date.svg";
import InputIcon from "../../../assets/images/inputIcon.svg";
import { IoIosArrowBack as InfoIcon } from "react-icons/io";
import timeIcon from "../../../assets/images/timeIcon.svg";
import checkIcon from "../../../assets/images/Group (2).svg";
import { useRef, useState } from "react";
import { ADD_TOUR } from "@/graphql/features/user";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";
const TimeLine = ({ list_id, owner_id }: any) => {
  const ref = useRef<any>(null);
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [tourType, setTourType] = useState<string | null>(null);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const [addTour, { loading, error, data }] = useMutation(ADD_TOUR, {
    fetchPolicy: "no-cache",
  });
  const state = useSelector(getState);
  const submit = () => {
    console.log(date, time, tourType, list_id, state.user.userId);
    addTour({
      variables: {
        date,
        time,
        broker_id: owner_id,
        visitor_id: state.user.userId,
        touring_type: tourType,
        listing_id: list_id,
      },
    });
  };

  return (
    <div className="mt-5 bg-white py-4 px-4 rounded-xl shadow h-fit">
      <div className="flex gap-2 text-xl font-semibold">
        <Image src={timeLineImg} className="w-7" alt="" />
        <p>Tour Timeline</p>
      </div>

      <div className="flex flex-col my-4 mt-6 gap-5 text-[16px] text-lightGray">
        <div className="px-2 pb-4 flex justify-between">
          <div className="flex flex-col gap-2 capitalize">
            <div>
              {month} {day}, {year}{" "}
            </div>
            <div className="text-slate-700">Choose Visite Date</div>
          </div>
          <input
            min={today}
            ref={ref}
            type="date"
            placeholder="a"
            className="outline-none"
            onChange={({ target }) => setDate(new Date(target.value))}
          />
          {/* <Image onClick={() => ref.current && ref.current.click()} src={dateImg} className="w-7 my-auto" alt="" /> */}
        </div>

        {/* <div className="flex justify-between overflow-auto">

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

            </div> */}

        <div className={"flex flex-col gap-2 capitalize "}>
          <div
            className={"w-full  bg-white flex rounded-2xl px-2 py-1 border "}
            style={{ borderColor: "#DBD7DD" }}
          >
            <Image src={InputIcon} alt="" width={23} className={"ms-2 me-3"} />
            <input
              onChange={({ target }) => setTourType(target.value)}
              type={"text"}
              name={"name"}
              placeholder={"Add message for the owner "}
              className={"py-3  w-full outline-none rounded-lg "}
            />
          </div>
          <div
            className={"w-full  bg-white flex rounded-2xl px-2 py-1 border "}
            style={{ borderColor: "#DBD7DD" }}
          >
            <Image src={InputIcon} alt="" width={23} className={"ms-2 me-3 "} />
            <input
              onChange={({ target }) => setTime(target.value)}
              type={"time"}
              name={"name"}
              placeholder={"5:30 PM"}
              className={
                "py-3  w-full outline-none rounded-lg appearance-none focus:outline-none"
              }
            />
            {/* <Image src={timeIcon} alt="" width={23} className={'w-7 my-auto text-mainBlue -rotate-90'}/> */}
          </div>
          <button
            onClick={submit}
            className="w-full py-4 text-white items-center justify-center rounded-2xl bg-mainBlue flex gap-3"
          >
            <p>
              {loading
                ? "loading"
                : error
                  ? "error"
                  : data
                    ? "successully added"
                    : "Request this time"}
            </p>
            <Image src={checkIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;

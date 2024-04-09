import InputIcon from "../../../assets/images/mainIcon.svg";
import React from "react";
import person from "../../../assets/images/person.png";
import Image from "next/image";
import Chat from "./chat";
import sendImg from "../../../assets/images/sendBlue.svg";
import { IoIosArrowBack as BackIcon } from "react-icons/io";

interface Props {
  tablet?: boolean;
  messages: MessageInf[];
  setMessage: Function;
}

interface MessageInf {
  type: number;
  message: string;
}

const message = ({ tablet, messages, setMessage }: Props) => {
  return (
    <div
      className={`${tablet && tablet == true ? "w-full" : "basis-2/3"}   relative flex flex-col mobile:ps-12 mobile:px-4 justify-between`}
    >
      <div
        className={`${messages.length == 0 && "hidden"} flex   w-full z-20 items-center gap-2    bg-opacity-80 `}
      >
        <BackIcon
          className="my-auto text-mainBlue text-xl cursor-pointer"
          onClick={() => setMessage([])}
        />
        <Image src={person} className="w-14 h-14 rounded-full" alt="user" />
        <div>Chantel Shelburne</div>
      </div>

      <div
        className={` scroller h-fit overflow-auto  w-full flex flex-col pt-4   mobile:px-4 gap-10 pb-12 `}
      >
        {messages.map((data: MessageInf, ind: any) => {
          return <Chat key={ind} isCurrentUser={data.type == 1} />;
        })}
      </div>

      <div className={`${messages.length != 0 && "hidden"} m-auto text-xl`}>
        Select Chat
      </div>

      <div
        className={"w-full  bg-white flex rounded-3xl px-5 py-3 mb-4  shadow"}
      >
        <Image src={InputIcon} alt="" width={23} className={"me-3 "} />
        <input
          type={"text"}
          name={"name"}
          placeholder={"Write a message ..."}
          className={"py-3 text-li w-full outline-none rounded-lg "}
        />
        <button className="flex gap-2 items-center justify-center text-mainBlue w-fit capitalize text-lg">
          <Image src={sendImg} alt="" />
          <p>send</p>
        </button>
      </div>
    </div>
  );
};

export default message;

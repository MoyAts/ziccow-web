"use client";
import Image from "next/image";
import img from "../assets/images/Photo.png";

const notification = () => {
  return (
    <div className="bg-white hidden relat z-[1000] absolute top-12 shadow-lg right-1/2 text-sm w-[240px]  py-4 rounded-lg">
      {/* <div className="w-5 h-5 bg-white absolute -top-2 rotate-45 left-[31%]"></div> */}
      <div className="font-semibold mb-3 px-2">Notification</div>
      <div className="flex flex-col gap-2 px-2 max-h-[300px] overflow-auto">
        <Single />
        <Single />
        <Single />
        <Single />
      </div>
    </div>
  );
};

const Single = () => {
  return (
    <div className="flex border-t gap-2 text-xs ">
      <Image src={img} alt="" className="w-12 h-12 rounded-full" />
      <div className=" flex flex-col gap-2 py-2 ">
        <p>
          New message from Jese Leos: &quot;Hey, what&quot;s up? All set for the
          presentation?&quot;
        </p>
        <span className="text-mainBlue font-semibold">A few moments ago</span>
      </div>
    </div>
  );
};

export default notification;

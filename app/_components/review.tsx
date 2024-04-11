import React, { useState } from "react";
import { calculateTimeDifference } from "@/lib/auth";
import Image from "next/image";
import ShowImage from "./showImage";
import BuildStar from "./buildstar";

interface Pr {
  message: string;
  rating: number;
  created_at: string;
  user: {
    first_name: string;
    last_name: string;
    profile_pic: string;
  };
}
const Review = ({ message, rating, user, created_at }: Pr) => {
  const time = created_at ? calculateTimeDifference(created_at) : "1 sec";
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const minDesc = message.slice(0, 50);
  const minDescDiv =
    message.length < 50 ? (
      <>
        <div>{minDesc}</div>
      </>
    ) : (
      <div>
        {minDesc}...
        <button
          className="text-mainBlue text-sm capitalize"
          onClick={() => setShowAll(true)}
        >
          see More
        </button>{" "}
      </div>
    );
  const messageDiv = (
    <div className="flex flex-col">
      {message}
      <button
        className="text-mainBlue text-sm capitalize"
        onClick={() => setShowAll(false)}
      >
        show less
      </button>{" "}
    </div>
  );
  return (
    <div className="flex gap-5  max-w-[100%] ">
      {user && user.profile_pic ? (
        <div>
          <Image
            className="rounded-full min-w-[3em] w-[3em] min-h-[3em] h-[3em]"
            src={user.profile_pic}
            width={100}
            height={100}
            alt="profile"
            onClick={() => setIsOpen((data) => !data)}
          />
        </div>
      ) : (
        <div className="w-[3em] flex h-[3em] rounded-full bg-mainBlue">
          <div className="m-auto text-white">{user?.first_name[0] ?? "U"}</div>
        </div>
      )}
      <ShowImage
        open={isOpen}
        setOpen={setIsOpen}
        imageLink={user.profile_pic}
      />
      <div className="flex flex-col gap-2 w-full max-w-full ">
        <div className="py-2 flex flex-col overflow-wrap-break-word break-words flex-wrap px-4 w-full  rounded-lg bg-white">
          <div className="text-gray-500 text-sm">{user?.first_name ?? ""}</div>
          <div className="overflow-wrap-break-word break-all w-full">
            {showAll ? messageDiv : minDescDiv}
          </div>
          <div className="flex gap-5 justify-between">
            <div className="flex gap-1  place-content-end place-items-end ">
              <BuildStar num={rating + 1} />
            </div>
            <div className="text-xs mt-2 text-gray-500 place-self-end place-items-end self-end">
              {time} Ago
            </div>
            {/* <div  className="cursor-pointer">
                <FaAngleLeft className={`${showAll ? "rotate-90" : "-rotate-90"} `} />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

import React, { useState } from "react";
import { calculateTimeDifference } from "@/lib/auth";
import Image from "next/image";
import ShowImage from "./showImage";
import BuildStar from "./buildstar";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";
import { useMutation } from "@apollo/client";
import {
  LIKE_REALESTATE_REVIEW,
  UNLIKE_REALESTATE_REVIEW,
} from "@/graphql/features/listing";
interface Pr {
  message: string;
  rating: number;
  created_at: string;
  user: {
    first_name: string;
    last_name: string;
    profile_pic: string;
  };
  likes: any;
  review_id: any;
}
const ReviewRealestate = ({
  message,
  rating,
  user,
  review_id,
  created_at,
  likes,
}: Pr) => {
  console.log(review_id, "--");
  const state = useSelector(getState);
  const [likeReview, likeReviewStatus] = useMutation(LIKE_REALESTATE_REVIEW, {
    variables: {
      user_id: state.user.userId,
      review_id,
    },
  });
  const [unlikeReview, unlikeReviewStatus] = useMutation(
    UNLIKE_REALESTATE_REVIEW,
    {
      variables: {
        user_id: state.user.userId,
        review_id,
      },
    },
  );
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
        </button>
      </div>
    );
  let temp = false;
  likes &&
    likes.map((d: any) => {
      temp = temp || d.user_like_id == state.user.userId;
    });
  const [isLiked, setIsLiked] = useState(temp);
  const [count, setCount] = useState(likes ? likes.length : 0);
  const like_it = () => {
    if (isLiked) {
      unlikeReview();
    } else {
      likeReview();
    }
  };
  if (likeReviewStatus.data) {
    setIsLiked(true);
    setCount((d: number) => d + 1);
    likeReviewStatus.reset();
  }
  if (unlikeReviewStatus.data) {
    setIsLiked(false);
    setCount((d: number) => d - 1);
    unlikeReviewStatus.reset();
  }
  if (likeReviewStatus.error || unlikeReviewStatus.error) {
    alert("Something goes Wrong!");
    likeReviewStatus.reset();
    unlikeReviewStatus.reset();
  }
  const messageDiv = (
    <div className="flex flex-col">
      <p>{message}</p>
      <button
        className="text-mainBlue  w-fit text-sm capitalize"
        onClick={() => setShowAll(false)}
      >
        show lesss
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
          <div className="flex gap-1  place-content-center place-items-center ">
            <BuildStar num={rating + 1} />
          </div>
          <div className="text-gray-500 text-sm capitalize">
            {user?.first_name ?? ""}
          </div>
          <div className="overflow-wrap-break-word break-all w-full">
            {showAll ? messageDiv : minDescDiv}
          </div>
          <div className="flex gap-5 justify-between">
            <div className="text-xs mt-2 text-gray-500 place-self-end place-items-end self-end">
              {time} Ago
            </div>
            <div className="flex gap-2  place-content-end place-items-end ">
              <div
                onClick={like_it}
                className={`bg-slate-100 p-1 hover:bg-slate-300 duration-300 cursor-pointer rounded-full`}
              >
                <AiFillLike
                  className={`${isLiked ? "text-blue-500" : "text-slate-900"} `}
                />
              </div>
              <div className="text-xs">{count} Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewRealestate;

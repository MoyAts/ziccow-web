"use client";
import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import { FaStar as StarIcon } from "react-icons/fa6";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_REALESTATE_REVIEW,
  GET_REALESTATE_REVIEW,
} from "@/graphql/features/realestate";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getState, LogInf } from "@/store/features/auth/authSlice";
import Review from "@/app/_components/review";

const AddComment = ({ realEstate }: any) => {
  const state = useSelector(getState);
  const [comments, setComments] = useState<any[]>([]);
  const newDatas = useQuery(GET_REALESTATE_REVIEW, {
    fetchPolicy: "network-only",
    variables: {
      _eq: realEstate,
    },
    onCompleted: () => {
      if (newDatas.data) {
        setComments(newDatas.data.real_estate_review);
      }
    },
  });
  const [comment, setComment] = useState("");
  const [curr, setCurr] = useState(-1);
  const [rating, setRating] = useState<number | null>(null);
  // $comment : String!,$real_estate_id : uuid!,$ : bigint!
  const [addReview, { loading, data, error }] = useMutation(
    ADD_REALESTATE_REVIEW,
    {
      fetchPolicy: "network-only",
    },
  );

  const post = () => {
    addReview({
      variables: {
        comment,
        rating,
        real_estate_id: realEstate,
      },
    });
  };
  return state.isLogedIn != LogInf.LOGED_IN ? (
    <></>
  ) : (
    <div className="flex pb-32 flex-col gap-5">
      <p className="text-xl text-center">
        Leave your review about your experience with this Real Estate
      </p>
      <div className=" flex gap-5">
        <div className="flex gap-5 w-full">
          {state.user.profile_pic ? (
            <Image
              className="rounded-full w-[4em] h-[4em]"
              src={state.user.profile_pic}
              width={100}
              height={100}
              alt=""
            />
          ) : (
            <div className="w-[4em] h-[3em] flex rounded-full bg-slate-900">
              <div className="m-auto text-white">N</div>
            </div>
          )}
          {loading ? (
            <div>loading</div>
          ) : error ? (
            <div>error</div>
          ) : (
            <div className="flex flex-col gap-2 w-full">
              <div className="my-auto">
                <div
                  onMouseOut={() => {
                    setCurr(-1);
                  }}
                  className="flex my-auto gap-2  px-2 py-1"
                >
                  {[0, 0, 0, 0, 0].map((_, ind: number) => {
                    return (
                      <StarIcon
                        key={ind}
                        onMouseOver={() => {
                          setCurr(ind);
                        }}
                        onClick={() => {
                          setRating(ind);
                        }}
                        className={`text-lg cursor-pointer text-gray-600 ${rating != null && rating >= ind ? "text-yellow-500" : rating == null && curr >= ind ? "text-yellow-500" : ""}`}
                      />
                    );
                  })}
                </div>
              </div>
              {rating != null && (
                <form className="flex border w-3/4 border-slate-400 rounded-xl ps-2 bg-white ">
                  <input
                    value={comment}
                    onChange={({ target }: any) => setComment(target.value)}
                    className="w-full outline-none  "
                    placeholder="Add your review here..."
                    name="Abcd"
                    onSubmit={() => {
                      setComments((data) => [
                        {
                          comment,
                          rating,
                          user: { profile_pic: state.user.profile_pic },
                        },
                        ...data,
                      ]);
                      setComment("");
                      setRating(null);
                    }}
                  />
                  <button
                    onClick={() => {
                      setComments((data) => [
                        {
                          comment,
                          rating,
                          user: { profile_pic: state.user.profile_pic },
                        },
                        ...data,
                      ]);
                      setComment("");
                      setRating(null);
                      post();
                    }}
                    className="px-5 py-5 rounded-lg  flex gap-3"
                  >
                    {/* <p>
                          Send
                      </p> */}
                    <LuSend className="m-auto text-lg text-mainBlue" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 ps-5">
        {comments.map((data: any, ind: number) => (
          <Review
            key={ind}
            created_at={data.create_at}
            rating={data.rating}
            message={data.comment}
            user={data.user}
          />
        ))}
      </div>
    </div>
  );
};

const timeStamp = () => {
  var timestamp = 1647723600000;
  var date = new Date(timestamp);
  var time = date.toLocaleTimeString(); // Adjust the format based on your preference
  var formattedDate = date.toLocaleDateString(); // Adjust the format based on your preference
  return formattedDate;
};

export default AddComment;

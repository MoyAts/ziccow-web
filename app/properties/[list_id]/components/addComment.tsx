"use client";
import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import { FaStar as StarIcon } from "react-icons/fa6";
import BuildStar from "./buildstar";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_LISTING_REVIEW,
  GET_LISTING_REVIEW,
} from "@/graphql/features/listing";
import Image from "next/image";
import { calculateTimeDifference } from "@/lib/auth";
import { useSelector } from "react-redux";
import { getState } from "@/store/features/auth/authSlice";
import { FaAngleLeft } from "react-icons/fa6";
import Review from "@/app/_components/review";
const AddComment = ({ listing_id, broker_id }: any) => {
  const state = useSelector(getState);

  const [comments, setComments] = useState<any[]>([]);

  const newDatas = useQuery(GET_LISTING_REVIEW, {
    fetchPolicy: "network-only",
    variables: {
      broker_id: broker_id,
    },
    onCompleted: () => {
      if (newDatas.data) {
        setComments(newDatas.data.property_review);
      }
    },
  });

  const [comment, setComment] = useState("");
  const [curr, setCurr] = useState(-1);
  const [rating, setRating] = useState<number | null>(null);

  const [addReview, { loading, data, error, reset }] = useMutation(
    ADD_LISTING_REVIEW,
    {
      fetchPolicy: "network-only",
    },
  );

  if (data) {
    if (!(data?.insert_property_review?.returning.length > 0)) {
      alert("Not saved!");
    } else {
      setComments((com) => {
        return [data?.insert_property_review?.returning[0], ...com];
      });
    }
    setRating(null);
    setComment("");
    reset();
  }

  if (error) {
    alert("error");
  }

  const post = () => {
    addReview({
      variables: {
        comment,
        rating,
        user_id: state.user.userId,
        broker_id,
        listing_id,
      },
    });
  };
  return (
    <div className="flex pb-32 flex-col gap-5 mt-12">
      <p className="text-xl text-center">
        Leave your review about your experience with the agent
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
            <div className="m-auto">loading</div>
          ) : error ? (
            <div className="m-auto">error</div>
          ) : (
            <div className="flex flex-col gap-2 w-full ">
              <div className="my-auto">
                <div
                  onMouseOut={() => {
                    setCurr(-1);
                  }}
                  className="flex my-auto gap-2 w-full px-2 py-1"
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
                <form className="flex w-full border  border-slate-400 rounded-xl ps-2 bg-white ">
                  <input
                    value={comment}
                    onChange={({ target }: any) => setComment(target.value)}
                    className="w-full outline-none  "
                    placeholder="Add your review here..."
                    name="Abcd"
                    onSubmit={() => {
                      !loading && post();
                    }}
                  />
                  <button
                    onClick={() => {
                      !loading && post();
                    }}
                    className="px-5 py-5 rounded-lg  flex gap-3"
                  >
                    {
                      <LuSend
                        className={`m-auto text-lg ${loading ? "text-slate-700" : "text-mainBlue"} `}
                      />
                    }
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 ps-5 flex-wrap">
        {comments.map((data: any, ind: number) => (
          <Review
            key={ind}
            created_at={data.created_at}
            rating={data.rating}
            message={data.comment}
            user={data.user}
            likes={data.review_likes}
            review_id={data.uuid}
          />
        ))}
      </div>
    </div>
  );
};

export default AddComment;

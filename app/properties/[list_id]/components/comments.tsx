import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";
import { FaStar as StarIcon } from "react-icons/fa6";
import BuildStar from './buildstar';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_LISTING_REVIEW,GET_LISTING_REVIEW } from '@/graphql/features/listing';
import Image from 'next/image';
import { calculateTimeDifference } from '@/lib/auth';
import { useSelector } from 'react-redux';
import { getState } from '@/store/features/auth/authSlice';


const AddComment = ({ listing_id } : any) => {
  
  const state = useSelector(getState)

  const [comments, setComments] = useState<any[]>([])

  const newDatas = useQuery(GET_LISTING_REVIEW,{
    fetchPolicy: 'network-only', 
    variables : {
      listing_id : listing_id,
    },
    onCompleted : ()=>{
      if(newDatas.data){
        setComments(newDatas.data.property_review)
      }
    }
  })
  
  const [comment, setComment] = useState("")
  const [curr, setCurr] = useState(-1)
  const [rating, setRating] = useState<number | null>(null)

  const [addReview , { loading , data, error}] = useMutation(ADD_LISTING_REVIEW,{
    fetchPolicy: 'network-only', 
  })

  if(error){
    alert("error")
  }

  const post = ()=> {
    addReview({ variables : {
        comment,
        rating,
        user_id : state.user.userId,
        listing_id,
    }})
  }
  return (
    <div className='flex pb-32 flex-col gap-5 mt-12'>

      <p className='text-lg text-center'>Leave your review about your experience on agents </p>
      <div className=' flex gap-5'>
        <div className='flex gap-5 w-full'>
          {
            state.user.profile_pic ?
              <Image className='rounded-full w-[4em] h-[4em]' src={state.user.profile_pic} width={100} height={100} alt="" />
            :
            <div className='w-[4em] h-[3em] flex rounded-full bg-slate-900'>
              <div className='m-auto text-white'>N</div>
            </div>
          }
         {loading ? 
         <div className='m-auto'>loading</div>
         :
         error ?
         <div className='m-auto'>error</div>
         :
         <div className='flex flex-col gap-2 w-full '>
            <div className='my-auto'>
              <div
                onMouseOut={() => {
                  setCurr(-1)
                }}
                className='flex my-auto gap-2 w-full px-2 py-1'>
                {[0, 0, 0, 0, 0].map((_, ind: number) => {
                  return <StarIcon
                    key={ind}
                    onMouseOver={() => {
                      setCurr(ind)
                    }}
                    onClick={() => {
                      setRating(ind)
                    }}
                    className={`text-lg cursor-pointer text-gray-600 ${rating != null && rating >= ind ? "text-yellow-500" : rating == null && curr >= ind ? "text-yellow-500" : ""}`} />
                })}

              </div>
            </div>
            {rating != null && <form className="flex w-full border  border-slate-400 rounded-xl ps-2 bg-white ">
              <input
                value={comment}
                onChange={({ target }: any) => setComment(target.value)}
                className='w-full outline-none  '
                placeholder='Add your review here...'
                name='Abcd'
                onSubmit={() => {
                  setComments(data => [{ comment, rating }, ...data])
                  setComment("")
                  setRating(null)
                }}
              />
              <button onClick={() => {
                setComments(data => [{ comment, rating }, ...data])
                setComment("")
                setRating(null)
                post()
              }} className='px-5 py-5 rounded-lg  flex gap-3'>
              { <LuSend className='m-auto text-lg text-mainBlue' />}
              </button>

            </form>

            }
          </div>}
        </div>
      </div>
      <div className='flex flex-col gap-4 ps-5'>
        {comments.map((data: any, ind: number) => <Comment key={ind} created_at={data.created_at} rating={data.rating} message={data.comment} user={data.user} />)}
      </div>
    </div>
  )
}

const timeStamp = () => {
  var timestamp = 1647723600000;
  var date = new Date(timestamp);
  var time = date.toLocaleTimeString(); // Adjust the format based on your preference
  var formattedDate = date.toLocaleDateString(); // Adjust the format based on your preference
  return formattedDate
}

interface Pr {
   message: string, 
   rating: number, 
   created_at : string,
   user : {
    first_name : string,
    last_name : string,
    profile_pic : string,
  }
}
const Comment = ({ message, rating, user ,created_at}: Pr) => {
  const time  = created_at ? calculateTimeDifference(created_at) : "1 sec"

  return <div className='flex gap-5 '>
    <div className='w-[3em] flex h-[3em] rounded-full bg-mainBlue'>
      <div className='m-auto text-white'>{user?.first_name[0] ?? "U"}</div>
    </div>
    <div className='flex flex-col gap-2'>

      <div className='py-2 flex flex-col break-words flex-wrap px-4 w-fit  rounded-lg bg-white'>
        <div className='text-gray-500 text-sm'>{user?.first_name ?? ""}</div>
        <div>
          {message}
        </div>
        <div className='flex gap-5 justify-between'>
          <div className='flex gap-1  place-content-end place-items-end '>
            <BuildStar num={rating + 1} />
          </div>
          <div className='text-xs mt-2 text-gray-500 place-self-end place-items-end self-end'>{time} Ago</div>
        </div>
      </div>
    </div>
  </div>
}

export default AddComment
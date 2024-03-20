import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";
var cms = [
  "Great location and spacious apartment!",
  "The view from the balcony is breathtaking!",
  "The apartment is clean and wellmaintained.",
  "Excellent amenities and friendly neighbors.",
  "The landlord is responsive and helpful.",
  "I love the modern design of the apartment.",
  "Conveniently located near shops and restaurants.",
  "Quiet and peaceful environment.",
  "The apartment has ample storage space.",
  "I feel safe and secure in this building."
];
const AddComment = () => {
  const [comments , setComments] = useState(cms)
  const [comment,setComment] = useState("")
  return (
    <div className='flex pb-32 flex-col gap-5'>

      <p className='text-lg'>Leave your comment here</p>
      <div className=' flex gap-5'>
        <div className='flex gap-5 w-full'>
          <div className='w-[3em] flex h-[3em] rounded-full bg-slate-900'>
              <div className='m-auto text-white'>N</div>
          </div>
          <div className="flex border w-full border-slate-400 rounded-xl ps-2 bg-white ">
              <input 
                value={comment} 
                onChange={({target} : any) => setComment(target.value)} 
                className='w-full outline-none  ' 
                placeholder='insert your text' 
                name='Abcd'  />
              <button onClick={()=>{
              setComments(data => [comment,...data])
            }} className='px-5 py-5 rounded-lg  flex gap-3'>
              {/* <p>
                  Send
              </p> */}
              <LuSend className='m-auto text-lg text-mainBlue' />
            </button>
          
          </div>
        </div>
        </div>
      <div className='flex flex-col gap-4 ps-5'>
        {comments.map(( val : string ) => <Comment key={val} message={val} />)}
      </div>
    </div>
  )
}

const timeStamp  = () => {
  var timestamp = 1647723600000;
  var date = new Date(timestamp);
  var time = date.toLocaleTimeString(); // Adjust the format based on your preference
  var formattedDate = date.toLocaleDateString(); // Adjust the format based on your preference
  return formattedDate
}
const Comment = ({ message } : { message : string }) => {
  const time = timeStamp()
  return <div className='flex gap-5 '>
    <div className='w-[3em] flex h-[3em] rounded-full bg-mainBlue'>
        <div className='m-auto text-white'>N</div>
    </div>
      <div className='py-2 flex flex-col break-words flex-wrap px-4 w-fit  rounded-lg bg-white'>
        <div>
          {message}
        </div>
        <div className='text-sm mt-2 text-gray-500 place-self-end'>{time}</div>
      </div>
  </div>
}

export default AddComment
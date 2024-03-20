import React, { useState } from 'react'
var cms = [
  "Great location and spacious apartment!",
  "The view from the balcony is breathtaking!",
  "The apartment is clean and well-maintained.",
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
      
      <div className=' flex gap-5'>
        <div className='flex gap-5 w-1/2'>
          <div className='w-[3em] flex h-[3em] rounded-full bg-mainBlue'>
              <div className='m-auto text-white'>N</div>
          </div>
          <input value={comment} onChange={({target} : any) => setComment(target.value)} className='w-full outline-none border-slate-400 rounded-xl bg-white border ps-5' placeholder='insert your text' name='Abcd'  />
        </div>
        <button onClick={()=>{
          setComments(data => [comment,...data])
        }} className='bg-mainBlue px-5 py-1 rounded-lg text-white '>
          Send
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        {comments.map(( val : string ) => <Comment key={val} message={val} />)}
      </div>
    </div>
  )
}

const timeStamp  = () => {
  // Assuming you have a timestamp in milliseconds
  // Assuming you have a timestamp in milliseconds
  var timestamp = 1647723600000; 

  // Create a new Date object using the timestamp
  var date = new Date(timestamp);

  // Extract the time and format it
  var time = date.toLocaleTimeString(); // Adjust the format based on your preference

  // Extract the date and format it
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = date.toLocaleDateString(); // Adjust the format based on your preference
  return formattedDate
}
const Comment = ({ message } : { message : string }) => {
  const time = timeStamp()
  return <div className='flex  gap-5'>
    <div className='w-[3em] flex h-[3em] rounded-full bg-mainBlue'>
        <div className='m-auto text-white'>N</div>
    </div>
    <div className='flex gap-2'>
      <div className='w-fit px-4 flex align-middle place-content-center place-items-center rounded-lg bg-white'>
        {message}
      </div>
      <div className='place-content-end place-self-end text-sm'>{time}</div>
    </div>
  </div>
}

export default AddComment

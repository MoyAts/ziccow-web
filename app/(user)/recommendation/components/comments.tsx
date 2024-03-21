import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";
import { FaStar as StarIcon } from "react-icons/fa6";
import BuildStar from './buildstar';

var cms = [
  { comment: "Great location and spacious apartment!", rate: 3 },
  { comment: "The view from the balcony is breathtaking!", rate: 2 },
  { comment: "The apartment is clean and well-maintained.", rate: 2 },
  { comment: "Excellent amenities and friendly neighbors.", rate: 1 },
  { comment: "The landlord is responsive and helpful.", rate: 3 },
  { comment: "I love the modern design of the apartment.", rate: 2 },
  { comment: "Conveniently located near shops and restaurants.", rate: 2 },
  { comment: "Quiet and peaceful environment.", rate: 3 },
  { comment: "The apartment has ample storage space.", rate: 2 },
  { comment: "I feel safe and secure in this building.", rate: 3 }
];
const AddComment = () => {
  const [comments , setComments] = useState(cms)
  const [comment,setComment] = useState("")
  const [curr,setCurr] = useState(-1)
  const [rate,setRate] = useState<number | null>(null)
  return (
    <div className='flex pb-32 flex-col gap-5'>

      <p className='text-lg'>Leave your review here</p>
      <div className=' flex gap-5'>
        <div className='flex gap-5 w-full'>
          <div className='w-[3em] flex h-[3em] rounded-full bg-slate-900'>
              <div className='m-auto text-white'>N</div>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div className='my-auto'>
                <div 
                  onMouseOut={()=>{
                      setCurr(-1)
                    }} 
                  className='flex my-auto gap-2  px-2 py-1'>
                  {[0,0,0,0,0].map((_,ind : number) => {
                    return <StarIcon 
                    key={ind}
                    onMouseOver={()=>{
                      setCurr(ind)
                    }} 
                    onClick={()=>{
                      setRate(ind)
                    }}
                    className={`text-lg cursor-pointer text-gray-600 ${rate != null && rate >= ind ? "text-yellow-500" : rate == null && curr >= ind ? "text-yellow-500" : "" }`} />
                  })}
                  
                </div>
              </div>
                {rate != null && <div className="flex border w-full border-slate-400 rounded-xl ps-2 bg-white ">
                      <input 
                        value={comment} 
                        onChange={({target} : any) => setComment(target.value)} 
                        className='w-full outline-none  ' 
                        placeholder='Add your review here...' 
                        name='Abcd'  
                        onSubmit={()=>{
                            setComments(data => [{ comment , rate},...data])
                            setComment("")
                            setRate(null)
                        }}
                      />
                      <button onClick={()=>{
                      setComments(data => [{ comment , rate},...data])
                      setComment("")
                      setRate(null)
                    }} className='px-5 py-5 rounded-lg  flex gap-3'>
                      {/* <p>
                          Send
                      </p> */}
                      <LuSend className='m-auto text-lg text-mainBlue' />
                    </button>
                  
                  </div>  
                
                  }
            </div>
          </div>
          </div>
        <div className='flex flex-col gap-4 ps-5'>
          {comments.map(( data : {comment :string,rate : number},ind : number ) => <Comment key={ind} rate={data.rate} message={data.comment} />)}
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
const Comment = ({ message,rate } : { message : string , rate : number}) => {
  const time = timeStamp()
  return <div className='flex gap-5 '>
    <div className='w-[3em] flex h-[3em] rounded-full bg-mainBlue'>
        <div className='m-auto text-white'>N</div>
    </div>
    <div className='flex flex-col gap-2'>
      
      <div className='py-2 flex flex-col break-words flex-wrap px-4 w-fit  rounded-lg bg-white'>
        <div className='text-gray-500 text-sm'>Alemu Girma</div>
        <div>
          {message}
        </div>
        <div className='flex gap-5 justify-between'>
          <div className='flex gap-1  place-content-end place-items-end '>
            <BuildStar num={rate + 1} />
          </div>
          <div className='text-sm mt-2 text-gray-500 place-self-end place-items-end self-end'>{time}</div>
        </div>
      </div>
    </div>
  </div>
}

export default AddComment
import Message from "./message"
import Users from './users'
import emptyImg from "../../assets/images/emptyMessage.svg"
import Image from 'next/image'
import { useEffect } from 'react'


const Detail = () => {
  const nothingFound = false

  useEffect(() => {
    window.addEventListener('scroll',() => {
      if (window.scrollY < 500 && window.scrollY > 5) {
        const element = document.getElementById('message-top');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    return () => window.removeEventListener('scroll', ()=>{});
  }, []);

  return (
    <div className='flex flex-col px-20 max-w-[1700px] max-h-[1200px] mx-auto'>
      <div className='flex flex-col mt-10'>
        <h1 className='text-[35px]'>Direct Message</h1> 
        <p className='text-lightGray'>Messages replied to within 1 hour, 7 days a week.</p>
      </div>
      
      {nothingFound ?
        <div className='flex h-[80vh] max-h-[700px] w-full pb-16'>

          <div className='m-auto flex flex-col gap-2 justify-center items-center'> 
            <Image src={emptyImg} alt='nothing found' />
            <div className='text-[30px] font-semibold'>You don’t have any messages yet.</div>
            <div>When you have messages you’ll see them here.</div>

          </div>


        </div>
      :
      <div id="message-top" className='flex h-[100vh]  max-h-[1000px] mt-8 w-full mb-16'>
  
        <Users />
        <div className='h-full w-[1px] mx-2 bg-gray-300'></div>
        <Message />
      </div>}
    </div>
  )
}

export default Detail

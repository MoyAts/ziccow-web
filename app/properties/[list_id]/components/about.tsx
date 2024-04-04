"use client" 

const about = ({ description } : any ) => {
  return (
    <div className="w-full bg-lightBg flex flex-col">
       <div className='font-bold text-3xl my-5 mt-10'>About the Property</div>
       <div className='flex flex-col gap-5 text-lightGray'>
          <p>
            {description ?? "No description found!"}
          </p>
        
       </div>
      
    </div>
  )
}

export default about

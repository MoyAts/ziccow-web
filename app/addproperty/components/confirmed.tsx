import React from 'react'

const confirmed = () => {
  return (
    <div className='w-full'>
      <div className='text-lg font-semibold'>All done ...</div>
      <div className='text-[40px] max-mobile:text-3xl max-mobile:text-center w-full font-semibold mt-1 mb-4'>Successful registration...</div>
      <div className='text-lightGray'> 
        <div className='mb-3'>
          Your property has been successfully added to the listing. 
        </div>
        <div>
          Welcome to Apartment 314 located on the third floor of Novo 64 in 
          the heart of Forest Hills! This unit features a spacious living area with 
          beautiful maple hardwood floors and expansive windows overlooking a quiet street.
        </div>
      </div>
        
    </div>
  )
}

export default confirmed
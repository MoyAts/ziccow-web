import React from 'react'
import Property from "./property"
const bookmarks = () => {
  return (
    <div className='w-full grid grid-cols-3  2xl:grid-cols-4  gap-5 pb-32 max-xl:grid-cols-3 justify-between   px-20 max-w-[1700px] mx-auto '>
        <Property  />
        <Property  />
        <Property  />
        <Property  />
        <Property  />
        <Property  />
        <Property  />
        <Property  />
        <Property  />
    </div>
  )
}

export default bookmarks
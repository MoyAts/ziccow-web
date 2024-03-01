import React from 'react'
import User from './user'

interface Props {
  tablet? : boolean,
  setMessage : Function
}

const users = ({ tablet,setMessage } : Props) => {
  const css1 = "scroller basis-1/3 flex flex-col gap-7 pt-5 overflow-auto"
  const css2 = "scroller w-full flex flex-col gap-7 pt-5 overflow-auto"
  return (
    <div className={`${tablet && tablet == true ? css2 : css1}`}>
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
            <User setMessage={setMessage} />
           
        </div>
  )
}

export default users

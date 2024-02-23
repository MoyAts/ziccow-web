import React from 'react'

const Error = ( {error } : any) => {
  let e = error?.graphQLErrors ? error.graphQLErrors[0].message : error ? error : null
  return (
    <>
      {e && <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
            { e }
        </div>}
    </>
  )
}

export default Error

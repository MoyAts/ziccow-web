import React from 'react'

const Error = ( {error } : any) => {
  return (
    <>
      {error && <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
            { error.graphQLErrors[0].message}
        </div>}
    </>
  )
}

export default Error

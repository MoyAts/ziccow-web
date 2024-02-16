import React from 'react'

const ClientError = ( {error } : string  | null) => {
  return (
    <>
      <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
            { error }
        </div>
    </>
  )
}

export default ClientError

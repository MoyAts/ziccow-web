import React from 'react'
import Box from './box'
import { useQuery } from '@apollo/client';
import { houseInf } from '@/utils/interfaces';

const Boxes = ({ query, variables }: any) => {
  const { loading, error, data } = useQuery(query, {
    variables
  });

  
  return (
    <div className='mt-28 grid max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-tablet:gap-15 grid-cols-3 gap-10'>

      {
        loading ?
          <div>Loading</div>
          :
          error ?
            <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
              {error.graphQLErrors[0]?.message ?? "something goes wrong"}
            </div>
            :
            data ?
            data.listing.length == 0 ? <div className='text-xl'>Sorry, Nothing Found :( </div> :
              data.listing.map((house: houseInf, ind: number) => <Box key={ind} house={house} />)
              :
              <div>......</div>
      }
    </div>
  )
}

export default Boxes

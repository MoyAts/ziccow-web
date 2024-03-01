"use client" 
import GetStarted from "../../_components/get_started"
import Hero from "./components/hero"
import Detail from "./components/detail"
import { GET_LIST_BY_ID } from "@/graphql/features/listing"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/navigation"

const Page = ({ params : { list_id }} : { params : { list_id : string}}) => {
  const router = useRouter()
  const {loading,data,error} = useQuery(GET_LIST_BY_ID, {
    variables : {
      list_id 
    }
  })
  data && console.log(data.listing)
  if(error){
    router.replace("/properties")
  }
  
  return (
    <div className='relative bg-lightBg'>
      <GetStarted />
      <Hero />
      {data && <Detail house={data.listing[0]} />}
    </div>
  )
}

export default Page

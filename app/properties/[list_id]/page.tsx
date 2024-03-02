"use client" 
import GetStarted from "../../_components/get_started"
import Hero from "./components/hero"
import Detail from "./components/detail"
import { GET_LIST_BY_ID } from "@/graphql/features/listing"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/navigation"
import Drawer from "@/app/_components/drawer"
import { useState } from "react"

const Page = ({ params : { list_id }} : { params : { list_id : string}}) => {
  const router = useRouter()
  const {loading,data,error} = useQuery(GET_LIST_BY_ID, {
    variables : {
      list_id 
    }
  })
  if(error){
    router.replace("/properties")
  }
  const [isDrawer,setIsDrawer] = useState(false)
  return (
    <div>
        {
          isDrawer && <Drawer setIsDrawer={setIsDrawer}/>
        }
        <div className={` ${isDrawer && "hidden"}  relative bg-lightBg`}>
          <GetStarted />
          <Hero setIsDrawer={setIsDrawer} />
          {loading && "loading"}
          {data && <Detail house={data.listing[0]} />}
        </div>
    </div>
  )
}

export default Page

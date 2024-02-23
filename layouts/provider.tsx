"use client"
import React from 'react'
import client from "../graphql/client"
import { ApolloProvider, useLazyQuery } from '@apollo/client';
import StoreProvider from '@/store/storeProvider';
import { GET_USER } from "../graphql/features/user"
import { useSelector,useDispatch } from 'react-redux';
import { getState,AuthInf,userFetched,fetchingUser,userFetchedError,LogInf } from '@/store/features/auth/authSlice';
import { getUser } from "../lib/auth"

const Provider = ({
    children,
  }: Readonly<{
    children: React.ReactNode; 
  }>) => {
    
  return (
    <StoreProvider>
        <ApolloProvider client={client}>
          <Requestor >
            {children}
          </Requestor >
        </ApolloProvider>
    </StoreProvider>
  )

}

const Requestor  = ({ children } : any) => {
  const state : AuthInf = useSelector(getState)
  const [getuser, { loading, data, error }] = useLazyQuery(GET_USER,{
    variables : {
      user_id : getUser()?.userId
    }
  })
  const dispatch = useDispatch()
  if(state.doesTokenExist && state.isDataFetched == false  && getUser() != null){
    if(loading == false && data == null && error == null){
      getuser()
    }
    if(loading){
      console.log("loading")
      dispatch(fetchingUser())
    }
    if(data){
     
      
      dispatch(userFetched(data. user_by_pk))
    }
    if(error){
      console.log("error")
      dispatch(userFetchedError(error))
    }
  }
  
  return <>{children}</>
} 


export default Provider

"use client"
import React from 'react'
import client from "../graphql/client"
import { ApolloProvider, useLazyQuery } from '@apollo/client';
import StoreProvider from '@/store/storeProvider';
import { GET_USER } from "../graphql/features/user"
import { useSelector,useDispatch } from 'react-redux';
import { getState,userNotFound,AuthInf,userFetched,fetchingUser,userFetchedError,LogInf } from '@/store/features/auth/authSlice';
import { getUser } from "../lib/auth"
import Onboarding from "../app/onboarding/page"

const Provider = ({
    children,
  }: Readonly<{
    children: React.ReactNode; 
  }>) => {
    
  return (
    <StoreProvider>
        <ApolloProvider client={client}>
          <Requestor >
            <Checker>
              {children}
            </Checker >
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
  const check = state.doesTokenExist && state.isDataFetched == false  && getUser() != null
  console.log(check , "checking",state.doesTokenExist,state.isDataFetched == false)
  if(check){
    if(loading == false && data == null && error == null){
      getuser()
    }
    if(loading){
      console.log("loading")
      dispatch(fetchingUser())
    }
    if(data){
      console.log("okkkkkk",data.user_by_pk)
      dispatch(userFetched(data.user_by_pk))
    }
    if(error){
      console.log("error")
      dispatch(userFetchedError(error))
    }
  } else if (state.doesTokenExist == false && state.isDataFetched == false){ 
    dispatch(userNotFound())
  }
  
  return <>{children}</>
} 

const Checker = ({ children }: any) => {
  const state: AuthInf = useSelector(getState);
  console.log(state.isLogedIn == LogInf.LOGED_IN && state.onboardingFilled === false)
  if (state.isLogedIn == LogInf.LOGED_IN && state.onboardingFilled === false) {
    return <Onboarding />;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default Provider

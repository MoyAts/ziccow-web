"use client"
import React, { useEffect } from 'react'
import client from "../../graphql/client"
import { ApolloProvider } from '@apollo/client';
import { UseSelector } from 'react-redux';
import  { getState } from "../../store/features/auth/authSlice"

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode; 
  }>) => {
    return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

const checkOnboarding = ({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) => {
  
  return (
    {children}
)
}

export default layout

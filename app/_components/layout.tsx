"use client"
import React from 'react'
import client from "../../graphql/client"
import { ApolloProvider } from '@apollo/client';
let da = 0
const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode; 
  }>) => {
  console.log(da + 1)
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default layout

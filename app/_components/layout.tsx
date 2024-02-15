"use client"
import React from 'react'
import client from "../../graphql/client"
import { ApolloProvider } from '@apollo/client';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    console.log("layout")
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default layout

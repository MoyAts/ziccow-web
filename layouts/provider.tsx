"use client"
import React from 'react'
import client from "../graphql/client"
import { ApolloProvider } from '@apollo/client';
import StoreProvider from '@/store/storeProvider';

const Provider = ({
    children,
  }: Readonly<{
    children: React.ReactNode; 
  }>) => {
    
  return (
    <StoreProvider>
        <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
    </StoreProvider>
  )

}

export default Provider

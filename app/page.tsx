"use client"
import Page from "./home/page"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.ziccow.com/v1/graphql',
  cache: new InMemoryCache(), 
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Page />
   </ApolloProvider>
  );
}

import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from '@apollo/client';
const httpLink = new HttpLink({ uri: 'https://graphql.ziccow.com/v1/graphql' });
import { getUser } from '@/lib/auth';


const head = typeof window !== "undefined" ?
    window.localStorage.getItem("user") ? 
    {
      "Authorization": "Bearer "+ getUser()?.token,
    }
    : 
    {}
    :
    { 
    }

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...head,
      "x-hasura-admin-secret":"myadminsecretkey"
    }
  }));

  return forward(operation);
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

export default client
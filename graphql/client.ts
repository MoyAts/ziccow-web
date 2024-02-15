import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'https://graphql.ziccow.com/v1/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
      'Content-Type': 'application/json',
      "x-hasura-admin-secret" : "myadminsecretkey"
    }
  }));

  return forward(operation);
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

export default client
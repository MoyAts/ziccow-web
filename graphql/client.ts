import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
} from "@apollo/client";
const httpLink = new HttpLink({ uri: "https://graphql.ziccow.com/v1/graphql" });
import { getUser } from "@/lib/auth";

const head =
  typeof window !== "undefined"
    ? window.localStorage.getItem("user")
      ? {
          Authorization: "Bearer " + getUser()?.token,
        }
      : {
          "X-Hasura-Role": "anonymous",
        }
    : {
        "X-Hasura-Role": "anonymous",
      };

const supserAdmin = false;
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: supserAdmin
      ? {
          "x-hasura-admin-secret": "myadminsecretkey",
        }
      : head,
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;

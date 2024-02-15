import { gql } from "@apollo/client"

export const LOGIN_GQL = gql`
mutation user($email: String!, $password: String!) {
  loginEmail(email: $email, password: $password) {
    token
  }
}
`


export const REGISTER_GQL = gql`
mutation user($email: String!, $firstName: String!,$lastName: String!, $password: String! ){
  Signup(email: $email, first_name: $firstName, last_name: $lastName, password: $password){
    first_name
    last_name
  }
}

`
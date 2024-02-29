"use client";
import { gql } from "@apollo/client"

export const LOGIN_GQL = gql`
mutation user($email: String!, $password: String!) {
  loginEmail(email: $email, password: $password) {
    token
    user {
      user_id
      first_name
      last_name
    }
  }
}
`;


export const SIGNUP_SOCIAL_MEDIA = gql`
  mutation a($token : String!,$email : String!,$firstName: String!,$lastName: String!,$phone: String!,) {
    socialSignup(input: {accessToken: $token,
      email: $email, 
      first_name: $firstName, 
      last_name: $lastName, 
      phone_number: $phone}) {
        token
        user {
          first_name
          last_name
          phone_number
          email
          user_id
        }
    }
  }
`
export const REGISTER_GQL = gql`
mutation user($email: String!, $firstName: String!,$lastName: String!, $password: String!,$phone : String! ){
  Signup(email: $email, first_name: $firstName, last_name: $lastName, password: $password, phone_number : $phone ){
    first_name
    last_name
    user_id
  }
}

`;

export const LOGIN_SOCIAL_MEDIA = gql`
  mutation a($token : String!){
    socialLogin(accessToken: $token) {
      token
      user {
        first_name
        last_name
        phone_number
        email
        user_id
      }
  }
}
`
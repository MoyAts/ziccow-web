import { gql } from "@apollo/client"

export const GET_USER = gql`

    query user($user_id : uuid!){
      user_by_pk(user_id : $user_id){
          first_name
          last_name
          email
          user_id
        }
      }
`

export const UPDATE_USER = gql`
  mutation a($_eq: uuid!, $first_name: name!, $last_name: name!, $phone_number: String!, $email: String!) {
    update_user(_set: {first_name: $first_name, last_name: $last_name, phone_number: $phone_number, email: $email}, where: {user_id: {_eq: $_eq}}) {
      affected_rows
      returning {
        first_name
        last_name
        email
        phone_number
        user_id
      }
    }
  }
`
  


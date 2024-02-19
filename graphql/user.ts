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
  
import { gql } from "@apollo/client"

export const GET_REALESTATE_REVIEW = gql`
    query a($_eq : uuid!){
            real_estate_review( 
                 where: { 
                    real_estate_id: {_eq: $_eq}}) {
                comment
                rating
                real_estate {
                    name
                    icon
                }
                create_at
                user{
                    first_name
                    last_name
                    profile_pic
                }
            }
        }
 `

export const ADD_REALESTATE_REVIEW = gql`
   mutation A( $comment : String!,$real_estate_id : uuid!,$rating : bigint!){
        insert_real_estate_review(objects:{
            comment:$comment,
            rating:$rating,
            real_estate_id: $real_estate_id ,
        }){
            affected_rows
        }
    }
 `
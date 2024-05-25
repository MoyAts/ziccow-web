import { gql } from "@apollo/client";

export const GET_REALESTATE_REVIEW = gql`
  query a($_eq: uuid!) {
    real_estate_review(
      order_by: { create_at: desc }
      where: { real_estate_id: { _eq: $_eq } }
    ) {
      uuid
      comment
      create_at
      rating
      real_estate {
        name
        icon
      }
      review_likes {
        user_like_id
      }
      user {
        first_name
        last_name
        profile_pic
      }
    }
  }
`;

export const ADD_REALESTATE_REVIEW = gql`
  mutation A($comment: String!, $real_estate_id: uuid!, $rating: bigint!) {
    insert_real_estate_review(
      objects: {
        comment: $comment
        rating: $rating
        real_estate_id: $real_estate_id
      }
    ) {
      returning {
        uuid
        comment
        rating
        user {
          profile_pic
          first_name
          last_name
        }
        review_likes {
          user_like_id
        }
        create_at
      }
    }
  }
`;



export const INSERT_REALESTATE_AMENITY = gql`
  mutation a($datas : [real_estate_amenity_insert_input!]!) {
  insert_real_estate_amenity(objects: $datas) {
    affected_rows
  }
}
`;


export const GET_REALESTATE_AMENITY = gql`
  query a($list_id : uuid!) {
    real_estate_amenity(where: {listing_id: {_eq: $list_id}}, order_by: {created_at: asc}) {
      amenity
      area
      uuid
      listing {
        listing_id
        property_name
      }
      created_at
    }
}
`;


export const DELETE_REALESTATE_AMENITY = gql`
  mutation A($list_id : uuid!){
  delete_real_estate_amenity(where :{listing_id :{ _eq : $list_id}}) {
 		affected_rows
  }}
`;


export const UPDATE_RENTAL_PRICE = gql`
  mutation a($rental_price_id : uuid!,$price:bigint!,$cycle:String!){
    update_rental_price(where:{
      rental_price_id :{_eq :$rental_price_id},
    },_set:{
      price : $price,
      cycle : $cycle,
    }){
      affected_rows
      returning{
        rental_price_id
      }
    }
  }
`;

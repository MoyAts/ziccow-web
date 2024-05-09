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

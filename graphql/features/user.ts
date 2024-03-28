import { gql } from "@apollo/client"

export const GET_USER = gql`

    query user($user_id : uuid!){
      user_by_pk(user_id : $user_id){
          first_name
          last_name
          email
          user_id
          onboarding_complete
          internal_agent
        }
      }
`


export const GET_USER_SETTING = gql`

    query user($user_id : uuid!){
      user_by_pk(user_id : $user_id){
          first_name
          last_name
          phone_number
          email
          social_twitter
          social_facebook
          social_telegram
          social_whatsapp
          social_instagram
        }
      }
`

export const UPDATE_USER = gql`
  mutation a($_eq: uuid!,$whatsapp : String!,$twitter : String!,$facebook: String!,$instagram: String!, $first_name: name!, $last_name: name!, $phone_number: String!, $email: String!) {
    update_user(_set: 
      {
        first_name: $first_name,
        last_name: $last_name, 
        phone_number: $phone_number, 
        email: $email,
        social_facebook : $facebook,
        social_instagram : $instagram,
        social_twitter : $twitter,
        social_whatsapp : $whatsapp,
      }, where: {user_id: {_eq: $_eq}}) {
      affected_rows
      returning {
        first_name
        last_name
        email
        phone_number
        user_id
        onboarding_complete
      }
    }
  }
`
export const GET_USER_ONBOARDING = gql`
    query{
      user_by_pk(user_id :  "b42bf319-a6ad-49b8-8836-cc707a790c1d"){
        onboarding_complete
      }
    }
`


export const ADD_ONBOARDING_DATA = gql`
    mutation data($education : String!,$lang : String!, $work : String!) {
      addOnboardingData(
        education_level: $education, 
        language_preference: $lang, 
        work_experience: $work
      ) {
        success
      }
    }
`

export const GET_ONBOARDING_FLAG = gql`
  query d($userId : String!) {
    user_by_pk(user_id :  $userId){
      onboarding_complete
    }
  }
`
import { gql } from "@apollo/client"

export const ADD_TOUR = gql`
  mutation ($date : String!,$time :String!,$broker_id :uuid!,$visitor_id :uuid!,$touring_type :String!,$listing_id : uuid!){
    insert_schedule(
      objects: {
        date: $date, 
        time: $time, 
        broker_id: $broker_id, 
        visitor_id : $visitor_id, 
        touring_type: $touring_type,
        listing_id :$listing_id,

    }) {
      affected_rows
      returning {
        time
      }
    }
}
`

export const GET_USER = gql`

    query user($user_id : uuid!){
      user_by_pk(user_id : $user_id){
          first_name
          last_name
          email
          profile_pic
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
          profile_pic
          social_twitter
          social_youtube
          social_facebook
          social_telegram
          social_tiktok
          social_whatsapp
          social_instagram
          onboarding_id 
          onboarding_info {
              education_level
              language_preference
              work_experience
          }
        }
      }
`
export const UPDATE_PROFILE_PICTURE = gql`
mutation($profile_pic : String!,$user_id : uuid!){
  update_user(_set :{ profile_pic : $profile_pic }, where : { user_id :{ _eq : $user_id} }){
    returning {
      profile_pic
    }
  }
}`

export const UPDATE_USER = gql`
  mutation a($_eq: uuid!,$tiktok : String!,$youtube : String!,$whatsapp : String!,$telegram : String!,$twitter : String!,$facebook: String!,$instagram: String!, $first_name: name!, $last_name: name!, $phone_number: String!, $email: String!) {
    update_user(_set: 
      {
        first_name: $first_name,
        last_name: $last_name, 
        phone_number: $phone_number, 
        email: $email,
        social_facebook : $facebook,
        social_tiktok : $tiktok,
        social_instagram : $instagram,
        social_twitter : $twitter,
        social_whatsapp : $whatsapp,
        social_youtube : $youtube,
        social_telegram : $telegram,
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
export const UPDATE_USER_ONBOARDING = gql`
  mutation a($_eq: uuid!,$language_preference : String!,$education_level: String!,$work_experience : String!) {
    update_onboarding_info(_set: 
      {
        education_level : $education_level, 
        work_experience : $work_experience,
        language_preference : $language_preference,
      }, where: {uuid: {_eq: $_eq}}) {
      affected_rows
      returning {
        education_level
        work_experience
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

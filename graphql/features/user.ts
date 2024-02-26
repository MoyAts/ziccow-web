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
  
// export const SOCIAL_MEDIA_LOGIN = gql`
//     mutation a($accessToken,){
//       socialSignup(input: {accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImExODE4ZjQ0ODk0MjI1ZjQ2MWQyMmI1NjA4NDcyMDM3MTc2MGY1OWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmF0bmFlbCBZZXNoaXdhcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJVGM5empFR1dBUEtTOXJzZUxkOXVaQTd1RzdORVM4SThTdXcwTWRqSzg9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vemljY293LTUxYjE2IiwiYXVkIjoiemljY293LTUxYjE2IiwiYXV0aF90aW1lIjoxNzA4OTcwNTg3LCJ1c2VyX2lkIjoicVhQRHkzanhYR09rWE0weElUR3FHN0ZyYnZCMiIsInN1YiI6InFYUER5M2p4WEdPa1hNMHhJVEdxRzdGcmJ2QjIiLCJpYXQiOjE3MDg5NzA1ODcsImV4cCI6MTcwODk3NDE4NywiZW1haWwiOiJuYXRpeWVzaGkxNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMDQ2MTIyODIxODU5MjAyNDgyNSJdLCJlbWFpbCI6WyJuYXRpeWVzaGkxNkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.sl_qOFYscN4u6alGaIvLG3fNROUToT-fEUcPqowpJ4gxUTMo4YTZMx_F1JQ78jPfLwjmX8Sh2Qf5awwCUz_4Mv4DJQ1aA-Sqe4qJpPul3Y2ouSX7MOiHRffnRfMLiafJ_dQE-ND9_p89KqCw-Zub8EUpTksMuiJpAIoWbKzoPT9g4THJFmKujG4ya6s0yOqn1dkIlNDBFklpNTpZnYSd9hMSoN7Qlb_ExP5LGPfGz2HC_rEOxL8g9C4svXgSMFN9Rfd1HQ9ieg5TmYPsWzFAyjcL2f1yN2Q9fHlEYgJ4CCaPWmv_M-4K5zuOTyPSxEsJbLbvfggm5KmBt7AQcZIIcw",
//         email: "last@gmail.com", 
//         first_name: "last", 
//         last_name: "last", 
        
//         phone_number: "+434354323"}) {
//           token
//           user {
//             first_name
//             last_name
//             phone_number
//             email
//           }
//       }
//     }
// `

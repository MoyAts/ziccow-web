import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction,Slice } from '@reduxjs/toolkit'
import { saveUser,getUser,logout, isTokenExist } from "../../../lib/auth"
import type { UserInf } from "../../../lib/auth"

export interface UserFromApi {
  first_name : string,
  last_name : string ,
  user_id : string ,
  email : string ,
} 

export interface DatasInf {
  firstName : string | null,
  lastName : string  | null,
  userId : string  | null,
  email : string  | null,
} 

export enum LogInf {
  LOGED_IN,
  LOADING,
  NO_USER,
}

export interface loginDataInf {
  token : string,
  userId : string
}

export interface AuthInf {
  doesTokenExist : boolean
  isLogedIn : LogInf,
  user : DatasInf | null,
  error: string | null,
  isDataFetched : boolean
}

export const initialState: AuthInf = {
  user : {
    userId : null,
    firstName : null,
    lastName : null,
    email : null
  },
  isLogedIn : LogInf.NO_USER,
  doesTokenExist : isTokenExist(),
  isDataFetched : false,
  error : null,
}

export const authSlice : any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<loginDataInf>) => {
      const data = action.payload
      saveUser({ token : data.token , userId : data.userId })
    },
    logoutUser: (state) => {
        logout()
        state.user = null
        state.isLogedIn = LogInf.NO_USER
        state.doesTokenExist = false
    },
    fetchingUser : (state) => {
      state.isLogedIn = LogInf.LOADING
    },
    userFetched : (state,action : PayloadAction<UserFromApi>) => {
      const user = action.payload
      state.user = {
        userId : user.user_id,
        firstName : user.first_name,
        lastName : user.last_name,
        email : user.email
      }
      state.isLogedIn = LogInf.LOGED_IN
      state.doesTokenExist =true
      state.error = null
      state.isDataFetched = true

    },
    userFetchedError : (state,action : any) => {
      console.log(action.data)
      state.isLogedIn = LogInf.NO_USER
    } 
  },
})

export const { loginUser,logoutUser,fetchingUser,userFetched,userFetchedError } = authSlice.actions

export const getState = (state : any) => {
    return state.auth
}

export default authSlice.reducer
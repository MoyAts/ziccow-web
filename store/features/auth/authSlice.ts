import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction,Slice } from '@reduxjs/toolkit'

export interface DatasInf {
  firstName : string | null,
  lastName : string  | null,
  userId : string  | null,
} 

export interface AuthInf {
  doesTalkenExist : boolean
  isLogedIn : boolean | null,
  data : DatasInf | null,
  loading : string | null,
  isDataFetched : boolean,
  error: string | null
}

const initialState: AuthInf = {
  data : {
    userId : null,
    firstName : null,
    lastName : null
  },
  isLogedIn : false,
  doesTalkenExist : window.localStorage.getItem("token") != null,
  loading : null,
  error : null,
  isDataFetched : false
}

export const authSlice : any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<number>) => {
      const data = action.payload
      console.log(data)
    },
    logoutUser: (state) => {
      
        window.localStorage.removeItem("token")
        state.data = null
        state.isLogedIn = false
        state.doesTalkenExist = false
    },
  },
})

export const { setUser,logoutUser } = authSlice.actions

export const getState = (state : any) => {
    return state.auth
}

export default authSlice.reducer
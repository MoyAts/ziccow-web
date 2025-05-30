import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { saveUser, getUser, logout, isTokenExist } from "../../../lib/auth";
import type { UserInf } from "../../../lib/auth";

export interface UserFromApi {
  first_name: string;
  last_name: string;
  user_id: string;
  email: string;
  onboarding_complete: boolean;
  internal_agent: boolean;
  profile_pic: string | null;
}

export interface DatasInf {
  firstName: string | null;
  lastName: string | null;
  userId: string | null;
  email: string | null;
  internal_agent: boolean | null;
  profile_pic: string | null;
}

export enum LogInf {
  LOGED_IN,
  LOADING,
  NO_USER,
  NOT_FETCHED,
}

export interface loginDataInf {
  token: string;
  userId: string;
}

export interface AuthInf {
  doesTokenExist: boolean;
  isLogedIn: LogInf;
  user: DatasInf | null;
  error: string | null;
  isDataFetched: boolean;
  onboardingFilled: boolean;
}

export const initialState: AuthInf = {
  user: {
    userId: null,
    firstName: null,
    lastName: null,
    email: null,
    profile_pic: null,
    internal_agent: null,
  },
  isLogedIn: LogInf.NOT_FETCHED,
  doesTokenExist: isTokenExist(),
  isDataFetched: false,
  error: null,
  onboardingFilled: false,
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<loginDataInf>) => {
      const data = action.payload;
      saveUser({ token: data.token, userId: data.userId });
    },
    logoutUser: (state) => {
      logout();
      state.user = null;
      state.isLogedIn = LogInf.NO_USER;
      state.doesTokenExist = false;
    },
    fetchingUser: (state) => {
      state.isLogedIn = LogInf.LOADING;
    },
    updateLocalProfile: (state, action: PayloadAction<string>) => {
      const url = action.payload;
      if (state.user) {
        state.user = {
          userId: state.user.userId,
          firstName: state.user.firstName,
          lastName: state.user.lastName,
          email: state.user.email,
          profile_pic: url,
          internal_agent: state.user.internal_agent,
        };
      }
    },

    userFetched: (state, action: PayloadAction<UserFromApi>) => {
      const user = action.payload;
      state.user = {
        userId: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        profile_pic: user.profile_pic,
        internal_agent: user.internal_agent,
      };
      state.isLogedIn = LogInf.LOGED_IN;
      state.doesTokenExist = true;
      state.error = null;
      state.isDataFetched = true;
      state.onboardingFilled = user.onboarding_complete;
    },
    userNotFound: (state, action: PayloadAction<any>) => {
      state.user = null;
      state.isLogedIn = LogInf.NO_USER;
      state.doesTokenExist = false;
      state.error = null;
      state.isDataFetched = true;
      state.onboardingFilled = false;
    },
    userFetchedError: (state, action: any) => {
      state.isLogedIn = LogInf.NO_USER;
    },
  },
});

export const {
  loginUser,
  userNotFound,
  logoutUser,
  fetchingUser,
  userFetched,
  userFetchedError,
  updateLocalProfile,
} = authSlice.actions;

export const getState = (state: any) => {
  return state.auth;
};

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    isAuthenticated: false,
    logoutLoading: false,
    logoutFail: false,
    loginLoading: false,
    loginFail: false,
    registerLoading: false,
    registerSuccess: false,
    registerFail: false,
    getSessionLoading: true,
  },
  reducers: {
    loginSuccess: state => {
      state.isAuthenticated = true;
    },
    loginLoading: state => {
      state.loginLoading = true;
      state.loginFail = false;
    },
    loginFail: state => {
      state.loginFail = true;
    },
    logoutSuccess: state => {
      state.isAuthenticated = false;
    },
    logoutLoading: state => {
      state.logoutLoading = true;
      state.logoutFail = false;
    },
    logoutFail: state => {
      state.logoutFail = true
    },
    registerSuccess: state => {
      state.registerSuccess = true;
      state.isAuthenticated = true;
    },
    registerLoading: state => {
      state.registerLoading = true;
      state.registerFail = false;
    },
    registerFail: state => {
      state.registerFail = true
    },
    getSessionSuccess: (state, action) => {
      state.isAuthenticated = action.payload;
      state.getSessionLoading = false;
    },
    getSessionFail: state => {
      state.isAuthenticated = false;
      state.getSessionLoading = false;
    }
  }
})

export const { loginSuccess, loginLoading, loginFail, logoutSuccess, logoutLoading, logoutFail, registerSuccess, registerLoading, registerFail, getSessionSuccess, getSessionFail } = sessionSlice.actions

export default sessionSlice.reducer

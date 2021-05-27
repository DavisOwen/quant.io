import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    isAuthenticated: false,
    logoutLoading: false,
    logoutFail: false,
    loginLoading: false,
    loginFail: false,
  },
  reducers: {
    loginSuccess: state => {
      state.isAuthenticated = true
    },
    loginLoading: state => {
      state.loginLoading = true;
      state.loginFail = false;
    },
    loginFail: (state) => {
      state.loginFail = true;
    },
    logoutSuccess: state => {
      state.isAuthenticated = false
    },
    logoutLoading: state => {
      state.logoutLoading = true;
      state.logoutFail = false;
    },
    logoutFail: state => {
      state.logoutFail = true
    }
  }
})

export const { loginSuccess, loginLoading, loginFail, logoutSuccess, logoutLoading, logoutFail } = sessionSlice.actions

export default sessionSlice.reducer

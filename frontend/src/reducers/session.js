import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    isAuthenticated: localStorage.getItem('isAuthenticated') || false,
    logoutLoading: false,
    logoutFail: false,
    loginLoading: false,
    loginFail: false,
    registerLoading: false,
    registerSuccess: false,
    registerFail: false,
  },
  reducers: {
    loginSuccess: state => {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', true);
    },
    loginLoading: state => {
      state.loginLoading = true;
      state.loginFail = false;
    },
    loginFail: (state) => {
      state.loginFail = true;
    },
    logoutSuccess: state => {
      state.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', false);
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
      localStorage.setItem('isAuthenticated', false);
    },
    registerLoading: state => {
      state.registerLoading = true;
      state.registerFail = false;
    },
    registerFail: state => {
      state.registerFail = true
    }
  }
})

export const { loginSuccess, loginLoading, loginFail, logoutSuccess, logoutLoading, logoutFail, registerSuccess, registerLoading, registerFail  } = sessionSlice.actions

export default sessionSlice.reducer

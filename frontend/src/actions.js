import { loginSuccess, loginLoading, loginFail, logoutSuccess, logoutLoading, logoutFail, registerLoading, registerSuccess, registerFail } from './reducers/session';
import axios from 'axios';

const loginThunk = (data) => {
  return (dispatch) => {
    dispatch(loginLoading());

    axios.post("/api/session/", {
      data
    }).then(resp => {
      dispatch(loginSuccess())
    }).catch(err => {
      dispatch(loginFail())
    })
  }
}

const logoutThunk = (dispatch) => {
  dispatch(logoutLoading());
  
  axios.delete("/api/session/")
    .then(resp => {
      dispatch(logoutSuccess());
    }).catch(err => {
      dispatch(logoutFail())
    })
}

const registerThunk = (data) => {
  return (dispatch) => {
    dispatch(registerLoading());

    axios.post("/api/user/", {
      data
    }).then(resp => {
      dispatch(registerSuccess());
      dispatch(loginThunk(data));
    }).catch(err => {
      dispatch(registerFail())
    })
  }
}

export { loginThunk, logoutThunk, registerThunk }

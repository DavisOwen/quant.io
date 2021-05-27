import { loginSuccess, loginLoading, loginFail, logoutSuccess, logoutLoading, logoutFail } from './reducers/session';
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
    .then(data => {
      dispatch(logoutSuccess());
    }).catch(err => {
      dispatch(logoutFail())
    })
}

export { loginThunk, logoutThunk }

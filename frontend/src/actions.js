import { loginSuccess, loginLoading, loginFail, logoutSuccess, logoutLoading, logoutFail } from './reducers/session';

const logoutAction = (dispatch) => {
  dispatch(logoutLoading());
  
  fetch("/session/logout/", {
    credentials: "same-origin"
  }).then(
    res => res.json()
  ).then(data => {
    console.log(data);
    return dispatch(logoutSuccess());
  }).catch(err => {
    dispatch(logoutFail())
  })
}

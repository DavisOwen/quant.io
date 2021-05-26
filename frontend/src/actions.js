import { loginSuccess, loginLoading, loginFail, logoutSuccess, logoutLoading, logoutFail } from './reducers/session';

const loginThunk = (data) => {
  return (dispatch) => {
    dispatch(loginLoading());

    fetch("/api/session/login/", {
      method: 'POST',
      credentials: "same-origin",
      body: JSON.stringify(data)
    }).then(
      res => res.json()
    ).then(resp => {
      console.log(resp)
      return dispatch(loginSuccess())
    }).catch(err => {
      dispatch(loginFail())
    })
  }
}

const logoutThunk = (dispatch) => {
  dispatch(logoutLoading());
  
  fetch("/api/session/logout/", {
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

export { loginThunk, logoutThunk }

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginThunk, logoutThunk } from './actions.js';

const Login = () => {
  const { isAuthenticated } = useSelector(state => state.session);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  if (!isAuthenticated) {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="images/img-01.png" alt="IMG" />
            </div>

            <form className="login100-form validate-form" onSubmit={() => dispatch(loginThunk({"username": username, "password": password}))}>
              <span className="login100-form-title">
                Member Login
              </span>

              <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              
              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Login
                </button>
              </div>

              <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Create your Account
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
            <div>
              {error &&
                <small className="text-danger">
                  {error}
                </small>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-3">
      <h1>React Cookie Auth</h1>
      <p>You are logged in!</p>
      <button className="btn btn-danger" onClick={dispatch(logout)}>Log out</button>
    </div>
  )
}

export default Login

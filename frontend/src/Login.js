import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginThunk } from './actions.js';

const Login = () => {
  const { loginFail } = useSelector(state => state.session);
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({"username": '', "password": ''});
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>

          <form className="login100-form validate-form" onSubmit={() => dispatch(loginThunk(credentials))}>
            <span className="login100-form-title">
              Member Login
            </span>

            <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" name="email" placeholder="Username" value={credentials.username} onChange={(event) => setCredentials(prev => ({...prev, ["username"]: event.target.value}))} />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate = "Password is required">
              <input className="input100" type="password" name="pass" placeholder="Password" value={credentials.password} onChange={(event) => setCredentials(prev => ({...prev, ["password"]: event.target.value}))} />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            
            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn" onClick={(e) => {
                  e.preventDefault();
                  dispatch(loginThunk(credentials));
                }}>
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
            {loginFail &&
              <small className="text-danger">
                Login Failed
              </small>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login

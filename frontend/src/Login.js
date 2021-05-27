import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from './actions.js';

const Login = () => {
  const { loginFail, registerSuccess } = useSelector(state => state.session);
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({"username": '', "password": ''});
  const [register, setRegister] = useState(false);

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">
              {register ? "Member Register" : "Member Login"}
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
                  register ? dispatch(registerThunk(credentials)) : dispatch(loginThunk(credentials));
                }}>
                {register ? "Register" : "Login"}
              </button>
            </div>

            {!register &&
              <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
            }

              <div className="text-center p-t-136">
                {!register && 
                  <button className="txt2" onClick={(e) => {
                      e.preventDefault();
                      setRegister(true);
                    }}>
                  Create your Account
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                  </button>
                }
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

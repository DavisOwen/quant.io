import React, { useEffect } from 'react';
import Login from './Login';
import Main from './Main';
import { getCSRF } from './requests';
import axios from 'axios';
import { useSelector } from 'react-redux';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const App = () => {
  useEffect(() => {
    getCSRF();
  }, [])

  const { isAuthenticated } = useSelector(state => state.session);

  if (!isAuthenticated) {
    return <Login /> 
  } else {
    return <Main />
  }
}

export default App;

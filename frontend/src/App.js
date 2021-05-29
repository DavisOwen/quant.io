import React, { useEffect } from 'react';
import Login from './Login';
import LoadingScreen from './LoadingScreen';
import Main from './Main';
import { getCSRF } from './requests';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionThunk } from './actions.js';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionThunk);
    getCSRF();
  }, [])

  const { isAuthenticated, getSessionLoading } = useSelector(state => state.session);

  if (getSessionLoading) {
    return <LoadingScreen />
  } else if (!isAuthenticated) {
    return <Login /> 
  } else {
    return <Main />
  }
}

export default App;

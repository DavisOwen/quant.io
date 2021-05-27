import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from './actions.js';

const Main = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mt-3">
      <h1>Quant.io</h1>
      <p>You are logged in!</p>
      <button className="btn btn-danger" onClick={() => dispatch(logoutThunk)}>Log out</button>
    </div>
  )
}

export default Main

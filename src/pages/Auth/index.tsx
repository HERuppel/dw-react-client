import React from 'react';
import { Routes, Route } from 'react-router';
import Login from './Login';
import Register from './Register';

const Auth = (): JSX.Element => {
  return (
    <Routes>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
    </Routes>
  );
};

export default Auth;

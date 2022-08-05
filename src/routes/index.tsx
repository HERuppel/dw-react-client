import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/Auth';
import { PostProvider } from '../hooks/Post';
import Auth from '../pages/Auth';
import Home from '../pages/Home';

const AppRoutes = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path='/' element={<Navigate to={user.id ? '/home' : '/auth'} />} />
      <Route path='/home' element={<Navigate to='/home/posts' />} />
      <Route path='/auth' element={<Navigate to='/auth/login' />} />
      <Route
        path='/home/*'
        element={
          <PostProvider>
            <Home />
          </PostProvider>
        }
      />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='*' element={<Navigate to={user.id ? '/home' : '/auth'} />} />
    </Routes>
  );
};
export default AppRoutes;

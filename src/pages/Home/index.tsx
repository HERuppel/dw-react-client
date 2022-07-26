import React from 'react';
import { Route, Routes } from 'react-router';
import Sidebar from '../../components/Sidebar';
import Posts from './Posts';
import { useStyles } from './styles';
import User from './User';

const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Sidebar />
      <main className={classes.main}>
        <Routes>
          <Route path='posts' element={<Posts />} />
          <Route path='user' element={<User />} />
        </Routes>
      </main>
    </div>
  );
};

export default Home;

import React from 'react';
import { NavLink } from 'react-router-dom';

import { Drawer, IconButton, List, ListItemText, Typography } from '@material-ui/core';
import { Person, Textsms, ExitToApp } from '@material-ui/icons';

import useStyles from './styles';
import { useAuth } from '../../hooks/Auth';

const SideBar = (): JSX.Element => {
  const { signOut } = useAuth();
  const classes = useStyles();

  const menu = (
    <div>
      <div className={classes.header}>
        <Typography variant='h4'>RVB</Typography>
      </div>
      <List>
        <NavLink
          className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}
          to='/home/posts'
          key='posts'
        >
          <Textsms style={{ fontSize: 35 }} />
          <ListItemText className={classes.itemText} primary='Posts' />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.activeNavLink : classes.navLink)}
          to='/home/user'
          key='user'
        >
          <Person style={{ fontSize: 35 }} />
          <ListItemText className={classes.itemText} primary='Usuário' />
        </NavLink>
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Drawer
        open
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {menu}
        <IconButton onClick={signOut} style={{ borderRadius: 0 }}>
          <ExitToApp style={{ color: '#FFF', paddingRight: 10 }} />
          <Typography style={{ color: '#FFF' }}>Logout</Typography>
        </IconButton>
      </Drawer>
    </nav>
  );
};

export default SideBar;

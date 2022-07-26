import React from 'react';
import { NavLink } from 'react-router-dom';

import { Drawer, List, ListItemText, Typography } from '@material-ui/core';
import { Person, Textsms } from '@material-ui/icons';

import useStyles from './styles';

const SideBar = (): JSX.Element => {
  const classes = useStyles();

  const menu = (
    <div>
      <div className={classes.header}>
        <Typography variant='h4'>KRUD</Typography>
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
      </Drawer>
    </nav>
  );
};

export default SideBar;

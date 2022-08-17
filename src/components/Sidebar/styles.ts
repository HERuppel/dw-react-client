import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 250,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: 250,
      backgroundColor: theme.palette.primary.dark,
      background: 'linear-gradient(#00ACCE, #0096DA)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    header: {
      width: '100%',
      height: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#E5e5e5',
    },
    itemText: {
      fontWeight: 'bold',
    },
    navLink: {
      textDecoration: 'none',
      color: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      transition: '300ms',

      '&:hover': {
        background: theme.palette.primary.dark,
      },
    },
    welcome: {
      padding: '20px 15px',
      color: theme.palette.common.white,
      opacity: 0.7,
    },
    logout: {
      color: theme.palette.common.white,
      fontSize: 20,
      position: 'absolute',
      bottom: 0,
      padding: '20px 15px',
    },
    activeNavLink: {
      textDecoration: 'none',
      color: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      transition: '300ms',
      background: theme.palette.primary.dark,

      '&:hover': {
        background: theme.palette.primary.dark,
      },
    },
  }),
);

export default useStyles;

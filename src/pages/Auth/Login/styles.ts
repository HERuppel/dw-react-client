import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      width: '100%',
      background: 'linear-gradient(#00ACCE, #0096DA)',
    },
    left: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: theme.spacing(2),
      backgroundColor: '#FFF',
      padding: theme.spacing(4),
      height: '35%',
      width: '40%',
      position: 'relative',
      borderRadius: 20,
    },
    header: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      textAlign: 'center',
      paddingTop: theme.spacing(8),
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: '#FFF',
      width: '100%',

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    bottomContainer: {
      position: 'absolute',
      bottom: theme.spacing(4),
      left: theme.spacing(4),
      right: theme.spacing(4),
    },
    signUp: {
      textAlign: 'right',
      transition: '300ms',
      cursor: 'pointer',
      textDecoration: 'none',
      color: theme.palette.primary.dark,

      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  }),
);

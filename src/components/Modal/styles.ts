import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '50%',
      width: '30%',
      backgroundColor: theme.palette.common.white,
      borderRadius: 10,
      padding: theme.spacing(4),
    },
    header: {
      height: '10%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      paddingBottom: theme.spacing(2),
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
      position: 'relative',
      gap: 20,
    },
    closeButton: {
      height: 30,
      position: 'absolute',
      top: 0,
      right: 0,
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: '#FFF',
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    swalContainer: {
      zIndex: 99999,
    },
    textarea: {
      resize: 'vertical',
    },
  }),
);

import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
    },
    content: {
      width: '100%',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: theme.spacing(2),
      minHeight: '80vh',
    },
    header: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
    },
    addButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center',
    },
    refreshContainer: {
      color: theme.palette.primary.main,
      fontSize: 20,
    },
    loadingContainer: {
      padding: theme.spacing(5),
    },
  }),
);

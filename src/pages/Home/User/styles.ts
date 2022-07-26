import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: theme.palette.divider,
      borderRadius: '20px 20px 0 0',
      padding: theme.spacing(4),
      display: 'flex',
      gap: 50,
    },
    body: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
    img: {
      borderRadius: '50%',
      width: 180,
      height: 180,
      objectFit: 'cover',
      borderColor: theme.palette.primary.dark,
      borderWidth: 2,
      borderStyle: 'solid',
    },
    userInfos: {
      display: 'flex',
      flexDirection: 'column',
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(5),
    },
    postsHeader: {
      color: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
);

import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 30,
      borderRadius: 10,
    },
    imgContainer: {
      width: '20%',
      height: 200,
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'fill',
    },
    right: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    email: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.subtitle1.fontSize,
    },
  }),
);

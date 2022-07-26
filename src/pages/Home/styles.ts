import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      background: theme.palette.common.white,
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(5),
    },
  }),
);

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface ILoading {
  loadingSize: number;
}

const commonStyles = makeStyles<Theme, ILoading>((theme: Theme) =>
  createStyles({
    '@keyframes loadingAnimation': {
      '100%': {
        transform: 'rotate(1turn)',
      },
    },
    loadingAnimation: {
      width: ({ loadingSize }) => loadingSize,
      height: ({ loadingSize }) => loadingSize,
      borderRadius: '50%',
      border: `4px solid ${theme.palette.primary.main}`,
      borderTopColor: theme.palette.common.white,
      animation: '$loadingAnimation 1s infinite',
    },
  }),
);

const Loading = ({ loadingSize }: ILoading): JSX.Element => {
  const classes = commonStyles({ loadingSize });

  return <div className={classes.loadingAnimation} />;
};

export default Loading;

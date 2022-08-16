import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00ACCE',
      light: '#605856',
    },
    secondary: {
      main: '#0096DA',
    },
    background: {
      default: '#D9D9D9',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: 0,
          padding: 0,
        },
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

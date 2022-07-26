import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1C6E8C',
      light: '#605856',
    },
    secondary: {
      main: '#274156',
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

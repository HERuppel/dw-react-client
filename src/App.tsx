import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './global/theme';
import { AuthProvider } from './hooks/Auth';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

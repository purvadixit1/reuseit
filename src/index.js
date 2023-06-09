import React from 'react';
import ReactDOM from 'react-dom/client';

// import provider
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// provider file
import store from './redux/store/Store';
import theme from './style/theme'

import App from './app/app';
import './style/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
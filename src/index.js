import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import reportWebVitals from './reportWebVitals';
import Tasks from './Features/Tasks/Tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Tasks />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
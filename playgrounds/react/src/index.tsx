import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import App from './App';

const theme = {
  color: {
    primary: 'blue',
    success: 'green',
    warning: 'yellow',
    critical: 'red',
    secondary: 'grey',
    info: 'purple',
    white: 'white',
    border: '#ddd',
    text: '#222',
    disabled: '#ccc',
    transparent: 'transparent',
  },
  size: {
    s5: '5px',
    s10: '10px',
    s16: '16px',
    s20: '20px',
  },
  radius: {
    r5: '5px',
    r10: '10px',
    r16: '16px',
    r24: '24px',
  },
  fontFamily: {
    primary: '"Roboto", sans-serif',
    secondary: '"Roboto", sans-serif',
  },
  fontSize: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const element = document.getElementById('root');
const root = createRoot(element!); // createRoot(container!) if you use TypeScript
root.render(
  <div style={{ padding: '40px' }}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </div>,
);

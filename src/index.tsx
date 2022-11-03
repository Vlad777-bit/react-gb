import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { App } from './App';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </>
);

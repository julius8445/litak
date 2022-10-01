import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './assets/styles/index.css';

const rootEl: HTMLElement = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

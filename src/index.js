import React from 'react';
import { ThemeProvider } from './ThemeContext'
import ReactDOM from 'react-dom';
import './styles/base.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);


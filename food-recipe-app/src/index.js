import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { AuthProvider } from './components/Auth/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


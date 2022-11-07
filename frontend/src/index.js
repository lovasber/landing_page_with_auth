import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ModeProvider} from "./context/ModeContext";
import {SnackbarProvider} from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <SnackbarProvider>
          <ModeProvider>
              <App/>
          </ModeProvider>
      </SnackbarProvider>
  </React.StrictMode>
);

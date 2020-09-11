import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from './context/user';

import App from './App';
import { SelectionContextProvider } from './context/selection';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SelectionContextProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </SelectionContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

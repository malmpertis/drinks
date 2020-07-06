import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import StyledThemeProvider from './theme/StyledThemeProvider';
import { UserProvider } from './contexts/UserContext';

Amplify.configure(config);

ReactDOM.render(
  <StyledThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </StyledThemeProvider>,
  document.getElementById('root')
);

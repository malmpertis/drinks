import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import StyledThemeProvider from './theme/StyledThemeProvider';
import { UserProvider } from './contexts/UserContext';

// copied from serviceWorker.js to know if it is localhost or not
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// by default, say it's localhost
const oauth = {
  domain: 'drinks25724818-25724818-dev.auth.eu-west-2.amazoncognito.com',
  scope: [
    'phone',
    'email',
    'profile',
    'openid',
    'aws.cognito.signin.user.admin',
  ],
  redirectSignIn: 'http://localhost:3000/',
  redirectSignOut: 'http://localhost:3000/',
  responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
};

// if not, update the URLs
if (!isLocalhost) {
  oauth.redirectSignIn = 'https://drinks.betriply.com/';
  oauth.redirectSignOut = 'https://drinks.betriply.com/';
}

// copy the constant config (aws-exports.js) because config is read only.
var configUpdate = config;
// update the configUpdate constant with the good URLs
configUpdate.oauth = oauth;
// Configure Amplify with configUpdate
Amplify.configure(configUpdate);

ReactDOM.render(
  <StyledThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </StyledThemeProvider>,
  document.getElementById('root')
);

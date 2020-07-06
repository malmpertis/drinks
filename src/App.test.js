import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import StyledThemeProvider from './theme/StyledThemeProvider';
import authService from './services/authService';

const ComponentWithProviders = () => (
  <StyledThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </StyledThemeProvider>
);

jest.mock('./services/authService', () => ({
  signIn: jest.fn(),
  userInfo: jest.fn(),
  signOut: jest.fn(),
}));

const mockedUserInfoResponse = {
  attributes: {
    picture:
      '{"data":{"url":"https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10219207124623023&height=50&width=50&ext=1596405571&hash=AeQJKse2TfvjcSGT"}}',
  },
};

afterEach(cleanup);

test('it renders navbar', async () => {
  authService.userInfo.mockImplementation(() =>
    Promise.resolve(mockedUserInfoResponse)
  );
  const { getByTestId } = render(<ComponentWithProviders />);
  const linkElement = await waitForElement(() => getByTestId('navbar'));
  expect(linkElement).toBeInTheDocument();
});

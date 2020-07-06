import { Auth } from 'aws-amplify';

const signIn = () =>
  Auth.federatedSignIn({
    provider: 'Facebook',
  });

const userInfo = () => Auth.currentUserInfo();

const signOut = () => Auth.signOut();

export { signIn, userInfo, signOut };

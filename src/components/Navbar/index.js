import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import { useUserState } from '../../contexts/UserContext';
import { signIn, signOut } from '../../services/authService';
import UserAvatar from '../UserAvatar';
import textLogo from '../../assets/drinks-text.png';

const TextLogo = styled.span`
  img {
    width: 128px;
  }
  @media (${(props) => props.theme.mediaQueries.small}) {
    width: 80px;
  }
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logged-user {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Navbar = () => {
  const user = useUserState();

  return (
    <AppBar position="static" data-testid="navbar">
      {console.log(user)}
      <StyledToolbar>
        <TextLogo>
          <img src={textLogo} alt="logo" />
        </TextLogo>
        {user ? (
          <div className="logged-user">
            <UserAvatar url={user.picture} />
            <IconButton onClick={signOut} aria-label="delete">
              <ExitToAppIcon />
            </IconButton>
          </div>
        ) : (
          <Button onClick={() => signIn()} variant="outlined">
            Facebook Sign In
          </Button>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

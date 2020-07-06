import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (${(props) => props.theme.mediaQueries.small}) {
    width: 32px;
    height: 32px;
  }
`;

const UserAvatar = ({ url }) => {
  return <Avatar src={url} alt="user avatar" />;
};

export default UserAvatar;

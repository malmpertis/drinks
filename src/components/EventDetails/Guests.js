import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import UserAvatar from '../UserAvatar';

const GuestList = styled.div`
  display: flex;
`;

const SingleGuest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

const Guests = ({ guests }) => {
  return (
    <>
      <Typography variant="h4" component="h4">
        Guests
      </Typography>
      <GuestList>
        {guests && guests.length > 0 ? (
          guests.map((guest, index) => (
            <Tooltip key={index} title={guest.name}>
              <SingleGuest>
                <UserAvatar url={guest.avatarUrl} />
              </SingleGuest>
            </Tooltip>
          ))
        ) : (
          <div>There are no guests! (...yet)</div>
        )}
      </GuestList>
    </>
  );
};

export default Guests;

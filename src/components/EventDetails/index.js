import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Guests from './Guests';
import Comments from './Comments';
import styled from 'styled-components';
import EventLocation from '../EventLocation';

const Section = styled.div`
  margin-bottom: 16px;
`;

const BackButton = styled(Fab)`
  position: absolute !important;
  top: 8px;
  left: 8px;
  z-index: 2;
`;

const EventDetails = ({ event, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <BackButton color="primary" variant="extended" onClick={handleClose}>
        Go back
      </BackButton>
      <EventLocation
        lat={event.location.latitude}
        lng={event.location.longitude}
      />
      <MuiDialogContent>
        <Section>
          <Guests guests={event.guests} />
        </Section>
        <Section>
          <Comments eventId={event.id} comments={event.comments.items} />
        </Section>
      </MuiDialogContent>
    </Dialog>
  );
};

export default EventDetails;

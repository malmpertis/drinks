import React, { useState } from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';
import EventType from './EventType';
import EventDetails from '../EventDetails';

const StyledCard = styled(Card)`
  text-align: center;
  margin: 8px 16px;
  background-color: #ececec;
  cursor: pointer;
`;

const CardTitle = styled.div`
  color: ${({ theme }) => theme.tColors.palette.secondary.dark};
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${(props) => props.theme.mediaQueries.small}) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${(props) => props.theme.mediaQueries.small}) {
    margin-top: 8px;
  }
`;

const StyledDate = styled.div`
  color: ${({ theme }) => theme.tColors.palette.secondary.main};
  font-size: 0.8rem;
`;

const Place = styled.div`
  color: ${({ theme }) => theme.tColors.palette.secondary.light};
`;

const EventCard = ({ event }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledCard onClick={() => setOpen(true)}>
        <StyledCardContent>
          <Section>
            <EventType type={event.type} />
          </Section>
          <Section>
            <CardTitle>{event.title}</CardTitle>
            <StyledDate>{moment(event.time).format('LLLL')}</StyledDate>
            <br />
            <Place>{event.location.name}</Place>
          </Section>
          <Section>
            {event.creator.name}
            <UserAvatar url={event.creator.avatarUrl} />
          </Section>
        </StyledCardContent>
      </StyledCard>
      <EventDetails event={event} open={open} setOpen={setOpen} />
    </>
  );
};

export default EventCard;

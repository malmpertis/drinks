import React, { useEffect, useState } from 'react';
import EventCard from './../EventCard/index';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { API, graphqlOperation } from 'aws-amplify';
import styled from 'styled-components';
// import { listEvents as ListEvents } from '../../graphql/queries';
import { useUserState } from '../../contexts/UserContext';
import Beer from '../../assets/beer-icon-large.png';

const BeerImg = styled.img`
  max-height: 70vh;
`;

const EventList = () => {
  const [events, setEvents] = useState([]);
  const user = useUserState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const eventData = await API.graphql(graphqlOperation(ListEvents));
      // console.log('---------', eventData);
      // setEvents(eventData.data.listEvents.items);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid direction="row" container justify="center" alignItems="center">
      {events &&
        events.map((event) => (
          <Grid key={event.id} item xs={12} md={6}>
            <EventCard event={event} />
          </Grid>
        ))}
      {!user && (
        <>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <BeerImg src={Beer} alt="big logo" />
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h4" align="center">
                Sign in to enjoy Drinks!
              </Typography>
            </Grid>
          </Grid>
          <div></div>
        </>
      )}
    </Grid>
  );
};

export default EventList;

import React, { useEffect, useState } from 'react';
import EventCard from './../EventCard/index';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { API, graphqlOperation } from 'aws-amplify';
import styled from 'styled-components';
import { listEvents as ListEvents } from '../../graphql/queries';
import { createEvent } from '../../graphql/mutations';
import { useUserState } from '../../contexts/UserContext';
import AddEvent from '../AddEvent';
import Beer from '../../assets/beer-icon-large.png';

const BeerImg = styled.img`
  max-height: 70vh;
`;

const FabContainer = styled.div`
  position: sticky;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 16px;
`;

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useUserState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const eventData = await API.graphql(graphqlOperation(ListEvents));
      const parsedEvents = eventData.data.listEvents.items.map((event) => {
        const parsedComments = event.comments.items.map((comment) => {
          const { user } = comment;
          return {
            ...comment,
            user: JSON.parse(user),
          };
        });
        const { creator, guests, location } = event;
        return {
          ...event,
          creator: JSON.parse(creator),
          guests: JSON.parse(guests),
          location: JSON.parse(location),
          comments: parsedComments,
        };
      });
      setEvents(parsedEvents);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = async (dialogData) => {
    try {
      setLoading(true);
      const parsedNewEvent = {
        title: dialogData.title,
        creator: JSON.stringify({
          name: `${user.attributes.name}`,
          avatarUrl: user.picture,
        }),
        guests: JSON.stringify([
          {
            name: 'Phil Hardy',
            avatarUrl:
              'https://graph.facebook.com/10154445192311988/picture?type=normal',
          },
          {
            name: 'Roger Planes',
            avatarUrl:
              'https://graph.facebook.com/10153470472875756/picture?type=normal',
          },
          {
            name: 'Mark Hartley',
            avatarUrl:
              'https://graph.facebook.com/10207459310094409/picture?type=normal',
          },
          {
            name: 'Fie Jelved',
            avatarUrl:
              'https://graph.facebook.com/10153981598127950/picture?type=normal',
          },
        ]),
        location: JSON.stringify(dialogData.location),
        type: dialogData.type,
        time: dialogData.time,
      };
      const response = await API.graphql(
        graphqlOperation(createEvent, {
          input: parsedNewEvent,
        })
      );
      setEvents([
        ...events,
        {
          id: response.data.createEvent.id,
          title: dialogData.title,
          creator: {
            name: `${user.attributes.name}`,
            avatarUrl: user.picture,
          },
          guests: [
            {
              name: 'Phil Hardy',
              avatarUrl:
                'https://graph.facebook.com/10154445192311988/picture?type=normal',
            },
            {
              name: 'Roger Planes',
              avatarUrl:
                'https://graph.facebook.com/10153470472875756/picture?type=normal',
            },
            {
              name: 'Mark Hartley',
              avatarUrl:
                'https://graph.facebook.com/10207459310094409/picture?type=normal',
            },
            {
              name: 'Fie Jelved',
              avatarUrl:
                'https://graph.facebook.com/10153981598127950/picture?type=normal',
            },
          ],
          location: dialogData.location,
          type: dialogData.type,
          time: dialogData.time,
        },
      ]);
      setLoading(false);
      setAddEventOpen(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {!user ? (
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
        </>
      ) : (
        <>
          <Typography variant="h5" component="h5" align="center">
            Tip: Click on a card for more details!
          </Typography>
          <Grid direction="row" container justify="center" alignItems="center">
            {events &&
              events.map((event) => (
                <Grid key={event.id} item xs={12} md={6}>
                  <EventCard event={event} />
                </Grid>
              ))}
          </Grid>
          <FabContainer>
            <Fab
              color="secondary"
              aria-label="add"
              onClick={() => setAddEventOpen(true)}
            >
              <AddIcon />
            </Fab>
          </FabContainer>
          <AddEvent
            open={addEventOpen}
            setOpen={setAddEventOpen}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </>
      )}
    </>
  );
};

export default EventList;

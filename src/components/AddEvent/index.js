import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PlacesAutocomplete from './PlacesAutocomplete';

const AddEvent = ({ open, setOpen, handleSubmit, loading }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    type: '',
    time: '',
    location: {},
  });
  const handleClose = () => {
    setNewEvent({
      title: '',
      type: '',
      time: '',
      location: {},
    });
    setOpen(false);
  };
  console.log(moment().toISOString());
  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle id="new-event-dialog-title">
        Add new Drinks Event!
      </DialogTitle>
      <DialogContent>
        <PlacesAutocomplete newValue={newEvent} setNewValue={setNewEvent} />
        <TextField
          id="standard-full-width"
          label="Title"
          helperText="Type the event title"
          fullWidth
          margin="normal"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <TextField
          id="type"
          label="Event Type"
          select
          margin="normal"
          fullWidth
          helperText="Select the event type"
          value={newEvent.type}
          onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
        >
          <MenuItem value="BEERS">Beers</MenuItem>
          <MenuItem value="COCKTAILS">Cocktails</MenuItem>
          <MenuItem value="COFFEES">Coffees</MenuItem>
          <MenuItem value="MILKSHAKES">Milkshakes</MenuItem>
        </TextField>
        <TextField
          id="datetime-local"
          label="When"
          type="datetime-local"
          value={newEvent.time}
          margin="normal"
          helperText="Enter the event date"
          fullWidth
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={
            !newEvent.title ||
            !newEvent.type ||
            !newEvent.time ||
            !newEvent.location ||
            !newEvent.location.latitude ||
            loading
          }
          onClick={() => handleSubmit(newEvent)}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEvent;

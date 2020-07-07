import React from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const PlacesAutoComplete = ({ newValue, setNewValue }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 51.509865, lng: () => -0.118092 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setNewValue({
        ...newValue,
        location: {
          name: address,
          latitude: lat,
          longitude: lng,
        },
      });
      console.log(lat, lng);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <TextField
        id="standard-full-width"
        label="Search"
        helperText="Search for the event place"
        fullWidth
        margin="normal"
        value={value}
        disabled={!ready}
        onChange={handleInput}
      />
      {status === 'OK' && (
        <List>
          {data.map(({ id, description }) => (
            <ListItem
              divider
              button
              key={id}
              onClick={() => handleSelect(description)}
            >
              <ListItemText primary={description} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default PlacesAutoComplete;

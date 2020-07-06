import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../../theme/mapStyles';

const center = {
  lat: 51.498364,
  lng: -0.1062999,
};

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '250px',
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const EventLocation = ({ lat, lng }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDp_FWxqYb-sPCOe_rTIUdxLHMUXhZO1g0',
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </div>
  );
};

export default EventLocation;

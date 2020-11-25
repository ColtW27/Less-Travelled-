import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const gKey = process.env.REACT_APP_GOOGLEMAP_API_KEY ? process.env.REACT_APP_GOOGLEMAP_API_KEY : require('../../config/keys').googleKey;


const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class travelMapV2 extends React.Component {
  render() {
    return (
      // <div>Hello</div>
      <LoadScript
        googleMapsApiKey={gKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default travelMapV2;
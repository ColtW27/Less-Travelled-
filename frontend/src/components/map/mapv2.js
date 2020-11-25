import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const gKey = process.env.REACT_APP_GOOGLEMAP_API_KEY ? process.env.REACT_APP_GOOGLEMAP_API_KEY : require('../../config/keys').googleKey;


const containerStyle = {
  width: '800px',
  height: '800px'
};



class travelMapV2 extends React.Component {


  render() {
    const {attractions, attraction} = this.props;

    const center = { //Change to geoLocation later
      lat: -3.745,
      lng: -38.523
    };




    return (
      // <div>Hello</div>
      <LoadScript
        googleMapsApiKey={gKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
        >
          {
            (attractions !== undefined) ? attractions.map(mark => {
              return <Marker
                position={{ lat: mark.props.attraction.latitude, lng: mark.props.attraction.longitude }}
              />
            })
            :
            null

          }

          { /* Child components, such as markers, info windows, etc. */ }
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default travelMapV2;
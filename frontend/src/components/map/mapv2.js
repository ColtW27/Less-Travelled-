import React from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';

const gKey = process.env.REACT_APP_GOOGLEMAP_API_KEY ? process.env.REACT_APP_GOOGLEMAP_API_KEY : require('../../config/keys').googleKey;


const containerStyle = {
  width: '800px',
  height: '800px'
};



class travelMapV2 extends React.Component {


  render() {
    const {attractions, attraction, center} = this.props;

    return (
  
      <LoadScript
        googleMapsApiKey={gKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker 
            position={attraction ? attraction : center}
          />

          {
            (attractions !== undefined) ? attractions.map((mark, index) => {
              return <Marker
                key={index}
                position={{ lat: parseFloat(mark.props.attraction.latitude), lng: parseFloat(mark.props.attraction.longitude) }}
              />
            })
            :
            null

          }

        </GoogleMap>
      </LoadScript>
    )
  }
}

export default travelMapV2;
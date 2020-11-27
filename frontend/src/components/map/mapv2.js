import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const gKey = process.env.REACT_APP_GOOGLEMAP_API_KEY ? process.env.REACT_APP_GOOGLEMAP_API_KEY : require('../../config/keys').googleKey;


const containerStyle = {
  width: '800px',
  height: '800px'
};



class travelMapV2 extends React.Component {


  render() {
    const {attractions, attraction, center} = this.props;

    // let center = {lat: 0, lng: 0};

    // if (attractions) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     return center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     }
    //   }) 
    // }

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
          <Marker 
            position={center}
          />



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
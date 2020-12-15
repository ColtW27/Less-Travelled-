import React from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';

const gKey = process.env.REACT_APP_GOOGLEMAP_API_KEY ? process.env.REACT_APP_GOOGLEMAP_API_KEY : require('../../config/keys').googleKey;

const containerStyle = {
  width: '800px',
  height: '1000px',
  // position: 'fixed',
  // right: '5px'
};

class TravelMap extends React.Component {

  render() {
    const {attractions, attraction, center, destination, response, directionsCallback, setDestination} = this.props;
    

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
            position={center}
          />

          {
            (attractions !== undefined) ? attractions.map((mark, index) => {
              return <Marker
                key={index}
                position={{ lat: parseFloat(mark.props.attraction.latitude), lng: parseFloat(mark.props.attraction.longitude) }}
                onClick={setDestination}
              />
            })
            :
            <Marker 
              position={{ lat: parseFloat(attraction.latitude), lng: parseFloat(attraction.longitude) }}
              onLoad={setDestination}
            />
          }

          {
              (
                destination !== '' &&
                center !== ''
              ) && (
                <DirectionsService
                  options={{ 
                    destination: destination,
                    origin: center,
                    travelMode: 'DRIVING'
                  }}
                  callback={directionsCallback}

                />
              )
            }

            {
              response !== null && (
                <DirectionsRenderer
                  options={{ 
                    directions: response
                  }}
        
                  onLoad={directionsRenderer => {
                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                  }}
   
                  onUnmount={directionsRenderer => {
                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                  }}
                />
              )
            }
          <DirectionsRenderer
            options={{origin: center, destination: destination}}
            onLoad={directionsRenderer => {
              console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
            }}
            // optional
            onUnmount={directionsRenderer => {
              console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
            }}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default TravelMap;
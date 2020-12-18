import React from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import logo from '../../styles/images/traveler_icon.png';

console.log('hello')
console.log(logo)

const gKey = process.env.REACT_APP_GOOGLEMAP_API_KEY ? process.env.REACT_APP_GOOGLEMAP_API_KEY : require('../../config/keys').googleKey;
debugger;
const containerStyle = {
  width: '700px',
  height: '750px',
  position: 'relative'
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
            icon={{url: logo, scale: 0.1}}
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
            
        
                  // onLoad={directionsRenderer => {
                  //   console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                  // }}
   
                  // onUnmount={directionsRenderer => {
                  //   console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                  // }}
                />
              )
            }
          <DirectionsRenderer
            options={{origin: center, destination: destination}}
   
            // onLoad={directionsRenderer => {
            //   console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
            // }}
            // // optional
            // onUnmount={directionsRenderer => {
            //   console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
            // }}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default TravelMap;
import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '650px',
  height: '600px'
};

class TravelMap extends React.Component {


  render() {
    const {attractions} = this.props
    console.log(attractions)
    return (
        <Map google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{lat: 40.7128, lng: 74.0060}}>
          {
            attractions.map(garbage => {    
          
            return <Marker
              title={garbage.props.attraction.name}
              key={garbage.props.attraction.id}
              position={{ lat: garbage.props.attraction.latitude, lng: garbage.props.attraction.longitude }}
            />
            })
          
          }
          <Marker onClick={this.onMapClick}
                name={'Current location'} />
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (`${process.env.REACT_APP_GOOGLEMAP_API_KEY}`)
})(TravelMap);
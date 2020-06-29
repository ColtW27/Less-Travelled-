import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '650px',
  height: '600px'
};

class TravelMapShow extends React.Component {


  render() {
    const {attraction} = this.props
    return (
        <Map google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={ {lat: attraction.props.attraction.latitude, lng: attraction.props.attraction.longitude }}          
          >
          {
            attraction.map(indiv => {    
          
            <Marker
              title={indiv.props.attraction.name}
              key={garbage.props.attraction.id}
              position={{ lat: indiv.props.attraction.latitude, lng: indiv.props.attraction.longitude }}
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
})(TravelMapShow);


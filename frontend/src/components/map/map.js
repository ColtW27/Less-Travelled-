import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapComponent from './map_container'


const mapStyles = {
  width: '650px',
  height: '600px'
};


class TravelMap extends React.Component {
  constructor(props) {
    super(props)
   }
  render() {
    return (
        <Map
          // className='maps-main-container'
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }

}

export default GoogleApiWrapper({
  apiKey: (`${process.env.REACT_APP_GOOGLEMAP_API_KEY}`)
})(TravelMap);
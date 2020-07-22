import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const gKey = process.env.REACT_APP_GOOGLEMAP_API_KEY ? process.env.REACT_APP_GOOGLEMAP_API_KEY : require('../../config/keys').googleKey;
// console.log(gKey)


const mapStyles = {
  width: '650px',
  height: '600px'
};


function statusChecker(input) {
        return  <Marker
            title={input.name}
            key={input.id}
            position={{ lat: input.latitude, lng: input.longitude }}
          />
}





class TravelMap extends React.Component {


  render() {
    const {attractions, attraction} = this.props
    return (
        <Map google={this.props.google}

          zoom={9}
          // style={mapStyles}
          initialCenter={{lat: 40.7128, lng: -73.935242}}>
          {
            (attraction !== undefined) ? 
              statusChecker(attraction)
            :
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

// export default GoogleApiWrapper({
//   apiKey: (`${process.env.REACT_APP_GOOGLEMAP_API_KEY}`)
// })(TravelMap);

export default GoogleApiWrapper({
    apiKey: (`${gKey}`)
  })(TravelMap);
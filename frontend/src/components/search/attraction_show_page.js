import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TravelMap from '../map/map';
  

class AttractionShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCenter: {lat: parseFloat(40.758896), lng: parseFloat(-73.985130)},
      destination: "",
      response: null
    };



    this.findCurrentLocation = this.findCurrentLocation.bind(this);
    this.setDestination = this.setDestination.bind(this);
    this.directionsCallback = this.directionsCallback.bind(this);
  }


  componentDidMount(){
    this.props.fetchAttraction();
    this.props.fetchAttractions();
    this.findCurrentLocation();
  }


  findCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(prevState => ({
        currentCenter: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          }
        }))
      }, 
      error => console.log(error)     
    );   
  };

  setDestination = (ref) => {
    this.setState(prevState => ({
      destination: `${parseFloat(ref.position.lat())}, ${parseFloat(ref.position.lng())}`
    }))
    console.log(ref)
  };


  directionsCallback (response) {

    if (response !== null) {
      if (response.status === 'OK') {
        this.setState(
          () => ({
            response
          })
        )
      } else {
        console.log('response: ', response)
      }
    }
  };





  render() {
    const attraction = this.props.attraction
    if (!attraction) {
      return null
    } 

    return (
      <div className="attractions-show-container">
        <div className="attractionShow"> 
          <ul className="attraction-show-container">
            <li>
              <img
                className="show-page-img"
                src={attraction.imageUrl}
                alt="Attraction"
              ></img>
            </li>
            <li className="attraction-title">{attraction.name}</li>
            <li className="attraction-description">
              Rating: {attraction.rating}
            </li>
            <li className="attraction-description">Location: {attraction.address}</li>
            <li className="attraction-description">{attraction.description}</li>
          </ul>
        </div>
        <div className="attraction-map">
          <TravelMap 
            attraction={attraction} 
            center={this.state.currentCenter}
            destination={this.state.destination} 
            response={this.state.response}
            setDestination={this.setDestination}
            directionsCallback={this.directionsCallback}
          />
        </div>
      </div>
    );
  }
}

export default withRouter (AttractionShow);
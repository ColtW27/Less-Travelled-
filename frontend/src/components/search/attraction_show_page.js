import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TravelMap from '../map/map';
  

class AttractionShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCenter: {lat: parseFloat(48.858093), lng: parseFloat(2.294694)}
    };



    this.findCurrentLocation = this.findCurrentLocation.bind(this);
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
            {/* <br></br> */}
            <li className="attraction-title">{attraction.name}</li>
            <li className="attraction-description">
              Rating: {attraction.rating}
            </li>
            <li className="attraction-description">Location: {attraction.address}</li>
          <li className="attraction-description">{attraction.description}</li>
          </ul>
          <br></br>
        </div>
        <map className="attraction-map">
          <TravelMap 
            attraction={attraction} 
            center={this.state.currentCenter}
          />
        </map>
      </div>
    );
  }
}

export default withRouter (AttractionShow);
import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TravelMap from '../map/map';
// import AttractionsBox from '../attractions_index/AttractionsBox';
// import SearchBar from './search';
  

class AttractionShow extends React.Component {

  componentDidMount(){
    this.props.fetchAttraction();
    this.props.fetchAttractions();
  }

  render() {
    const attraction = this.props.attraction
    if (!attraction) {
      return null
    }
  
    return (
      <div className='attractions-show-container'>
      <br />

         <div className="attractionShow">

          <ul className='attraction-show-container'>
           <li className='attraction-title'>{attraction.name}</li>
           <li className='attraction-description'>{attraction.description}</li>
           <br></br>
           <li className='attraction-description'>{attraction.address}</li>
           <li className='attraction-description'>Rating: {attraction.rating}</li>
           <li>
             <img 
              className="show-page-img" 
              src={attraction.imageUrl}
              alt="Attraction">
            </img>
           </li>
           </ul>
         </div>
           <map className="attraction-map">
             <TravelMap attraction={[attraction]}/>
           </map>
       </div>
    );
  }
}

export default withRouter (AttractionShow);
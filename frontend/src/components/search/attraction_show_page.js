import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import TravelMap from '../map/map';
// import AttractionsBox from '../attractions_index/AttractionsBox';
// import SearchBar from './search';


const imageStyles = {
  height: "500px",
  width: "500px"

}


class AttractionShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


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
        {/* <div>
          <SearchBar />
        </div> */}

        <br />

         <div className="attractionShow">

          {/* <AttractionsBox
            key={this.state.attraction._id}
            attraction={attraction}
          /> */}
          <ul className='attraction-show-container'>
           <li className='attraction-title'>{attraction.name}</li>
           <li className='attraction-description'>{attraction.description}</li>
           <br></br>
           <li className='attraction-description'>{attraction.address}</li>
           <li className='attraction-description'>{attraction.rating}</li>
           <li><img  style={imageStyles} src={attraction.imageUrl} className="show-page-img" alt="Attraction"></img></li>
           </ul>
         </div>

         <div className='attractions-main'>
           <br />
           <div className="attractionsIndex">
           </div>
           <map><TravelMap attraction={[attraction]}/></map>
         </div>
       </div>
    );
  }
}

export default withRouter (AttractionShow);
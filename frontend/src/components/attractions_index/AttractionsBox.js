import React from 'react'; 
import {Link} from 'react-router-dom';

// const AttractionBox =({attraction}) => {
//     return (
//       <div> 
//         <p> hello </p>
//         <h1>{attraction.address}</h1>
//         <h1>{attraction.name}</h1>
//         <h1>{attraction.location_data}</h1>
//         <h1>{attraction.rating}</h1>
//       </div>
//     );
//   }; 

class AttractionBox extends React.Component {

  handleClick() {

  }

  render () {
    return (

      <Link to={`/attractions/${this.props.attraction._id}`}>
        <div> 
          <div className="attractionContent">
            {/* <h1>{this.props.attraction._id}</h1> */}
            <h2>Address: {this.props.attraction.address}</h2>
            <h2>Name: {this.props.attraction.name}</h2>
            {/* <h2>Location_data: {this.props.attraction.location_data}</h2> */}
            <h1>Description: {this.props.attraction.description || "No description available"}</h1>
            <h2>Rating: {this.props.attraction.rating}</h2>
          </div>


          <div className="attractionPic">
            <img className="attractionsImage" src={this.props.attraction.imageUrl} />
          </div>

        </div>
      </Link>
    );
  }
}

export default AttractionBox;
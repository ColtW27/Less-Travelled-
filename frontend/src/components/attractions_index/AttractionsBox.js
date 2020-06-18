import React from 'react'; 

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
  render () {
    return (
      <div> 
        <div className="attractionContent">
          <h2>Address: {this.props.attraction.address}</h2>
          <h2>Name: {this.props.attraction.name}</h2>
          <h2>Location_data: {this.props.attraction.location_data}</h2>
          <h1>Description: {this.props.attraction.description || "No description available"}</h1>
          <h2>Rating: {this.props.attraction.rating}</h2>
        </div>

        <div className="attractionPic">
          <img className="attractionsImage" src="data:image/jpeg;base64,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" />
        </div>

      </div>
    );
  }
}

export default AttractionBox;
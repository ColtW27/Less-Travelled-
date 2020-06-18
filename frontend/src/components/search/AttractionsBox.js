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
        <p> hello </p>
        <h1>{this.props.attraction.address}</h1>
        <h1>{this.props.attraction.name}</h1>
        <h1>{this.props.attraction.location_data}</h1>
        <h1>{this.props.attraction.rating}</h1>
      </div>
    );
  }
}

export default AttractionBox;
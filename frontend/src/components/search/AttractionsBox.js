import React from 'react'; 

class AttractionBox extends React.Component {
  render () {
    // debugger
    return (
      <div> 
        <h1>{this.props.address}</h1>
      </div>
    );
  }
}

export default AttractionBox;
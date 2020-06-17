import React from "react";
import TravelMap from '../map/map';

class AttractionsIndex extends React.Component {

  render() {
    return (
      <parent className='attractions-container'>
        <nav>SEARCH BAR</nav>
        <div className='attractions-main'>
          <ul>
            <li>DISPLAY 1</li>
            <li>DISPLAY 2</li>
          </ul>
          <map><TravelMap/></map>
        </div>
      </parent>
    );
  }
}

export default AttractionsIndex;






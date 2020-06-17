import React from "react";
import TravelMap from '../map/map';
class AttractionsIndex extends React.Component {
  render() {
    return (
      <div className='attractions-container'>
        {/* <nav>SEARCH BAR</nav> */}
        <div className="searchBar"> 
          <form>
            <input className="searchField" placeholder="Attraction"></input>
            &nbsp;
            <select className="categoryField">
              <option> Category </option>
            </select> 
             &nbsp;
            <select className="ratingField">
              <option>Rating</option>
            </select> 
            &nbsp;
            <input className="searchButton" type="submit" value="Search"></input>
          </form>
        </div>
        <br/>

        <div className="attractionsListings">
          <ul>
            <li>
              <div>
                a
              </div>
            </li>
            <li>
              <div>
                b
              </div>
            </li>
          </ul>
        </div>



        <div className='attractions-main'>
          <br/> 
          <div className="attractionsIndex"> 
          </div>
          <map><TravelMap /></map>
        </div>
      </div>
    );
  }
}
export default AttractionsIndex;

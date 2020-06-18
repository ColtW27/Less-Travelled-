import React from "react";
import {withRouter} from 'react-router-dom';
import TravelMap from '../map/map';
import IndexItem from './attraction_index_item';
import AttractionsBox from './AttractionsBox'; 

class AttractionsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderAttractions = this.renderAttractions.bind(this);

    this.state = {
      attractions: []
    }
  }

  componentDidMount() {
    // window.props = this.props; 
    // debugger 
    this.props.fetchAttractions();   
    // comment out the above line
  }
  
  componentWillReceiveProps(newState) {
    this.setState({ attractions: newState.attractions });
  }

  
  render() {

    const attractions = this.state.attractions.map((attraction, idx) => (
        <AttractionsBox
          key={idx} 
          attraction={attraction}
        />
      ));

  
    return (
      <div className='attractions-container'>
        <div className="searchBar"> 
          <form className="attraction-search-form">
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
          {/* {this.renderAttractions} */}
            {attractions}
          {/* <h1>what up</h1> */}
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

export default withRouter (AttractionsIndex);
// export default AttractionsIndex;

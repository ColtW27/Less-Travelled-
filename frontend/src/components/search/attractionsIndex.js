import React from "react";
import {withRouter} from 'react-router-dom';
import TravelMap from '../map/map';
import IndexItem from './attraction_index_item';
import AttractionsBox from './AttractionsBox'; 

class AttractionsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: []
    }
  }

  componentWillMount() {
    // window.props = this.props; 
    // debugger 
    this.props.fetchAttractions();   
    // comment out the above line
  }

  componentWillReceiveProps(newState) {
    this.setState({ attractions: newState.attractions });
  }

  render() {
    // const {name, address, location_data, description, rating} = this.props.attractions; 
    // if (this.state.attractions.length === 0) {
    //   return (<div>There are no Attractions</div>)
    // } else {
    return (
      <div className='attractions-container'>
        {/* <nav>SEARCH BAR</nav> */}
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
          {/* {if (this.state.attractions.length === 0) {
            return (<div>There are no Tweets</div>)
          }} */}
          {/* {this.state.attractions.map(attraction => (

          ))} */}


          {this.state.attractions.map(attraction => (
            <AttractionsBox key={attraction.id}/> 
            // address={attraction.address} /> 
            // <div> {attraction.address} </div>
          ))}

          {/* {attractions.map(attraction => (
            <AttractionIndexItem
              attraction={attraction}
              key={attraction.id}
            />
          ))} */}

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

// }


}
export default withRouter (AttractionsIndex);

import React from "react";
import TravelMap from '../map/map';
import AttractionIndexItem from './attraction_index_item';

class AttractionsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: []
    }
  }

  componentWillMount() {
    // this.props.fetchAttractions();
  }

  componentWillReceiveProps(newState) {
    this.setState({ attractions: newState.attractions });
  }

  render() {
    // if (this.state.attractions.length === 0) {
    //   return (<div>There are no Attractions</div>)
    // } else {
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
          {/* {if (this.state.attractions.length === 0) {
            return (<div>There are no Tweets</div>)
          }} */}
          {this.state.attractions}

{/* 
          {this.state.attractions.map(attraction => (
            <AttractionIndexItem key={attraction._id} text={attraction.text} />
          ))} */}

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
export default AttractionsIndex;

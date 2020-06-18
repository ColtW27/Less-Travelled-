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

//   renderAttractions() {
//   //   if (this.props.attractions.data.length !== 0) { 
//   //     return (                   
//   //         this.state.attractions.data.map(attraction =>
//   //           <AttractionsBox
//   //             key={attraction.id}
//   //             attraction={attraction}
//   //           // user={attraction.user}
//   //           // address={attraction.address} 
//   //           />
//   //         )
//   //       );                         
//   // }
// }

// const attractions = this.props.attractions.data => {

  
  
  render() {
      
    console.log(this.props.attractions)
    // const attractions = this.props.attractions.map((attraction) => (
    //     <AttractionsBox
    //       key={attraction.id} 
    //       attraction={attraction}
    //     />
    //   )); 
    // }

  
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
          {/* {attractions} */}
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

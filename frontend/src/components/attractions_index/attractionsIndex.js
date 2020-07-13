import React from "react";
import {withRouter} from 'react-router-dom';
import TravelMap from '../map/map';
import AttractionsBox from './AttractionsBox'; 
import SearchBar from '../search/search'

class AttractionsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: this.props.attractions,
      searchTerm: ""
    }
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {

    this.props.fetchAttractions();
      
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm){
      this.setState({attractions: this.props.attractions.filter(attraction => attraction.name
        .toLowerCase()
        .includes(this.state.searchTerm
          .toLowerCase()))})
    }
    if(prevProps.attractions !== this.props.attractions){
      this.setState({attractions: this.props.attractions.filter(attraction => attraction.name
        .toLowerCase()
        .includes(this.state.searchTerm
          .toLowerCase()))})
    }
  }
  

  handleQuery(query){
    return (e) => {
      e.preventDefault();
      this.setState({searchTerm: query})
    }
  }
  render() {
    if (this.state.attractions.length === 0) return null;
     const attractions = this.state.attractions.map(attraction => (
        <AttractionsBox
                  key={attraction._id} 
                  attraction={attraction}
                  fetchAttractions={this.props.fetchAttractions}
                />
      ))

    return (
      <div className='attractions-container'>
        <div>
          <SearchBar handleQuery={this.handleQuery}/>
        </div>

        <br/>

        <div className="attractionsListings">
            {attractions}
        </div>
         
        <div className='attractions-main'>
          <br/> 
          <div className="attractionsIndex"> 
          </div>
          <map><TravelMap attractions={attractions} /></map>
        </div>
      </div>
    );
  }
} 

export default withRouter (AttractionsIndex);






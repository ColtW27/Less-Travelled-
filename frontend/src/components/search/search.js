import React from 'react'; 
import { withRouter } from 'react-router-dom';
import { fetchAttraction } from '../../util/attraction_api_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      attractionQuery: ""
    }

    this.updateSearch = this.updateSearch.bind(this); 
    this.onSearch = this.onSearch.bind(this);
  }

  updateSearch(key) {
    console.log(this.state);
    return e => this.setState({
      [key]: e.target.value
    })
  }
  
  
  onSearch(e) {
    return this.props.fetchAttractions
    .then( attractions => {
      attractions.map(attraction => {
      attraction.name.includes(this.state.attractionQuery); 
      })  
    })
  }


  render() {
    return (
      <div className="searchBar">
        <form className="attraction-search-form">
          <input 
          type="search"
          value={this.state.attractionQuery}
          className="searchField" 
          placeholder="Search by attraction name"
          onChange={this.updateSearch('attractionQuery')}
          ></input>
                  &nbsp;
                  <select className="categoryField">
            <option> Category </option>
            <option> History </option>
            <option> Religion </option>
            <option> Art </option>
            <option> Kitsch </option>
            <option> Eats </option>
            <option> Wowser Bananas! </option>
          </select>
                  &nbsp;
                  <select className="ratingField">
            <option>Rating</option>
            <option>⭐️⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️</option>
            <option>⭐️⭐️</option>
            <option>⭐️</option>
          </select>
                  &nbsp;
                  <input className="searchButton" type="submit" value="Search" onClick={this.props.handleQuery(this.state.attractionQuery)}></input>
        </form>
      </div>
    )
  }
}

export default withRouter (SearchBar); 
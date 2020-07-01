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
  // updateSearch(e) {
  //   e.preventDefault(); 
  //   let query = "";
  //   query += e.target.value;
  //   alert('query:', query);
  //   this.setState({ [attractionQuery]: query});
  //   // const {value} = e.target; 
  //   // alert(e.target.value); 
  //   // console.log(e.target.value); 
  //   this.setState({attractionQuery : e.target.value}); 
  //   alert(e.target.value);
  //   // alert(value); 
  //   // console.log(this.state.attractionQuery);
  //   console.log(this.state);
  //   // console.log(value);
  //   // alert(this.state.attractionQuery);
  //   // alert("type your search query");
  // }
  
  onSearch(e) {
    return this.props.fetchAttractions
    .then( attractions => {
      attractions.map(attraction => {
      attraction.name.includes(this.state.attractionQuery); 
      })  
    } 
    )
    // this.state.attractionQuery; 
    // e.preventDefault(); 
    // alert('this onSearch function should hit the fetch attraction action')
    // this.props.fetchAttractions().then(); 
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
                  <input className="searchButton" type="submit" value="Search" onClick={this.onSearch}></input>
        </form>
      </div>
    )
  }
}

export default withRouter (SearchBar); 
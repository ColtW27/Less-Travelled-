import React from 'react'; 
import { withRouter } from 'react-router-dom';
// import { fetchAttraction } from '../../util/attraction_api_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      attractionQuery: "",
      category: "",
      rating: ""
    }

    this.updateSearch = this.updateSearch.bind(this); 
    // this.onSearch = this.onSearch.bind(this);
  }

  updateSearch(key) {
    console.log(this.state);
    return e => this.setState({
      [key]: e.target.value
    })
  }
  
  
  // onSearch(e) {
  //   e.preventDefault();
  //   return this.props.fetchAttractions
  //   .then( attractions => {
  //     attractions.map(attraction => {
   
  //     attraction.name.includes(this.state.attractionQuery); 
  //     })  
  //   })
  // }


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
                  <select className="categoryField"
                  value={this.state.category}
                  onChange={this.updateSearch('category')}
                  >
            <option> Category </option>
            <option> History </option>
            <option> Religion </option>
            <option> Art </option>
            <option> Kitsch </option>
            <option> Eats </option>
            <option> Wowser Bananas! </option>
          </select>
                  &nbsp;
                  <select className="ratingField"
                  value={this.state.rating}
                  onChange={this.updateSearch('rating')}
                  >
            <option>Rating</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
                  &nbsp;
                  <input 
                  className="searchButton" 
                  type="submit" 
                  value="Search" 
                  onClick={
                    // () => {
                    //   console.log('props: ', this.props);  
                    //   this.props.handleRating(this.state.rating);  
                    //   this.props.handleQuery(this.state.attractionQuery);
                    // }
                    // console.log('props: ', this.props), 
                    this.props.handleAll(this.state)
                    // this.props.handleRating(this.state.rating) 
                    // this.props.handleQuery(this.state.attractionQuery) 
                    // this.handleAll(this.state.rating, this.stateattractionQuery)
                    // this.props.handleAll(this.state.attractionQuery, this.state.category, this.state.rating)
                    } 
                  />
        </form>
      </div>
    )
  }
}

export default withRouter (SearchBar); 
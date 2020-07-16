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
      searchTerm: "",
      category: "",
      rating: ""
    }
    this.handleQuery = this.handleQuery.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAll = this.handleAll.bind(this); 
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

          // if(this.state.category.length !== 0 ){
          //   this.setState({attractions: this.state.attractions.filter(attraction => attraction.category
          //     .includes(this.state.category))})
          // }

    if(prevState.rating !== this.state.rating){
      this.setState({attractions: this.props.attractions.filter(attraction => attraction.rating == this.state.rating)})
    }

    if(prevProps.attractions !== this.props.attractions){
      this.setState({attractions: this.props.attractions.filter(attraction => attraction.name
        .toLowerCase()
        .includes(this.state.searchTerm
          .toLowerCase()))})
    }

      // if (this.state.category.length !== 0) {
      //   this.setState({
      //     attractions: this.state.attractions.filter(attraction => attraction.category
      //       .includes(this.state.category))
      //   })
      // }


    if (prevProps.rating !== this.props.rating) {
      this.setState({ attractions: this.props.attractions.filter(attraction => attraction.rating == this.state.rating) })
    }
  }

  
  
  handleQuery(query){
    return (e) => {
      e.preventDefault();
      this.setState({
        searchTerm: query, 
        category: this.state.category, 
        rating: this.state.rating
      })
    }
  }
  handleCategory(query){
    return (e) => {
      e.preventDefault();
      this.setState({
        searchTerm: this.state.searchTerm, 
        category: query, 
        rating: this.state.rating
      })
    }
  }
  handleRating(query){
    return (e) => {
      e.preventDefault();
      this.setState({
        searchTerm: this.state.searchTerm, 
        category: this.state.category, 
        rating: query
        })
    }
    // console.log(query);
  }
  
  handleAll(query, rating) {
  // handleAll(field, query) {
    // return (e) => {
    //   e.preventDefault(); 
    //   this.setState({
    //     [field]: query
    //   })
    // }
    this.handleQuery(query);
    // this.handleCategory(category); 
    this.handleRating(rating);  
  }

  noMatches(attractions){
    return(

     
      <div className='attractions-container'>
        <div>
          <SearchBar 
          handleQuery={this.handleQuery}
          // handleCategory={this.handleCategory}
          handleRating={this.handleRating}
              handleAll={this.handleAll}
           />
        </div>

        <br />

        <div className="search-result-count">
          Sorry, there do not appear to be any matches for your search.
      </div>

        <div className='attractions-main'>
          <br />
          <div className="attractionsIndex">
          </div>
          <map><TravelMap attractions={attractions} /></map>
        </div>
      </div>
    )
  }
  render() {
    // if (this.state.attractions.length === 0) return this.noMatches(attractions);
     const attractions = this.state.attractions.map(attraction => (
        <AttractionsBox
                  key={attraction._id} 
                  attraction={attraction}
                  fetchAttractions={this.props.fetchAttractions}
                />
      ))
    if (this.state.attractions.length === 0) return this.noMatches(attractions);
    return (
      <div className='attractions-container'>
        <div>
          <SearchBar 
          handleQuery={this.handleQuery}
            handleRating={this.handleRating}
            handleAll={this.handleAll}

          />
        </div>

        <br/>
        <div className="search-result-count">
          {attractions.length} search result(s)
        </div>

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






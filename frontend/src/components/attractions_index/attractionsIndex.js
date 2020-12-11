import React from "react";
import {withRouter} from 'react-router-dom';
import TravelMap from '../map/map';
import TravelMapVr2 from '../map/mapv2'
import AttractionsBox from './AttractionsBox'; 
import SearchBar from '../search/search';
import { Link } from 'react-router-dom';

class AttractionsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allAttractions: this.props.attractions,
      attractions: this.props.attractions, 
      searchTerm: "",
      category: "",
      rating: "",
      currentCenter: "",
      destination: "",
      response: null
    }

    this.handleQuery = this.handleQuery.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAll = this.handleAll.bind(this); 
    this.directionsCallback = this.directionsCallback.bind(this);
    this.setDestination = this.setDestination.bind(this)
  }

  

  componentDidMount() {
    this.props.fetchAttractions();  
    this.findCurrentLocation();
  }


  findCurrentLocation = () => {
    // if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          currentCenter: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            }
          }))
        }, 
        error => console.log(error)     
      );   
    };

    setDestination = (ref) => {
      this.setState(prevState => ({
        destination: `${ref.latLng.lat()}, ${ref.latLng.lng()}`


      }))
      console.log(ref)

    }










  componentDidUpdate(prevProps, prevState) {

    // debugger 
    // if (!prevProps) {
    //   this.setState({
    //     allAttractions: this.props.attractions,
    //     attractions: this.props.attractions
    //   })    
    //   return   
    // } else if (prevProps.attractions !== this.props.attractions) {
    //   // debugger 
    //   this.setState({
    //     allAttractions: this.prevState.attractions,
    //     attractions: this.prevState.attractions
    //   })
    //   // return
    // }
   
    // }
    if (prevProps.attractions !== this.props.attractions) {
      // debugger 
      this.setState({ 
        allAttractions: this.props.attractions, 
        attractions: this.props.attractions 
      })
      return 
    }
    
    // let newAttractions = this.state.allAttractions; 
    let newAttractions = this.state.attractions; 

    // if (prevState !== this.state) {
    //   this.setState({
    //     attractions: this.props.attractions.filter(attraction => attraction.name
    //       .toLowerCase()
    //       .includes(this.state.searchTerm
    //         .toLowerCase()))
    //   })
    // }

    if(prevState.searchTerm !== this.state.searchTerm){
      // debugger 
      // newAttractions = newAttractions.filter(attraction => {
      newAttractions = newAttractions.filter(attraction => {
        return (
          attraction.name.toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) 
        )
      })
    }
    if (prevState.rating !== this.state.rating) {
      // debugger 
        // newAttractions = newAttractions.filter(attraction => {
        newAttractions = this.state.allAttractions.filter(attraction => {
          return (attraction.rating === this.state.rating)  
        })
    }

    if (this.state.attractions !== newAttractions) {
      // debugger 
      this.setState({attractions: newAttractions}); 
    }

          // if(this.state.category.length !== 0 ){
              // this.setState({attractions: this.state.attractions.filter(attraction => attraction.category
              //   .includes(this.state.category))})
          // }

    // if(prevState.rating !== this.state.rating){
    //   this.setState({attractions: this.props.attractions.filter(attraction => attraction.rating == this.state.rating)})
    // }


    // if(prevProps.attractions !== this.props.attractions){
    //   this.setState({attractions: this.props.attractions})
    //   // this.setState({attractions: this.props.attractions.filter(attraction => attraction.name
    //   //   .toLowerCase()
    //   //   .includes(this.state.searchTerm
    //   //     .toLowerCase()))})
    // }

      // if (this.state.category.length !== 0) {
      //   this.setState({
      //     attractions: this.state.attractions.filter(attraction => attraction.category
      //       .includes(this.state.category))
      //   })
      // }


    // if (prevProps.rating !== this.props.rating) {
    //   this.setState({ attractions: this.props.attractions.filter(attraction => attraction.rating == this.state.rating) })
    // }
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
  
  handleAll({attractionQuery:searchTerm, rating}) {
    return (e) => {
      e.preventDefault(); 
      this.setState({searchTerm, rating})
    } 
    
  // handleAll(field, query) {
  //   return (e) => {
  //     e.preventDefault(); 
  //     this.setState({
  //       [field]: query
  //     })
  //   }
  //   this.handleQuery(query);
  //   this.handleCategory(category); 
  //   this.handleRating(rating);  
  // }
  }

  directionsCallback (response) {
    console.log(response)

    if (response !== null) {
      if (response.status === 'OK') {
        this.setState(
          () => ({
            response
          })
        )
      } else {
        console.log('response: ', response)
      }
    }
  }

  noMatches(attractions){
    return(
      <div className='attractions-container'>
        <div>
          <SearchBar 
              handleAll={this.handleAll}
           />
        </div>
        <br/>

        <div className="search-result-count">
          Sorry, there do not appear to be any matches for your search.
        </div>

        <div className='attractions-main'>
          <br />
          <div className="attractionsIndex">
          </div>
        </div>
      </div>
    )
  }

  render() {
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
        <div className='attractions-search-section'>
          <SearchBar 
            handleQuery={this.handleQuery}
            handleRating={this.handleRating}
            handleAll={this.handleAll}
          />
          <div className='search-results-add-attractions'>
            <div className="search-result-count">
              {attractions.length} search result(s)
            </div>
            <div className="AddAttraction">
              <Link to="/attractionsform">Add an attraction</Link> 
            </div>
          </div>
        </div>
        <div className="attraction-listings">
          {attractions}
        </div>
        
          <map className="attraction-map">            
            <TravelMapVr2 
                attractions={attractions} 
                center={this.state.currentCenter} 
                destination={this.state.destination} 
                response={this.state.response}
                directionsCallback={this.directionsCallback}
                setDestination={this.setDestination}
                />
          </map>
          
  
      </div>

    );
  }
} 

export default withRouter (AttractionsIndex);
import React from 'react'; 

class SearchBar extends React.Component {
  render() {
    return (
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
    )
  }
}

export default SearchBar; 
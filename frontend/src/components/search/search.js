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
            <option> History </option>
            <option> Religion </option>
            <option> Art </option>
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
                  <input className="searchButton" type="submit" value="Search"></input>
        </form>
      </div>
    )
  }
}

export default SearchBar; 
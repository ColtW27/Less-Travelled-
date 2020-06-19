import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TravelMap from '../map/map';
import AttractionsBox from '../attractions_index/AttractionsBox';
import SearchBar from './search';


class AttractionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newState) {
    this.setState({ attractions: newState.attractions });
  }

  render() {
    
    return (
      <div className='attractions-show-container'>
        <div>
          <SearchBar />
        </div>

        <br />

         <div className="attractionShow">

          {/* <AttractionsBox
            key={this.state.attraction._id}
            attraction={attraction}
          /> */}
           <p> hello does this render? </p>
           {/* {this.props.attractions} */}
         </div>

         <div className='attractions-main'>
           <br />
           <div className="attractionsIndex">
           </div>
           <map><TravelMap /></map>
         </div>
       </div>
    );
  }
}

export default withRouter (AttractionShow);
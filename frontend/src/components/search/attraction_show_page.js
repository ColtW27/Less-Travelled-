import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TravelMap from '../map/map';
import AttractionsBox from '../attractions_index/AttractionsBox';
import SearchBar from './search';

// import AttractionDetail from './attraction_detail';
// // import BenchMap from '../bench_map/bench_map';
// // import ReviewFormContainer from './review_form_container';
// import { ProtectedRoute } from '../../util/route_util';
// import AttractionBox from './AttractionsBox';
// // import { ReviewLink } from '../../util/link_util';

class AttractionShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   attractions: []
    // }
  }

  componentWillReceiveProps(newState) {
    this.setState({ attractions: newState.attractions });
  }

  render() {
    
    return (
      <div className='attractions-container'>

        <SearchBar />
        <br />

         <div className="attractionShow">
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>

          {/* <AttractionsBox
            key={this.state.attraction._id}
            attraction={attraction}
          /> */}
           hello does this render? 
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
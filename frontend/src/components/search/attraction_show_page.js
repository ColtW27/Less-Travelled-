import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// import AttractionDetail from './attraction_detail';
// // import BenchMap from '../bench_map/bench_map';
// // import ReviewFormContainer from './review_form_container';
// import { ProtectedRoute } from '../../util/route_util';
// import AttractionBox from './AttractionsBox';
// // import { ReviewLink } from '../../util/link_util';

class AttractionShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: []
    }
  }

  componentDidMount() {
    this.props.fetchAttraction();
  }

  componentWillReceiveProps(newState) {
    this.setState({ attractions: newState.attractions });
  }

  render() {

    const attractions = this.state.attractions.map((attraction) => (
      <AttractionsBox
        key={attraction.id}
        attraction={attraction}
      />
    ));
    
    return (
      <div className='attractions-container'>

        <SearchBar />
        <br />

        <div className="attractionsListings">
          {attractions.first()}
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
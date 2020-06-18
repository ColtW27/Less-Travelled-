import { connect } from 'react-redux';

import { fetchAttraction } from '../../actions/attractions_actions';

// import { selectReviewsForBench, selectBench } from '../../reducers/selectors';
import {AttractionShow} from './attraction_show_page';


const mapStateToProps = (state, ownProps) => {
  return {
    attraction: state.attractions(ownProps.match.params.attraction._id)
    // attractions: state.attractions
  };
};


const mapDispatchToProps = dispatch => {
  return {
    // fetchAttractions: () => dispatch(fetchAttractions())
    fetchAttraction: id => dispatch(fetchAttraction(id))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AttractionShow);



import { connect } from 'react-redux';

import { fetchAttraction, fetchAttractions } from '../../actions/attractions_actions';

import SearchBar from './search';


const mapStateToProps = (state, ownProps) => {
  return {
    attraction: state.attractions[ownProps.match.params.id]
  };
};


const mapDispatchToProps = dispatch => {
  return {
    // fetchAttractions: () => dispatch(fetchAttractions())
    fetchAttraction: id => dispatch(fetchAttraction(id)),
    fetchAttractions: () => dispatch(fetchAttractions())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


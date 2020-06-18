
import { connect } from 'react-redux';
import { fetchAttractions } from '../../actions/attractions_actions';
import AttractionsIndex from './attractionsIndex';

const mapStateToProps = (state) => {
  return {
    // attractions: Object.values(state.attractions.data)
    // attractions: Object.values(state.attractions.all)
    attractions: state.attractions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAttractions: () => dispatch(fetchAttractions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttractionsIndex);
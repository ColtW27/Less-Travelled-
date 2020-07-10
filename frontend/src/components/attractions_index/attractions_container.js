
import { connect } from 'react-redux';
import { fetchAttractions } from '../../actions/attractions_actions';
import AttractionsIndex from './attractionsIndex';

const mapStateToProps = (state) => { 
  const attractions = state.attractions.all ? state.attractions.all : state.attractions
  return {
    // attractions: Object.values(state.attractions.data)
    // attractions: Object.values(state.attractions.all)
    attractions: Object.values(attractions)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAttractions: () => dispatch(fetchAttractions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttractionsIndex);
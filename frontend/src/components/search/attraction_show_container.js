import { connect } from 'react-redux';
import AttractionShow from './attraction_show_page';
import { fetchAttraction, fetchAttractions } from '../../actions/attractions_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    attraction: state.attractions[ownProps.match.params.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAttraction: id => dispatch(fetchAttraction(id)),
    fetchAttractions: () => dispatch(fetchAttractions())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AttractionShow);


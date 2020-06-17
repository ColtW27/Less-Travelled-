import { connect } from 'react-redux';

import { fetchAttraction } from '../../actions/attractions_actions';

// frontend / src / actions / attractions_actions.js
// import { selectReviewsForBench, selectBench } from '../../reducers/selectors';
import AttractionShow from '.attraction_show_page';


const mapStateToProps = (state) => {
  return {
    attractions: Object.values(state.attractions.all)
  };
};

// const mapStateToProps = (state, { match }) => {
//   const attractionId = parseInt(match.params.attractionId);
//   // const attraction = selectBench(state.entities, benchId);
//   // const reviews = selectReviewsForBench(state.entities, bench);
//   return {
//     attractionId,
//     attraction,
//     // reviews
//   };
// };

const mapDispatchToProps = dispatch => ({
  fetchAttraction: id => dispatch(fetchAttraction(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(AttractionShow);


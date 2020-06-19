import {
  // RECEIVE_REVIEW,
  RECEIVE_ATTRACTIONS,
  RECEIVE_ATTRACTION,
  RECEIVE_NEW_ATTRACTION
} from '../actions/attractions_actions';

const attractionsReducer = (state = { all: {}, new: undefined}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ATTRACTIONS:
      action.attractions.data.forEach(attraction => {
        newState.all[attraction._id] = attraction
      })
      return newState.all
    case RECEIVE_ATTRACTION:
      const newAttraction = { [action.attraction._id]: action.attraction };
      return Object.assign({}, state, newAttraction);
    case RECEIVE_NEW_ATTRACTION:
      return newState.new = action.attraction.data
    // case RECEIVE_REVIEW:
    //   const { review, average_rating } = action;
    //   const newState = Object.assign({}, state);
    //   newState[review.attraction_id].reviewIds.push(review.id);
    //   newState[review.attraction_id].average_rating = average_rating;
    //   return newState;
    default:
      return state;
  }
};

export default attractionsReducer; 
import * as APIUtil from '../util/attraction_api_util';

export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';
export const RECEIVE_ATTRACTION = 'RECEIVE_ATTRACTION';
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveAttractions = attractions => ({
  type: RECEIVE_ATTRACTIONS,
  attractions,
});

export const receiveAttraction = ({ attraction, reviews, authors }) => ({
  type: RECEIVE_ATTRACTION,
  attraction,
  reviews,
  authors,
});

// export const receiveReview = ({ review, average_rating, author }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   author,
// });

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );

export const fetchAttractions = filters => dispatch => (
  APIUtil.fetchAttractions(filters).then(attractions => (
    dispatch(receiveAttractions(attractions))
  ))
);

export const fetchAttraction = id => dispatch => (
  APIUtil.fetchAttraction(id).then(payload => (
    dispatch(receiveAttraction(payload))
  ))
);

export const createAttraction = attraction => dispatch => (
  APIUtil.createAttraction(attraction).then(attraction => (
    dispatch(receiveAttraction(attraction))
  ))
);

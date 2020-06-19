import * as APIUtil from '../util/attraction_api_util';

export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';
export const RECEIVE_ATTRACTION = 'RECEIVE_ATTRACTION';
export const RECEIVE_NEW_ATTRACTION = 'RECEIVE_NEW_ATTRACTION'
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveAttractions = (attractions) => ({
  type: RECEIVE_ATTRACTIONS,
  attractions
});

export const receiveAttraction = ( attraction ) => ({
  type: RECEIVE_ATTRACTION,
  attraction
});


export const receiveNewAttraction = attraction => ({
  type: RECEIVE_NEW_ATTRACTION,
  attraction

})

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

export const fetchAttractions = () => dispatch => (
  APIUtil.fetchAttractions().then(attractions => (


    dispatch(receiveAttractions(attractions))
  )).catch(err => console.log(err))
);

export const fetchAttraction = id => dispatch => (
  APIUtil.fetchAttraction(id).then(attraction => (
    dispatch(receiveAttraction(attraction))
  )).catch(err => console.log(err))
);

export const createAttraction = attraction => dispatch => (

  APIUtil.createAttraction(attraction)
    .then(attraction => (dispatch(receiveNewAttraction(attraction))
  ))

);

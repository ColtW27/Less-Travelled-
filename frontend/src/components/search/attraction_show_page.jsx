import React from 'react';
import { Link } from 'react-router-dom';

import AttractionDetail from './attraction_detail';
// import BenchMap from '../bench_map/bench_map';
// import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
// import { ReviewLink } from '../../util/link_util';

const AttractionShow = ({ attraction, attractionId, fetchAttraction, reviews }) => {
  const attractions = {
    [attractionId]: attraction 
  };

  return (
    <div className="single-attraction-show">
      <div className="single-attraction-map">
        <Link to="/">Back to Attractions Index</Link>
        <AttractionMap
          attractions={attractions}
          attractionId={attractionId}
          singleAttraction={true}
          fetchAttraction={fetchAttraction}
        />
      </div>
      <div className="right-half attraction-details">
        <AttractionDetail attraction={attraction} reviews={reviews} />
        <ReviewLink
          component={ReviewFormContainer}
          to={`/attractions/${attractionId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute
          path="/attractions/:attractionId/review"
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};

export default AttractionShow;

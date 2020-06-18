// import React from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

// import AttractionDetail from './attraction_detail';
// // import BenchMap from '../bench_map/bench_map';
// // import ReviewFormContainer from './review_form_container';
// import { ProtectedRoute } from '../../util/route_util';
// import AttractionBox from './AttractionsBox';
// // import { ReviewLink } from '../../util/link_util';

// class AttractionShow extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.renderAttractions = this.renderAttractions.bind(this);

//     this.state = {
//       attractions: []
//     }
//   }

//   componentDidMount() {
//     // window.props = this.props; 
//     // debugger 
//     this.props.fetchAttraction();
//     // comment out the above line
//   }

//   componentWillReceiveProps(newState) {
//     this.setState({ attractions: newState.attractions });
//   }

//   render() {

//     const attractions = this.state.attractions.map((attraction) => (
//       <AttractionsBox
//         key={attraction.id}
//         attraction={attraction}
//       />
//     ));
    
//     return (
//       <div className='attractions-container'>

//         <SearchBar />
//         <br />

//         <div className="attractionsListings">
//           {attractions.first()}
//         </div>

//         <div className='attractions-main'>
//           <br />
//           <div className="attractionsIndex">
//           </div>
//           <map><TravelMap /></map>
//         </div>
//       </div>
//     );
//   }


//   // }
//   // const attractions = {
//   //   [attractionId]: attraction 
//   // };

//   // return (
//   //   <div className="single-attraction-show">
//   //     <div className="single-attraction-map">
//   //       <Link to="/">Back to Attractions Index</Link>
//   //       <AttractionBox/> 
//   //     </div>
//   //     <div className="right-half attraction-details">
//   //       <AttractionDetail attraction={attraction} reviews={reviews} />
//   //       <ReviewLink
//   //         component={ReviewFormContainer}
//   //         to={`/attractions/${attractionId}/review`}
//   //         label="Leave a Review"
//   //       />
//   //       <ProtectedRoute
//   //         path="/attractions/:attractionId/review"
//   //         component={ReviewFormContainer}
//   //       />
//   //     </div>
//   //   </div>
//   // );
// };

// export default withRouter (AttractionShow);
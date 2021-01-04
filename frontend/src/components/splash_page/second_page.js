import React from 'react';
import { Link } from 'react-router-dom';
// import NavBarContainer from '../nav/navbar_container';
// import TravelMap from '../map/map'


class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <ul>
          <li>
            <div className='about-us-polaroid'>
              <img  src='../../../images/splashPageImages/Drumheller_Dino.jpg' />
              <h3>Find hidden treasures</h3>
            </div>
            <p>
              Discover the 'LessTravelled' on your roadtrip with LessTravelled. Access our mapping tool and see a list of
            </p>
          </li>
          <li>
            <div className='about-us-polaroid'>
              <img  src='../../../images/splashPageImages/secret_caverns.jpeg' />
              <h3>Route to roadside attractions</h3>
            </div>
            <p>
              Route to attractions near you with our mapping tool. Just click an attraction close by and let LessTravelled's mapping tool do the routing for you.
            </p>
          </li>
          <li>
            <div className='about-us-polaroid'>
              <img  src='../../../images/splashPageImages/sideshowexpo.jpeg' />
              <h3>Add your discoveries</h3>
            </div>
            <p>
              Add an Attraction to LessTravelled and share in a community that promotes discovery

           

            </p>


          </li>

        </ul>
        <div className="main-page-description">
        </div>
      </div>
    );
  }
}

export default MainPage;


//SPLASH PAGE / MAIN PAGE
import React from 'react';
import { Link } from 'react-router-dom';
// import NavBarContainer from '../nav/navbar_container';
// import TravelMap from '../map/map'


class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div className='main-page-header-image'><h3>LessTravelled</h3></div>
        {/* <div className='main-page-right-image'></div> */}
        <ul>
          <li>
            <div className='main-page-polaroid'>
              <img  src='../../../images/splashPageImages/Drumheller_Dino.jpg' />
              <h3>Find hidden treasures</h3>
            </div>
            <p>
              Discover the 'LessTravelled' on your road trip with LessTravelled. Access our mapping tool and see a list of attractions discovered by other users.
            </p>
          </li>
          <li>
            <div className='main-page-polaroid'>
              <img  src='../../../images/splashPageImages/secret_caverns.jpeg' />
              <h3>Route to roadside attractions</h3>
            </div>
            <p>
              Route to attractions near you with our mapping tool. Just click an attraction close by and let LessTravelled's mapping tool do the routing for you. It's just that easy!
            </p>
          </li>
          <li>
            <div className='main-page-polaroid'>
              <img  src='../../../images/splashPageImages/sideshowexpo.jpeg' />
              <h3>Add your discoveries</h3>
            </div>
            <p>
              Find an attraction you can't wait to share? Add to LessTravelled! Explorers rely on your finds and welcome new locations.
            </p>


          </li>

        </ul>
        {/* <div className="main-page-description">
        </div> */}
      </div>
    );
  }
}

export default MainPage;


//SPLASH PAGE / MAIN PAGE
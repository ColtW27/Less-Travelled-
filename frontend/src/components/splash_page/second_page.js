import React from 'react';
import { Link } from 'react-router-dom';
// import NavBarContainer from '../nav/navbar_container';
// import TravelMap from '../map/map'


class SplashPage extends React.Component {

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
              Route to the 'LessTravelled' attractions near you with our mapping tool.

            </p>


          </li>
          <li>
            <div className='about-us-polaroid'>
              <img  src='../../../images/splashPageImages/secret_caverns.jpeg' />
              <h3>Find hidden treasures</h3>
            </div>
            <p>
              Route to the 'LessTravelled' attractions near you with our mapping

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac malesuada massa. Fusce in lobortis orci, vel luctus dui. Etiam mattis dui lectus, quis commodo sem ultricies a. Nam nec 




            </p>


          </li>
          <li>
            <div className='about-us-polaroid'>
              <img  src='../../../images/splashPageImages/sideshowexpo.jpeg' />
              <h3>Find hidden treasures</h3>
            </div>
            <p>
              Route to the 'LessTravelled' attractions near you with our mapping

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac malesuada massa. Fusce in lobortis orci, vel luctus dui. Etiam mattis dui lectus, quis commodo sem ultricies a. Nam nec 



            </p>


          </li>

        </ul>




        {/* <div className='background-image-main'>
        </div> */}
        <div className="main-page-description">
        </div>
      </div>
    );
  }
}

export default SplashPage;


//SPLASH PAGE / MAIN PAGE
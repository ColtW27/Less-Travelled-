import React from 'react';
import { Link } from 'react-router-dom';
// import NavBarContainer from '../nav/navbar_container';
// import TravelMap from '../map/map'


class SplashPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div className='background-mage-main'>
          YOU SEE ME?
        </div>
        <div className="main-page-description">
        </div>
        <footer className="main-page-footer">
          









          <div className="copyright">





            Copyright &copy; 2020 LessTravelled
            Made by: Carl Godlewski, Rahul Jain, Jonathan Romero, Colton Wilmouth
          </div>
          




          <Link
          className="about-us-link"
          to="/aboutus"
          >Meet the Team</Link>
        </footer>
      </div>
    );
  }
}

export default SplashPage;


//SPLASH PAGE / MAIN PAGE
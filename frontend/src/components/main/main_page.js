import React from 'react';
import { Link } from 'react-router-dom';
// import NavBarContainer from '../nav/navbar_container';
import BackgroundVideo from '../backgroundVideo/backgroundVideo';
// import TravelMap from '../map/map'


class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div>
          <BackgroundVideo />
        </div>
        <div className="main-page-description">
          Less Travelled is an app for those of us that love to get out and see the world in all of its nitty-gritty detail. They say not to sweat the small things, because life is comprised of small things. We might as well stop to enjoy them as we pass through.
        </div>
        <footer className="main-page-footer">
          Copyright &copy; 2020 LessTraveled
          Made by: Carl Godlewski, Rahul Jain, Jonathan Romero, Colton Wilmouth
          <Link
          to="/about"
          >About us</Link>
        </footer>
      </div>
    );
  }
}

export default MainPage;


//SPLASH PAGE / MAIN PAGE
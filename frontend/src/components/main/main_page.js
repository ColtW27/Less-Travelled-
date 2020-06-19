import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import BackgroundVideo from '../backgroundVideo/backgroundVideo';
import TravelMap from '../map/map'


class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div>
          <BackgroundVideo />
        </div>
        <footer>
          Copyright &copy; 2020 LessTraveled
          Made by: Carl Godlewski, Rahul Jain, Jonathan Romero, Colton Wilmouth

        </footer>
      </div>
    );
  }
}

export default MainPage;


//SPLASH PAGE / MAIN PAGE
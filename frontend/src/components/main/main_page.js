import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import BackgroundVideo from '../backgroundVideo/backgroundVideo';

class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <h1>LessTraveled Main Page</h1>
        <BackgroundVideo />
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
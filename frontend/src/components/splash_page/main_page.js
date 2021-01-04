import React from 'react';
// import { Link } from 'react-router-dom';

//Rename to Landing
class MainPage extends React.Component {

  render() {
    return (
     
      <div className='landing-page-container'>
        <div className='landing-polaroid'>
              <img  src='../../../images/splashPageImages/Drumheller_Dino.jpg' />
              <h3>LessTravelled</h3>
        </div>




        {/* <div>
          LessTravelled is for those of us that love to get out and see the world in all of its nitty-gritty detail.  
        </div> */}
    

        <div>Click the photo to proceed</div>
      </div>
    );
  }
}

export default MainPage;


//SPLASH PAGE / MAIN PAGE
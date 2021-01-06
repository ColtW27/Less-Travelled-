import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {

  render() {
    return (
     
      <div className='landing-page-container'>
        <Link className='landing-page-link' to={'/main'}>
          <div onClick={this.goToMain} className='landing-polaroid'>
                <img  src='../../../images/splashPageImages/route-66.jpg' />
                <h3>LessTravelled</h3>
                <h4>See the world in all of its nitty-gritty detail</h4>
          </div>
        </Link>



        <style type="text/css">
          {`.nav-container {display: none}`}
          {`.main-page-footer {display: none}`}
         </style>




        {/* <div>
          LessTravelled is for those of us that love to get out and see the world in all of its nitty-gritty detail.  
        </div> */}
    
      </div>
    );
  }
}

export default LandingPage;


//SPLASH PAGE / MAIN PAGE
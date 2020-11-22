import React from 'react';
// import { Link } from 'react-router-dom';
import BackgroundVideo from '../backgroundVideo/backgroundVideo';

class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div>
          <BackgroundVideo />
        </div>
        <div className="main-page-description">
          LessTravelled is for those of us that love to get out and see the world in all of its nitty-gritty detail.  
        </div>
        {/* They say not to sweat the small things, because life is comprised of small things. We might as well stop to enjoy them as we pass through. */}
    
      </div>
    );
  }
}

export default MainPage;


//SPLASH PAGE / MAIN PAGE
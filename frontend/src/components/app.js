import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
// import BackgroundVideo from './backgroundVideo/backgroundVideo';
import AttractionsForm from './attraction_form/attraction_form_container'
import AttractionsContainer from './search/attractions_container'



import Modal from './modal/modal'
// import SignupFormContainer from './modal/session_form/signup_form_container';
// import LoginFormContainer from './modal/session_form/login_form_container';

import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container'; ####
// import SignupFormContainer from './session/signup_form_container'; ####


const App = () => (
  <div>
    <NavBarContainer />

    <Modal />

    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
      
        <ProtectedRoute exact path="/attractions" component={AttractionsContainer} />

        <ProtectedRoute exact path="/attractionsform" component={AttractionsForm} />

    </Switch>
  </div>
);

export default App;
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
// import BackgroundVideo from './backgroundVideo/backgroundVideo';
import AttractionsForm from './attraction_form/attraction_form_container'
import AttractionsContainer from './attractions_index/attractions_container'
// import AttractionShowContainer from './search/attraction_show_container'
// import AttractionsForm from './attraction_form/attraction_form_container'



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
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> ####*/}


        <ProtectedRoute exact path="/attractionsform" component={AttractionsForm} />
        <AuthRoute exact path="/attractions" component={AttractionsContainer} />
        {/* <ProtectedRoute exact path="/attraction" component={AttractionShowContainer} /> */}

        <ProtectedRoute exact path="/attractionsform" component={AttractionsForm} />

    </Switch>
  </div>
);

export default App;
import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import MainPage from './splash_page/main_page';
import SplashPage from './splash_page/second_page';
import AttractionsContainer from './attractions_index/attractions_container';
import AttractionsShowContainer from './search/attraction_show_container';
import PleaseLogin from './please_login/please_login';
import TalltalesShowContainer from './talltales_index/talltales_container';
import AttractionsForm from './attraction_form/attraction_form_container';
import TalltalesForm from './talltales_form/talltales_form_container';
import AboutUsNew from "./about_us/about_usvr2";
import AboutUs from "./about_us/about_us";
const App = () => (
  <div>
      <NavBarContainer />
      <Modal/>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/splashpage" component={SplashPage} />
      <Route exact path="/attractions" component={AttractionsContainer} />
      <Route path="/attractions/:id" component={AttractionsShowContainer}/>
      <Route exact path="/login" component={PleaseLogin}/>
      <Route exact path="/talltales" component={TalltalesShowContainer}/>
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/aboutusnew" component={AboutUsNew} />
      <ProtectedRoute exact path="/attractionsform" component={AttractionsForm} />
      <ProtectedRoute exact path="/talltalesform" component={TalltalesForm} />
    </Switch>
  </div>
);

export default App;
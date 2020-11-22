import React from 'react';
import { Link} from 'react-router-dom';

class Footer extends React.Component{

  render(){
    return(
      <footer className="main-page-footer">
        <div>
          <img className="footer-logo"src={process.env.PUBLIC_URL + '/LessTravLogoTwoPinish.png'} />
        </div>
        <div className="copyright-container">
          <div className="about-us-section">
            <Link
              className="about-us-link"
              to="/aboutus"
              >Meet the Team
            </Link>
            <Link
              className="about-us-link"
              to="/aboutus"
              >Our Passion
            </Link>
          </div>
          <div className="copyright">
            Copyright &copy; 2020 LessTravelled

          Made by: Carl Godlewski, Rahul Jain, Jonathan Romero, Colton Wilmouth
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
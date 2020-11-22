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
          <ul className="team-list">
            <li>
              <Link
                className="about-us-link"
                to="/aboutus"
                >Meet the Team ➡
              </Link>
            </li>
            <li>Carl Godlewski</li>
            <li>Rahul Jain</li>
            <li>Jonathan Romero</li>
            <li>Colton Wilmouth</li>
          </ul>

          <Link
            className="about-us-link"
            to="/aboutus"
            >Our Passion
          </Link>
          
          <div>
            Copyright &copy; 2020 LessTravelled
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
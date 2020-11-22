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
            <li><a href="https://cgodl.github.io/" target="_blank" rel="noopener noreferrer">Carl Godlewski</a></li>
            <li><a href="https://rahulj93.github.io/"target="_blank" rel="noopener noreferrer">Rahul Jain</a></li>
            <li><a href="https://Duskstone.github.io" target="_blank" rel="noopener noreferrer">Jonathan Romero</a></li>
            <li><a href="https://coltw27.github.io/" target="_blank" rel="noopener noreferrer">Colton Wilmouth</a></li>
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
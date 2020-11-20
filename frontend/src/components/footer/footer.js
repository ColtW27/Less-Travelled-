import React from 'react';
import { Link} from 'react-router-dom';

class Footer extends React.Component{

  render(){
    <footer className="main-page-footer">
      <div className="copyright">
        Copyright &copy; 2020 LessTravelled
      Made by: Carl Godlewski, Rahul Jain, Jonathan Romero, Colton Wilmouth
      </div>
      
      <Link
      className="about-us-link"
      to="/aboutus"
      >Meet the Team</Link>
    </footer>

  }
}

export default Footer;
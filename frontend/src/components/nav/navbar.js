import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.scss' ####

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                {/* <Link to={'/FIXTHIS'}>####TBD</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/logout'}>####TBD</Link> */}
                <p>WELCOME USER</p>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <nav className='nav-container'>
          <ul>
            <li>Less Traveled</li>
            <li>Add an attraction</li>
            <li>Tall Tales</li>
            <li>States</li>
            <li>Categories</li>
            <li>{ this.getLinks() }</li>
          </ul>    
        </nav>
      );
  }
}

export default NavBar;
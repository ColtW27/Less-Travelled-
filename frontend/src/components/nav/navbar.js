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
    const { currentUser, openModal } = this.props;

      if (this.props.loggedIn) { //does logged in need invoked?
        return (
            <div>
                {/* <Link to={'/FIXTHIS'}>####TBD</Link>
                <Link to={'/profile'}>Profile</Link>

                <Link to={'/FIXTHIS'}>####TBD</Link>
                <h2 className="header-name">Hi, {currentUser.username}!</h2>

                <Link to={'/logout'}>####TBD</Link> */}
                <p>WELCOME USER</p>

                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
          <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
      &nbsp; &nbsp;
            <button onClick={() => openModal('signup')}>Signup</button>
          </nav>
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
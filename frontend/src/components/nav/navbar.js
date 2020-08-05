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
  
      
      if (this.props.loggedIn) { 
        return (
            <div className="welcome-user">                
              <h2 className="header-name">Hi {currentUser.handle}!</h2>

                <button onClick={this.logoutUser}
                className="main-page-logout grow"
                >Logout</button>
            </div>
        );
      } else {
        return (
          <nav className="login-signup grow">
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
            <li className='grow'><Link to="/">LessTravelled</Link></li>
            <li className='grow'><Link to="/attractions">Attractions</Link></li>
            <li className='grow'><Link to="/attractionsform">Add an attraction</Link></li>
            <li> <Link
              className="about-us-link"
              to="/aboutus"
            >Meet the Team</Link></li>
            {/* <li><Link to="/talltales">Tall Tales</Link></li> */}
            
            {/* <li>States</li> */}
            <li>{ this.getLinks() }</li>
          </ul>    
        </nav>
      );
  }
}

export default NavBar;
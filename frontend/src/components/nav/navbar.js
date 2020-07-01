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
            <div>                
              <h2 className="header-name">WELCOME {currentUser.handle}!</h2>

                <button onClick={this.logoutUser}
                className="main-page-logout"
                >Logout</button>
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
            <li><Link to="/">Less Traveled</Link></li>
            <li><Link to="/attractions">Attractions</Link></li>
            <li><Link to="/attractionsform">Add an attraction</Link></li>

            <li><Link to="/talltales">Tall Tales</Link></li>
            
            <li>States</li>
            <li>{ this.getLinks() }</li>
          </ul>    
        </nav>
      );
  }
}

export default NavBar;
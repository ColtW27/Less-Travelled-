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
      
                {/* <Link to={'/FIXTHIS'}>####TBD</Link>
                <Link to={'/profile'}>Profile</Link>

                <Link to={'/FIXTHIS'}>####TBD</Link>
                
              <Link to={'/logout'}>####TBD</Link> */}
               
                
              <h2 className="header-name">WELCOME {currentUser.handle}!</h2>

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
            <li><Link to="/attractions">Attractions</Link></li>
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
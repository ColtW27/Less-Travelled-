// src/components/nav/navbar_container.js
 
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import NavBar from './navbar';

const mapStateToProps = (state) => {
  // debugger
  return ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
  })
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
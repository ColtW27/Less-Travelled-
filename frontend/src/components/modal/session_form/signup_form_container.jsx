import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  user: {
    handle: "",
    email: "",
    password: "",
    password2: ""
  },
  errors: Object.values(state.errors.session),
  formType: "signup",
});


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: closeModal,
    dispatch: (item) => dispatch(item)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

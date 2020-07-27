import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import LoginForm from './login_form';
// import {dispatch} from 'react-redux';

 
const mapStateToProps = (state, ownProps) => ({
  user: {
    email: "",
    password: "",
  },
  errors: Object.values(state.errors.session),
  formType: "login"
}); 

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    dispatch: (item) => dispatch(item),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

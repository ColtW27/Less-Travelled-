import { connect } from 'react-redux';
import React from 'react';
import { signup, login , clearErrors} from '../../../actions/session_actions';
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
      <button onClick={() => dispatch(openModal('login'))} className="grow">
        Login
      </button>
    ),
    Loginuser: (user) => dispatch(login(user)),
    closeModal: closeModal,
    dispatch: (item) => dispatch(item),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

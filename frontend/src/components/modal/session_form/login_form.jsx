import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(field) { //this keeps the state updated for every keystroke
        return (e) => (
            this.setState(
                { [field]: e.currentTarget.value }
            )
        )
    };

    handleSubmit(e) { //calls dispatch with login function w/ the current user state, then closes modal.
        e.preventDefault();
        const user = Object.assign({}, this.state)
       let that = this;
      this.props.processForm(user);
      // if (!this.state.session.errors){

        // this.props.closeModal
      // }
        // this.state.session.errors ? 
        //   this.props.closeModal : let j;
        
      
    }
    showErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit}>
            <h3 className="log-in-label">Welcome Back!</h3>
            <br />
            {/* <div onClick={this.props.closeModal} className="login-close-x">
              ✕
            </div> */}
            <label>
              <input
                type="text"
                onChange={this.handleChange("email")}
                value={this.state.email}
                placeholder="Email"
                className="login-form-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                onChange={this.handleChange("password")}
                value={this.state.password}
                placeholder="Password"
                className="login-form-input"
              />
            </label>
            <br />

            <div className="login-form-errors">{this.showErrors()}</div>
            <br />
            <div className="login-bottom-form-div">
              <button
                className="login-form-main-login-button"
                type="submit"
                value="login"
              >
                Log in
              </button>
              <label className="">
                Don't have an account?
                {this.props.otherForm}
                {/* Link to other switch to signup form */}
              </label>
            </div>
          </form>
        </div>
      );
    }

}


export default withRouter(LoginForm);
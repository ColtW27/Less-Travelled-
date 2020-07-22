import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
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
      this.props.processForm(user).then(res => {
        if (res.type !== "RECEIVE_SESSION_ERRORS") { //checks if there are session errors returned in the promise from processing the login form
      
          this.props.dispatch(this.props.closeModal())//takes both dispatch and closemodal in as props
        }; //signs in a user upon successful signup
        if (res.type === "RECEIVE_USER_SIGN_IN"){
          this.props.Loginuser(user)
        }
      });
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
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit}>
            <h3 className="log-in-label">Join the Less Travelled Community!</h3>
            <br />
            {/* <div onClick={this.props.closeModal} className="login-close-x">
              ✕
            </div> */}
            <div className="signup-form-errors">{this.showErrors()}</div>
            
            <label>
              <input
                type="text"
                onChange={this.handleChange("handle")}
                value={this.state.handle}
                placeholder="Name"
                className="signup-form-input"
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                onChange={this.handleChange("email")}
                value={this.state.email}
                placeholder="Email"
                className="signup-form-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                onChange={this.handleChange("password")}
                value={this.state.password}
                placeholder="Password"
                className="signup-form-input"
              />
            </label>
            <label>
              <input
                type="password"
                onChange={this.handleChange("password2")}
                value={this.state.password2}
                placeholder="Re-enter Password"
                className="signup-form-input"
              />
            </label>
            <br />

            <br />
            <div 
            className="bottom-form-div"
             
            >
              <button
                className="signup-form-main-login-button"
                type="submit"
                value="signup"
              >
                Join
              </button>
              <br/>
              <div className="already-a-member">
                Already a member?
              </div>
              <label for="login form button">
                {this.props.otherForm} 
                {/* Link to other switch to signup form */}
              </label>
            </div>
            
          </form>
        </div>
      );
    }

}


export default withRouter(SignupForm);
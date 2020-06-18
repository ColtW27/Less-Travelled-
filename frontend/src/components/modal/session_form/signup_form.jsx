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
        this.props.processForm(user).then(this.props.closeModal)
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

            <label>
              <input
                type="text"
                onChange={this.handleChange("handle")}
                value={this.state.handle}
                placeholder="Handle"
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

            <div className="signup-form-errors">{this.showErrors()}</div>
            <br />
            <div className="bottom-form-div">
              <button
                className="signup-form-main-login-button"
                type="submit"
                value="signup"
              >
                Join
              </button>
              <br/>

              <label className="">
                Already a member?
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
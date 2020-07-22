import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
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
      const user = Object.assign({}, this.state);
    
      this.props.processForm(user).then(res=>{
        if (res.type !== "RECEIVE_SESSION_ERRORS"){ //checks if there are session errors returned in the promise from processing the login form
          this.props.dispatch(this.props.closeModal())
          // .then(() => that.props.history.push('/attractions'))
          this.props.history.push('/attractions')
          //takes both dispatch and closemodal in as props
        };
      });
    };

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

    demoLogin() {
      const user = { 
          email: "lilly3@lilly.com",
          password: "123456"
      }
      this.props.processForm(user)
      .then(this.props.closeModal())
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

            <div className="login-form-errors">{this.showErrors()}</div>

            <label>
              <input
                type="text"
                onChange={this.handleChange("email")}
                value={this.state.email}
                placeholder="Email"
                className="login-form-input"
              />
            </label>
            <br/>
            <label>
              <input
                type="password"
                onChange={this.handleChange("password")}
                value={this.state.password}
                placeholder="Password"
                className="login-form-input"
              />
            </label>
            <br/>
            <div className="login-bottom-form-div">
              <button
                className="login-form-main-login-button"
                type="submit"
                value="login"
              >
                Log in
              </button>
            </div>
            
          

            <div className="login-bottom-form-div">
              <button
                className="login-form-main-login-button"
                type="submit"
                value="signup"
              >
                Sign up
              </button>
            </div>
            
          
          </form>
          <div className="login-bottom-form-div">
            <button
              className="login-form-main-login-button"
              onClick={this.demoLogin}
              // onClick={this.props.processForm({
              //   user: {
              //     email: "lilly3@lilly.com",
              //     password: "123456"
              //   }
              // })}
              type="submit"
              value="login"
            >
              Demo Log in
              </button>
          </div>
        </div>
      );
    }

}

export default withRouter(LoginForm);
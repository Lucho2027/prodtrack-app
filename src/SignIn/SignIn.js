import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

export default class SignIn extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.history.push("/datasummary");
  };

  render() {
    return (
      <div className="signin__form">
        <header>
          <h3>Login</h3>
        </header>
        <form className="signin-form" onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="user-name">User name</label>
            <input
              placeholder="User Name"
              type="text"
              name="user-name"
              id="user-name"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup">
          <span>
            {" "}
            Don't have an account click <Link to="/signup">Here</Link>
          </span>
        </div>
      </div>
    );
  }
}

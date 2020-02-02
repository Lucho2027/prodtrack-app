import React, { Component } from "react";

import "./SignUp.css";

export default class SignUp extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.history.push("/datasummary");
  };
  render() {
    return (
      <div className="SignUp__form">
        <header>
          <h3>Start tracking your production</h3>
        </header>
        <form class="signup-form" onSubmit={this.onSubmit}>
          <div>
            <label for="first-name">First name</label>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label for="last-name">Last name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label for="username">Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

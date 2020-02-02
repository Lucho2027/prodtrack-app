import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import DataSummary from "../DataSummary/DataSummary";
import DataEntryForm from "../DataEntryForm/DataEntryForm";
import LandingPage from "../LandingPage/LandingPage";
import "./App.css";

export default class Apps extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App__nav">
          <Nav />
        </nav>
        <main className="App__main">
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dataentry" component={DataEntryForm} />
          <Route path="/datasummary" component={DataSummary} />
        </main>
      </div>
    );
  }
}

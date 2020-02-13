import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page">
        <div className="intro">
          <div className="left-intro">
            <h1 className="header-intro">Production Tracker</h1>
          </div>
        </div>
        <div className="right-intro">
          <p className="content-intro">
            {" "}
            Make accessible and track performance of production output.
          </p>
        </div>

        <div className="feature-1">
          <div className="right-feature-1">
            <h1 className="header-feature-1">Document Daily Production</h1>
          </div>
          <div className="left-feature-1">
            <p className="content-feature-1">
              {" "}
              The key to improvement is to consistently document your production
              performance. Keeping track of detractors that prevent optimal
              performance.
            </p>
          </div>
        </div>
        <div className="feature-2">
          <div className="left-feature-2">
            <h1 className="header-feature-2">Record Production Hourly</h1>
          </div>
          <div className="right-feature-2">
            <p className="content-feature-2">
              Go to the Data entry form and start recording your production and
              downtime. This will help management understand where the
              engineering and support resources need to be focused on.
            </p>
          </div>
          <div className="button-to-dataentry">
            <Link className="link" to="/dataentry">
              {" "}
              <button className="todataentry"> Let's Give it a try</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

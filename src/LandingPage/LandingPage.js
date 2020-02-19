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
            The key to continuous improvement is to consistently document your
            production performance. Use ProdTrack to:
            <ul className="features">
              <li>-Document your hourly output.</li>
              <li>
                -Track Downtime to identify root cause for efficiency
                detractors.{" "}
              </li>
              <li>
                -Provide justification for continuous improvement projects.
              </li>
            </ul>
          </p>
        </div>
        <div className="feature-2">
          <div className="left-feature-2">
            <h1 className="header-feature-2">Record Production Hourly</h1>
          </div>
          <div className="right-feature-2">
            <p className="content-feature-2">
              Keep a log of your production rate by documenting your hourly
              output on the "Data Entry" section. Use the "Data Summary" section
              to glance at the department performance on a daily basis.
            </p>
          </div>
          <div className="feature-1">
            <div className="right-feature-1">
              <h1 className="header-feature-1">Document Daily Production</h1>
            </div>
            <div className="left-feature-1">
              <p className="content-feature-1">
                {" "}
                Go to the Data entry form and start recording your production
                and downtime. This will help the organization focus its
                resources to achieve operational excellence.
              </p>
            </div>
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

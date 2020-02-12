import React, { Component } from "react";

import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page">
        <div className="intro">
          <h1>Production Tracker</h1>
          <p> Keep track of performance on your production work centers</p>
        </div>
        <section className="feature-1">
          <h2>Document Daily Production</h2>
          <p>
            {" "}
            Production Tracker assist on keeping track of the performance of a
            production workcenter.
          </p>
        </section>
        <section>
          <h2>Record Production Hourly</h2>
          <p>
            [
            <em>
              placeholder for screenshot of production recording interface
            </em>
            ]
          </p>
          <p>
            The key to improvement is to consistently document your production
            performance and the detractors that prevent the area from achieving
            production output goal.
          </p>
        </section>
        <section>
          <h2>Keep track of your progress</h2>
          <p>
            [<em>placeholder for screenshot of production stats UI</em>]
          </p>
          <p>
            Interactive charts and statistics help the engineering team
            prioritize resources to attack most common detractors and
            continously improve the area and the process.
          </p>
        </section>
      </div>
    );
  }
}

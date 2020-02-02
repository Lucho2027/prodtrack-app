import React, { Component } from "react";

import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="Landing_Page">
        <header role="banner">
          <h1>Production Tracker</h1>
          <h2>
            {" "}
            Keep track of performance and detractors on your production work
            centers
          </h2>
        </header>
        <section>
          <header>
            <h3>Document Daily Production</h3>
          </header>
          <p>
            [<em>placeholder for screenshot production data entry interface</em>
            ]
          </p>
          <p>
            {" "}
            Production Tracker helps you become aware the performance of a
            workcenter versus its goal and allow the user to document what is
            preventing it from achieving the goal.
          </p>
        </section>
        <section>
          <header>
            <h3>Record Production Hourly</h3>
          </header>
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
          <header>
            <h3>Keep track of your progress</h3>
          </header>
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

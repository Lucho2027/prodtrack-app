import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default class DataSummary extends Component {
  render() {
    const item = data[0];
    let i;
    let list = [];
    for (i = 1; i < 9; i++) {
      list.push(<div>{item["goal_" + i]}</div>);
    }

    return (
      <div className="data-summary">
        <h1>Production Tracker</h1>

        <Link to="/dataentry">
          <h4> Make a new Entry</h4>
        </Link>
        <div className="mockup">
          <p>
            {" "}
            February 3rd 2020 Production was 85 % with 45 minutes of downtime
            due to machine malfunction.
          </p>
        </div>
      </div>
    );
  }
}

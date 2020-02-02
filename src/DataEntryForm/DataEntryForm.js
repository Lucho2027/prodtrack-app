import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

import "./DataEntryForm.css";

export default class DataEntryForm extends Component {
  onChange = (e, i) => {
    const item = data[0];
    item["produced_" + i] = e.target.value; //this will be moved to the state
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.history.push("/datasummary");
  };

  render() {
    let i;
    let list = [];
    for (i = 1; i < 9; i++) {
      list.push(
        <div className="form-section">
          <label htmlfor="production-hour"> {[i]} </label>
          <input
            type="number"
            name={"produced_" + i}
            placeholder="999"
            onChange={e => this.onChange(e, i)}
          />{" "}
          <input
            type="number"
            name={"downtime_" + [i]}
            placeholder="10"
            min="0"
            max="60"
          />
        </div>
      );
    }

    return (
      <div className="data-entry__form">
        <header>
          <h1>Production Data Entry</h1>
        </header>
        <section>
          <form id="record-porduction" onSubmit={this.onSubmit}>
            <div className="form-section">
              <label htmlfor="data-title">Production Hourly </label>
            </div>
            <label htmlfor="date">Date</label> <input type="date" name="date" />
            {list}
            <div className="summary-section">
              <p className="production-date-header">
                Summary of parts produced
              </p>
              <label>Total Produced</label>
              <label>{this.onChange}</label>
              <label>Total Downtime</label>
              <input
                type="number"
                name="date-month"
                placeholder="01"
                min="1"
                max="999"
                required=""
              />
            </div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
          <Link to="/datasummary">
            {" "}
            <span> Go back to Summary</span>
          </Link>
        </section>
      </div>
    );
  }
}

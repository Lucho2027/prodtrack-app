import React, { Component } from "react";
import ProdTrackContext from "../ProdtrackContext";
import config from "../config";

import "./DataEntryForm.css";

export default class DataEntryForm extends Component {
  static contextType = ProdTrackContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      data: {
        date: 0,
        department: 0,
        shift: 0,
        goal_1: 263,
        produced_1: 0,
        downtime_1: 0,
        reason_1: "",
        goal_2: 263,
        produced_2: 0,
        downtime_2: 0,
        reason_2: "",
        goal_3: 263,
        produced_3: 0,
        downtime_3: 0,
        reason_3: "",
        goal_4: 263,
        produced_4: 0,
        downtime_4: 0,
        reason_4: "",
        goal_5: 263,
        produced_5: 0,
        downtime_5: 0,
        reason_5: "",
        goal_6: 263,
        produced_6: 0,
        downtime_6: 0,
        reason_6: "",
        goal_7: 263,
        produced_7: 0,
        downtime_7: 0,
        reason_7: "",
        goal_8: 263,
        produced_8: 0,
        downtime_8: 0,
        reason_8: ""
      },
      totalGoal: 0,
      totalProduced: 0,
      totalDowntime: 0,
      eff: 0
    };
  }

  sumData = () => {
    const { data } = this.state;

    let totalGoal = 0;
    let totalProduced = 0;
    let totalDowntime = 0;

    for (let i = 1; i < 9; i++) {
      totalGoal += data["goal_" + i];
      totalProduced += data["produced_" + i];
      totalDowntime += data["downtime_" + i];
    }
    let eff = Math.floor((totalProduced / totalGoal) * 100);
    this.setState({
      totalGoal: totalGoal,
      totalProduced: totalProduced,
      totalDowntime: totalDowntime,
      eff: eff
    });
  };
  onChange = ({ target }) => {
    const name = target.name;
    let data = { ...this.state.data };

    data[name] = parseInt(target.value);
    console.log(this.state.data[name]);
    this.setState({ data }, this.sumData);
  };
  onSubmit = e => {
    e.preventDefault();
    const {
      date,
      department,
      shift,
      goal_1,
      produced_1,
      downtime_1,
      reason_1,
      goal_2,
      produced_2,
      downtime_2,
      reason_2,
      goal_3,
      produced_3,
      downtime_3,
      reason_3,
      goal_4,
      produced_4,
      downtime_4,
      reason_4,
      goal_5,
      produced_5,
      downtime_5,
      reason_5,
      goal_6,
      produced_6,
      downtime_6,
      reason_6,
      goal_7,
      produced_7,
      downtime_7,
      reason_7,
      goal_8,
      produced_8,
      downtime_8,
      reason_8
    } = e.target;

    const data = {
      date: date.value,
      department: department.value,
      shift: parseInt(shift.value),
      goal_1: parseInt(goal_1.value),
      produced_1: parseInt(produced_1.value),
      downtime_1: parseInt(downtime_1.value),
      reason_1: reason_1.value,
      goal_2: parseInt(goal_2.value),
      produced_2: parseInt(produced_2.value),
      downtime_2: parseInt(downtime_2.value),
      reason_2: reason_2.value,
      goal_3: parseInt(goal_3.value),
      produced_3: parseInt(produced_3.value),
      downtime_3: parseInt(downtime_3.value),
      reason_3: reason_3.value,
      goal_4: parseInt(goal_4.value),
      produced_4: parseInt(produced_4.value),
      downtime_4: parseInt(downtime_4.value),
      reason_4: reason_4.value,
      goal_5: parseInt(goal_5.value),
      produced_5: parseInt(produced_5.value),
      downtime_5: parseInt(downtime_5.value),
      reason_5: reason_5.value,
      goal_6: parseInt(goal_6.value),
      produced_6: parseInt(produced_6.value),
      downtime_6: parseInt(downtime_6.value),
      reason_6: reason_6.value,
      goal_7: parseInt(goal_7.value),
      produced_7: parseInt(produced_7.value),
      downtime_7: parseInt(downtime_7.value),
      reason_7: reason_7.value,
      goal_8: parseInt(goal_8.value),
      produced_8: parseInt(produced_8.value),
      downtime_8: parseInt(downtime_8.value),
      reason_8: reason_8.value
    };

    this.setState({ error: null });
    fetch(config.API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(data => {
        this.context.addData(data);
        this.props.history.push("/datasummary");
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };

  handleClickCancel = () => {
    this.props.history.push("/datasummary");
  };

  render() {
    let i;
    let list = [];
    for (i = 1; i < 9; i++) {
      list.push(
        <div key={i} className="form-section-hourly">
          <label className="hour-label" key={i} htmlFor="production-hour">
            {[i]}
          </label>
          <input
            key="goal-hour"
            className="input-goal"
            type="number"
            name={"goal_" + i}
            value={263}
            readOnly
          />
          <input
            key="produced-hour"
            className="input-produced"
            type="number"
            name={"produced_" + i}
            placeholder="999"
            defaultValue={0}
            onChange={e => this.onChange(e)}
          />{" "}
          <input
            key="downtime-hour"
            className="input-downtime"
            type="number"
            name={"downtime_" + [i]}
            placeholder="10"
            defaultValue={0}
            min="0"
            max="60"
            onChange={e => this.onChange(e)}
          />
          <input
            key="reason-hour"
            className="input-reason"
            type="text"
            name={"reason_" + [i]}
            placeholder="Reason"
            onChange={e => this.onChange(e)}
          />
        </div>
      );
    }

    return (
      <div className="data-entry-form">
        <div className="data-entry-header">
          <h1 className="data-entry-header-text">
            {" "}
            Track your hourly production
          </h1>
        </div>
        <form className="record-porduction" onSubmit={this.onSubmit}>
          <div className="form-section">
            <label className="form-input-date-label" htmlFor="date">
              Date
            </label>
            <input
              className="form-input-date"
              required
              type="date"
              name="date"
            />
            <label className="form-input-department-label" htmlFor="department">
              Department
            </label>
            <input
              className="form-input-department"
              required
              type="number"
              name="department"
            />
            <label className="form-input-shift-label" htmlFor="shift">
              Shift
            </label>
            <input
              className="form-input-shift"
              required
              type="number"
              name="shift"
              min={1}
              max={3}
            />
          </div>

          <label htmlFor="data-title">Hourly Recording </label>
          <div className="table-headers">
            <h3 className="goal-header">Goal (units)</h3>
            <h3 className="produced-header">Produced (units)</h3>
            <h3 className="downtime-header">Downtime (minutes)</h3>
            <h3 className="reason-header">Reason</h3>
          </div>
          <div className="input-table">{list}</div>
          <div className="summary-section">
            <h4 className="summary-header">Summary</h4>
            <label className="produced-sum">
              Total Produced {this.state.totalProduced} units
            </label>

            <label className="downtime-sum">
              Total Downtime {this.state.totalDowntime} minutes
            </label>
            <label className="goal-sum">
              Total Goal {this.state.totalGoal} minutes
            </label>

            <label className="eff-calc">Efficiency {this.state.eff} %</label>
          </div>
          <div className="summary-button">
            <button className="submit-button" type="submit">
              Submit
            </button>
            <button
              className="cancel-button"
              type="cancel-button"
              onClick={this.handleClickCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProdtrackContext from "../ProdtrackContext";
import DataItem from "../DataItem/DataItem";

import "./DataSummary.css";
export default class DataSummary extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired
      })
    )
  };
  static contextType = ProdtrackContext;
  handleClick = () => {
    this.props.history.push("/dataentry");
  };

  render() {
    const { data } = this.context;

    return (
      <div className="data-summary">
        <h1 className="header-intro">Data Entry Summary</h1>
        <div className="data-item">
          {data.map(item => (
            <DataItem key={item.id} {...item} item={item} />
          ))}
        </div>
        <div className="ending">
          <button className="todataentry-summ" onClick={this.handleClick}>
            Make a new Entry
          </button>
        </div>
      </div>
    );
  }
}

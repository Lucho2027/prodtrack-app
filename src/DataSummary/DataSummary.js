import React, { Component } from "react"
import { Link } from "react-router-dom"
import DataItem from "../DataItem/DataItem"
import data from "../data"

import "./DataSummary.css"
export default class DataSummary extends Component {
	render() {
		return (
			<div className="data-summary">
				<h1>Data Entry summary</h1>
				<div className="data-item">
					{data.map(item => (
						<DataItem item={item} />
					))}
				</div>
				<Link to="/dataentry">
					<h4> Make a new Entry</h4>
				</Link>
			</div>
		)
	}
}

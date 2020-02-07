import React, { Component } from "react"
import { Link } from "react-router-dom"
import DataItem from "../DataItem/DataItem"
import data from "../data"

export default class DataSummary extends Component {
	render() {
		return (
			<div className="data-summary">
				<h1>Production Tracker</h1>

				<Link to="/dataentry">
					<h4> Make a new Entry</h4>
				</Link>
				<div className="mockup">
					{data.map(item => (
						<DataItem item={item} />
					))}
				</div>
			</div>
		)
	}
}

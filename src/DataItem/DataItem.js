import React, { Component } from "react"
import "./DataItem.css"
export default class DataItem extends Component {
	render() {
		const item = this.props.item
		let i
		let totalGoal = 0
		let totalProduced = 0
		let totalDowntime = 0

		for (i = 1; i < 9; i++) {
			totalGoal += item["goal_" + i]
			totalProduced += item["produced_" + i]
			totalDowntime += item["downtime_" + i]
		}
		let eff = (totalProduced / totalGoal) * 100
		return (
			<div className="daily-summary">
				<p className="date">Date</p>
				<p className="department">Department 3620</p>
				<p className="goal">Goal {totalGoal} </p>
				<p className="produced"> Produced {totalProduced}</p>
				<p className="downtime"> Downtime {totalDowntime}</p>
				<p className="efficiency">Efficiency {eff}</p>
			</div>
		)
	}
}

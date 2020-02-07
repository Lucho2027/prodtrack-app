import React, { Component } from "react"

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
			<div>
				<div>Goal {totalGoal} </div>
				<div> Produced {totalProduced}</div>
				<div> Downtime {totalDowntime}</div>
				<div>Efficiency {eff}</div>
			</div>
		)
	}
}

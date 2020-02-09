import React, { Component } from "react"
import { Link } from "react-router-dom"
// import Proptypes from "prop-types"
import ProdTrackContext from "../ProdtrackContext"
import data from "../data.json"
import config from "../config"

import "./DataEntryForm.css"

export default class DataEntryForm extends Component {
	// static proptypes = {
	// 	history: Proptypes.shape({
	// 		push: Proptypes.func
	// 	}).isRequired
	// }

	static contextType = ProdTrackContext

	state = {
		error: null
	}

	onChange = (e, i) => {
		const item = data[0]
		item["produced_" + i] = e.target.value //this will be moved to the state
	}
	onSubmit = e => {
		e.preventDefault()
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
		} = e.target

		const data = {
			date: date.value,
			department: department.value,
			shift: shift.value,
			goal_1: goal_1.value,
			produced_1: produced_1.value,
			downtime_1: downtime_1.value,
			reason_1: reason_1.value,
			goal_2: goal_2.value,
			produced_2: produced_2.value,
			downtime_2: downtime_2.value,
			reason_2: reason_2.value,
			goal_3: goal_3.value,
			produced_3: produced_3.value,
			downtime_3: downtime_3.value,
			reason_3: reason_3.value,
			goal_4: goal_4.value,
			produced_4: produced_4.value,
			downtime_4: downtime_4.value,
			reason_4: reason_4.value,
			goal_5: goal_5.value,
			produced_5: produced_5.value,
			downtime_5: downtime_5.value,
			reason_5: reason_5.value,
			goal_6: goal_6.value,
			produced_6: produced_6.value,
			downtime_6: downtime_6.value,
			reason_6: reason_6.value,
			goal_7: goal_7.value,
			produced_7: produced_7.value,
			downtime_7: downtime_7.value,
			reason_7: reason_7.value,
			goal_8: goal_8.value,
			produced_8: produced_8.value,
			downtime_8: downtime_8.value,
			reason_8: reason_8.value
		}
		this.setState({ error: null })
		fetch(config.API_ENDPOINT, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => {
				if (!res.ok) {
					return res.json().then(error => Promise.reject(error))
				}
				return res.json()
			})
			.then(data => {
				date.value = ""
				department.value = ""
				shift.value = ""
				goal_1.value = ""
				produced_1.value = ""
				downtime_1.value = ""
				reason_1.value = ""
				goal_2.value = ""
				produced_2.value = ""
				downtime_2.value = ""
				reason_2.value = ""
				goal_3.value = ""
				produced_3.value = ""
				downtime_3.value = ""
				reason_3.value = ""
				goal_4.value = ""
				produced_4.value = ""
				downtime_4.value = ""
				reason_4.value = ""
				goal_5.value = ""
				produced_5.value = ""
				downtime_5.value = ""
				reason_5.value = ""
				goal_6.value = ""
				produced_6.value = ""
				downtime_6.value = ""
				reason_6.value = ""
				goal_7.value = ""
				produced_7.value = ""
				downtime_7.value = ""
				reason_7.value = ""
				goal_8.value = ""
				produced_8.value = ""
				downtime_8.value = ""
				reason_8.value = ""
				this.context.addData(data)
				this.props.history.push("/datasummary")
			})
			.catch(error => {
				console.log(error)
				this.setState({ error })
			})
	}

	handleClickCancel = () => {
		this.props.history.push("/datasummary")
	}

	render() {
		let i
		let list = []
		for (i = 1; i < 9; i++) {
			list.push(
				<div className="form-section">
					<label htmlfor="production-hour"> {[i]} </label>
					<input
						className="goal"
						type="number"
						name={"goal_" + i}
						value="263"
					/>{" "}
					<input
						className="produced"
						type="number"
						name={"produced_" + i}
						placeholder="999"
						onChange={e => this.onChange(e, i)}
					/>{" "}
					<input
						className="downtime"
						type="number"
						name={"downtime_" + [i]}
						placeholder="10"
						min="0"
						max="60"
					/>
				</div>
			)
		}

		return (
			<div className="data-entry__form">
				<header>
					<h1> Track your hourly production</h1>
				</header>
				<section>
					<form id="record-porduction" onSubmit={this.onSubmit}>
						<div className="form-section">
							<label htmlfor="data-title">Hourly Recording </label>
						</div>
						<label htmlfor="date">Date</label> <input type="date" name="date" />
						<div className="table-headers">
							<h3>Goal (units)</h3>
							<h3>Produced (units)</h3>
							<h3>Downtime (minutes)</h3>
						</div>
						<div className="input-table">{list}</div>
						<div className="summary-section">
							<h4 className="production-date-header">
								Summary of parts produced
							</h4>
							<label className="produced_sum">Total Produced</label>
							<input type="number" name="produced" />
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
						<button type="cancel" onClick={this.handleClickCancel}>
							Cancel
						</button>
					</form>
					<Link to="/datasummary">
						{" "}
						<span> Go back to Summary</span>
					</Link>
				</section>
			</div>
		)
	}
}

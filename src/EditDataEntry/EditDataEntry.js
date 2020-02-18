import React, { Component } from "react"
import ProdtrackContext from "../ProdtrackContext"
import moment from "moment"
import config from "../config"
import PropTypes from "prop-types"
import DataEditSummary from "../DataEditSummary/DataEditSummary"
import "./EditDataEntry.css"

class EditDataEntry extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.object
		}),
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		data: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired
			})
		)
	}

	static contextType = ProdtrackContext

	state = {
		error: null,
		id: "",
		department: "",
		date: "",
		shift: 0,
		goal_1: 0,
		produced_1: 0,
		downtime_1: 0,
		reason_1: "",
		goal_2: 0,
		produced_2: 0,
		downtime_2: 0,
		reason_2: "",
		goal_3: 0,
		produced_3: 0,
		downtime_3: 0,
		reason_3: "",
		goal_4: 0,
		produced_4: 0,
		downtime_4: 0,
		reason_4: "",
		goal_5: 0,
		produced_5: 0,
		downtime_5: 0,
		reason_5: "",
		goal_6: 0,
		produced_6: 0,
		downtime_6: 0,
		reason_6: "",
		goal_7: 0,
		produced_7: 0,
		downtime_7: 0,
		reason_7: "",
		goal_8: 0,
		produced_8: 0,
		downtime_8: 0,
		reason_8: 0
	}
	componentDidMount() {
		const itemId = this.props.match.params.id
		fetch(config.API_ENDPOINT + `/${itemId}`, {
			method: "GET",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => {
				if (!res.ok) return res.json().then(error => Promise.reject(error))
				return res.json()
			})
			.then(responseData => {
				this.setState({
					id: responseData.id,
					department: responseData.department,
					date: responseData.date,
					shift: parseInt(responseData.shift),
					goal_1: responseData.goal_1,
					produced_1: responseData.produced_1,
					downtime_1: responseData.downtime_1,
					reason_1: responseData.reason_1,
					goal_2: responseData.goal_2,
					produced_2: responseData.produced_2,
					downtime_2: responseData.downtime_2,
					reason_2: responseData.reason_2,
					goal_3: responseData.goal_3,
					produced_3: responseData.produced_3,
					downtime_3: responseData.downtime_3,
					reason_3: responseData.reason_3,
					goal_4: responseData.goal_4,
					produced_4: responseData.produced_4,
					downtime_4: responseData.downtime_4,
					reason_4: responseData.reason_4,
					goal_5: responseData.goal_5,
					produced_5: responseData.produced_5,
					downtime_5: responseData.downtime_5,
					reason_5: responseData.reason_5,
					goal_6: responseData.goal_6,
					produced_6: responseData.produced_6,
					downtime_6: responseData.downtime_6,
					reason_6: responseData.reason_6,
					goal_7: responseData.goal_7,
					produced_7: responseData.produced_7,
					downtime_7: responseData.downtime_7,
					reason_7: responseData.reason_7,
					goal_8: responseData.goal_8,
					produced_8: responseData.produced_8,
					downtime_8: responseData.downtime_8,
					reason_8: responseData.reason_8
				})
			})
			.catch(error => {
				console.error(error)
				this.setState({ error })
			})
	}

	handleSubmit = event => {
		event.preventDefault()
		const form = event.target
		const data = this.state

		this.setState({ error: null })
		fetch(config.API_ENDPOINT + `/${data.id}`, {
			method: "PATCH",
			body: JSON.stringify(data),
			headers: {
				"content-type": "application/json"
			}
		})
			.then(() => {
				form.reset()
				this.context.updateData(data)
				this.props.history.push("/datasummary")
			})
			.catch(error => {
				this.setState({ error })
			})
	}

	handleClickCancel = () => {
		this.props.history.push("/datasummary")
	}

	onChange = (key, e) => {
		this.setState({ [key]: e.currentTarget.value })
	}
	render() {
		const { error, item } = this.state

		let i
		let list = []

		for (i = 1; i < 9; i++) {
			list.push(
				<div key={i} className="form-section-hourly">
					<label className="hour-label" key={i} htmlFor="production-hour">
						{" "}
						{[i]}{" "}
					</label>
					<input
						key={"goal_" + i}
						className="input-goal"
						type="number"
						name={"goal_" + i}
						value={this.state["goal_" + i]}
						onChange={this.onChange.bind(this, "goal_" + i)}
					/>
					<input
						key="produced-hour"
						className="input-produced"
						type="number"
						name={"produced_" + i}
						placeholder="999"
						value={this.state["produced_" + i]}
						onChange={this.onChange.bind(this, "produced_" + i)}
					/>{" "}
					<input
						key="downtime-hour"
						className="input-downtime"
						type="number"
						name={"downtime_" + [i]}
						value={this.state["downtime_" + i]}
						onChange={this.onChange.bind(this, "downtime_" + i)}
						placeholder="10"
						min="0"
						max="60"
					/>
					<input
						key="reason-hour"
						className="input-reason"
						type="text"
						name={"reason_" + [i]}
						placeholder="Reason"
					/>
				</div>
			)
		}

		return (
			<div className="data-entry-form">
				<div className="data-entry-header">
					<h1 className="data-entry-header-text">
						{" "}
						Track your hourly production
					</h1>
				</div>
				<form id="record-porduction" onSubmit={this.handleSubmit}>
					<div className="form-section">
						<label className="form-input-date-label" htmlFor="date">
							Date: {moment(this.state.date).format("MM/DD/YYYY")}
						</label>

						<label className="form-input-department-label" htmlFor="department">
							Department
						</label>
						<input
							className="form-input-department"
							required
							type="number"
							name="department"
							value={this.state["department"]}
							onChange={this.onChange.bind(this, "department")}
						/>
						<label className="form-input-shift-label" htmlFor="shift">
							Shift
						</label>
						<input
							className="form-input-shift"
							required
							type="number"
							value={this.state["shift"]}
							onChange={this.onChange.bind(this, "shift")}
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
		)
	}
}

export default EditDataEntry

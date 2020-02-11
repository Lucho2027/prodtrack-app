import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import ProdtrackContext from "../ProdtrackContext"
import config from "../config"
import "./DataItem.css"

function deleteDataRequest(id, cb) {
	fetch(config.API_ENDPOINT + `/${id}`, {
		method: "DELETE",
		headers: {
			"content-type": "application/json"
		}
	})
		.then(res => {
			if (!res.ok) {
				return res.json().then(error => Promise.reject(error))
			}
		})
		.then(data => {
			cb(id)
		})
		.catch(error => {
			console.error(error)
		})
}

export default function DataItem(props) {
	return (
		<ProdtrackContext.Consumer>
			{context => {
				const item = props.item
				let i
				let totalGoal = 0
				let totalProduced = 0
				let totalDowntime = 0

				for (i = 1; i < 9; i++) {
					totalGoal += item["goal_" + i]
					totalProduced += item["produced_" + i]
					totalDowntime += item["downtime_" + i]
				}
				let eff = Math.floor((totalProduced / totalGoal) * 100)

				return (
					<div className="daily-summary">
						<p className="date">Date: {item.date}</p>
						<p className="department">Department {item.department}</p>
						<p className="goal">Goal {totalGoal} </p>
						<p className="produced"> Produced {totalProduced}</p>
						<p className="downtime"> Downtime {totalDowntime}</p>
						<p className="efficiency">Efficiency {eff} %</p>
						<Link to={`/editdataentry/${item.id}`}>Edit</Link>
						<button
							className="delete-data-button"
							onClick={() => deleteDataRequest(props.id, context.deleteData)}
						>
							<Link to={"/"}>Delete</Link>
						</button>
					</div>
				)
			}}
		</ProdtrackContext.Consumer>
	)
}
//  class DataItem extends Component {
// 	render() {

// 	}

import React, { Component } from "react"
import PropTypes from "prop-types"
import ProdtrackContext from "../ProdtrackContext"
import { Link } from "react-router-dom"
import DataItem from "../DataItem/DataItem"
// import data from "../data"
import "./DataSummary.css"
export default class DataSummary extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired
			})
		)
	}
	static contextType = ProdtrackContext

	render() {
		const { data } = this.context

		return (
			<div className="data-summary">
				<h1>Data Entry summary</h1>
				<div className="data-item">
					{data.map(item => (
						<DataItem key={item.id} {...item} item={item} />
					))}
				</div>
				<Link to="/dataentry">
					<h4> Make a new Entry</h4>
				</Link>
			</div>
		)
	}
}

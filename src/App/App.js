import React, { Component } from "react"
import { Route } from "react-router-dom"
import Nav from "../Nav/Nav.js"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import DataSummary from "../DataSummary/DataSummary"
import DataEntryForm from "../DataEntryForm/DataEntryForm"
import LandingPage from "../LandingPage/LandingPage"
import ProdtrackContext from "../ProdtrackContext"
import "./App.css"
import ProdTrackErrorBoundary from "../ProdTrackErrorBoundary"

export default class Apps extends Component {
	state = {
		data: []
	}

	addData = dataentry => {
		this.setState({
			data: [...this.state.data, dataentry]
		})
	}

	deleteData = dataId => {
		const newData = this.state.data.filter(d => d.id !== dataId)
		this.setState({
			data: newData
		})
	}
	setData = data => {
		this.setState({
			data: data
		})
	}

	updateData = updatedData => {
		this.setState({
			data: this.state.data.map(d =>
				d.id !== updatedData.id ? d : updatedData
			)
		})
	}

	render() {
		const contextValue = {
			data: this.state.data,
			addData: this.addData,
			deleteData: this.deleteData,
			setData: this.setData,
			updateData: this.updateData
		}

		return (
			<div className="App">
				<nav className="App__nav">
					<Nav />
				</nav>
				<ProdtrackContext.Provider value={contextValue}>
					<main className="App__main">
						<ProdTrackErrorBoundary>
							<Route exact path="/" component={LandingPage} />
							<Route path="/signin" component={SignIn} />
							<Route path="/signup" component={SignUp} />
							<Route path="/dataentry" component={DataEntryForm} />
							<Route path="/datasummary" component={DataSummary} />
						</ProdTrackErrorBoundary>
					</main>
				</ProdtrackContext.Provider>
			</div>
		)
	}
}

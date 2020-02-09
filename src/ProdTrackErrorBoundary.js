import React, { Component } from "react"

export default class ProdTrackErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
	}
	componentDidMount() {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hassError) {
			return (
				<h2>This part of the app went on vacation! It will be back soon! </h2>
			)
		}

		return this.props.children
	}
}

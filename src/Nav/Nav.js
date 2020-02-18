import React, { Component } from "react"
import { Link } from "react-router-dom"
import { HamburgerButton } from "react-hamburger-button"

import "./Nav.css"

export default class Nav extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isNavOpen: false
		}
	}

	handleClick() {
		this.setState({
			open: !this.state.open,
			isNavOpen: !this.state.isNavOpen
		})
	}

	render() {
		const { isNavOpen } = this.state

		return (
			<div className="container">
				<nav className="aliniense">
					<Link to="/">
						<img
							className="logo"
							src="https://i.imgur.com/LsZcgdz.png"
							alt="ProdTrack Logo"
						/>
					</Link>

					<h5 className="app-name">ProdTrack</h5>

					<HamburgerButton
						className="menu-button"
						open={this.state.open}
						onClick={this.handleClick.bind(this)}
						strokeWidth={2}
						color="#F2A516"
						animationDuration={0.5}
					/>
				</nav>

				<ul className={`menu-items ${isNavOpen ? "show" : "hide"}  `}>
					<li
						className="menu-list"
						key="menu-list-data-home"
						onClick={this.handleClick.bind(this)}
					>
						<Link className="menu-link" to="/">
							Home
						</Link>
					</li>
					<li
						className="menu-list"
						key="menu-list-data-entry"
						onClick={this.handleClick.bind(this)}
					>
						<Link className="menu-link" to="/dataentry">
							Data Entry
						</Link>
					</li>
					<li
						className="menu-list"
						key="menu-list-data-summary"
						onClick={this.handleClick.bind(this)}
					>
						<Link className="menu-link" to="/datasummary">
							Data Summary
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}

import React, { Component } from "react"
import { Link } from "react-router-dom"
import { HamburgerButton } from "react-hamburger-button"

import "./Nav.css"

export default class Nav extends Component {
	constructor(props) {
		super(props)
		this.myElement = null
		this.myTween = null
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
				{/*Mobile menu */}

				<nav className="nav">
					<div className="name-logo">
						<img
							className="logo"
							src="https://i.imgur.com/LsZcgdz.png"
							alt="ProdTrack Logo"
						/>
						<h5 className="app-name">ProdTrack</h5>
					</div>
					<div className="menu-button">
						<HamburgerButton
							open={this.state.open}
							onClick={this.handleClick.bind(this)}
							width={25}
							height={20}
							strokeWidth={2}
							color="#F2A516"
							animationDuration={0.5}
						/>
					</div>
					<ul className={`menu-items ${isNavOpen ? "show" : "hide"}  `}>
						<li className="menu-list" key="menu-list-data-home">
							<Link className="menu-link" to="/">
								Home
							</Link>
						</li>
						<li className="menu-list" key="menu-list-data-entry">
							<Link className="menu-link" to="/dataentry">
								Data Entry
							</Link>
						</li>
						<li className="menu-list" key="menu-list-data-summary">
							<Link className="menu-link" to="/datasummary">
								Data Sumary
							</Link>
						</li>
						<li className="menu-list" key="menu-list-data-dashboard">
							<Link className="menu-link" to="/dashboard">
								Dashboard
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

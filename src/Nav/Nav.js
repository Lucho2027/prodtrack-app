import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav(props) {
	return (
		<div className="Nav">
			<nav role="navigation">
				<ul className="nav-bar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/dataentry">Data Entry</Link>
					</li>
					<li>
						<Link to="/datasummary">Data Sumary</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

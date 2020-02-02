import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="Nav">
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/signin">Sign-In</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

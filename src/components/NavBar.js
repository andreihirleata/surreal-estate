import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFortAwesomeAlt } from "@fortawesome/free-brands-svg-icons";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <FontAwesomeIcon
        icon={faFortAwesomeAlt}
        style={{ fontSize: "35px", color: "white" }}
      />
      <div className="link-wrapper">
        <ul className="navbar-links">
          <Link to="/">
            <li className="navbar-links-item">View Properties</li>
          </Link>

          <Link to="/add-property">
            <li className="navbar-links-item">Add Property</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

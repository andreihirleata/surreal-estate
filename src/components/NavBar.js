import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        className="surreal-logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="logo"
      ></img>
      <ul className="navbar-links">
        <Link to="/">
          <li className="navbar-links-item">View Properties</li>
        </Link>

        <Link to="/add-property">
          <li className="navbar-links-item">Add a Property</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;

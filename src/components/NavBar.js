import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFortAwesomeAlt } from "@fortawesome/free-brands-svg-icons";

import "../styles/NavBar.css";

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <FontAwesomeIcon
          className="fort-awesome-icon"
          icon={faFortAwesomeAlt}
          style={{ fontSize: "35px", color: "white" }}
        />
      </Link>
      <div className="link-wrapper">
        <ul className="navbar-links">
          <Link to="/">
            <li className="navbar-links-item">View Properties</li>
          </Link>

          <Link to="/add-property">
            <li className="navbar-links-item">Add Property</li>
          </Link>

          {userId ? (
            <li className="navbar-links-item2" onClick={onLogout}>
              Sign Out
            </li>
          ) : (
            <FacebookLogin
              autoLoad={true}
              fields="name,email,picture"
              appId="5105370246146560"
              callback={onLogin}
              onClick={onLogin}
              render={(renderProps) => (
                <li
                  className="navbar-links-item2"
                  onClick={renderProps.onClick}
                >
                  Sign In
                </li>
              )}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

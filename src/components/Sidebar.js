import React, { useState } from "react";
import qs from "qs";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
    console.log(history);
  };

  return (
    <div className="sidebar">
      <div className="city-filter-wrapper">
        <ul className="city-filter">
          <li className="city-selector">City: </li>
          <Link to="/">
            <li className="sidebar-item">All</li>
          </Link>
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            <li className="sidebar-item">Manchester</li>{" "}
          </Link>
          <Link to={buildQueryString("query", { city: "Leeds" })}>
            <li className="sidebar-item">Leeds</li>
          </Link>
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            <li className="sidebar-item">Sheffield</li>
          </Link>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            <li className="sidebar-item">Liverpool</li>
          </Link>
        </ul>
      </div>
      <div className="price-filter-wrapper">
        <ul className="price-filter">
          <li className="price-selector">Price: </li>
          <Link to={buildQueryString("sort", { price: 1 })}>
            <li className="sidebar-item">Ascending</li>
          </Link>
          <Link to={buildQueryString("sort", { price: -1 })}>
            <li className="sidebar-item">Descending</li>
          </Link>
        </ul>
      </div>
      <div className="form-wrapper">
        <form
          className="search-form"
          onChange={(e) => handleInputChange(e)}
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" value="submit" className="search-btn">
            Search
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              style={{ marginLeft: "4px" }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;

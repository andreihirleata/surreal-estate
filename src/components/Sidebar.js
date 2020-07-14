import React, { useState } from "react";
import qs from "qs";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [query, setQuery] = useState("");

  const history = useHistory();
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
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
  };

  return (
    <div className="sidebar">
      <div className="city-filter-wrapper">
        <ul className="city-filter">
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
          <Link to={buildQueryString("sort", { price: 1 })}>
            <li className="ascending-filter">Ascending</li>
          </Link>
          <Link to={buildQueryString("sort", { price: -1 })}>
            <li className="descending-filter">Descending</li>
          </Link>
        </ul>
      </div>
      <div className="form-wrapper">
        <form
          onChange={(e) => handleInputChange(e)}
          onSubmit={(e) => handleSearch(e)}
        >
          <label htmlFor="query">Search: </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" value="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;

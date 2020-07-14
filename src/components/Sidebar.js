import React from "react";
import qs from "qs";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;

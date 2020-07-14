import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import axios from "axios";
import "../styles/Properties.css";
import Sidebar from "./Sidebar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then((res) => setProperties(res.data))
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="properties">
      <Sidebar className="sidebar-wrapper" />
      <ul className="property-grid">
        {properties.map((property) => (
          <li className="property-card" key={property._id}>
            <PropertyCard {...property} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Properties;

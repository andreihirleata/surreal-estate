import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import axios from "axios";
import "../styles/Properties.css";
import Sidebar from "./Sidebar";

const Properties = ({ userId }) => {
  const [properties, setProperties] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then((res) => setProperties(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userId,
    });
  };

  return (
    <div className="properties">
      <Sidebar className="sidebar-wrapper" />
      <ul className="property-grid">
        {properties.map((property) => (
          <li className="property-card" key={property._id}>
            <PropertyCard
              {...property}
              userId={userId}
              onSaveProperty={handleSaveProperty}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Properties;

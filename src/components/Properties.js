import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import axios from "axios";
import "../styles/Properties.css";
import Sidebar from "./Sidebar";

const Properties = ({ userId }) => {
  const [properties, setProperties] = useState(false);
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(
        `https://glacial-mesa-67123.herokuapp.com/api/v1/PropertyListing${search}`
      )
      .then((res) => setProperties(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post("https://glacial-mesa-67123.herokuapp.com/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userId,
    });
  };

  return (
    <div className="properties">
      <Sidebar className="sidebar-wrapper" />
     {(properties) ? ( <ul className="property-grid">
        {  properties.map((property) => (
          <li className="property-card" key={property._id}>
            <PropertyCard
              {...property}
              userId={userId}
              onSaveProperty={handleSaveProperty}
            />
          </li>
        ))}
      </ul>)
      : (<p style={{fontSize : "32px", textAlign: "center"}}>Loading...</p>)
        }
    </div>
  );
};

export default Properties;

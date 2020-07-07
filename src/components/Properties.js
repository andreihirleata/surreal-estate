import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/`)
      .then((res) => setProperties(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          title={property.title}
          type={property.type}
          bathrooms={property.bathrooms}
          bedrooms={property.bedrooms}
          price={property.price}
          city={property.city}
          email={property.email}
        />
      ))}
    </>
  );
};

export default Properties;

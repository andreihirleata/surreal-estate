import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="icon">
        <FontAwesomeIcon className="homeIcon" icon={faHome} />
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardType">{type}</div>
      <div className="cardBathrooms">{bathrooms}</div>
      <div className="cardBedrooms">{bedrooms}</div>
      <div className="cardPrice">{price}</div>
      <div className="cardCity">{city}</div>
      <div className="cardEmail">{email}</div>
    </div>
  );
};

export default PropertyCard;

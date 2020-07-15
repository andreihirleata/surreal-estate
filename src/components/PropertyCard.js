import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faBed,
  faBath,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/PropertyCard.css";

const PropertyCard = ({
  __id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userId,
  onSaveProperty,
}) => {
  return (
    <div className="property-card">
      <div>
        <div className="icon">
          <FontAwesomeIcon
            className="homeIcon"
            icon={faHome}
            style={{ width: "100%", height: "90px", color: "#14213d" }}
          />
        </div>
        <div className="cardTitle">{title}</div>
        <div className="cardType">
          Type: <span className="property-value">{type}</span>
        </div>
        <div className="cardBedrooms">
          <FontAwesomeIcon className="bedIcon" icon={faBed} />{" "}
          <span className="property-value">{bedrooms}</span>
        </div>
        <div className="cardBathrooms">
          <FontAwesomeIcon className="bathIcon" icon={faBath} />
          <span className="property-value">{bathrooms}</span>
        </div>
        <div className="cardPrice">{price}£</div>
        <div className="cardCity">{city}</div>
      </div>
      <div className="cardEmail">
        <p>
          <FontAwesomeIcon className="mailIcon" icon={faEnvelope} />
          <a href={`mailto:${email}`}>Email</a>
        </p>
      </div>
      {userId && (
        <div className="cardSave">
          <button className="save-btn" onClick={() => onSaveProperty(__id)}>
            <FontAwesomeIcon icon={faStar} /> Save
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;

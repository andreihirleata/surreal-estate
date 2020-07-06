import React, { useState } from "react";
import "../styles/AddProperty.css";
import Properties from "./Properties";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
      type: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
    console.log(fields);
  };

  return (
    <div className="add-property" data-testid="add-property">
      <form onSubmit={(e) => handleAddProperty(e)}>
        <div className="form-entry">
          {" "}
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={(e) => handleFieldChange(e)}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={(e) => handleFieldChange(e)}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>
        <div className="form-entry">
          <label htmlFor="bedrooms">Bedrooms:</label>
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>
        <div className="form-entry">
          <label htmlFor="bathrooms">Bathrooms:</label>
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>
        <div className="form-entry">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>
        <div className="form-entry">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={(e) => handleFieldChange(e)}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </div>
        <div className="form-entry">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>
        <div className="form-entry">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;

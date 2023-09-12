import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

const Tab2 = () => {
  const [fields, setFields] = useState([
    {
      id: 1,
      placeholder: "Car Make",
      required: true,
      inputType: "select", // New property to determine input type
      options: ["Option 1", "Option 2", "Option 3"], // Dropdown options
    },
    {
      id: 2,
      placeholder: "Car Model",
      required: true,
      inputType: "select", // New property to determine input type
      options: ["Option A", "Option B", "Option C"], // Dropdown options
    },
    {
      id: 3,
      placeholder: "Car Year",
      required: true,
      inputType: "select", // New property to determine input type
      options: ["2023", "2022", "2021", "2020"], // Dropdown options
    },
    {
      id: 4,
      placeholder: "Car Market Value",
      required: true,
      disabled: true,
    },
  ]);

  const addField = () => {
    const newId = fields.length + 1;
    const newFields = [
      {
        id: newId,
        placeholder: "Car Make",
        required: true,
        inputType: "select",
        options: ["Option 1", "Option 2", "Option 3"],
      },
      {
        id: newId + 1,
        placeholder: "Car Model",
        required: true,
        inputType: "select",
        options: ["Option A", "Option B", "Option C"],
      },
      {
        id: newId + 2,
        placeholder: "Car Year",
        required: true,
        inputType: "select",
        options: ["2023", "2022", "2021", "2020"],
      },
      {
        id: newId + 3,
        placeholder: "Car Market Value",
        required: true,
        disabled: true,
      },
    ];
    setFields([...fields, ...newFields]);
  };

  const removeField = () => {
    if (fields.length > 4) {
      const updatedFields = [...fields];
      updatedFields.splice(updatedFields.length - 4, 4); // Remove last 4 fields
      setFields(updatedFields);
    }
  };

  // Conditionally render the "Remove Extra Cars" button
  const showRemoveButton = fields.length > 4;

  return (
    <div id="tab2" className="tabs_item">
      <p>Start with your zip code to compare car insurance</p>

      <div className="form row">
        {fields.map((field) => (
          <div
            key={field.id}
            className={`form-group col-md-6`}
          >
            {field.inputType === "select" ? (
              <select
                className="form-select"
                required={field.required}
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                className="form-control"
                placeholder={field.placeholder}
                required={field.required}
                disabled={field.disabled}
              />
            )}
          </div>
        ))}
        <div className="form-group col-md-6 mb-0">
          <button
            type="button"
            className="default-btn bg-success text-white"
            onClick={addField}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Add More Cars
          </button>
        </div>

        {showRemoveButton && ( // Conditionally render the "Remove Extra Cars" button
          <div className="form-group col-md-6 mb-0">
            <button
              type="button"
              className="default-btn bg-danger text-white"
              onClick={removeField}
            >
              <FontAwesomeIcon icon={faMinusCircle} /> Remove Extra Cars
            </button>
          </div>
        )}

        <div className="form-group col-md-12">
          <button type="submit" className="default-btn">
            Start Saving Today
          </button>
        </div>

        <ul className="ratings col-md-12">
          <li>45 Ratings</li>

          <li className="right">
            Already Member?
            <a href="/sign-in">SIGN IN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab2;

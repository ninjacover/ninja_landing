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
    },
    {
      id: 2,
      placeholder: "Car Model",
      required: true,
    },
    {
      id: 3,
      placeholder: "Car Year",
      required: true,
    },
    {
      id: 4,
      placeholder: "Car Market Value",
      required: true,
      disabled: true,
    },
    {
      id: 5,
      placeholder: "Plans",
      required: true,
    },
    {
      id: 6,
      placeholder: "Promo Code",
      required: false,
    },
  ]);

  const addField = () => {
    const newId = fields.length + 1;
    const newFields = [
      {
        id: newId,
        placeholder: "Car Make",
        required: true,
      },
      {
        id: newId + 1,
        placeholder: "Car Model",
        required: true,
      },
      {
        id: newId + 2,
        placeholder: "Car Year",
        required: true,
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
    if (fields.length > 6) {
      const updatedFields = [...fields];
      updatedFields.splice(updatedFields.length - 4, 4); // Remove last 4 fields
      setFields(updatedFields);
    }
  };

  // Conditionally render the "Remove Extra Cars" button
  const showRemoveButton = fields.length > 6;

  return (
    <div id="tab2" className="tabs_item">
      <p>Start with your zip code to compare car insurance</p>

      <div className="form row">
        {fields.map((field) => (
          <div key={field.id} className="form-group col-md-6">
            {field.id === 6 ? (
              <input
                type="text"
                className="form-control"
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : (
              <div>
                {field.id === 4 ? (
                  <input
                    type="text"
                    className="form-control"
                    placeholder={field.placeholder}
                    disabled
                    required={field.required}
                  />
                ) : (
                  <select
                    className="form-select"
                    id={field.id === 4 ? "CarMarketValue" : field.placeholder}
                    required={field.required}
                    disabled={field.disabled}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.id === 3
                      ? Array.from({ length: 11 }, (_, i) => (
                          <option key={i} value={2023 - i}>
                            {2023 - i}
                          </option>
                        ))
                      : field.id === 5
                      ? ["Basic", "Standard", "Premium"].map((plan, index) => (
                          <option key={index} value={plan}>
                            {plan}
                          </option>
                        ))
                      : null}
                  </select>
                )}
              </div>
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

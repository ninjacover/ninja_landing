import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

const Tab4 = () => {
  const [fields] = useState([
    {
      id: 1,
      type: "checkbox",
      label: "In-patient",
      checked: true,
      disabled: true,
    },
    {
      id: 2,
      type: "checkbox",
      label: "Out-patient",
    },
    {
      id: 3,
      type: "checkbox",
      label: "Diseases",
    },
    {
      id: 4,
      type: "checkbox",
      label: "Dental + Optical",
    },
    {
      id: 5,
      type: "checkbox",
      label: "Maternity",
    },
  ]);

  const [familyMembers, setFamilyMembers] = useState([]);
  const [showInitialFields, setShowInitialFields] = useState(true);

  const addEmployeeAgeRanges = () => {
    setShowInitialFields(true);
    const newId = familyMembers.length + 1;
    const newMember = [
      {
        id: newId,
        type: "select",
        placeholder: "Age Range",
        options: [], // Fetch and set the age ranges from the backend API
        required: true,
      },
      {
        id: newId + 1,
        type: "input",
        placeholder: "Count of Employees",
        required: true,
      },
    ];

    // Insert the new employee age ranges fields side by side
    const updatedMembers = [...familyMembers];
    updatedMembers.push(...newMember);

    setFamilyMembers(updatedMembers);
  };

  const removeEmployeeAgeRanges = () => {
    if (familyMembers.length > 0) {
      const updatedMembers = [...familyMembers];
      updatedMembers.splice(updatedMembers.length - 2, 2); // Remove last 2 employee age ranges
      setFamilyMembers(updatedMembers);
    }
  };

  return (
    <div id="tab4" className="tabs_item">
      <p>Start with your zip code to compare group medical insurance</p>

      <div className="form row">
        {showInitialFields ? (
          fields.map((field) => (
            <div key={field.id} className={`form-group col-md-6 ${field.id === 5 ? "col-md-12" : ""}`}>
              {field.type === "select" ? (
                <select className="form-select" required>
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "input" ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ) : (
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name={`checkbox-${field.id}`}
                    checked={field.checked}
                    disabled={field.disabled}
                  />
                  {field.label}
                </label>
              )}
            </div>
          ))
        ) : (
          <div className="form-group col-md-12">
            <p>Please add Age Range and Count of Employees at least once.</p>
          </div>
        )}

        {familyMembers.map((member) => (
          <div key={member.id} className="form-group col-md-6">
            {member.type === "select" ? (
              <select className="form-select" required>
                <option value="">{member.placeholder}</option>
                {member.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : member.type === "input" ? (
              <input
                type="text"
                className="form-control"
                placeholder={member.placeholder}
                required={member.required}
              />
            ) : null}
          </div>
        ))}

        {familyMembers.length > 0 && (
          <>
            <div className="form-group col-md-12 mb-0">
              <button
                type="button"
                className="default-btn bg-danger text-white"
                onClick={removeEmployeeAgeRanges}
              >
                <FontAwesomeIcon icon={faMinusCircle} /> Remove Employee Age Ranges
              </button>
            </div>
          </>
        )}

        <div className="form-group col-md-12 mb-0">
          <button
            type="button"
            className="default-btn bg-success text-white"
            onClick={addEmployeeAgeRanges}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Add Employee Age Ranges
          </button>
        </div>

        <div className="form-group col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Promo code"
            required
          />
        </div>

        <div className="form-group col-md-12">
          <button type="submit" className="default-btn">
            Start Saving Today
          </button>
        </div>

        <ul className="ratings">
          <li>45 Ratings</li>

          <li className="right">
            Already Member?{" "}
            <a href="/sign-in">SIGN IN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab4;

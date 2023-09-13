import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

// This tab is for Individual Medical 

const Tab3 = () => {
  const [fields] = useState([
    {
      id: 1,
      type: "select", // Changed "Age" to a dropdown menu
      placeholder: "Age",
      options: Array.from({ length: 82 }, (_, i) => i - 1), // List of ages from -1 to 80
      required: true,
    },
    {
      id: 2,
      type: "select",
      placeholder: "Plans",
      options: ["Basic", "Standard", "Premium"],
      required: true,
    },
    {
      id: 3,
      type: "checkbox",
      label: "In-patient",
      checked: true,
      disabled: true,
    },
    {
      id: 4,
      type: "checkbox",
      label: "Out-patient",
    },
    {
      id: 5,
      type: "checkbox",
      label: "Diseases",
    },
    {
      id: 6,
      type: "checkbox",
      label: "Dental + Optical",
    },
    {
      id: 7,
      type: "checkbox",
      label: "Maternity",
    },
    {
      id: 8,
      type: "text",
      placeholder: "Promo code",
    },
  ]);

  const [familyMembers, setFamilyMembers] = useState([]);

  const addFamilyMember = () => {
    const newId = familyMembers.length + 1;
    const newMember = [
      {
        id: newId,
        type: "select",
        placeholder: "Relationship",
        options: ["Wife", "Son", "Daughter"],
      },
      {
        id: newId + 1,
        type: "select", // Changed "Age" to a dropdown menu
        placeholder: "Age",
        options: Array.from({ length: 82 }, (_, i) => i - 1), // List of ages from -1 to 80
      },
    ];
    setFamilyMembers([...familyMembers, ...newMember]);
  };

  const removeFamilyMember = () => {
    if (familyMembers.length > 0) {
      const updatedMembers = [...familyMembers];
      updatedMembers.splice(updatedMembers.length - 2, 2); // Remove last 2 members
      setFamilyMembers(updatedMembers);
    }
  };

  return (
    <div id="tab3" className="tabs_item">
      <p>Start with your zip code to compare life insurance</p>

      <div className="form row">
        {fields.map((field) => (
          <div key={field.id} className="form-group col-md-6">
            {field.type === "select" ? (
              <select className="form-select" required>
                <option value="">{field.placeholder}</option>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "checkbox" ? (
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
            ) : (
              <input
                type={field.type}
                className="form-control"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}

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
            ) : (
              <input
                type={member.type}
                className="form-control"
                placeholder={member.placeholder}
              />
            )}
          </div>
        ))}

        {familyMembers.length > 0 && (
          <div className="form-group col-md-6 mb-0">
            <button
              type="button"
              className="default-btn bg-danger text-white"
              onClick={removeFamilyMember}
            >
              <FontAwesomeIcon icon={faMinusCircle} /> Remove Family Member
            </button>
          </div>
        )}

        <div className="form-group col-md-6 mb-0">
          <button
            type="button"
            className="default-btn bg-success text-white"
            onClick={addFamilyMember}
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Add Family Member
          </button>
        </div>

        <div className="form-group">
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

export default Tab3;

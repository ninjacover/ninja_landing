import React from "react";
import Link from "next/link";

// This tab is for Individual Motor 

const Tab1 = () => {
  
  const handleStartSaving = () => {
    return (
      <Link href="/insurance_modules/individual_motor/quotation_results">
        <a className="default-btn">
          Start Saving Today
        </a>
      </Link>
    );
  };

  return (
    <div id="tab1" className="tabs_item">
      <p>Start with your zip code to compare car insurance</p>

      <div className="form row">
        <div className="form-group col-md-6">
          <select className="form-select" id="CarMake" required>
            <option value="">Car Make</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <select className="form-select" id="CarModel" required>
            <option value="">Car Model</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <select className="form-select" id="CarYear" required>
            <option value="">Car Year</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            id="CarMarketValue"
            placeholder="Car Market Value"
            disabled
            readOnly
            required
          />
        </div>

        <div className="form-group col-md-12">
          <input
            type="text"
            className="form-control"
            id="PromoCode"
            placeholder="Promo Code"
          />
        </div>

       <div className="form-group col-md-12">
          {handleStartSaving()}
        </div>

        <ul className="ratings col-md-12">
          <li>45 Ratings</li>

          <li className="right">
            Already Member? 
            <a href="/sign-in">
              <a>SIGN IN</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab1;

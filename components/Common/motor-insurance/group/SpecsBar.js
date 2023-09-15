import React from 'react';

const SpecsBar = ({ data }) => {
  const { numQuotes, carModel, price } = data;

  return (
    <div className="motor-specs-bar specs-bar">
     
      <p className="motor-insurance-policy">
        YOUR MOTOR INSURANCE POLICY COVER COLLISION, DAMAGE, LOSS & THEFT
      </p>
      <p className="motor-quotes-info">
        We have found <span className='motor-user-details'>{numQuotes}</span > quotes for your <span className='motor-user-details'>{carModel}</span> Valued for <span className='motor-user-details'>{price}</span> EGP.
      </p>
    </div>
  );
};

export default SpecsBar;

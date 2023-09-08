import React, { useState } from 'react';
import {
  FaUserMd,
  FaHospital,
  FaCheckCircle,
  FaTimesCircle,
  FaCapsules,
  FaTooth,
  FaEye,
  FaBabyCarriage,
  FaPills,
} from 'react-icons/fa';

const InsuranceCard = ({ data }) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const icons = [
    <FaHospital className="icon-row" />,
    <FaUserMd className="icon-row" />,
    <FaPills className="icon-row" />,
    <FaCapsules className="icon-row" />,
    <FaTooth className="icon-row" />,
    <FaEye className="icon-row" />,
    <FaBabyCarriage className="icon-row" />,
  ];

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentIconIndex > 0) {
      setCurrentIconIndex(currentIconIndex - 1);
    } else if (direction === 'right' && currentIconIndex < icons.length - 1) {
      setCurrentIconIndex(currentIconIndex + 1);
    }
  };

  return (
    <div className="insurance-card">
      <div className="plan-header">Plan: {data.plan}</div>
      <div className="group-premium-header">Premium: {data.groupPremium}</div>
      <div className="icon-container">
        <div className="icon-wrapper" onClick={() => handleSwipe('left')}>
          <span className="arrow-left">&lt;</span>
        </div>
        <div className="icon">{icons[currentIconIndex]}</div>
        <div className="icon-wrapper" onClick={() => handleSwipe('right')}>
          <span className="arrow-right">&gt;</span>
        </div>
      </div>
      <div className="small-text">
        {data.inPatient ? `In-Patient Coverage: ${data.inPatientCoverage}` : 'In-Patient: Not Covered'}
      </div>
      <div className="small-text">
        {data.outPatient ? `Out-Patient Coverage: ${data.outPatientCoverage}` : 'Out-Patient: Not Covered'}
      </div>
      {/* Add more data fields as needed */}
    </div>
  );
};

export default InsuranceCard;

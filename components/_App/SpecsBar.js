import React from 'react';
import {
  FaHospital,
  FaUserMd,
  FaPills,
  FaCapsules,
  FaTooth,
  FaEye,
  FaBabyCarriage,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';

const SpecsBar = () => {
  return (
    
    <div className="insurance-specs-bar">
          
      <div className="insurance-spec">
        <div className="icon-row ">
          <FaHospital />
        </div>
        <div className="status">
          <FaCheckCircle />
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row ">
          <FaUserMd />
        </div>
        <div className="status">
          <FaTimesCircle />
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row ">
          <FaPills />
        </div>
        <div className="status">
          <FaCheckCircle />
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row ">
          <FaCapsules />
        </div>
        <div className="status">
          <FaCheckCircle />
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row ">
          <FaTooth />
        </div>
        <div className="status">
          <FaTimesCircle />
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row ">
          <FaEye />
        </div>
        <div className="status">
          <FaCheckCircle />
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row ">
          <FaBabyCarriage />
        </div>
        <div className="status">
          <FaTimesCircle />
        </div>
      </div>
    </div>
  );
};

export default SpecsBar;

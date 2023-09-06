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
        <div className="icon-row">
          <FaHospital />
          <span className="status">
            <FaCheckCircle />
          </span>
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaUserMd />
          <span className="status">
            <FaTimesCircle />
          </span>
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaPills />
          <span className="status">
            <FaCheckCircle />
          </span>
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaCapsules />
          <span className="status">
            <FaCheckCircle />
          </span>
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaTooth />
          <span className="status">
            <FaTimesCircle />
          </span>
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaEye />
          <span className="status">
            <FaCheckCircle />
          </span>
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaBabyCarriage />
          <span className="status">
            <FaTimesCircle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpecsBar;

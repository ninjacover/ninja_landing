import React, { useState,useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';


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

SwiperCore.use([Navigation]);


const InsuranceCard = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false); // State to track expansion

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const dummyUser = {
    name: 'John Doe',
    averageAge: 32,
    company: 'ABC Insurance',
    employees: 100,
  };

  return (
    <div className={`insurance-card-container ${isExpanded ? 'expanded' : ''}`}>

    <div className="insurance-card">
    <div className="card-row">
        <div className="card-cell">
        <img src='/images/metlife2.png' className='company-image'></img>
        </div>
        <div className="card-cell">
          <div className="card-price"> {data.groupPremium} </div>
          <div className='card-small-text'>Avg/Prerson680</div>
        </div>
        <div className="card-cell">
          <button className="select-button-responsive">Select</button>
        </div>
      </div>
      <div >
    
    <div className="card-sectors">
    
    {/* Sector for In Patient */}
    <div className="sector">
      <div className="sector-header">In Patient</div>
      <div className="sector-icons">
        <FaHospital className='card-icon'/>
        {data.inPatient ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.inPatient ? `${data.inPatientCoverage}` : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Out Patient */}
    
    <div className="sector">
      <div className="sector-header">Out Patient</div>
      <div className="sector-icons">
        <FaUserMd className='card-icon' />
        {data.outPatient ? <FaCheckCircle className='card-check' /> : <FaTimesCircle className='card-cross'/>}
      </div>
      <div className="sector-footer">
        {data.outPatient ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Diseases */}
   
    <div className="sector">
      <div className="sector-header">Diseases</div>
      <div className="sector-icons">
        <FaPills className='card-icon' />
        {data.chronicPreExistingDisease ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.chronicPreExistingDisease ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Medication */}

    <div className="sector">
      <div className="sector-header">Medication</div>
      <div className="sector-icons">
        <FaCapsules className='card-icon' />
        {data.medication ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.medication ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for dental */}

    <div className="sector">
      <div className="sector-header">Dental</div>
      <div className="sector-icons">
        <FaTooth className='card-icon' />
        {data.dental ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.dental ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Optical */}

    <div className="sector">
      <div className="sector-header">Optical</div>
      <div className="sector-icons">
        <FaEye className='card-icon' />
        {data.optical ? <FaCheckCircle className='card-check' /> : <FaTimesCircle className='card-cross'/>}
      </div>
      <div className="sector-footer">
        {data.optical ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Maternity */}

    <div className="sector">
      <div className="sector-header">Maternity</div>
      <div className="sector-icons">
        <FaBabyCarriage className='card-icon'/>
        {data.maternity ? <FaCheckCircle className='card-check' /> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.maternity ? 'Covered' : 'Not Covered'}
      </div>
    </div>
  </div>



      </div>
      <div className={`expand-link`} onClick={toggleExpansion}>
      {isExpanded ? 'Less Details' : 'More Details'}

        {isExpanded && (
        <div className="extra-details">
        <p className="details-p"><span className="details-label">Accompanying Family Members:</span> {data.accompanyingFamily}</p>
        <p className="details-p"><span className="details-label">Dental Note:</span> {data.dentalNote}</p>
        <p className="details-p"><span className="details-label">Optical Note:</span> {data.opticalNote}</p>
        <p className="details-p"><span className="details-label">Maternity Waiting Period:</span> {data.maternityWaitingPeriod}</p>
        <p className="details-p"><span className="details-label">New Born Baby Coverage:</span> {data.newBornBabyCoverage}</p>
        <p className="details-p"><span className="details-label">Maternity Note:</span> {data.maternityNote}</p>
        <p className="details-p"><span className="details-label">Group Life Insurance Coverage:</span> {data.groupLifeInsuranceCoverage}</p>

        </div>
      )}

      </div>
    </div>
    </div>
  );
};

export default InsuranceCard;

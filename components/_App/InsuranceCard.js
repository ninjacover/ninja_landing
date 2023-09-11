import React, { useState,useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  const [swiper, setSwiper] = useState(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // State to track expansion


  useEffect(() => {
    // Hide the scroll hint after 1 second
    const timeoutId = setTimeout(() => {
      setShowScrollHint(false);
    }, 1000);
  
    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const icons = [
    <FaHospital className="card-icon" />,
    <FaUserMd className="card-icon" />,
    <FaPills className="card-icon" />,
    <FaCapsules className="card-icon" />,
    <FaTooth className="card-icon" />,
    <FaEye className="card-icon" />,
    <FaBabyCarriage className="card-icon" />,
  ];

  const handleSwipe = (direction) => {
    if (swiper) {
      if (direction === 'left') {
        swiper.slidePrev();
      } else if (direction === 'right') {
        swiper.slideNext();
      }
    }
  };
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`insurance-card-container ${isExpanded ? 'expanded' : ''}`}>

    <div className="insurance-card">
    <div className="row">
        <div className="cell">
          <div className="plan-header"> {data.plan}</div>
        </div>
        <div className="cell">
          <div className=""> {data.groupPremium} EGP</div>
        </div>
        <div className="cell">
          <button className="select-button-responsive">Select</button>
        </div>
      </div>
      
      
      <div >
    
          
      <SwiperSlide div>

    <div className="card-sectors">
    
    {/* Sector for In Patient */}
    <div className="sector">
      <div className="sector-header">In Patient</div>
      <div className="sector-icons">
        <FaHospital />
        {data.inPatient ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="sector-footer">
        {data.inPatient ? `${data.inPatientCoverage}` : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Out Patient */}
    
    <div className="sector">
      <div className="sector-header">Out Patient</div>
      <div className="sector-icons">
        <FaUserMd />
        {data.outPatient ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="sector-footer">
        {data.outPatient ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Diseases */}
   
    <div className="sector">
      <div className="sector-header">Diseases</div>
      <div className="sector-icons">
        <FaPills />
        {data.chronicPreExistingDisease ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="sector-footer">
        {data.chronicPreExistingDisease ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Medication */}

    <div className="sector">
      <div className="sector-header">Medication</div>
      <div className="sector-icons">
        <FaCapsules />
        {data.medication ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="sector-footer">
        {data.medication ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for dental */}

    <div className="sector">
      <div className="sector-header">Dental</div>
      <div className="sector-icons">
        <FaTooth />
        {data.dental ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="sector-footer">
        {data.dental ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Optical */}

    <div className="sector">
      <div className="sector-header">Optical</div>
      <div className="sector-icons">
        <FaEye />
        {data.optical ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="sector-footer">
        {data.optical ? 'Covered' : 'Not Covered'}
      </div>
    </div>

    {/* Sector for Maternity */}

    <div className="sector">
      <div className="sector-header">Maternity</div>
      <div className="sector-icons">
        <FaBabyCarriage />
        {data.maternity ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="sector-footer">
        {data.maternity ? 'Covered' : 'Not Covered'}
      </div>
    </div>
  </div>
</SwiperSlide>


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

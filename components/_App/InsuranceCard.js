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
      <div className="swiper-container">
      {/* <div className={`show-scroll-hint ${showScrollHint ? 'show-scroll-hint' : ''}`}>&#x1F449; Scroll</div> */}
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          slidesPerView={3} // Number of icons to show at a time
          spaceBetween={10} // Space between icons
          navigation={{
            nextEl: '.icon-scroll-right',
            prevEl: '.icon-scroll-left',
          }}
        >
          {icons.map((icon, index) => (
            <SwiperSlide key={index} className="icon">
              {icon}
            </SwiperSlide>
          ))}
        </Swiper>
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

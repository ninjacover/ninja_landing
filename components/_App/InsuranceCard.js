import React, { useState } from 'react';
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
    if (swiper) {
      if (direction === 'left') {
        swiper.slidePrev();
      } else if (direction === 'right') {
        swiper.slideNext();
      }
    }
  };

  return (
    <div className="insurance-card">
      <div className="card-header">
        <div className="plan-info">
          <div className="plan-name">{data.plan}</div>
          <div className="group-premium">{data.groupPremium}</div>
        </div>
        <button className="select-button-responsive">Select</button>
      </div>
      <div className="swiper-container">
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
        {/* <div className="icon-scroll-left" onClick={() => handleSwipe('left')}>
          &lt;
        </div>
        <div className="icon-scroll-right" onClick={() => handleSwipe('right')}>
          &gt;
        </div> */}
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

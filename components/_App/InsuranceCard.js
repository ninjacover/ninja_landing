import React, { useState,useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import InsuranceTable from './InsuranceTable';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


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
// import { Link } from 'react-router-dom';

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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
    console.log(setIsPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
          <button className="select-button-responsive" onClick={openPopup.bind(this)}>Select</button>
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

    {isPopupOpen && (
        <div className="popup overlay">
          <div className="popup-content">
            {/* Your form content goes here */}

            <div className="form-heading text-center">
              <h3 className="form-title">Log In to your account!</h3>
              <p className="form-desc">With your social network.</p>
            </div>


            <form method="post">
              <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12" style={{ width: '0%', paddingRight: '1px', marginRight: '-1rem' }}>
                  <button className="default-btn" type="submit">
                    Google
                  </button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12" style={{width: '0%',paddingLeft: '0',marginRight: '-1rem'}}>
                  <button className="default-btn" type="submit">
                    Facebook
                  </button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12" style={{width: '0',paddingLeft: '0',marginRight: '5rem'}}>
                  <button className="default-btn" type="submit">
                    Twitter
                  </button>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Username or Email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 form-condition">
                  <div className="agree-label">
                    <input type="checkbox" id="chb1" />
                    <label htmlFor="chb1">Remember Me</label>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <Link href="/recover-password">
                    <a className="forget">Forgot my password?</a>
                  </Link>
                </div>

                <div className="col-12">
                  <button className="default-btn btn-two" type="submit">
                    Log In Now
                  </button>
                </div>

                <div className="col-12">
                  <p className="account-desc">
                    Not a member?
                    <Link href="/sign-up"><a>Sign Up</a></Link>
                  </p>
                </div>
              </div>
            </form>

            <div className='popup-close-icon'>


              <FontAwesomeIcon icon={faTimes} onClick={closePopup} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceCard;

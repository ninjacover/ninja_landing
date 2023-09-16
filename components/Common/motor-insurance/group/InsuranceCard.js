import React, { useState,useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  FaFileInvoice, // Policy Deductible
  FaMoneyBill, // Agency Co-Payment
  FaBalanceScale,
  FaCheckCircle,
  FaTimesCircle, // Liability
  FaCarCrash, // Personal Accident
  FaFire, // Strikes, Riots, Natural Hazards
}from 'react-icons/fa';



SwiperCore.use([Navigation]);


const InsuranceCard = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false); // State to track expansion

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
    

    <div className="sector-motor">
      <div className="sector-header-motor">Policy Deductible</div>
      <div className="sector-icons">
        <FaFileInvoice className='card-icon'/>
        {data.inPatient ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.inPatient ? `${data.inPatientCoverage}` : 'Not Covered'}
      </div>
    </div>

    
    <div className="sector-motor">
      <div className="sector-header-motor">Agency Co-Payment</div>
      <div className="sector-icons">
        <FaMoneyBill className='card-icon' />
        {data.outPatient ? <FaCheckCircle className='card-check' /> : <FaTimesCircle className='card-cross'/>}
      </div>
      <div className="sector-footer">
        {data.outPatient ? 'Covered' : 'Not Covered'}
      </div>
    </div>


   
    <div className="sector-motor">
      <div className="sector-header-motor">Liability</div>
      <div className="sector-icons">
        <FaBalanceScale className='card-icon' />
        {data.chronicPreExistingDisease ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.chronicPreExistingDisease ? 'Covered' : 'Not Covered'}
      </div>
    </div>



    <div className="sector-motor">
      <div className="sector-header-motor">Personal Accident</div>
      <div className="sector-icons">
        <FaCarCrash className='card-icon' />
        {data.medication ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.medication ? 'Covered' : 'Not Covered'}
      </div>
    </div>


    <div className="sector-motor">
      <div className="sector-header-motor">Strikes, Riots, Natural Hazards</div>
      <div className="sector-icons">
        <FaFire className='card-icon' />
        {data.dental ? <FaCheckCircle className='card-check'/> : <FaTimesCircle className='card-cross' />}
      </div>
      <div className="sector-footer">
        {data.dental ? 'Covered' : 'Not Covered'}
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

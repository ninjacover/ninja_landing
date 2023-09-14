import React, { useState,useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
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
        <button className="select-button-responsive" onClick={openPopup.bind(this)}>Select</button>
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

    {isPopupOpen && (
        <div className="popup overlay">
          <div class="container form-custom"><div class="row">
            <div class="col-12"><div class="contact-form-action">
              <div class="form-heading text-center">
                <h3 class="form-title">Log In to your account!</h3><p class="form-desc">With your social network.</p>
              </div><form method="post"><div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <button class="default-btn" type="submit">Google</button>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <button class="default-btn" type="submit">Facebook</button>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <button class="default-btn" type="submit">Twitter</button>
                  </div>
                  <div class="col-12"><div class="form-group">
                  <input type="text" class="form-control" name="name" placeholder="Username or Email" />
                  </div></div><div class="col-12"><div class="form-group"><input type="password" class="form-control" name="password" placeholder="Password" /></div></div><div class="col-lg-6 col-sm-6 form-condition"><div class="agree-label">
                    <input type="checkbox" id="chb1" /><label for="chb1">Remember Me</label>
                    </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                      <a class="forget" href="/recover-password/">Forgot my password?</a>
                      </div><div class="col-12"><button class="default-btn btn-two" type="submit">Log In Now</button></div><div class="col-12"><p class="account-desc">Not a member?<a href="/sign-up/">Sign Up</a></p></div></div></form></div>
                      
                      </div>
                      </div>
                      
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

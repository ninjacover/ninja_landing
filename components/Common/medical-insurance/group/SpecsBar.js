import React, { useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);
    const DummyUser = {
      name: 'John Doe',
      company: 'ABC Insurance',
      averageAge: 35,
      employees: 250,
    };
    

    useEffect(() => {
        // Check if the screen width is less than a certain breakpoint (e.g., 768px)
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Initial check on component mount
        handleResize();
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      if (isMobile) {
        // Render the simplified mobile view
        return (
          <div>
            

            <div className="insurance-specs-mobile">
              <div className="mobile-row">
                <div className="mobile-spec">
                <FaCheckCircle className='check' /> In Patient 
                </div>
                <div className="mobile-spec">
                <FaTimesCircle className='cross' /> Out Patient 
                </div>
              </div>
              <div className="mobile-row">
                <div className="mobile-spec">
                <FaCheckCircle className='check' /> Diseases 
                </div>
                <div className="mobile-spec">
                <FaTimesCircle className='cross' /> Dental 
                </div>
              </div>
              <div className="mobile-row">
                <div className="mobile-spec">
                <FaCheckCircle className='check'/> Optical 
                </div>
                <div className="mobile-spec">
                <FaTimesCircle className='cross' /> Maternity 
                </div>
              </div>
            </div>
            </div>
          );
      }

  return (
    <div>
           
    <div className="insurance-specs-bar">
      <div className="insurance-spec">
        <div className="icon-row">
          <FaHospital />
          <div className="status-true">
            <FaCheckCircle />
          </div>
        </div>
        <div className='specs-text'>
          In Patient
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaUserMd />
          <span className="status-false">
            <FaTimesCircle />
          </span>
        </div>
        <span className='specs-text'>
          Out Patient
        </span>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaPills />
          <span className="status-true">
            <FaCheckCircle />
          </span>
        </div>
        <div className='specs-text'>
          Diseases
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaCapsules />
          <span className="status-false">
            <FaCheckCircle />
          </span>
        </div>
        <div className='specs-text'>
          Dental
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaTooth />
          <span className="status-false">
            <FaTimesCircle />
          </span>
        </div>
        <div className='specs-text'>
          Dental
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaEye />
          <span className="status-true">
            <FaCheckCircle />
          </span>
        </div>
        <div className='specs-text'>
          Optical
        </div>
      </div>
      <div className="insurance-spec">
        <div className="icon-row">
          <FaBabyCarriage />
          <span className="status-false">
            <FaTimesCircle />
          </span>
        </div>
        <div className='specs-text'>
          Maternity
        </div>
      </div>
    </div>
    </div>
  );
};

export default SpecsBar;

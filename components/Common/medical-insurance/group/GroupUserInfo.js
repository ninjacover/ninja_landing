import React, { useState, useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBuilding } from 'react-icons/fa';
import { IoMdPerson, IoMdPeople } from 'react-icons/io';

const GroupUserInfo = ({ user }) => {
  const isSSR = typeof window === 'undefined'; // Check if running on the server side

  // Initialize 'isMobile' state differently depending on whether it's SSR or in the browser
  const [isMobile, setIsMobile] = useState(isSSR ? false : window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (!isSSR) {
      // Attach the event listener only in the browser
      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isSSR]);


  

  if (isMobile) {
    return (
      <div className="mobile-user-info">
        <h2>Your Information:</h2>
        <div className="mobile-info-row">
          <span className="mobile-info-label">Name: {user.name}</span>       
          <span className="mobile-info-label">Average Age: {user.averageAge}</span>
        </div>
        <div className="mobile-info-row">
          <span className="mobile-info-label">Company: {user.company}</span>
          <span className="mobile-info-label">Employees: {user.employees}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-info">
        <div className="user-info-row">
          <span className="user-info-icon">
            <AiOutlineUser />
          </span>
          <span className="user-info-label">Name:</span>
          <span className="user-info-value">{user.name}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-icon">
            <FaBuilding />
          </span>
          <span className="user-info-label">Company:</span>
          <span className="user-info-value">{user.company}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-icon">
            <IoMdPerson />
          </span>
          <span className="user-info-label">Average Age:</span>
          <span className="user-info-value">{user.averageAge}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-icon">
            <IoMdPeople />
          </span>
          <span className="user-info-label">Employees:</span>
          <span className="user-info-value">{user.employees}</span>
        </div>
      </div>
    );
  }
};

export default GroupUserInfo;

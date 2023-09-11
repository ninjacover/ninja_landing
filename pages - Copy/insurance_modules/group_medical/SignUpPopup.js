import React, { useState } from 'react';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';
import Link from 'next/link';
import Navbar from '../../../components/_App/Navbar';

// Import the SignUpPopup component
import SignUpPopup from './SignUpPopup';

const SignUp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <PageBanner 
        pageTitle="Sign Up" 
        homePageUrl="/" 
        homePageText="Home" 
        activePageText="Sign Up" 
      /> 

      {isPopupOpen && (
        <div className="popup-container">
          <div className="user-area-all-style sign-up-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="contact-form-action">
                    <div className="form-heading text-center">
                      <h3 className="form-title">Create an account!</h3>
                      <p className="form-desc">With your social network.</p>
                    </div>

                    <form method="post">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <button className="default-btn" type="submit">
                            Google
                          </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <button className="default-btn" type="submit">
                            Facebook
                          </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <button className="default-btn" type="submit">
                            Twitter
                          </button>
                        </div>

                        {/* Add the pop-up form trigger button */}
                        <div className="col-12">
                          <button className="default-btn" type="button" onClick={openPopup}>
                            Show Sign Up Form
                          </button>
                        </div>

                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Enter your Username" />
                          </div>
                        </div>
                        {/* Other form fields */}
                        
                        <div className="col-12">
                          <button className="default-btn btn-two" type="submit">
                            Sign Up
                          </button>
                        </div>
                                            
                        <div className="col-12">
                          <p className="account-desc">
                            Already have an account?
                            <Link href="/log-in"><a>Log In</a></Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Place your sign-up form component here */}
          <SignUpForm onClose={closePopup} />
        </div>
      )}

      {/* Conditionally render the pop-up form */}
      {isPopupOpen && <SignUpPopup onClose={closePopup} />}
    </div>
  );
}

export default SignUp;


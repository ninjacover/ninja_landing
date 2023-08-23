
import React from 'react';

const ServicesStyleOne = () => {
  return (
    <>
     <div className='span section-title'>
        <span style={{ textAlign: 'center', color: '#F0702F', backgroundColor: 'transparent' }}> How it works ?</span>
        <h2 style={{ marginTop: '10px' }}>Beyond Insurance <br />We are here for you</h2>
      </div>
      <div className="our-service-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="../../public/images/works2.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="../../public/images/works1.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesStyleOne;
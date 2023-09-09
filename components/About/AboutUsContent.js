import React from 'react';

const AboutUsContent = () => {
    return (
        <div className="about-area ptb-100">
			<div className="container">
				<div className='span section-title'>
			<span className=''  style={{textAlign:'center',color:'#F0702F',backgroundColor:'transparent'}}>About Us</span>
			<h2 style={{marginTop:'10px'}}>Beyond Insurance <br></br>
              We are here for you</h2>
			</div>
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<h2>Why Ninja Cover?</h2>

<p>At Ninja Cover, we're dedicated to simplifying insurance. Our platform is designed to empower you, the consumer, by providing straightforward and transparent insurance solutions. With us, you'll access comprehensive information, unbiased comparisons, and a seamless journey from quote to coverage. Our commitment to transparency and user-friendliness makes us your go-to destination for all your insurance needs.</p>

							<div className="about-list">
								<ul>
									<li>
										<i className="flaticon-checked"></i>
										Save Money
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Fast Application
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Flexible Insurance
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Saves time
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Investment Planning
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Professional Advisor
									</li>
								</ul>
							</div>
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
							<img src="/images/Ninja-Vector.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;
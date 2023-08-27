import React from 'react';
import Link from 'next/link';

const FooterStyle2 = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-top-area footer-top-area-five pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo2.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="bx bxl-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i className="bx bxl-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

      
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Service Links</h3>

                                <ul>
                                    <li>
                                        <Link href="/insurance-details">
                                            <a>Motor Insurance </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/car-insurance">
                                            <a>Group Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/home-insurance">
                                            <a>Individual Insurance</a>
                                        </Link>
                                    </li>
                                    

                                </ul>
                                    <li>
                                        <Link href="/insurance-details">
                                            <a>Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/car-insurance">
                                            <a>Car Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/home-insurance">
                                            <a>Home Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/insurance-details">
                                            <a>Investment</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/health-insurance">
                                            <a>Health Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business-insurance">
                                            <a>Business</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Newsletter</h3>

                                <p className="newsletter-p">To have further offers sent on email to u . please leave your email below.</p>

                                <div className="subscribe-wrap">
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" required />
                                        <button className="default-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	
          
        </>
    );
}

export default FooterStyle2;
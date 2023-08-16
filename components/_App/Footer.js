import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-top-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-logo-social-container"style={{ marginTop: '-60px' }}>
                            <img src="/images/NinjaWhite.png" alt="logo" style={{ width: '70%', height: '125px' }} />

                            <div className="single-widget" style={{ width: '200px' }}>
                                <div className="social-text-box">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
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
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-widget contact">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <span>Phone:</span>
                                    <a href="#">+201270088722</a>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <span>Email:</span>
                                    <a href="mailto:a.wael@hadbrok.com">
                                        a.wael@hadbrok.com
                                    </a>
                                </li>
                                <li>
                                    <i className="flaticon-maps-and-flags"></i>
                                    <span>Address:</span>
                                    3, st 203, Degla square, Maadi City
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-widget">
                            <h3>Service Links</h3>
                            <ul>
                                <li>
                                    <Link href="/insurance-details">
                                        <a>Insurance Comparison</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/car-insurance">
                                        <a>Broker to Broker</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-insurance">
                                        <a>Life Chat Bot</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-widget">
                            <h3>Newsletter</h3>
                            <p className="newsletter-p">
                                To receive further offers via email, please leave your email below.
                            </p>
                            <div className="subscribe-wrap">
                                <form className="newsletter-form">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Your Email"
                                        name="email"
                                        required
                                    />
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
    );
}

export default Footer;

import React from 'react'
import InvoicTable from '../../../components/Common/motor-insurance/individual/InsuranceInvoicTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../components/_App/Navbar.js';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';


const quotation_invoice = () => {
    return (
        <div>

            <Navbar />
            <PageBanner
                pageTitle="Individual Motor"
                homePageUrl="/insurance_modules/individual_motor/quotation_invoice/"
                homePageText="Home"
            />
            <p className='contact-title'>OMNIA, THANKS FOR REGISTERING! THIS IS YOUR QUOTE</p>
            <div className='invoice-container container'>

                <InvoicTable />
            </div>
            <div class="any-contact-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="contact-text">
                                <h3>Have you any question? Ask Us anything, we’d love to answer!
                                </h3>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-call">
                                <h3>
                                    Libano-Suisse SME<br /><a>Download Now</a>
                                    <FontAwesomeIcon icon={faDownload} size="lg" className="fas fa-lg" />
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='section-title-custom' >Need an advice</h1>

            <div class="business-contact-area-five ptb-100">
                <div class="container">
                    <div class="business-contact-bg">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6">
                                <div class="business-contact">
                                    <p>Call Us Today</p><a class="one" href="tel:+82546-564-234">+82546-564-234</a>

                                    <span>OR</span>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="business-content-email"><p p>Sign Up For Emails</p><div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email" /><button class="default-btn">Send</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default quotation_invoice

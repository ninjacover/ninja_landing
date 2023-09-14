import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AchievementContent from '../components/About/AchievementContent';
import Quotation_invoice from '../pages/insurance_modules/group_motor/quotation_invoice'
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';

const InsuranceDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Insurance Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Insurance Details" 
            /> 

            <div className="pt-100">
                <AchievementContent />
            </div>

   <Quotation_invoice/>          

            <Footer />
        </>
    )
}

export default InsuranceDetails;
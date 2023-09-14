import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import SpecsBar from '../components/Common/medical-insurance/group/SpecsBar';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import IndividualInsuranceTable from '../components/Common/medical-insurance/individual/InsuranceTable';
import IndividualUserInfo from '../components/Common/medical-insurance/individual/UserInfo';
const HealthInsurance = () => {
    const DummyUser = {
        name: 'John Doe',
        company: 'ABC Insurance Co.',
        averageAge: 35,
        employees: 250,
      };
    
    return (
        <>

            <Navbar/>
            <IndividualUserInfo user={DummyUser}/>
            <SpecsBar/>
            

            {/* <PageBanner 
                pageTitle="SME Insurance" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="SME Insurance" 
            />  */}
            
                <IndividualInsuranceTable/>

            <AboutUsContent />

            {/* <OurVision /> */}
            
            {/* <GetAFreeQuoteFormStyleTwo />

            <div className="ptb-100">
                <OffersArea />
            </div> */}

            <Footer />
        </>
    )
}

export default HealthInsurance;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import AboutUsContent from '../components/About/AboutUsContent';
import Services from '../components/HomeOne/Services';
import GetAFreeQuoteForm from '../components/Common/GetAFreeQuoteForm';
import Footer from '../components/_App/Footer';
import ContactForm from './ContactForm';

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <WhyChooseUs />

            <AboutUsContent />

            <GetAFreeQuoteForm />

            <Services />

            <ContactForm />

            <Footer />
        </>
    )
}

export default Index;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import AboutUsContent from '../components/About/AboutUsContent';
import OurVision from '../components/About/OurVision';
import Services from '../components/HomeOne/Services';
import GetAFreeQuoteForm from '../components/Common/GetAFreeQuoteForm';
import FunFacts from '../components/Common/FunFacts';
import AchievementContent from '../components/About/AchievementContent';
import ContactWithAgent from '../components/Common/ContactWithAgent';
import Testimonials from '../components/Common/Testimonials';
import OffersArea from '../components/Common/OffersArea';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/_App/Footer';
import ContactForm from './ContactForm';

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <WhyChooseUs />

            <AboutUsContent />

            <Services />


            <ContactForm />


            {/* <FunFacts />

            
                <AchievementContent />
            

            <ContactWithAgent /> */}


        

        
            
            <Footer />
        </>
    )
}

export default Index;
import React from 'react';
import BannerSection from '../../Components/bannerSection';
import Footer from '../../Shared/Footer';
import CompanySection from '../../Components/CompanySection';
import Reviews from '../../Components/Reviews';
import Packages from '../../Components/Packages';
import ContactUs from '../../Components/ContactUs';

const Home = () => {
    return (
        <div>
            <BannerSection/>
            <CompanySection/>
            <Reviews/>
            <Packages/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;
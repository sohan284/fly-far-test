import React from 'react';
import BannerSection from '../../Components/bannerSection';
import Footer from '../../Shared/Footer';
import CompanySection from '../../Components/CompanySection';

const Home = () => {
    return (
        <div>
            <BannerSection/>
            <CompanySection/>
            <Footer/>
        </div>
    );
};

export default Home;
import BannerSection from '../../Components/BannerSection';
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
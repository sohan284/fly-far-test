import Footer from "../../Shared/Footer";
import CompanySection from "../../Components/CompanySection";
import Reviews from "../../Components/Reviews";
import Packages from "../../Components/Packages";
import ContactUs from "../../Components/ContactUs";
import BannerSection from '../../Components/BannerSection';
import ResumeSection from "../../Components/ResumeSection";
const Home = () => {
  return (
    <div>
      <div className="area">
        {" "}
        {/* Fixed area covering full viewport */}
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <BannerSection />
      <CompanySection />
      <ResumeSection/>
      <Reviews />
      <Packages />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;

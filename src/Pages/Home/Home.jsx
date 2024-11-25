import Footer from "../../Shared/Footer";
import CompanySection from "../../Components/CompanySection";
import Reviews from "../../Components/Reviews";
import Packages from "../../Components/Packages";
import ContactUs from "../../Components/ContactUs";
import BannerSection from '../../Components/BannerSection';
import ResumeSection from "../../Components/ResumeSection";
import SkillSection from "../../Components/SkillSection";
import WhyChooseSection from "../../Components/WhyChooseSection";
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
      <BannerSection  />
      <CompanySection />
      <ResumeSection id="resume-section" />
      <Reviews id="reviews" />
      <SkillSection id="skill-section" />
      <Packages id="packages" />
      <WhyChooseSection id="why-choose" />
      <ContactUs id="contact-us" />
      <Footer />
    </div>
  );
};

export default Home;

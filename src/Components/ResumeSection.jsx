import Lottie from "lottie-react";
import animationData from "../assets/resume.json"; // Ensure this path is correct
import Marquee from "react-fast-marquee";

const ResumeSection = () => {
  return (
    <div className=" bannerSection text-white flex flex-col text-center">
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
      <div className="bg-gradient-to-t to-[#20c686] p-2 from-[#8fda65]">
        <Marquee>
          <p  className="font-bold text-[16px] text-[wheat] uppercase">
            {" "}
            <span className="text-yellow-400 mr-5">★★★</span>Request Job referrals in
            seconds<span className="text-yellow-400 mx-5">★★★</span> Request Job
            referrals in seconds <span className="text-yellow-400 mx-5">★★★</span>
            Request Job referrals in seconds
            <span className="text-yellow-400 mx-5">★★★ </span> Request Job referrals
            in seconds <span className="text-yellow-400 mx-5">★★★ </span>Request Job
            referrals in seconds<span className="text-yellow-400 ml-5">★★★ </span>{" "}
            Request Job referrals in seconds{" "}
            
          </p>{" "}
        </Marquee>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-20 px-5">
        <div>
          <div data-aos="zoom-in" className="text-center  max-w-[700px] mx-auto lg:mt-[20%]">
            <h1 className=" font-bold text-[#ffec42] font-serif text-[32px]">
              Perfect your resume with ReferAI
            </h1>
            <h2 data-aos="zoom-in" className="mt-[1%] text-[wheat] text-[20px] font-[300] text-wrap">
              Our AI feedback tool will help you create a resume that will get
              you noticed by recruiters and hiring managers. Our in house ATS
              optimized resume builder will help you create a resume that is
              proven to work.
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="flex justify-center">
          <div className="rounded-full flex  w-full justify-center">
            <Lottie className="lg:w-[500px]" animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-t to-[#28adc4] p-2 from-[#94639d]">
        <Marquee>
          <p className="font-bold text-[16px] uppercase text-[wheat]">
            {" "}
            <span className="text-yellow-400 mr-5">★★★</span>Request Job referrals in
            seconds<span className="text-yellow-400 mx-5">★★★</span> Request Job
            referrals in seconds <span className="text-yellow-400 mx-5">★★★</span>
            Request Job referrals in seconds
            <span className="text-yellow-400 mx-5">★★★</span> Request Job referrals
            in seconds <span className="text-yellow-400 mx-5">★★★</span>Request Job
            referrals in seconds<span className="text-yellow-400 ml-5">★★★</span>{" "}
            Request Job referrals in seconds{" "}
          
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default ResumeSection;

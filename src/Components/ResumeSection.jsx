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
      <div className="bg-gradient-to-t to-[#21007a] p-2 from-[#006432]">
        <Marquee>
          <p className="font-bold text-[16px] text-[wheat] uppercase">
            {" "}
            <span className="text-yellow-400">★★★</span>Request Job referrals in
            seconds<span className="text-yellow-400">★★★</span> Request Job
            referrals in seconds <span className="text-yellow-400">★★★</span>
            Request Job referrals in seconds
            <span className="text-yellow-400">★★★</span> Request Job referrals
            in seconds <span className="text-yellow-400">★★★ </span>Request Job
            referrals in seconds<span className="text-yellow-400">★★★ </span>{" "}
            Request Job referrals in seconds{" "}
            
          </p>{" "}
        </Marquee>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-20">
        <div>
          <div className="text-center  max-w-[700px] mx-auto">
            <h1 className=" font-bold text-[#EBFE19] font-serif text-[32px]">
              Perfect your resume with ReferAI
            </h1>
            <h2 className="mt-[1%] text-[wheat] text-[20px] font-[300] text-wrap">
              Our AI feedback tool will help you create a resume that will get
              you noticed by recruiters and hiring managers. Our in house ATS
              optimized resume builder will help you create a resume that is
              proven to work.
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-full flex justify-center">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-t from-[#21007a] p-2 to-[#006432]">
        <Marquee>
          <p className="font-bold text-[16px] uppercase text-[wheat]">
            {" "}
            <span className="text-yellow-400">★★★</span>Request Job referrals in
            seconds<span className="text-yellow-400">★★★</span> Request Job
            referrals in seconds <span className="text-yellow-400">★★★</span>
            Request Job referrals in seconds
            <span className="text-yellow-400">★★★</span> Request Job referrals
            in seconds <span className="text-yellow-400">★★★</span>Request Job
            referrals in seconds<span className="text-yellow-400">★★★</span>{" "}
            Request Job referrals in seconds{" "}
          
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default ResumeSection;

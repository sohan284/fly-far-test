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
      <div className="bg-gradient-to-t to-[#151577] p-2 from-[#650094]">
        <Marquee>
          <p className="font-bold text-lg">
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
          <div className="text-center  max-w-[500px] mx-auto">
            <h1 className=" font-bold font-serif text-[2rem] md:text-[3rem]">
              Perfect your resume with ReferAi
            </h1>
            <h2 className="mt-[1%] text-wrap">
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
      <div className=" bg-gradient-to-t to-[#601577] p-2 from-[#02006e]">
        <Marquee>
          <p className="font-bold text-lg">
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

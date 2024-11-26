import { useState } from "react";
import { MdDone } from "react-icons/md";
const Packages = () => {
  const [active, setActive] = useState("Monthly");
  const [amount, setAmount] = useState(20);

  const handlePlanButton = (value) => {
    setActive(value);
    {
      value === "Yearly" ? setAmount(12) : setAmount(20);
    }
  };
  const options1 = [
    // "Priority Job Requests",
    "Swipes     (10/days)",
    // "Access to Premium Jobs",
    "Free Skill Interviews    (1 skill)",
    // "Resume Screening Discount",
    // "Premium Events Access",
    // "Advanced Job Filters",
    // "Priority Customer Support",
    // "Enhanced Profile Visibility",
    "Extended Resume Storage   (1 version only)",
    "Resumes   (1 at a time)",
    "Referral Requests    (1 in a month)",
    "Events",
    "Latest Job News",
  ];
  const options2 = [
    "Priority Job Requests",
    "Unlimited Swiping",
    "Access to Premium Jobs",
    "Free Skill Interviews",
    "Resume Screening Discount",
    "Premium Events Access",
    "Advanced Job Filters",
    "Priority Customer Support",
    "Enhanced Profile Visibility",
    "Extended Resume Storage",
  ];
  const options3 = [
    "Priority Job Requests",
    "Unlimited Swiping",
    "Access to Premium Jobs",
    "Free Skill Interviews",
    "Resume Screening Discount",
    "Premium Events Access",
    "Advanced Job Filters",
    "Priority Customer Support",
    "Enhanced Profile Visibility",
    "Extended Resume Storage",
  ];

  return (
    <div id="packages" className="min-h-screen packageSection text-center px-3 pb-10 pt-20">
      <div data-aos="fade-up" className="container mx-auto">
        <h1 className=" pt-[5%] font-extrabold title max-w-[800px] mx-auto text-[#FFFFFF]">
          Get referred to your dream job.
        </h1>
        <p className="content_text text-[#FFFFFF] max-w-[700px] mx-auto mt-2">
          Let our platform do the heavy lifting by connecting you with thousands
          of employees, who want to refer you.
        </p>
        {/* <div className="mt-10 py-2 px-2 rounded-full bg-white inline-block">
          <button
            onClick={() => handlePlanButton("Monthly")}
            className={`p-1 rounded-full px-3 ${
              active === "Monthly"
                ? "bg-[#94639d] text-white"
                : " text-black bg-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handlePlanButton("Yearly")}
            className={`p-1 rounded-full px-3 ${
              active === "Yearly"
                ? "bg-[#94639d] text-white"
                : " text-black bg-white"
            }`}
          >
            Yearly{" "}
            <span className="text-xs ml-2 bg-[#94639d] p-0.5 rounded-md px-1.5 text-zinc-100 font-medium">
              Save 40%
            </span>
          </button>
        </div> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5 mt-12 mx-3">
          <div
            data-aos="zoom-in"
            className="text-start rounded-lg shadow-xl bg-[#4747472a] text-zinc-100 lg:p-8 p-3  "
          >
            <h3 className="text-[28px] text-[#f0a1ff] font-semibold">Free Plan</h3>
            <h1 className="text-lg my-5">
              <span className="text-[48px] text-[#caff81] font-bold">$0</span>
              
            </h1>
            <p className="content_text font-[300]">
              If you just want to test out our product and send a referral
              request to a company, once a week. This is for who have no
              need for a new job any time soon.
            </p>
            <button className="w-full rounded-lg my-4 p-1 font-medium hover:scale-105 hover:ease-linear transition-all duration-300 text-white bg-[#06281d] text-[28px]">
           Sign up
            </button>
            {options1.map((feature, index) => (
              <p
                key={index}
                className="flex items-center font-semibold content_text my-2"
              >
                <MdDone
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    marginRight: "5px",
                    backgroundImage:
                      "linear-gradient(to right, #111111, #888888)",
                    borderRadius: "50px",
                    padding: "2px",
                  }}
                />
                {feature}
              </p>
            ))}
          </div>
          <div
            data-aos="zoom-in"
            className="text-start rounded-lg shadow-xl bg-[#4747472a] text-zinc-100 lg:p-8 p-3"
          >
            <h3 className="text-[28px] font-semibold text-[#222222]">3 Months Plan</h3>
            <h1 className="text-lg my-5">
              <span className="text-[48px] text-[#caff81] font-bold">
                $499
              </span>
             
            </h1>
            <p className="content_text font-[300]">
              If you want to get a competitive edge in todays job market and
              start getting referred to multiple roles across several companies
              starting today.
            </p>
            <button className="w-full rounded-lg my-4 p-1 font-medium hover:scale-105 hover:ease-linear transition-all duration-300 text-white bg-[#06281d] text-[28px]">
              Subscribe
            </button>

            {options2.map((feature, index) => (
              <p
                key={index}
                className="flex items-center font-semibold text-[20px] my-2"
              >
                <MdDone
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    marginRight: "5px",
                    backgroundImage:
                      "linear-gradient(to right, #111111, #888888)",
                    borderRadius: "50px",
                    padding: "2px",
                  }}
                />
                {feature}
              </p> 
            ))}
          </div>
          <div
            data-aos="zoom-in"
            className="text-start rounded-lg shadow-xl bg-[#4747472a] text-zinc-100 lg:p-8 p-3"
          >
            <h3 className="text-[28px] font-semibold text-[#222222]">6 Months Plan</h3>
            <h1 className="text-lg my-5">
              <span className="text-[48px] text-[#caff81] font-bold">
                $899
              </span>
    
            </h1>
            <p className="content_text">
              If you want to get a competitive edge in todays job market and
              start getting referred to multiple roles across several companies
              starting today.
            </p>
            <button className="w-full rounded-lg my-4 p-1 font-medium hover:scale-105 hover:ease-linear transition-all duration-300 text-white bg-[#06281d] text-[28px]">
              Subscribe
            </button>

            {options3.map((feature, index) => (
              <p
                key={index}
                className="flex items-center font-semibold text-[20px] my-2"
              >
                <MdDone
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    marginRight: "5px",
                    backgroundImage:
                      "linear-gradient(to right, #111111, #888888)",
                    borderRadius: "50px",
                    padding: "2px",
                  }}
                />
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;

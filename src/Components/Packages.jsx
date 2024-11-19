import { useState } from "react";
import { MdDone } from "react-icons/md";
const Packages = () => {
  const [active, setActive] = useState("Monthly");
  const [amount , setAmount] =useState(12)

  const handlePlanButton = (value) => {
    setActive(value);
    {value === "Yearly"?
        setAmount(20) : setAmount(12)

    }
  };
  return (
    <div className="min-h-screen packageSection text-center px-5 pb-10">
      <div className="max-w-[1000px] mx-auto">
        <h1 className=" pt-[5%] font-extrabold font-serif text-[2rem] md:text-[3rem] max-w-[800px] mx-auto">
          Get referred to your dream job.
        </h1>
        <p className="lg:text-xl font-normal max-w-[800px] mx-auto mt-2">
          Let our platform do the heavy lifting by connecting you with thousands
          of employees, who want to refer you.
        </p>
        <div className="mt-10 py-2 px-2 rounded-full bg-white inline-block">
          <button
            onClick={() => handlePlanButton("Monthly")}
            className={`p-1 rounded-full px-3 ${
                active === "Monthly" ? "bg-blue-600 text-white" :  " text-black bg-white"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handlePlanButton("Yearly")}
            className={`p-1 rounded-full px-3 ${
              active === "Yearly" ? "bg-blue-600 text-white" :  " text-black bg-white"
            }`}
          >
            Yearly <span className="text-xs ml-2 bg-blue-600 p-0.5 rounded-md px-1.5 text-zinc-100 font-medium">Save 40%</span>
          </button>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12">
          <div className="text-start rounded-lg shadow-xl bg-zinc-100 text-zinc-800 p-8 mx-5">
            <h3 className="text-2xl font-semibold">Basic</h3>
            <h1 className="text-lg my-5">
              <span className="text-[48px] font-bold">$0</span>/mo
            </h1>
            <p className="text-sm">
              If you just want to test out our product and send a referral
              request to one company, once a week. This is for those who have no
              need for a new job any time soon.
            </p>
            <button className="w-full border border-zinc-800 rounded-xl my-5 p-1 font-medium hover:bg-zinc-300">
              Sign Up
            </button>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />{" "}
              1 Referral request per week
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />
              Basic Referral Marketplace profile
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />
              1 Referral Marketplace boost per month
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />
              1 AI Resume Review credit per month
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />
              1 AI Resume Tailoring credit per month
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />
              Access to our job board
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />{" "}
              Access to all companies
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "5px",
                  backgroundColor: "#d4d4d8",
                  borderRadius: "50px",
                  padding: "3px",
                }}
              />{" "}
              Email support
            </p>
          </div>
          <div className="text-start rounded-lg shadow-xl bg-zinc-100 text-zinc-800 p-8 mx-5">
            <h3 className="text-2xl font-semibold premiumText">Premium</h3>
            <h1 className="text-lg my-5">
              <span className="text-[48px] font-bold">${amount}</span>/mo
            </h1>
            <p className="text-sm">
              If you want to get a competitive edge in todays job market and
              start getting referred to multiple roles across several companies
              starting today.
            </p>
            <button className="w-full rounded-xl my-5 p-1 font-medium hover:scale-105 hover:ease-linear transition-all duration-300 bg-gradient-to-r from-[#7c009b] to-blue-500 text-white">
              Subscribe
            </button>

            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Unlimited referral requests
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Priority referral request matching
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Your profile is advertised to our network of referrers
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Weekly referral marketplace profile boosts
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Special badge on the marketplace
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Unlimited resumes on your profile
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              100 monthly AI Resume Review credits
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              50 monthly AI Resume Tailoring credits
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Infinite AI Resume Builder enhancements
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              ATS Optimized Resume Builder access
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              1 Free month of interview.study ($9 value)
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              60% discount on additional Refer Me Products
            </p>
            <p className="flex items-center font-semibold text-[14px] my-2">
              <MdDone
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  backgroundImage:
                    "linear-gradient(to right, #7c009b, #3b82f6)",
                  borderRadius: "50px",
                  padding: "2px",
                }}
              />{" "}
              Email support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;

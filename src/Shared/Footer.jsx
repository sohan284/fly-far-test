import React from "react";

const Footer = () => {
  return (
    <div data-aos="zoom-in" className="px-10">
        <div className=" px-10 text-[#ffec42] text-center container mx-auto bg-[#35353586] my-12 rounded-3xl pt-[5%] pb-[2%]">
      <div  className="grid md:grid-cols-2">
        <div>
          <h1 className="font-extrabold text-start font-serif text-[32px] ">
            Refer-AI
          </h1>
          <h2 className="mt-[3%] text-start text-[wheat] font-normal text-[20px] text-wrap">
            Request job referrals <br /> in seconds
          </h2>
        </div>
        <div className="grid grid-cols-2 text-zinc-400 md:mt-0 mt-10">
        <div className="grid gap-3 text-start">
        <a
                href="#banner"
                className="cursor-pointer text-[#89b454] hover:text-yellow-400"
              >
                About Us
              </a>
              <a
                href="#company-section"
                className="cursor-pointer text-[#89b454] hover:text-yellow-400"
              >
                Companies
              </a>
              <a
                href="#resume"
                className="cursor-pointer text-[#89b454] hover:text-yellow-400"
              >
                Resume
              </a>
              <a
                href="#packages"
                className="cursor-pointer text-[#89b454] hover:text-yellow-400"
              >
                Packages
              </a>
              <a
                href="#reviews"
                className="cursor-pointer text-[#89b454] hover:text-yellow-400"
              >
                Reviews
              </a>
              <a
                href="#skills"
                className="cursor-pointer text-[#89b454] hover:text-yellow-400"
              >
                Skills
              </a> </div>
        <div className="text-start text-[#89b454]">
        <a
                href="#contact-us"
                className="cursor-pointer text-[#89b454] hover:text-yellow-400"
              >
                Contact Us
              </a> 
        </div>
        </div>
      </div>
      <p className="text-zinc-400 mt-16">2024 refer-ai</p>
    </div>
    </div>
  );
};

export default Footer;

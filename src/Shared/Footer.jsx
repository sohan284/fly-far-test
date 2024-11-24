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
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Companies</p>
            <p className="cursor-pointer">Packages</p>
            <p className="cursor-pointer">Reviews</p>
            <p className="cursor-pointer">Contact us</p>
        </div>
        <div className="text-start">
            <p>Privacy Policy</p>
        </div>
        </div>
      </div>
      <p className="text-zinc-400 mt-16">2024 refer-ai</p>
    </div>
    </div>
  );
};

export default Footer;

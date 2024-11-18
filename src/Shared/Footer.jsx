import React from "react";

const Footer = () => {
  return (
    <div className="px-10">
        <div className=" px-10 text-zinc-200 text-center container mx-auto bg-zinc-800 my-12 rounded-3xl pt-[5%] pb-[2%]">
      <div className="grid md:grid-cols-2">
        <div>
          <h1 className="font-extrabold text-start font-serif text-[1.5rem] ">
            Refer-AI
          </h1>
          <h2 className="mt-[3%] text-start font-normal text-[1.5rem] text-wrap">
            Request job referrals <br /> in seconds
          </h2>
        </div>
        <div className="grid grid-cols-2 text-zinc-400 md:mt-0 mt-10">
        <div className="grid gap-3 text-start">
            <p>About Us</p>
            <p>How it works</p>
            <p>User Journeys</p>
            <p>Contact us</p>
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

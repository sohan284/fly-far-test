import React from "react";
import airobot from '../assets/ai-robot.gif'
const BannerSection = () => {
  return (
    <div className="min-h-[80vh] bg-black bannerSection text-center">
      <h1 className=" pt-[5%] font-extrabold font-serif text-[2rem] md:text-[3rem]">
        Refer-AI
      </h1>
      <h2 className="mt-[1%] font-bold md:text-[2rem] text-[1.5rem] text-wrap">
        Request job referrals in seconds
      </h2>
     <div className=" rounded-full mt-12 justify-center flex">
     <img src={airobot} alt="" className="w-[200px] rounded-full" />
     </div>
    </div>
  );
};

export default BannerSection;

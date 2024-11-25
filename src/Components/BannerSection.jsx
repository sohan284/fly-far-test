import phone from "../assets/phone.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import qr from "../assets/qr.png";
import Lottie from "lottie-react";
import animationData from "../assets/robot.json";

const BannerSection = () => {
  return (
    <div id="banner" className="min-h-screen bannerSection text-white flex flex-col text-center">
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

      <h2 data-aos="fade-up" className="md:mt-[2%] mt-[10%] text-[black] font-bold text-[32px] lg:text-[48px] text-wrap">
        Request job referrals in <br />
        <span className="text-[black]"> seconds</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-3 mt-5 grid-cols-1 max-w-[1000px] mx-auto ">
        <div data-aos="fade-up" className="h-12 mx-auto flex p-2 items-center rounded-xl text-[black] border-[black] border ">
          <img
            className="h-full rounded-lg mr-2"
            src="https://i.ibb.co.com/DQb8kZm/intel.png"
            alt=""
          />{" "}
          Someone at <span className="font-bold mx-1">Intel</span> wants to
          refer you.
        </div>
        <div data-aos="fade-up" className="h-12 mx-auto flex p-2 items-center rounded-xl text-[black] border-[black] border ">
          <img
            className="h-full rounded-lg mr-2"
            src="https://i.ibb.co.com/84Fb221/google.jpg"
            alt=""
          />{" "}
          You've been referred into{" "}
          <span className="font-bold mx-1"> Google </span> 🎉
        </div>
      </div>

      <div className="flex justify-center md:mt-10 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1000px] ">
          <div data-aos="zoom-in" className="mx-5">
            <img src={phone} alt="" />
          </div>
          <div data-aos="zoom-in" className="mt-5 mx-5">
            <h1 className="text-[32px] uppercase text-black font-semibold">
              Download
            </h1>
            <h2 className="text-[24px] text-black">Our New App!</h2>
            <p className="w-[200px] mt-3 text-black mx-auto text-sm">
              Experience seamless navigation, exclusive features, and enhanced
              performance with our new app.
            </p>
            <img
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=sg.lerna.com.marriottvacationclub&hl=en")
              }
              className="w-[200px] mx-auto mt-12"
              src={google}
              alt=""
            />
          </div>
          <div data-aos="zoom-in" className="md:mt-5 mx-5">
            <img
              className="w-[200px] mx-auto hidden md:block"
              src={qr}
              alt=""
            />

            <img
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/gb/app/deep-sleep-sounds-relax/id6738437515")
              }
              className="w-[200px] mx-auto md:mt-6"
              src={apple}
              alt=""
            />
          </div>
         
        </div>
      </div>
      <div className="flex justify-center">
              <div data-aos="fade-up" className="rounded-full flex lg:w-[30%] md:w-[50%] justify-center">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </div>
    </div>
  );
};

export default BannerSection;

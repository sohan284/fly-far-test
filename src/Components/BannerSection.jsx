import phone from "../assets/frame.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import qr from "../assets/qr.png";
import Lottie from "lottie-react";
import animationData from "../assets/robot.json";
import logo from '../assets/logo1.svg'

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
<div className="w-[200px] mx-auto left-8 lg:absolute container">
  <img src={logo} alt="" />
  <p className="absolute left-[50%] top-[7.7%] lg:top-[52%] lg:left-[50%] text-[#0d230a]">A L</p>
</div>
      <h2 data-aos="fade-up" className="md:mt-[2%] mt-[5%] text-[#fedd00] font-bold lg:text-[40px] text-wrap title">
        Request Job Referrals In Seconds
      </h2>

      <div className="grid md:grid-cols-2 gap-3 mt-5 grid-cols-1 max-w-[1200px] mx-auto ">
        <div data-aos="fade-up" className="h-16 mx-auto flex p-2 items-center rounded-xl text-[black] border-[black] border text-[18px]">
          <img
            className="h-full rounded-lg mr-2"
            src="https://i.ibb.co.com/G0hyMKf/apple.jpg"
            alt=""
          />{" "}
          Someone at <span className="font-bold mx-1">Apple</span> wants to
          refer you.
        </div>
        <div data-aos="fade-up" className="h-16 mx-auto flex p-2 items-center rounded-xl text-[black] border-[black] border text-[18px]">
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
          <div data-aos="zoom-in" className="mx-auto my-auto h-[400px]">
            <img src={phone} className="h-full" alt="" />
          </div>
          <div data-aos="zoom-in" className="mt-8 mx-5">
            <h1 className="text-[40px] uppercase text-black font-semibold">
              Download
            </h1>
            <h2 className="text-[32px] text-black">Our New App!</h2>
            <p className=" mt-5 text-black mx-auto content_text">
              Experience seamless navigation, exclusive features, and enhanced
              performance with our new app.
            </p>
            <img
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=sg.lerna.com.marriottvacationclub&hl=en")
              }
              className="w-[300px] mx-auto mt-12"
              src={google}
              alt=""
            />
          </div>
          <div data-aos="zoom-in" className="md:mt-[10px] mx-5">
            <img
              className="w-[250px] mx-auto hidden md:block"
              src={qr}
              alt=""
            />

            <img
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/gb/app/deep-sleep-sounds-relax/id6738437515")
              }
              className="w-[300px] mx-auto md:mt-6"
              src={apple}
              alt=""
            />
          </div>
         
        </div>
      </div>
      <div className="flex justify-center">
              <div data-aos="fade-up" className="rounded-full flex lg:w-[35%] md:w-[60%] justify-center">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </div>
    </div>
  );
};

export default BannerSection;

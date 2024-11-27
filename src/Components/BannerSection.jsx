import phone from "../assets/frame.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import qr from "../assets/qr.png";
import Lottie from "lottie-react";
import animationData from "../assets/robot.json";
import logo from "../assets/logo1.svg";
import logoMain from "../assets/logoMain.png";
import { CgProfile } from "react-icons/cg";
const BannerSection = () => {
  return (
    <div
      id="banner"
      className="min-h-screen bannerSection text-white flex flex-col text-center"
    >
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
      <div className="w-[250px] mx-auto left-28 xl:absolute container">
        <img src={logo} alt="" />
        <p className="absolute top-[87px] left-[50%] xl:top-[52%] xl:left-[51%] text-[20px] text-[#0d230a]">
          A L
        </p>
      </div>
      <h2
        data-aos="fade-up"
        className="mt-[5%] text-[#fedd00] font-bold lg:text-[40px] text-wrap title"
      >
        Request Job Referrals In Seconds
      </h2>

      <div className="grid md:grid-cols-2 gap-3 mt-5 grid-cols-1 max-w-[1200px] mx-auto ">
        <div
          data-aos="fade-up"
          className="h-16 mx-auto flex p-2 items-center rounded-xl text-[black] border-[black] border text-[18px]"
        >
          <img
            className="h-full rounded-lg mr-2"
            src="https://i.ibb.co.com/G0hyMKf/apple.jpg"
            alt=""
          />{" "}
          Someone at <span className="font-bold mx-1">Apple</span> wants to
          refer you.
        </div>
        <div
          data-aos="fade-up"
          className="h-16 mx-auto flex p-2 items-center rounded-xl text-[black] border-[black] border text-[18px]"
        >
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
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] ">
          <div
            data-aos="zoom-in"
            className="mx-auto my-auto h-[400px] w-[400px] relative"
          >
            <img
              className="absolute w-[65px] h-[65px] left-[42%] z-10 top-[15%]"
              src={logoMain}
              alt=""
            />
            <p className="absolute text-[24px] font-[800] text-[#333333] left-[35%] top-[34%] z-10">
              Vettalink
            </p>
            <button className="absolute top-[45%] text-[12px] text-zinc-100 py-0.5 left-[32%] z-10 w-[145px] rounded bg-[#008b62]">
              Install
            </button>
            <div className="absolute top-[53%] text-[#333333] text-[10px] font-semibold py-0.5 left-[32%] z-10">
              <h1>Rating and Reviews</h1>
              <h3 className="text-start font-semibold text-[32px] ml-3">4.7</h3>
              <p className="text-yellow-500 absolute top-[45%] left-[65%]">
                ★★★★✰
              </p>
              <p className="absolute top-[65%] flex text-[8px] left-[65%]">
                {"6,152"}{" "}
                <CgProfile
                  style={{
                    marginLeft: "3px",
                    marginTop: "1px",
                    color: "black",
                  }}
                />
              </p>{" "}
            </div>
            <img src={phone} className="h-full w-full absolute" alt="" />
            <div className="absolute top-[70%] left-[32%] text-black flex">
              <p className="text-[8px]">★★★★★</p>{" "}
              <div className="w-[80px] bg-[green] text-green-800 text-[6px] mx-0.5">
                .
              </div>
              <p className="text-[8px] font-medium">{'5,613'}</p>
            </div>
            <div className="absolute top-[74%] left-[32%] text-black flex">
              <p className="text-[8px]"> <span className="text-white">★</span>★★★★</p>{" "}
              <div className="w-[10px] bg-[lightgreen] text-[lightgreen] text-[6px] mx-0.5">
                .
              </div>
              <p className="text-[8px] font-medium">{'306'}</p>
            </div>
            <div className="absolute top-[79%] left-[32%] text-black flex">
              <p className="text-[8px]"> <span className="text-white">★★</span>★★★</p>{" "}
              <div className="w-[5px] bg-[yellow] text-[lightgreen] text-[6px] mx-0.5">
                .
              </div>
              <p className="text-[8px] font-medium">{'78'}</p>
            </div>
            <div className="absolute top-[83%] left-[32%] text-black flex">
              <p className="text-[8px]"> <span className="text-white">★★★</span>★★</p>{" "}
              <div className="w-[4px] bg-[orange] text-[orange] text-[6px] mx-0.5">
                .
              </div>
              <p className="text-[8px] font-medium">{'43'}</p>
            </div>
            <div className="absolute top-[87%] left-[32%] text-black flex">
              <p className="text-[8px]"> <span className="text-white">★★★★</span>★</p>{" "}
              <div className="w-[8px] bg-[red] text-[lightgreen] text-[6px] mx-0.5">
                .
              </div>
              <p className="text-[8px] font-medium">{'112'}</p>
            </div>
          </div>
          <div data-aos="zoom-in" className="mt-8 mx-5">
            <h1 className="text-[40px] uppercase text-black font-semibold">
              Download
            </h1>
            <h2 className="text-[32px] text-black">Our New App!</h2>
            <p className=" mt-3 text-black mx-auto content_text">
              Experience seamless navigation, exclusive features, and enhanced
              performance with our new app.
            </p>
            <img
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=sg.lerna.com.marriottvacationclub&hl=en")
              }
              className="w-[300px] mx-auto mt-3"
              src={google}
              alt=""
            />
          </div>
          <div data-aos="zoom-in" className="md:mt-[10px] mx-5">
            <img
              className="w-[230px] mx-auto hidden md:block"
              src={qr}
              alt=""
            />

            <img
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/gb/app/deep-sleep-sounds-relax/id6738437515")
              }
              className="w-[300px] mx-auto md:mt-5"
              src={apple}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          data-aos="fade-up"
          className="rounded-full flex lg:w-[35%] md:w-[60%] justify-center"
        >
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

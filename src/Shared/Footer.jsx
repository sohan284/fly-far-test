import logo from "../assets/logo2.svg";
import {
  FaAppStore,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { CgTwitter, CgYoutube } from "react-icons/cg";
import { FaMeta } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
const Footer = () => {
  return (
    <div data-aos="zoom-in" className="px-5">
      <div className=" px-10 text-[wheat] text-center footerSection container mx-auto bg-[#35353586] my-12 rounded-3xl pt-[5%] pb-[2%]">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="font-extrabold text-start font-serif text-[32px] ">
              <div className="container">
                <img
                  src={logo}
                  className="lg:w-[50%] w-[250px] lg:mx-0 mx-auto"
                  alt=""
                />
              </div>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-zinc-400 md:mt-0 mt-10">
            <div className="grid gap-3 text-[22px] text-start">
              <a
                href="#banner"
                className="cursor-pointer  text-[wheat] hover:text-yellow-400"
              >
                About Us
              </a>
              <a
                href="#company-section"
                className="cursor-pointer text-[wheat] hover:text-yellow-400"
              >
                Companies
              </a>
              <a
                href="#resume"
                className="cursor-pointer text-[wheat] hover:text-yellow-400"
              >
                Resume
              </a>
              <a
                href="#packages"
                className="cursor-pointer text-[wheat] hover:text-yellow-400"
              >
                Packages
              </a>
              <a
                href="#reviews"
                className="cursor-pointer text-[wheat] hover:text-yellow-400"
              >
                Reviews
              </a>
              <a
                href="#skills"
                className="cursor-pointer text-[wheat] hover:text-yellow-400"
              >
                Skills
              </a>{" "}
            </div>
            <div className="text-start text-[22px]">
              <a
                href="#contact-us"
                className="cursor-pointer text-[wheat]  hover:text-yellow-400"
              >
                Contact Us
              </a>
              <p className="text-[wheat] mt-5">vettalink@gmail.com</p>
              <p className="text-[wheat] mt-2">+91 98765 43210</p>
              <div className="flex text-[wheat] text-[24px] mt-[5%] ">
                <FaLinkedin
                  onClick={() =>
                    (window.location.href = "https://www.linkedin.com/company/vettalink/")
                  }
                  className="cursor-pointer"
                  style={{ marginInline: "2px" }}
                />
                <FaInstagram
                  onClick={() =>
                    (window.location.href = "https://www.instagram.com/")
                  }
                  className="cursor-pointer"
                  style={{ marginInline: "2px" }}
                />
                <FaAppStore
                  onClick={() =>
                    (window.location.href =
                      "https://play.google.com/store/apps/details?id=sg.lerna.com.marriottvacationclub&hl=en")
                  }
                  className="cursor-pointer"
                  style={{ marginInline: "2px" }}
                />
                <IoLogoGooglePlaystore
                  onClick={() =>
                    (window.location.href =
                      "https://apps.apple.com/gb/app/deep-sleep-sounds-relax/id6738437515")
                  }
                  className="cursor-pointer"
                  style={{ marginInline: "2px" }}
                />
                <CgYoutube
                  className="cursor-pointer"
                  style={{ marginInline: "2px" }}
                />
                <CgTwitter    style={{ marginInline: "2px" }} className="cursor-pointer"/>
                <FaMeta    style={{ marginInline: "2px" }} className="cursor-pointer"/>
                <FaThreads    style={{ marginInline: "2px" }} className="cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#a2ca6a] mt-16">
          <span className="text-lg">©</span>2024 vettalink
        </p>
      </div>
    </div>
  );
};

export default Footer;

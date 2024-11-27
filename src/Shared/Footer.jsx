import React from "react";
import logo from "../assets/logo2.svg";
import {
  FaAppStore,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Footer = () => {
  return (
    <div data-aos="zoom-in" className="px-10">
      <div className=" px-10 text-[wheat] text-center container mx-auto bg-[#35353586] my-12 rounded-3xl pt-[5%] pb-[2%]">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="font-extrabold text-start font-serif text-[32px] ">
              <div className="container">
                <img
                  src={logo}
                  className="lg:w-[50%] w-[75%] lg:mx-0 mx-auto"
                  alt=""
                />
               
              </div>
            </h1>
          </div>
          <div className="grid grid-cols-2 text-zinc-400 md:mt-0 mt-10">
            <div className="grid gap-3 text-start">
              <a
                href="#banner"
                className="cursor-pointer text-[wheat] hover:text-yellow-400"
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
            <div className="text-start">
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
                      (window.location.href = "https://www.linkedin.com/")
                    }
                    className="cursor-pointer"
                    style={{ marginInline: "5px" }}
                  />
                  <FaInstagram
                    onClick={() =>
                      (window.location.href = "https://www.instagram.com/")
                    }
                    className="cursor-pointer"
                    style={{ marginInline: "5px" }}
                  />
                  <FaAppStore
                    onClick={() =>
                      (window.location.href =
                        "https://play.google.com/store/apps/details?id=sg.lerna.com.marriottvacationclub&hl=en")
                    }
                    className="cursor-pointer"
                    style={{ marginInline: "5px" }}
                  />
                  <IoLogoGooglePlaystore
                    onClick={() =>
                      (window.location.href =
                        "https://apps.apple.com/gb/app/deep-sleep-sounds-relax/id6738437515")
                    }
                    className="cursor-pointer"
                    style={{ marginInline: "5px" }}
                  />
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

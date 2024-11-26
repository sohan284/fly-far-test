import axios from "axios";
import { useState } from "react";
import baseUrl from "../api/baseUrl";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // To store error messages

  const handleSubmit = async () => {
    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear any previous errors

    const formData = new FormData();
    formData.append("Email", email);

    try {
      await axios.post(`${baseUrl}/users`, { email });
      await fetch(
        "https://script.google.com/macros/s/AKfycbzPKe47AhqL2zUE1AVp1QRzgB_cgSwFBfj_jvfod-XAqGUJiaBWHLPhQtBt4SRF-0rr/exec",
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (error) {
      console.error("Error submitting email and creating user:", error);
    }

    setEmail("");
  };

  return (
    <div id="contact-us" className=" pt-10 content-center text-[wheat] text-center px-5">
     
      <div data-aos="zoom-in" className="container mx-auto">
        <div className="emailSection  mx-auto  rounded-3xl mt-3 px-3">
        <h1 className="font-extrabold text-[#ffffff] title max-w-[400px] mx-auto pt-10">
          Get In Touch
        </h1>
          <div className="flex justify-center py-8 emailShape items-center gap-5 mt-3">
            <div>
              <h4 className="text-[wheat] mb-10 text-[20px] font-[300] max-w-[400px]">
                We don't judge you on your past work, what matters is your intent for the present and attitude for future.
              </h4>
              <p className="text-[wheat] font-[300] my-2 text-[16px] max-w-[400px]">Drop your email to us and we will find you with opportunities that match your ambitions!</p>
              
              {/* Email input field */}
              <input
                className="max-w-[400px] bg-[#91919171] w-full p-3 border border-[#a4de5e] rounded-lg text-[#a4de5e]"
                type="email"
                placeholder="Write your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              {/* Error message display */}
              {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

              {/* Submit button */}
              <input
                className="max-w-[400px] bg-[#a4de5e] border-[#a4de5e] border hover:opacity-85 uppercase text-black w-full p-3 font-medium  mt-5 rounded-lg"
                type="submit"
                value="Submit"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

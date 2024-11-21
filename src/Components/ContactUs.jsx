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

    setEmail(""); // Reset email after submission
  };

  return (
    <div className=" pt-10 content-center text-center px-5">
     
      <div data-aos="zoom-in" className="container mx-auto">
        <h1 className="font-extrabold text-white font-serif text-[2rem] md:text-[3rem] max-w-[800px] mx-auto">
          Get In Touch
        </h1>
        <div className="bg-[#35353586]  mx-auto from-[#36043675]  via-[#1b0035] to-[#00002791] rounded-3xl mt-3 px-3">
      
          <div className="flex justify-center py-8 emailShape items-center gap-5 mt-3">
            <div>
              <h4 className="text-zinc-200 mb-10 text-2xl font-medium max-w-[400px]">
                We don't judge you on your past work, what matters is your intent for the present and attitude for future.
              </h4>
              <p className="text-zinc-300 font-thin my-2 max-w-[400px]">Drop your email to us and we will find you with opportunities that match your ambitions!</p>
              
              {/* Email input field */}
              <input
                className="max-w-[400px] w-full p-3 text-black rounded-lg"
                type="email"
                placeholder="Write your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              {/* Error message display */}
              {error && <p className="text-red-800 font-semibold mt-2">{error}</p>}

              {/* Submit button */}
              <input
                className="max-w-[400px] bg-[#4747472a] border-zinc-200 border hover:bg-zinc-900 uppercase text-white w-full p-3 font-medium hover:opacity-85 mt-5 rounded-lg"
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

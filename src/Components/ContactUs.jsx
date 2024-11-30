import axios from "axios";
import { useState } from "react";
import baseUrl from "../api/baseUrl";
import { Toaster, toast } from "react-hot-toast";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // To store error messages

  const handleSubmit = async () => {
    // Email validation regex pattern - Updated to cover more edge cases
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
      // First API call (Axios)
      await axios.post(`${baseUrl}/users`, { email });

      // After Axios call is successful, make the second API call
      // await fetch(
      //   "https://script.google.com/macros/s/AKfycbxDa3ey_wrASfnJ-KLqomNxDy22KDJkUNyIgLX9jGKc7NvxpjmpTvMHTvv-Ct4wKFMa/exec",
      //   {
      //     method: "POST",
      //     body: formData,
      //   }
      // );

    } catch (error) {
      console.error("Error submitting email and creating user:", error);
 
    }
    toast.success("Thanks for reaching out! Your email has been successfully submitted. We'll be in touch soon!");
    setEmail(""); // Clear email input after submission
  };

  return (
    <div id="contact-us" className="pt-10 content-center text-[wheat] text-center px-5">
      <div data-aos="zoom-in" className="container mx-auto">
        <div className="emailSection mx-auto rounded-3xl mt-3 px-3">
          <h1 className="font-extrabold text-[#ffffff] title max-w-[400px] mx-auto pt-10">
            Get In Touch
          </h1>
          <div className="flex justify-center py-8 emailShape items-center gap-5 mt-3">
            <div>
              <h4 className="text-[wheat] mb-10 text-[20px] font-[300] max-w-[400px]">
                We don't judge you on your past work, what matters is your intent for the present and attitude for future.
              </h4>
              <p className="text-[wheat] font-[300] my-2 text-[20px] max-w-[400px]">
                Drop your email to us and we will find you with opportunities that match your ambitions!
              </p>

              {/* Email input field */}
              <input
                className="max-w-[400px] bg-[#91919171] w-full p-3 border border-[#a4de5e] rounded-lg text-[black]"
                type="email"
                placeholder="Write your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Error message display */}
              {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

              {/* Submit button */}
              <input
                className="max-w-[400px] bg-[#a4de5e] border-[#a4de5e] border hover:opacity-85 uppercase text-black w-full p-3 font-semibold mt-5 rounded-lg"
                type="submit"
                value="Submit"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Toaster notification component (should be placed here in your return JSX) */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactUs;

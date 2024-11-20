import axios from "axios";
import { useState } from "react";
import baseUrl from "../api/baseUrl";

const ContactUs = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
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
    <div  className="min-h-[70vh] content-center contactUsSection text-center px-5">
      <div data-aos="fade-up" className="container mx-auto">
        <h1 className="font-extrabold font-serif text-[2rem] md:text-[3rem] max-w-[800px] mx-auto">
          Get In Touch
        </h1>
        <div className="flex justify-center items-center gap-5 mt-12">
          <div>
            <input
              className="max-w-[400px] w-full p-3 text-black rounded-lg"
              type="email"
              placeholder="Write your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="max-w-[400px] premiumButton w-full p-3 font-medium mt-5 rounded-lg"
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

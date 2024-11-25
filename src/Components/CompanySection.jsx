import { useState } from "react";
import baseUrl from "../api/baseUrl";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
const CompanySection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data = [],
  } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/companies`);
      return response.data.data;
    },
  });
  const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setError("");
  };
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
    setOpen(false)
  };
  const filteredCompanies = data.filter((company) =>
    company.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div id="company-section"  className="min-h-screen companySection text-center p-5 ">
      <div className="container mx-auto">
        <h1 data-aos="fade-up" className=" pt-[5%] font-extrabold font-serif text-[32px] max-w-[400px] mx-auto text-[#8a65a3]">
          Get referred by employees form 1000+ companies
        </h1>
        <button data-aos="zoom-in" onClick={handleClickOpen} className="bg-[#8a65a3] transition-transform ease-linear text-[wheat] md:w-[300px] uppercase my-3 rounded-full p-3 text-[16px] mx-auto font-bold hover:scale-105">Get Referred Now</button>
     
        <p data-aos="fade-up" className="lg:text-xl text-[#8a65a3] font-[300] max-w-[400px] mx-auto mt-2 text-[20px]">
          Our referrer network is thousands strong and growing. Get referred to
          your dream job today, by employees at your dream company.
        </p>
        <div data-aos="fade-up" className="relative flex justify-end mt-12">
          <input
            type="text"
            placeholder="Search..."
            className="md:w-72 py-1.5 pl-2 border t  bg-[#eb008900] border-[#8a65a3] rounded-md focus:outline-none focus:border-[#b44d91] text-[#8a65a3]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute top-3 right-3 text-[#8a65a3]" />
        </div>
        <div className="grid md:grid-cols-5 lg:grid-cols-8 grid-cols-3 gap-5 mt-5">
          {filteredCompanies.slice(0,32).map((company, index) => (
            <div data-aos="zoom-in"
              key={index}
              className="flex flex-col items-center  text-[#8a65a3] p-3 rounded-xl shadow-lg font-semibold"
            >
              <div className="w-[48px] rounded-full">
                <img src={company.url} alt="" className="w-full rounded-full" />
              </div>
              <p>{company.name}</p>
            </div>
          ))}
        </div>
      </div>
      <React.Fragment>
     
     <Dialog
       onClose={handleClose}
       aria-labelledby="customized-dialog-title"
       open={open}
       
     >
       <DialogTitle style={{backgroundColor:'#89d964',color:'black'}}  sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Join the Waitlist
       </DialogTitle>
       <IconButton
         aria-label="close"
         onClick={handleClose}
         sx={(theme) => ({
           position: 'absolute',
           right: 8,
           top: 8,
           color: theme.palette.grey[500],
         })}
       >
         <CloseIcon />
       </IconButton>
       <DialogContent style={{backgroundColor:'#89d964', padding:'50px'}} dividers>
       <input
               className="max-w-[400px] bg-[white] w-full p-3 border border-yellow-300 rounded-lg text-[black]"
               type="email"
               placeholder="Write your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
             
             {/* Error message display */}
             {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

             {/* Submit button */}
             <input
               className="max-w-[400px] bg-[#8a65a3] border-zinc-500 border hover:opacity-85 uppercase text-[wheat] w-full p-3 font-medium  mt-5 rounded-lg"
               type="submit"
               value="Submit"
               onClick={handleSubmit}
             />
       </DialogContent>
     </Dialog>
   </React.Fragment>
    </div>
  );
};

export default CompanySection;

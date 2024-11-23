import Lottie from "lottie-react";
import animationData from "../assets/airobot.json"; // Ensure this path is correct
import { useState } from "react";
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
import baseUrl from "../api/baseUrl";
import axios from "axios";
const BannerSection = () => {
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

  return (
    <div className="min-h-screen bannerSection text-white flex flex-col text-center">
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
      {/* <h1 className="pt-[5%] text-[#EBFE19] font-extrabold font-sans text-[48px]">
        Refer-AI
      </h1> */}

      <h2 className="md:mt-[2%] mt-[10%] text-[wheat] font-bold text-[32px] lg:text-[48px] text-wrap">
        Request job referrals in <br /><span className="text-[#EBFE19]"> seconds</span>
      </h2>

      <div className="h-12 mx-auto flex p-2 mt-10 items-center rounded-xl text-[wheat] border-[wheat] border md:w-[400px] ">
        <img
          className="h-full rounded-lg mr-2"
          src="https://i.ibb.co.com/8cgLSQ5/amazon.jpg"
          alt=""
        />{" "}
        Someone at <span className="font-bold mx-1">Amazon</span> wants to refer
        you.
      </div>
      <div className="h-12 mx-auto flex p-2 mt-3 items-center rounded-xl text-[wheat] border-[wheat] border md:w-[400px] ">
        <img
          className="h-full rounded-lg mr-2"
          src="https://i.ibb.co.com/qms7R28/microsoft.png"
          alt=""
        />{" "}
        You've been referred into{" "}
        <span className="font-bold mx-1"> Microsoft </span> 🎉
      </div>

      <button onClick={handleClickOpen} className="bg-[#EBFE19] transition-transform ease-linear text-black w-[300px] uppercase mt-10 rounded-full p-3 text-[16px] mx-auto font-bold hover:scale-105">Get Referred Now</button>
      <div className="flex justify-center">
        <div className="rounded-full lg:w-[30%] md:w-[50%] w-[80%] flex justify-center">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
      <React.Fragment>
     
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <DialogTitle style={{backgroundColor:'black',color:'wheat'}}  sx={{ m: 0, p: 2 }} id="customized-dialog-title">
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
        <DialogContent style={{backgroundColor:'black', padding:'50px'}} dividers>
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
                className="max-w-[400px] bg-[#EBFE19] border-zinc-500 border hover:opacity-85 uppercase text-black w-full p-3 font-medium  mt-5 rounded-lg"
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

export default BannerSection;

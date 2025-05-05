import React, { useRef } from "react";
import Slider from "react-slick";
import slider1 from "../assets/sliderimg1.webp";
import slider2 from "../assets/sliderimg2.webp";
import slider3 from "../assets/sliderimg3.webp";
import slider4 from "../assets/sliderimg4.webp";
import slider5 from "../assets/sliderimg5.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Add this declaration to handle image imports
declare module "*.webp" {
  const content: string;
  export default content;
}

export default function CarouselHome() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          display: "flex",
          justifyContent: "right",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
      className="hidden lg:block"
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: "#d3ebfd",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      ></div>
    ),
  };

  // Define the image array with proper typing
  const sliderImages: string[] = [slider1, slider2, slider3, slider4, slider5];

  return (
    <div className="slider-container my-10 mx-auto relative">
      <Slider ref={sliderRef} {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index} className="relative w-full h-[220px]">
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ErrorIcon from "@mui/icons-material/Error";
import SearchHeader from "../../Components/SearchHeader";
import SearchTabs from "../../Components/SearchTabs";
import CarouselHome from "../../Components/CarouselHome";
import BasicTabs from "../../Components/FlightTypeTab"; // Import BasicTabs instead of FlightTypeTab
import FlightTypeTab from "../../Components/FlightTypeTab";

const Home = () => {
  return (
    <div className="max-w-[1180px] mx-auto mt-10">
      <SearchHeader />
      <SearchTabs />
      <FlightTypeTab /> 
      <CarouselHome />
    </div>
  );
};

export default Home;

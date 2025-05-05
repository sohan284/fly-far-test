import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from "@mui/icons-material/Search";
import { SlCalender } from "react-icons/sl";

interface FlightSearchProps {
  // Optional props can be added here if needed
}

export default function FlightSearch({}: FlightSearchProps) {
  return (
    <div className="flex gap-1 w-full mx-auto">
      {/* Origin Airport */}
    <div className='grid gap-1 lg:w-[420px] '>
    <div className="flex w-full items-center px-5 py-4 rounded bg-white flex-1">
        <FlightTakeoffIcon className="text-gray-700 mr-3" fontSize="small" />
        <div>
          <div className="text-sm text-[#202124] font-medium">DAC, Hazrat Sha Jalal Intl Airport</div>
        </div>
      </div>

      {/* Destination Airport */}
      <div className="flex items-center px-4 py-3 rounded bg-white flex-1">
        <FlightLandIcon className="text-gray-700 mr-3" fontSize="small" />
        <div>
          <div className="text-sm text-gray-700 font-medium">DXB, Dubai Intl Airport</div>
        </div>
      </div>
    </div>
      
      {/* Date Selection */}
   <div className=' lg:w-[320px] grid grid-cols-2 gap-1'>
   <div className="flex  px-4 py-2 bg-white rounded">
        <CalendarMonthIcon className="text-gray-700 mr-3" fontSize='medium' />
        <div className='flex flex-col items-center mt-2'>
          <div className="text-xs text-gray-700">August</div>
          <div className="flex flex-col items-center">
            <span className="text-[45px] leading-none text-[#202124]  font-semibold">22</span>
            <span className="text-xs text-gray-700">Tuesday</span>
          </div>
        </div>
      </div>
       {/* Return Flight Option */}
       <div className="flex flex-col px-4 py-2 bg-white rounded">
       <SlCalender />
        <div className=' mt-2'>
          <div className="text-xs text-gray-700">Click to Return <br/> Flight</div>
         
        </div>
      </div>
      
   </div>
     
    <div className='lg:w-[280px] grid gap-1'>
          {/* Economy Class */}
    
        {/* Economy Class */}
        <div className="flex items-center px-4 py-3 bg-white rounded">
        <div className="text-sm text-gray-700">Economy</div>
      </div>
      <div className="flex items-center px-4 py-3 bg-white rounded">
        <div className="text-sm text-gray-700">1 Passenger</div>
      </div>
      
    </div>
      {/* Search Button */}
      <div className="flex items-center justify-center rounded bg-[#2A2E2D] hover:bg-gray-800 lg:w-[134px] cursor-pointer">
        <button className="flex flex-col items-center justify-center h-full w-full text-white">
          <SearchIcon fontSize='large' />
          <span className="ml-2 font-medium">Search</span>
        </button>
      </div>
    </div>
  );
}
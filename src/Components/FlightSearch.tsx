import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from "@mui/icons-material/Search";
interface FlightSearchProps {
  // Optional props can be added here if needed
}

export default function FlightSearch({}: FlightSearchProps) {
  return (
    <div className="flex flex-row w-full mx-auto bg-white rounded shadow-md">
      {/* Origin Airport */}
      <div className="flex items-center px-4 py-3 border-r border-gray-200 flex-1">
        <FlightTakeoffIcon className="text-gray-700 mr-3" fontSize="small" />
        <div>
          <div className="text-sm text-gray-700 font-medium">DAC, Hazrat Sha Jalal Intl Airport</div>
        </div>
      </div>

      {/* Destination Airport */}
      <div className="flex items-center px-4 py-3 border-r border-gray-200 flex-1">
        <FlightLandIcon className="text-gray-700 mr-3" fontSize="small" />
        <div>
          <div className="text-sm text-gray-700 font-medium">DXB, Dubai Intl Airport</div>
        </div>
      </div>
      
      {/* Date Selection */}
      <div className="flex items-center px-4 py-2 border-r border-gray-200 w-40">
        <CalendarMonthIcon className="text-gray-700 mr-3" fontSize='small' />
        <div>
          <div className="text-xs text-gray-700">August</div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">22</span>
            <span className="text-xs text-gray-700">Tuesday</span>
          </div>
        </div>
      </div>
      
      {/* Return Flight Option */}
      <div className="flex flex-col justify-center px-4 py-3 border-r border-gray-200 w-40">
        <div className="text-xs text-blue-600">Click to Return Flight</div>
        <div className="text-sm text-gray-700">1 Passenger</div>
      </div>
      
      {/* Economy Class */}
      <div className="flex items-center justify-center px-4 py-3 border-r border-gray-200 w-32">
        <div className="text-sm text-gray-700">Economy</div>
      </div>
      
      {/* Search Button */}
      <div className="flex items-center justify-center rounded-sm bg-[#2A2E2D] hover:bg-gray-800 w-24 cursor-pointer">
        <button className="flex flex-col items-center justify-center h-full w-full text-white">
          <SearchIcon fontSize='large' />
          <span className="ml-2 font-medium">Search</span>
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DomainIcon from '@mui/icons-material/Domain';
import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';
const SearchTabs = () => {
    const tabs = [
        { label: 'Air Ticket' , icon : <AirplanemodeActiveIcon className='rotate-45' /> },
        { label: 'Hotel' , icon : <DomainIcon /> },
        { label: 'Holidays' , icon : <TravelExploreSharpIcon /> },
        { label: 'PNR Share' , icon : <TravelExploreSharpIcon />},
        { label: 'Group Fare' , icon : <TravelExploreSharpIcon />},
        { label: 'Visa' , icon : <TravelExploreSharpIcon />},
    ];
    return (
        <div className='flex gap-2 mt-10 flex-wrap justify-start'>
        {/* Tabs container */}
        {tabs?.map((tab, index) => (
            <div key={index}>
                <div className='bg-[#E34825] text-white rounded-[5px] px-4 py-2 flex items-center gap-2'>
                {tab.icon}<p className='inline'> {tab.label}</p>
                </div>
            </div>
        ))}
                </div>
    );
};

export default SearchTabs;
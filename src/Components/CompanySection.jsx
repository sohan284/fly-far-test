import { useState } from "react";
import baseUrl from "../api/baseUrl";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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

  const filteredCompanies = data.filter((company) =>
    company.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen companySection text-center p-5 ">
      <div className="container mx-auto">
        <h1 data-aos="fade-up" className=" pt-[5%] font-extrabold font-serif text-[32px] max-w-[400px] mx-auto text-[#EBFE19]">
          Get referred by employees form 1000+ companies
        </h1>
        <p data-aos="fade-up" className="lg:text-xl font-[300] max-w-[400px] mx-auto mt-2 text-[20px]">
          Our referrer network is thousands strong and growing. Get referred to
          your dream job today, by employees at your dream company.
        </p>
        <div data-aos="fade-up" className="relative flex justify-end mt-12">
          <input
            type="text"
            placeholder="Search Company..."
            className="md:w-72 py-1.5 pl-2 border bg-zinc-800 border-yellow-300 rounded-md focus:outline-none focus:border-yellow-400 text-yellow-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute top-3 right-3 text-yellow-400" />
        </div>
        <div className="grid md:grid-cols-5 lg:grid-cols-8 grid-cols-3 gap-5 mt-5">
          {filteredCompanies.slice(0,32).map((company, index) => (
            <div data-aos="zoom-in"
              key={index}
              className="flex flex-col items-center  text-[wheat] p-3 rounded-xl shadow-lg font-semibold"
            >
              <div className="w-[48px] rounded-full">
                <img src={company.url} alt="" className="w-full rounded-full" />
              </div>
              <p>{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySection;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ErrorIcon from "@mui/icons-material/Error";

const SearchHeader = () => {
    return (
        <div className="">
             <div className="flex ">
        <div className="bg-white px-2 py-1 mr-1 flex items-center justify-center">
          <SearchIcon className="bg-white" />
        </div>
        <div className="flex bg-white text-center items-center text-nowrap gap-2 px-2 py-2">
            <ErrorIcon className="text-[#E34825] mr-2" />
          <h1 className="text-[14px]">
            <div className="marquee-container">
              <p className="marquee-text">
                প্রিয় ট্রেড পার্টনার, আমাদের সাথে হোয়াটসঅ্যাপ এ যোগাযোগ করতে
                উপরে থাকা হোয়াটসঅ্যাপ বাটনটিতে ক্লিক করুন, অথবা +৮৮০ ১৭৫৫ ৫৭২ ০৯৮
                এবং +৮৮০ ১৭৫৫ ৫৭২
              </p>
            </div>
          </h1>
          <div className="bg-[#E34825] flex h-8 w-[147px] text-center items-center gap-2 text-white text-[13px] px-2 py-1 rounded-full">
            <p className="bg-white rounded-full w-5 h-5 text-center font-bold text-[12px] flex justify-center items-center text-[#E34825]">
              ৳
            </p>{" "}
            Check Balance
          </div>
        </div>
      </div>
        </div>
    );
};

export default SearchHeader;
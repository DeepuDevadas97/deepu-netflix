"use client";
import React from "react";
import Reload from "../../../public/icons/Reload";

const CategoryLabel = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-x-[10px] sm:gap-x-[15px]">
      <button
        onClick={handleReload}
        className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-transparent rounded-full border border-[#ffffffb3] flex items-center justify-center p-[7px] cursor-pointer focus:outline-2 focus:outline-white focus:outline-offset-1 hover:bg-[#ffffff1a]"
      >
        <Reload />
      </button>
      <div className="pr-[16px] sm:pr-[52px] pl-[8px] sm:pl-[12px] py-[5px] sm:py-[7px] border-l-[3px] border-l-[#dcdcdc] text-[14px] sm:text-[16px] text-white bg-[#33333399] font-light flex items-center">
        U/A 13+
      </div>
    </div>
  );
};

export default CategoryLabel;


import React from "react";
import InfoIcon from "../../../public/icons/InfoIcon";

const MoreInfo = () => {
  return (
    <button className="py-[9px] pr-[27px] pl-[23px] text-[18px] font-medium text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] duration-300 rounded-sm flex items-center gap-x-3 cursor-pointer">
      <InfoIcon/> More Info
    </button>
  );
};

export default MoreInfo;

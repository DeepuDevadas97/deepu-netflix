'use client';

import React from "react";
import BellIcon from "../../../public/icons/BellIcon";
import Image from "next/image";

const Notification = () => {
  return (
    <div className="relative inline-block group ">
      <div className="cursor-pointer">
        <BellIcon />
      </div>

      <div
        id="popover-description"
        role="tooltip"
        className="absolute right-[-2px] z-10 w-[400px] h-[300px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 pt-[25px]"
      >
        <div className="p-4 space-y-3 text-sm bg-black opacity-[0.9] border-t-[2px] border-t-white w-full h-full relative">
          <div className="absolute top-[-12px] right-2">
            <Image src={'/icons/arrow-top.svg'} width={14} height={10} alt="arrow-top"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

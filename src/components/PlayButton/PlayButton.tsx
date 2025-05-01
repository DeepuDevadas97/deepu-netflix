import Link from "next/link";
import React from "react";
import PlayIcon from "../../../public/icons/PlayIcon";

const PlayButton = () => {
  return (
    <Link href={"#"} >
      <button className="py-[9px] pr-[27px] pl-[23px] text-[18px] font-medium text-black bg-white hover:!bg-[#ffffffbf] duration-300 rounded-sm flex items-center gap-x-3 cursor-pointer">
        <PlayIcon/> Play
      </button>
    </Link>
  );
};

export default PlayButton;

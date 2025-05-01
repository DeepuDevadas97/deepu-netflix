import React from "react";

const PublishBadge = () => {
  return (
    <div className="flex items-center justify-center rounded-xs overflow-hidden">
      <div className="max-sm:text-[8px] text-[10px] font-medium text-white bg-[#e70617] px-1">
        Recently added
      </div>
      <div className="max-sm:text-[8px] text-[10px] font-medium text-black bg-white px-1">
        Watch now
      </div>
    </div>
  );
};

export default PublishBadge;

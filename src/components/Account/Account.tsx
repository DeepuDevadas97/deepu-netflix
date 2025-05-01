// 'use client';

// import React from "react";
// import Image from "next/image";
// import Avatar from "../../../public/icons/Avatar";
// import Link from "next/link";

// const Account = () => {
//   return (
//     <div className="relative inline-block group ">
//       <Link className="cursor-pointer block rounded-sm overflow-hidden" href={'#'}>
//         <Avatar/>
//       </Link>

//       <div
//         id="popover-description"
//         role="tooltip"
//         className="absolute right-[-2px] z-10 w-[400px] h-[300px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 pt-6"
//       >
//         <div className="p-4 space-y-3 text-sm bg-black opacity-[0.7] border-t-[2px] border-t-white w-full h-full relative">
//           <div className="absolute top-[-10px] right-2">
//             <Image src={'/icons/arrow-top.svg'} width={12} height={8} alt="arrow-top"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;




'use client';

import React from "react";
import Image from "next/image";
import Avatar from "../../../public/icons/Avatar";
import Link from "next/link";

const Account = () => {
  return (
    <div className="relative inline-block group">
      <Link className="cursor-pointer flex items-center gap-[10px]" href={'#'}>
        <div className="rounded-sm overflow-hidden">
            <Avatar />
        </div>
        <Image
          src="/icons/arrow-top.svg"
          width={10}
          height={10}
          alt="dropdown arrow"
          className="transition-transform duration-300 rotate-180 group-hover:rotate-360"
        />
      </Link>

      <div
        id="popover-description"
        role="tooltip"
        className="absolute right-0 z-10 w-[220px] h-[300px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 pt-5"
      >
        <div className="p-4 space-y-3 text-sm bg-black opacity-[0.9] border border-[#4d4d4d] w-full h-full relative">
          <div className="absolute top-[-11px] right-[26px]">
            <Image src={'/icons/arrow-top.svg'} width={14} height={10} alt="arrow-top"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;


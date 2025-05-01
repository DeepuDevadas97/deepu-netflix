

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import TopMenus from "./TopMenus";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 py-[18px] ${
        isScrolled ? "bg-[#141414]" : "bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]"
      }`}
    >
      <div className="container flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-x-4 md:gap-x-[45px]">
          <Link href={'#'}>
            <div className="logo-wrapper h-[30px]">
              <Image
                src="/images/netflix.svg"
                width={93}
                height={30}
                alt="netflix-logo"
                className="transition-all h-full"
              />
            </div>
          </Link>
          <NavLinks />
          {/* <div className="max-lg:hidden lg:block"><NavLinks /></div> */}
        </div>
        <TopMenus />
      </div>
    </header>
  );
};

export default Header;

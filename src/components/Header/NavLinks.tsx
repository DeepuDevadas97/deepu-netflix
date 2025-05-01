"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Tv Shows", href: "#" },
  { label: "Movies", href: "#" },
  { label: "New & Popular", href: "#" },
  { label: "My List", href: "#" },
  { label: "Browse by Languages", href: "#" },
];

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav>
      <button
        className="lg:hidden text-sm text-white font-light flex items-center gap-x-[5px]"
        onClick={() => {
          setshowMenu(!showMenu);
        }}
      >
        Browse <Image src={'/icons/arrow-top.svg'} width={14} height={10} alt="icon" className="rotate-180"/>
      </button>
      <ul
        className={`flex items-center gap-5 max-lg:flex-col max-lg:absolute max-lg:left-[4%] max-lg:top-[70px] max-lg:bg-black/90 max-lg:py-6 max-lg:px-10 max-lg:border-t-1 max-lg:border-t-white ${
          showMenu ? "max-lg:flex" : "max-lg:hidden"
        }`}
      >
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              onClick={() => setActiveLink(item.label)}
              className={`text-sm text-textColor hover:text-textHover font-light ${
                activeLink === item.label
                  ? "font-normal text-white"
                  : "font-light"
              } transition-colors duration-300`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

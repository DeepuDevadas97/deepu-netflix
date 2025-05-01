"use client";

import { useState, useRef, useEffect } from "react";
import SearchIcon from "../../../public/icons/SearchIcon";
// import { Search } from 'lucide-react'

const SearchOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!inputRef.current?.parentElement?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className={`transition-all duration-300 ease-in-out cursor-pointer relative z-20 ${
          isOpen ? "text-white" : "text-gray-300"
        }`}
      >
        <SearchIcon />
      </button>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={`absolute right-[-5px] bg-black text-white border-[0.5px] border-gray-400 px-3 py-1 ml-2 outline-none transition-all duration-300 ease-in-out rounded-none font-light text-[16px] ${
          isOpen
            ? "w-64 opacity-100 pointer-events-auto"
            : "w-0 opacity-0 pointer-events-none"
        }`}
        onBlur={() => setIsOpen(false)}
      />
    </div>
  );
};
export default SearchOption;

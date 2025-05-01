import Link from "next/link";
import React from "react";
import Facebook from "../../../public/icons/Facebook";
import Instagram from "../../../public/icons/Instagram";
import Twitter from "../../../public/icons/Twitter";
import Youtube from "../../../public/icons/Youtube";

const footerLinks: string[] = [
  "Audio Description",
  "Help Center",
  "Gift Cards",
  "Media centre",
  "Investor Relations",
  "Jobs",
  "Terms of Use",
  "Privacy",
  "Legal Notices",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-[20px] sm:pt-[70px] pb-5 bg-[#141414]">
      <div className="container">
        <div className="max-w-[980px] mx-auto">
          <nav className="social-links">
            <ul className="flex items-center gap-x-6">
              <li>
                <Link
                  href="https://www.facebook.com/NetflixIN/"
                  target="_blank"
                  className="w-[24px] h-[24px] duration-300 hover:brightness-75"
                >
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/Netflix_IN/"
                  target="_blank"
                  className="w-[24px] h-[24px] duration-300 hover:brightness-75"
                >
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/netflixindia"
                  target="_blank"
                  className="w-[24px] h-[24px] duration-300 hover:brightness-75"
                >
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
                  target="_blank"
                  className="w-[24px] h-[24px] duration-300 hover:brightness-75"
                >
                  <Youtube />
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="mt-6">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px] text-[#808080] leading-[1.2]">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="duration-300 hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button className="text-[13px] p-[6.5px] text-[#808080] border border-[#808080] bg-transparent hover:text-white hover:border-white duration-300 cursor-pointer mt-7 mb-5">
            Service Code
          </button>

          <div>
            <span className="text-[11px] text-[#808080]">© 1997-2025 Netflix, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

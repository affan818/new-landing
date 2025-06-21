import React from "react";
import logo from "../assets/favicon.jpg";
import { MdWifiCalling } from "react-icons/md";

function Header() {
  return (
    <header className="w-full bg-black shadow-md px-6 md:px-10 py-3 flex items-center justify-between">
      {/* Left Side - Logo */}
      <div className="flex-shrink-0">
        <img src={logo} width={120} alt="Logo" className="object-contain" />
      </div>

      {/* Right Side - Call to Action Button */}
      <a href="tel:+918767358558">
        <button className="flex items-center gap-2 text-white font-semibold text-sm md:text-lg px-4 md:px-6 py-2 rounded-md bg-gradient-to-r from-yellow-700 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300 shadow-md transition duration-300 ease-in-out cursor-pointer">
          <MdWifiCalling className="text-xl" />
          <span>Call Now</span>
        </button>
      </a>
    </header>
  );
}

export default Header;

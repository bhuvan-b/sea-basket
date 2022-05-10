import React from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="nav flex font-Roboto font-bold text-[#0E79BD] justify-between items-center">
      <div className="">
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="space-x-2 md:space-x-8 text-sm sm:text-lg items-end">
        <a href="#Category">Category</a>
        <a href="#Faqs">FAQs</a>
        <a href="#Cart">My Cart</a>
        <button className="rounded-md bg-[#0E79BD] text-white p-1 px-8 font-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

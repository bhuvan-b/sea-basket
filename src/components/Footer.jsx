import React from "react";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="font-Roboto text-white bg-[#0E79BD] mt-8 py-10 px-4">
      {/* <div className="w-[40%] grid grid-cols-2">
        <div>Support</div>
        <div>Terms & Conditions</div>
        <div>About Us</div>
        <div>Return & Refund Policy</div>
        <div>Privacy Policy</div>
        <div>Shipping & Delivery Policy</div>
      </div> */}

      <div className="flex justify-around mb-12 space-x-4 lg:space-x-0">
        <div>
          <img src={Logo} alt="" srcset="" />
        </div>

        <div className="flex sm:space-x-8 font-Roboto font-medium text-sm lg:text-md">
          <div className="flex flex-col space-y-4">
            <a href=""> Support </a>
            <a href="">About Us</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="">Terms & Conditions</a>
            <a href="">Return & Refund Policy</a>
            <a href="">Shipping & Delivery Policy</a>
          </div>
        </div>
      </div>
      <div className="text-center">
        Sea Basket I All Rights Reserved I 2021 Copyright
      </div>
    </div>
  );
};

export default Footer;

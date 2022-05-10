import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const HarItem = ({ title, content }) => {
  return (
    <div className="bg-white font-Roboto shadow-md border border-2 rounded-2xl p-10 px-8">
      <h2 className="text-xl font-semibold tracking-wider">{title}</h2>
      <div className="py-4">{content}</div>
      <div className="flex justify-end items-end text-xl py-2 text-[#0E79BD]">
        <a href="#" className="flex justify-center items-center">
          <div className="">READ MORE</div>
          <IoIosArrowForward className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default HarItem;

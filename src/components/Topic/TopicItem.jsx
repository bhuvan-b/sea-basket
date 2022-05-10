import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./TopicStyle.css";

const TopicItem = ({ title, content, imgpath }) => {
  return (
    <div className="bg-white flex lg:flex-row justify-center items-center flex-col font-Roboto shadow-md border border-2 rounded-3xl">
      <div className="flex flex-col justify-around lg:w-[40%] py-12 px-8 lg:px-0 lg:pl-12">
        <div className="text-xl font-semibold tracking-wider">{title}</div>
        <div className="py-4">{content}</div>
        <div className="flex  text-xl py-2 text-[#0E79BD]">
          <a href="#" className="flex justify-center items-center">
            <div className="">READ MORE</div>
            <IoIosArrowForward className="text-3xl" />
          </a>
        </div>
      </div>
      <div className=" lg:w-[60%] pb-0 lg:pb-0 ">
        <img className="lg:rounded-r-3xl" id="topic-img" src={imgpath} alt="" />
      </div>
    </div>
  );
};

export default TopicItem;

import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> James</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            An Inspiring Computer Science Student
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            *self intro start next line*
          </p>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            !!!START HERE!!! bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

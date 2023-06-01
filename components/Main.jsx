import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
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
          <h2 className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            A bit about me
          </h2>
          <p className="py-4 text-lg text-gray-600 sm:max-w-[70%] m-auto font-bold">
            I'm currently a rising senior at Rutgers University studying
            Computer Science with a minor in Data Science. I will be a mobile
            app developer intern for Live Boston 617 during my 2023 spring
            semester as an co-op.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/junfeng-wang-8563811b6/"
                target="_blank"
                rel=""
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/jamescodestuff"
                target="_blank"
                rel=""
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="mailto:wangjames797school@gmail.com"
                target="_blank"
                rel=""
              >
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.dropbox.com/s/qveqbf3leqfevek/Junfeng%20Wang%20Resume.pdf?dl=0"
                target="_blank"
                rel="noreferrer"
              >
                <BsFileEarmarkText />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

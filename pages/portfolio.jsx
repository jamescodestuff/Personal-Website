import React from "react";
import portfolioImg from "../public//assets/projects/website.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Personal Portfolio Website</h2>
          <h3>Next.JS / Tailwind / HTML CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-lg">
            This website was developed utilizing Next.js, a React-based
            framework, and Tailwind CSS. It comprises six pages highlighting my
            professional skills and background. The project was constructed
            using various tools and front-end design principles, including
            flexbox, grid, hover effects, server-side rendering, lazy-loading
            images, built-in client-side routing, and a mobile-responsive,
            scalable UI that adapts to the browser window size.
          </p>
          <p className="text-lg py-4">
            As I progress in my professional career, I regularly update and
            improve this portfolio, ensuring that it accurately showcases my
            professional development and growth over time. This includes adding
            new projects and skills and highlighting relevant experience
            acquired along the way. By doing so, I aim to provide a
            comprehensive and up-to-date representation of my capabilities and
            qualifications to potential employers and clients.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://www.jameswangportfolio.com/"
              target="_blank"
              rel=""
            >
              Project Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/jamescodestuff/Personal-Website"
              target="_blank"
              rel=""
            >
              Source Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">tech</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;

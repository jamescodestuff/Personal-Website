import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">bio</p>
          <p className="py-2 text-gray-600">
            Follow along as I Build a NEXT JS Portfolio Website With Tailwind
            CSS. I wanted to update the portfolio and since I am starting to
            learn Next JS I thought I would build the new version with Next JS
            using Tailwind CSS for the styling. Lots of really cool features in
            Next JS - most known for server side rending, lazy loading images,
            and a built in routing system. We won't be utilizing server side
            rending in this particular build, however we do incorporate lazy
            loading images as well as the built in router.
          </p>
          <p className="py-2 text-gray-600">
            (Just to be clear to take advantage of lazy loading you must use the
            "Image" component imported from next/image. Images used as "img"
            will not be lazy loaded. Thanks for following along! ZeroTo Mastery:
            - Master React JS Course - https://bit.ly/Learn-React-JS - Complete
            Web Developer in 2023 - https://bit.ly/Complete-Web-Developer...
            Coding Challenges!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">link</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://www.usnews.com/cmsmedia/a7/b4/fc82a15549afac6b47117ceb53b1/161031-stock.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

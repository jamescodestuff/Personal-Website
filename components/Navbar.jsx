import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // top nav bar
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/pfp.jpg"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          {/* different pages on the nav bar */}
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-xl uppercase hover:border-b">home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl uppercase hover:border-b">about</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl uppercase hover:border-b">
                projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl uppercase hover:border-b">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* side bar */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[65%] sm:w-[50%] md:w[35%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full item-center justify-between">
              <Image
                src="/../public/assets/pfp.jpg"
                alt="/"
                width="50"
                height="50"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-grey my-4">
              {/* <p className='w-[85%] md:w-[80%] py-4'>short sentence</p> */}
            </div>
          </div>
          {/* different pages and icons on the side bar */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-lg">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-lg">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-lg">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-lg">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-lg">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase text-lg tracking-widest text-[#5651e5]">
                <strong>Let's connect!</strong>
              </p>
              <div className="flex items-center justify-around my-4 w-full sm:w[80%]">
                {/* icons */}
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

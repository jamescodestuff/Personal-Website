import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "Next/Link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFileEarmarkText } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#lf2937");
  const router = useRouter();
  useEffect(() => {
    if (
      router.asPath === "/portfolio"
      // || other project page
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    // top nav bar
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          className="rounded-2xl"
          src="/../public/assets/1.jpg"
          alt="/"
          width="110"
          height="40"
        />
        <div>
          {/* different pages on the nav bar */}
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-xl uppercase hover:border-b">home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-xl uppercase hover:border-b">about</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-xl uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-xl uppercase hover:border-b">
                projects
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
                className="rounded-2xl"
                src="/../public/assets/2.jpg"
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
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-lg">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-lg">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-lg">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-lg">
                  Projects
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase text-lg tracking-widest text-[#5651e5]">
                <strong>Let's connect!</strong>
              </p>
              <div className="flex items-center justify-around my-4 w-full sm:w[80%]">
                {/* icons */}
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.linkedin.com/in/junfeng-wang-8563811b6/"
                    target="_blank"
                    rel=""
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://github.com/jamescodestuff"
                    target="_blank"
                    rel=""
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="mailto:wangjames797school@gmail.com"
                    target="_blank"
                    rel=""
                  >
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
      </div>
    </div>
  );
};
export default Navbar;

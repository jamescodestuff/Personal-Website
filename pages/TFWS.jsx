import React from "react";
import foodImg from "../public/assets/projects/food.jpg";
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
          src={foodImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">The Foodie Web Service</h2>
          <h3>Python & Flask</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-lg">
            This project integrates two separate service APIs, Geocodio and
            Yelp. The purpose of this project is to provide a seamless
            experience for finding nearby restaurants based on a given address.
            It starts with the GeocodioClient class, which converts a physical
            address into geographical coordinates (latitude and longitude). This
            step is crucial because geographical coordinates are required for
            the next part of the process. Once the address is converted, the
            YelpClient class takes these coordinates and makes requests to the
            Yelp API to retrieve a list of nearby restaurants. The response from
            Yelp includes important details such as the restaurant's name,
            rating, and address. The overall purpose of this project is to
            simplify the process of finding nearby dining options by leveraging
            geographic and business information services. Users only need to
            input an address, and the system handles the rest.
          </p>
          <p className="text-lg py-4"></p>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/jamescodestuff/The-Foodie-Web-Service"
              target="_blank"
              rel=""
            >
              Source Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Flask
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Yelp & Geocodio API
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

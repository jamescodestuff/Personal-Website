import React from "react";
import buymeimg from "../public/assets/projects/buyme.jpg";

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
          src={buymeimg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">BUYME!</h2>
          <h3>Java & SQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-lg">
            BuyMe is a comprehensive web application for online auctions using
            Java, JSX, Servlets, SQL that replicates eBay's functionality,
            enabling users to buy and sell items online. Sellers can create
            auctions, set item characteristics, closing dates, and hidden
            minimum prices (reserves).
          </p>
          <p className="text-lg py-4">
            Buyers can place bids, including automatic bids with secret upper
            limits, and receive alerts about higher bids and exceeded limits.
            The system determines and notifies auction winners based on reserve
            prices and highest bids. Users can browse items, sort them by
            criteria, search by various factors, view bid histories, and see
            past similar auctions. Alerts notify users when items of interest
            become available. Admins can create customer representative
            accounts, generate detailed sales reports, and manage user accounts.
            Customer representatives respond to user questions, edit/delete
            account information, and remove bids and auctions.
          </p>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/jamescodestuff/BuyME"
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
                SQL Database
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Java JSX
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Jakarta Servlet
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

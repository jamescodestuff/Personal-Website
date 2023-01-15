import React from "react";
import portfolioImg from "../public//assets/projects/website.png";
import Image from "next/image";

const portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
      </div>
    </div>
  );
};

export default portfolio;

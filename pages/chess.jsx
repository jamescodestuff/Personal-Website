import React from "react";
import chessImg from "../public/assets/projects/chess.png";
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
          src={chessImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Basic Android Chess App</h2>
          <h3>Android Studio / Java / Android XML</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-lg">
            This Chess mobile app implements many features to create an
            enjoyable chess-playing experience. Players can play in a two-player
            mode, with Touch-based movement to select the original and
            destination squares. The game includes an undo and an AI button for
            random legal moves and controls for drawing or resigning. When
            either is clicked, the game's outcome is reported, and games in
            progress can be recorded and saved with titles.
          </p>
          <p className="text-lg py-4">
            A game list is also provided, allowing users to access recorded
            games by date or title. For game playback, users can view recorded
            games move by the move at their own pace.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://youtu.be/bwOKH4n_zY4" target="_blank" rel="">
              Project Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/jamescodestuff/ChessApp"
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
                Android Studio
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Java
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Android XML
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

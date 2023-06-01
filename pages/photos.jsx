import React from "react";
import photosImg from "../public/assets/projects/photos.png";
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
          src={photosImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Photo Album Application</h2>
          <h3>Java FX / Java / FXML</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-lg">
            This photo album project organizes and manages different amounts of
            photos into other albums, involving the date and tags. Allowing
            users to categorize pictures based on attributes like location and
            names of people with each image supporting multiple unique tags,
            providing a customizable approach to organizing and labeling their
            collection. The project handles stock photos separately, stored
            under a "stock" username, while user photos are loaded from their
            machine, with only the location stored rather than the actual photos
            themselves.
          </p>
          <p className="text-lg py-4">
            The project includes a login system where users can log in with
            their username and an admin subsystem for tasks such as managing
            user accounts. Non-admin users can access features within their
            albums. Create, delete, and rename albums, and view photos with
            details like captions, date-time of capture, and tags. The system
            enables adding, removing, and captioning pictures and copying and
            moving images between albums.
          </p>
          <p className="text-lg py-4">
            The application also offers to create manual slideshows and perform
            advanced searches based on date ranges or specific tags. As well as
            a seamless logout process, saving user updates and allowing
            subsequent users to log in without application restart. The model
            encompasses data objects, photo storage, and retrieval, employing
            serialization and a well-designed object-oriented structure for
            future extensibility.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://youtu.be/IWtmBrZlD7k" target="_blank" rel="">
              Project Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/jamescodestuff/photoAlbum"
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

import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
const Home = () => {
  return (
    <div className="md:px-20 lg:px-40">
      <div className="px-6 flex md:items-center md:px-0 lg:flex lg:items-center py-5">
        <div className=" font-montserrat">
          <div className="text-3xl py-2 text-black font-normal dark:text-white md:text-4xl">
            <h3 className="text-lg md:2xl lg:text-2xl py-1 font-montserrat">
              Hello,
            </h3>
            <h2 className="text-2xl font-montserrat font-medium text-[#000]  dark:text-white md:text-4xl">
              I'm
              <span className="dark:text-white  md:text-5xl ">
                <span className="text-[#ff0062]">Gatwech</span> Tap
              </span>
            </h2>
          </div>

          <h3 className=" text-xl py-1 dark:text-white md:text-2xl">
            Web Developer and designer.
          </h3>
          <p className="text-sm py-3 leading-5 md:leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-sm">
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
          </p>
          <div className="text-sm py-6 text-white dark:text-white">
            <button className="w-32 p-2 md:w-36 bg-[#ff0062] border-2 border-[#ff0062] hover:bg-transparent hover:text-black hover:dark:text-white transition duration-500 md:px-3 md:py-3 text-sm ">
              Ask about me
            </button>
          </div>
          <div className="py-4">
            <ul className="flex items-center text-black">
              <Link
                href="#"
                className="text-2xl ml-0 mr-4 hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500 dark:text-white"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-2xl  hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500  mx-4 dark:text-white"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-2xl  hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500  mx-4 dark:text-white"
              >
                <FaGithub />
              </Link>
              <Link
                href="#"
                className="text-2xl  hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500  mx-4 dark:text-white"
              >
                <FaDribbble />
              </Link>
            </ul>
          </div>
        </div>
        <div className="mx-auto invisible md:visible bg-gradient-to-b from-teal-500  w-80 h-80 rounded-full overflow-hidden md:h-96 md:w-96">
          <h3>IMAGE</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

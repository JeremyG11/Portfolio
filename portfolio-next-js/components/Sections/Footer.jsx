import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 ">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Link
            className="inline-block  bg-gray-900 dark:bg-gray-100 p-1 dark:text-gray-800 text-white transition hover:bg-grsy-800 sm:p-3 lg:p-4"
            href="#home"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div className=" flex flex-col items-center justify-center w-full">
            <div className="flex justify-center  lg:justify-start">
              <Link href="/">
                <h2 className="text-3xl text-gray-900 dark:text-white font-montserrat font-black">
                  <span className="text-[#ff0063] ">?.</span>G
                </h2>
              </Link>
            </div>

            <p className=" mx-auto mt-6 max-w-md text-center leading-7 italic text-base  font-assistant text-gray-500 dark:text-gray-300">
              Driven by a genuine enthusiasm. Also Passionate about continuous
              learning, always seeking new opportunities to enhance my skills
              and stay ahead in this rapidly evolving field.
            </p>
          </div>
        </div>

        <p className="mt-12 pt-3 text-center border-t-2 dark:border-gray-500 text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2022 Jeremy Design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

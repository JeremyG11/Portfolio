"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ImDownload } from "react-icons/im";

import ThemeButton from "../Elements/ThemeButton";
const Navbar = () => {
  const navElements = [
    { name: "Home" },
    { name: "About" },
    { name: "Portfolio" },
    { name: "Service" },
    { name: "Contact" },
  ];
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full px-4 md:px-16 z-50 transition-all bg-white dark:text-gray-100 dark:bg-gray-900 " +
          (scrollActive ? " shadow-sm py-0" : " py-2")
        }
      >
        <div className="relative w-full bg-transparent">
          <nav className=" ">
            <div className="container m-auto px-6 md:px-12 lg:px-7">
              <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
                <input
                  type="checkbox"
                  name="toggle_nav"
                  id="toggle_nav"
                  className="peer hidden"
                  checked={toggleNav}
                  onChange={handleToggleNav}
                />

                <div className="w-full flex justify-between md:w-max md:px-0">
                  <Link href="/">
                    <h2 className="text-3xl text-gray-900 dark:text-white font-black">
                      <span className="text-[#ff0063] ">?.</span>G
                    </h2>
                  </Link>

                  <div className="flex items-center justify-center  md:hidden max-h-10">
                    <label
                      role="button"
                      htmlFor="toggle_nav"
                      className="relative z-40 px-2 py-3 sm:-mr-6"
                    >
                      <div
                        id="line"
                        className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                      ></div>
                      <div
                        id="line2"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                      ></div>
                    </label>
                  </div>
                </div>

                <label
                  role="button"
                  htmlFor="toggle_nav"
                  className={`fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden ${
                    toggleNav ? "peer-checked" : ""
                  }`}
                ></label>

                <div
                  className={`flex z-50 flex-col md:flex-row justify-between md:items-center gap-y-4 p-6 bg-white md:w-8/12 md:gap-y-4 md:p-0 md:bg-transparent lg:w-9/12 fixed top-0 ${
                    toggleNav ? "left-0" : "-left-full"
                  } transition-all duration-500 peer-checked:left-0 max-w-sm h-full md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0`}
                >
                  <div className="flex md:hidden w-full pb-5">
                    <a href="#" aria-label="logo">
                      <div className="flex items-center gap-x-6">
                        <img
                          className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
                          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div className="block w-full h-full md:h-auto">
                    <ul className="space-y-8  tracking-wide font-medium md:flex md:space-y-0">
                      {navElements.map((item, indx) => {
                        return (
                          <li
                            key={indx}
                            className="mx-4 uppercase font-normal text-sm "
                          >
                            <Link href="#" className="block md:px-3 group">
                              <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                <span className="transition group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300">
                                  {item.name}
                                </span>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col font-montserrat">
                    <ThemeButton />
                    <a
                      className="group rounded-sm flex flex-row-reverse items-center justify-center gap-3 border border-black bg-black px-8 py-3 transition-colors hover:bg-gray-100 focus:outline-none"
                      href="/download"
                    >
                      <span className="font-medium shrink-0 text-sm  text-white transition-colors group-hover:text-black group-active:text-black">
                        Download CV
                      </span>

                      <span className="shrink-0 rounded-full  text-white group-hover:text-black  group-active:text-black">
                        <ImDownload className="group-active:text-black" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;

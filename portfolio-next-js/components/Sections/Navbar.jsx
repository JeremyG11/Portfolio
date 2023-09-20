"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { ImDownload } from "react-icons/im";
import ThemeButton from "../Elements/ThemeButton";
import myImg from '../../public/gatwech-pic.jpg'

const Navbar = () => {
  

  const [activeLink, setActiveLink] = useState(null);
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
          "fixed top-0 w-full px-4 md:px-16 z-50 transition-all bg-white dark:text-gray-100 dark:bg-gray-800 " +
          (scrollActive ? " shadow-sm py-0" : " py-2")
        }
      >
        <div className="relative w-full bg-transparent">
          <nav className=" ">
            <div className="container m-auto lg:px-8">
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
                  <LinkScroll
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("home");
                    }}
                    scroll="false"
                    className="block cursor-pointer md:px-2 lg:px-3 group mx-4 uppercase font-normal text-sm"
                  >
                    <h2 className="text-3xl text-gray-900 dark:text-white font-montserrat font-black">
                      <span className="text-[#ff0063] ">?.</span>G
                    </h2>
                  </LinkScroll>

                  <div className="px-0 flex items-center justify-center  md:hidden max-h-10 ">
                    <label
                      role="button"
                      htmlFor="toggle_nav"
                      className="relative z-40 px-2 sm:-mr-6"
                    >
                      <div
                        id="line"
                        className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                      ></div>

                      <div
                        id="line2"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
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
                  className={`flex z-50 flex-col md:flex-row lg:justify-between md:items-center gap-y-4 bg-white dark:bg-gray-800 md:w-11/12 md:gap-y-4 md:p-0 md:bg-transparent lg:w-10/12 fixed top-0 ${
                    toggleNav ? "left-0 p-8" : "-left-full"
                  } transition-all duration-500 peer-checked:left-0 max-w-sm h-full md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0`}
                >
                  <div className="flex md:hidden w-full pb-5">
                    <a href="#" aria-label="logo">
                      <div className="flex items-center gap-x-6">
                        <Image
                          className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
                          src={myImg}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="block p-2 h-full md:h-auto">
                    <ul className="space-y-8 font-medium md:flex md:space-y-0">
                      <LinkScroll
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                          setActiveLink("home");
                        }}
                        scroll="false"
                        className="block cursor-pointer md:px-2 lg:px-3 group mx-4 uppercase font-normal text-sm"
                      >
                        <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                          <span
                            className={`${
                              activeLink === "home"
                                ? "text-yellow-300 dark:group-hover:text-yellow-300 "
                                : "group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300"
                            } transition `}
                          >
                            Home
                          </span>
                        </div>
                      </LinkScroll>
                      <LinkScroll
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                          setActiveLink("about");
                        }}
                        scroll="false"
                        className="block cursor-pointer md:px-2 lg:px-3 group mx-4 uppercase font-normal text-sm"
                      >
                        <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                          <span
                            className={`${
                              activeLink === "about"
                                ? "text-yellow-300 dark:group-hover:text-yellow-300 "
                                : "group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300"
                            } transition `}
                          >
                            About
                          </span>
                        </div>
                      </LinkScroll>
                      <LinkScroll
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                          setActiveLink("services");
                        }}
                        scroll="false"
                        className="block cursor-pointer md:px-2 lg:px-3 group mx-4 uppercase font-normal text-sm"
                      >
                        <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                          <span
                            className={`${
                              activeLink === "services"
                                ? "text-yellow-300 dark:group-hover:text-yellow-300 "
                                : "group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300"
                            } transition `}
                          >
                            Services
                          </span>
                        </div>
                      </LinkScroll>
                      <LinkScroll
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                          setActiveLink("portfolio");
                        }}
                        scroll="false"
                        className="block cursor-pointer md:px-2 lg:px-3 group mx-4 uppercase font-normal text-sm"
                      >
                        <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                          <span
                            className={`${
                              activeLink === "portfolio"
                                ? "text-yellow-300 dark:group-hover:text-yellow-300 "
                                : "group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300"
                            } transition `}
                          >
                            Portfolio
                          </span>
                        </div>
                      </LinkScroll>

                      <LinkScroll
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                          setActiveLink("contact");
                        }}
                        scroll="false"
                        className="cursor-pointer block md:px-2 lg:px-3 group mx-4 uppercase font-normal text-sm"
                      >
                        <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                          <span
                            className={`${
                              activeLink === "contact"
                                ? "text-yellow-300 dark:group-hover:text-yellow-300 "
                                : "group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300"
                            } transition `}
                          >
                            Contact
                          </span>
                        </div>
                      </LinkScroll>
                    </ul>
                  </div>
                  <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col font-montserrat">
                    <ThemeButton />
                    <button className="w-44 group rounded-sm flex flex-row-reverse items-center justify-between gap-3 border border-black dark:border-gray-100 bg-black px-8 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-black">
                      <span className="font-medium shrink-0 text-sm  text-white dark:text-black transition-colors group-hover:text-black group-active:text-black dark:group-hover:text-white dark:group-active:text-white">
                        Download CV
                      </span>

                      <span className="shrink-0 rounded-full  text-white dark:text-black group-hover:text-black dark:group-hover:text-white  group-active:text-black  dark:group-active:text-white">
                        <ImDownload className="group-active:text-black dark:group-active:text-white" />
                      </span>
                    </button>
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

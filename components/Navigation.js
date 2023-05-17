import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
import { TbMoonStars } from "react-icons/tb";

const Navigation = ({ darkMode, setDarkMode }) => {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about");
      const worksSection = document.querySelector("#works");
      const servicesSection = document.querySelector("#services");
      const contactSection = document.querySelector("#contact");

      if (window.scrollY < aboutSection.offsetTop - 100) {
        setActiveLink("home");
      } else if (
        window.scrollY >= aboutSection.offsetTop - 100 &&
        window.scrollY < servicesSection.offsetTop - 100
      ) {
        setActiveLink("about");
      } else if (
        window.scrollY >= servicesSection.offsetTop - 100 &&
        window.scrollY < worksSection.offsetTop - 100
      ) {
        setActiveLink("services");
      } else if (
        window.scrollY >= worksSection.offsetTop - 100 &&
        window.scrollY < contactSection.offsetTop - 100
      ) {
        setActiveLink("works");
      } else {
        setActiveLink("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass(
            "fixed min-w-full dark:bg-gray-900  md:px-40 py-2 shadow-md flex items-center font-montserrat mb-10 lg:flex md:justify-between dark:text-white"
          )
        : setStickyClass("relative font-montserrat ");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, [active]);

  return (
    <>
      <nav
        className={`${stickyClass}  md:px-40 z-50 bg-white w-[100%] md:w-auto left-0 flex items-center font-montserrat py-2 lg:flex md:justify-between  dark:bg-gray-900 dark:text-white `}
      >
        <span className="pl-6 md:pl-0 font-bold ">
          {" "}
          <div className="mx-20 px-20 text-4xl font-black">
            <span className="text-[#ff0063]">?.</span>G
          </div>
        </span>
        <ul
          className={` w-[100%] px-6 pb-6 md:p-0 bg-[#fff] shadow md:shadow-none dark:bg-gray-900 z-100 absolute md:static md:w-auto md:flex items-center md:justify-between ${
            active ? "top-12" : "top-[-400px]"
          }`}
        >
          <span className="md:flex items-center md:justify-between ">
            <li className="relative pt-2 md:pt-0 mx-6">
              <Link
                href="/#home"
                scroll={false}
                className={`${
                  activeLink === "home"
                    ? "text-[#D31717] cursor-pointer py-3 relative font-medium after:content-[''] after:absolute after:w-[50%] after:h-[2px] after:bg-[#D31717]"
                    : "text-black dark:text-white"
                }  font-montserrat font-medium text-sm cursor-pointer py-3 relative after:content-[''] after:absolute  hover:after:w-[50%] after:h-[2px] after:bg-[#D31717] after:bottom-2 after:left-0`}
              >
                Home
              </Link>
            </li>
            <li className="relative pt-2 md:pt-0 mx-6">
              <Link
                href="/#about"
                scroll={false}
                className={`${
                  activeLink === "about"
                    ? "text-[#D31717] cursor-pointer py-3 font-medium after:content-[''] after:absolute after:w-[50%] after:h-[2px] after:bg-[#D31717]"
                    : "text-black dark:text-white"
                }  font-montserrat font-medium text-sm cursor-pointer py-3 relative after:absolute after:content-[''] hover:after:w-[50%] after:h-[2px] after:bg-[#D31717] after:bottom-2 after:left-0`}
              >
                About me
              </Link>
            </li>
            <li className="relative pt-2 md:pt-0 mx-6">
              <Link
                href="/#services"
                scroll={false}
                className={`${
                  activeLink === "services"
                    ? "text-[#D31717] cursor-pointer py-3 relative font-medium after:content-[''] after:absolute after:w-[50%] after: after:h-[2px] after:bg-[#D31717]"
                    : "text-black dark:text-white"
                }  font-montserrat font-medium text-sm cursor-pointer py-3 relative after:content-[''] after:absolute  hover:after:w-[50%] after:h-[2px] after:bg-[#D31717] after:bottom-2 after:left-0`}
              >
                Services
              </Link>
            </li>
            <li className="relative pt-2 md:pt-0 mx-6">
              <Link
                href="/#works"
                scroll={false}
                className={`${
                  activeLink === "works"
                    ? "text-[#D31717] cursor-pointer py-3 relative font-medium after:content-[''] after:absolute after:w-[50%] after: after:h-[2px] after:bg-[#D31717]"
                    : "text-black dark:text-white"
                }  font-montserrat font-medium text-sm cursor-pointer py-3 relative after:content-[''] after:absolute  hover:after:w-[50%] after:h-[2px] after:bg-[#D31717] after:bottom-2 after:left-0`}
              >
                Portfolio
              </Link>
            </li>
            <li className="relative pt-2 md:pt-0 mx-6">
              <Link
                href="/#contact"
                scroll={false}
                className={`${
                  activeLink === "contact"
                    ? "text-[#D31717] cursor-pointer py-3 relative after:content-[''] after:absolute after:w-[50%] after:h-[2px] after:bg-[#D31717]"
                    : "text-black dark:text-white"
                }   font-montserrat font-medium text-sm cursor-pointer py-3 relative after:content-[''] after:absolute hover: hover:after:w-[50%] after:h-[2px] after:bg-[#D31717] after:bottom-2 after:left-0`}
              >
                Contact me
              </Link>
            </li>

            <span className="md:right-0 py-4 sm:left-0  marker:lg:right-0 flex  md:invisible ">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className=" bg-teal-400 px-2 rounded-full py-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>
            </span>
          </span>
        </ul>
        <span className="absolute e-in duration-500 right-6 px-0 z-10 md:invisible">
          {active ? (
            <CgClose
              onClick={() => setActive(!active)}
              className=" cursor-pointer text-2xl"
            />
          ) : (
            <CgMenuRight
              onClick={() => setActive(!active)}
              className=" cursor-pointer text-2xl"
            />
          )}
        </span>
        <span className="md:right-0 py-2 sm:left-0  marker:lg:right-0 flex invisible md:visible  ">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" text-black bg-gray dark:bg-black dark:text-white p-2 rounded-full"
          >
            {darkMode ? (
              <MdLightMode className=" cursor-pointer text-xl" />
            ) : (
              <TbMoonStars className=" cursor-pointer text-xl" />
            )}
          </button>
        </span>
      </nav>
    </>
  );
};

export default Navigation;

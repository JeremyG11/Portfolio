import React from "react";
import Home from "./Home";
import About from "./about";
import Works from "./services";
import Contact from "./contact";
import Latest from "./latest";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Index() {
  return (
    <div>
      <section id="home" className="text-gray-600 body-font xl:mx-40">
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="text-lg md:2xl lg:text-2xl py-1 font-montserrat">
              Hello,
            </h3>
            <h2 className="text-2xl font-montserrat font-medium text-[#000]  dark:text-white md:text-4xl">
              I am
              <span className="dark:text-white  md:text-5xl ">
                <span className="text-[#ff0062]">Gatwech</span> Tap
              </span>
            </h2>
            <h3 className=" text-xl py-1 dark:text-white md:text-2xl">
              Web Developer and designer.
            </h3>
            <p className="text-sm py-3 leading-5 md:leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-sm">
              Freelancer providing services for programming and design content
              needs. Join me down below and let get cracking!
            </p>
            <div className="text-sm py-6 text-white dark:text-white">
              <button className="w-32 p-2 md:w-36 bg-[#ff0062] border-2 border-[#ff0062] hover:bg-transparent hover:text-black hover:dark:text-white transition duration-500 md:px-3 md:py-3 text-sm ">
                Ask about me
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <div id="about" className="">
        <About />
      </div>
      <div id="services">
        <Works />
        <Skills />
      </div>
      <div id="works" className="py-20">
        <Latest />
      </div>
      <div id="works" className="py-20">
        <Testimonials />
      </div>
      <div id="contact" className="py-20 ">
        <Contact />
      </div>
    </div>
  );
}

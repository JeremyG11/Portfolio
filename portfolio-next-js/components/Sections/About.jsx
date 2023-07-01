import React from "react";
import { ImDownload } from "react-icons/im";

const About = () => {
  return (
    <section className="text-gray-600 font-montserrat px-4 py-16 md:px-16">
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="relative dark:text-gray-300 lg:flex-grow md:max-w-xl text-lg lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-center relative text-2xl dark:text-white pl-5 before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-10 uppercase before:bg-[#ff0062] before:-bottom-1 before:left-0">
            About Me
          </h2>
          <p className="my-5 italic text-sm">
            I'm a skilled junior Full Stack Developer based in Addis Ababa,
            Ethiopia
          </p>
          <p className="mt-4 text-base leading-7 font-assistant text-gray-500 dark:text-gray-300">
            Passioned for creating elegant, modern, user-friendly websites. With
            3 years of experience in the industry, I have honed my skills in
            front-end and back-end development, as well as in UX/UI design.
            <br />
            Please take a look at my portfolio to see examples of my work and
            feel free to contact me if you have any questions or if you are
            interested in working together.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="my-5 font-montserrat">
              <button className="group rounded-sm flex flex-row-reverse items-center justify-between gap-3 border border-black dark:border-gray-100 bg-black px-8 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-black">
                <span className="font-medium text-sm  text-white dark:text-black transition-colors group-hover:text-black group-active:text-black dark:group-hover:text-white dark:group-active:text-white">
                  Download CV
                </span>

                <span className="shrink-0 rounded-full  text-white dark:text-black group-hover:text-black dark:group-hover:text-white  group-active:text-black  dark:group-active:text-white">
                  <ImDownload className="group-active:text-black dark:group-active:text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="mx-auto invisible md:visible bg-gradient-to-b from-teal-500  w-80 h-80 rounded-full overflow-hidden md:h-96 md:w-96">
            <h3>IMAGE</h3>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;

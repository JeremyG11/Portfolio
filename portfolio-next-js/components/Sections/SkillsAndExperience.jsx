import React from "react";
import { SiTailwindcss, SiReact } from "react-icons/si";
import { MdOutlineDoneAll } from "react-icons/md";

const SkillsAndExperience = () => {
  return (
    <section className="mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-lg">
        <h2 className="font-montserrat relative text-2xl text-gray-600 dark:text-white pl-5 before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-10 uppercase before:bg-[#ff0062] before:-bottom-1 before:left-0">
          My Skills and Experience
        </h2>
        <p className="my-5 italic text-sm">
          Don't just take my words for it. see the comments and reviews
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 lg:px-16 lg:py-16">
          <ol className="relative text-gray-500 border-l-2   border-[#ff0062]  dark:text-gray-400">
            <li className="mb-5 p-3 flex  ">
              <div className="w-12 max-h-4 relative">
                <span className="wrapper"></span>
                <span className="absolute flex items-center justify-center min-w-full p-1  bg-[#ff0062] -left-4">
                  <MdOutlineDoneAll className="w-5 h-5 text-white" />
                </span>
              </div>
              <div className="border-1 border-gray-50 ml-8 py-6 -mt-5 lg:px-12 opacity-80 rounded">
                <h3 className="ml-3 relative font-raleway tracking-wider text-sm text-gray-500 dark:text-white pl-5 before:content-[''] before:absolute before:w-[24px] rounded-lg before:mr-2 before:h-[2px] uppercase before:bg-[#ff0062] before:top-2 before:-left-5">
                  Basics & Programming languages
                </h3>
                <ul className="pl-5 mt-2 space-y-1 font-assitance list-disc list-inside">
                  <li>HTML 5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                </ul>
              </div>
            </li>
            <li className="mb-5 p-3 flex  ">
              <div className="w-12 max-h-4 relative">
                <span className="wrapper"></span>
                <span className="absolute flex items-center justify-center w-full p-1  bg-[#ff0062] -left-4">
                  <MdOutlineDoneAll className="w-5 h-5 text-white" />
                </span>
              </div>
              <div className="border-1 border-gray-50 ml-8 py-6 -mt-5 lg:px-12 opacity-80 rounded">
                <h3 className="ml-3 relative font-raleway tracking-wider text-sm text-gray-500 dark:text-white pl-5 before:content-[''] before:absolute before:w-[24px] rounded-lg before:mr-2 before:h-[2px] uppercase before:bg-[#ff0062] before:top-2 before:-left-5">
                  Frameworks and Libraries
                </h3>
                <ul className="pl-5 mt-2 space-y-1 font-assitance list-disc list-inside">
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>Node JS</li>
                  <li>Express JS</li>
                  <li>Tailwind CSS</li>
                  <li>React Native</li>
                  <li>Django Rest framework</li>
                </ul>
              </div>
            </li>
          </ol>
          <ol className="relative text-gray-500 border-l-2   border-[#ff0062]  dark:text-gray-400">
            <li className="mb-5 p-3 flex  ">
              <div className="w-12 max-h-4 relative">
                <span className="wrapper"></span>
                <span className="absolute flex items-center justify-center w-full p-1  bg-[#ff0062] -left-4">
                  <MdOutlineDoneAll className="w-5 h-5 text-white" />
                </span>
              </div>
              <div className="p-6 -mt-5 lg:px-12 rounded">
                <h3 className="ml-3 relative font-raleway tracking-wider text-sm text-gray-500 dark:text-white pl-5 before:content-[''] before:absolute before:w-[24px] rounded-lg before:mr-2 before:h-[2px] uppercase before:bg-[#ff0062] before:top-2 before:-left-5">
                  Databases
                </h3>
                <ul className="pl-5 mt-2 space-y-1 font-assitance list-disc list-inside">
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </li>
            <li className="mb-5 p-3 flex  ">
              <div className="w-12 max-h-4 relative">
                <span className="wrapper"></span>
                <span className="absolute flex items-center justify-center w-full p-1  bg-[#ff0062] -left-4">
                  <MdOutlineDoneAll className="w-5 h-5 text-white" />
                </span>
              </div>
              <div className="p-6 -mt-5 lg:px-12 rounded">
                <h3 className="ml-3 relative font-raleway tracking-wider text-sm text-gray-500 dark:text-white pl-5 before:content-[''] before:absolute before:w-[24px] rounded-lg before:mr-2 before:h-[2px] uppercase before:bg-[#ff0062] before:top-2 before:-left-5">
                  Familiarity With
                </h3>
                <ul className="pl-5 mt-2 space-y-1 font-assitance list-disc list-inside">
                  <li>Docker</li>
                  <li>Git</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;

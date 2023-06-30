import React from "react";
import { SiTailwindcss, SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb"

const SkillsAndExperience = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="relative text-2xl dark:text-white pl-5 before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-10 uppercase before:bg-[#ff0062] before:-bottom-1 before:left-0">
            My Skills and Experience
          </h2>
          <p className="my-5 italic text-sm">
            Don't just take my words for it. see the comments and reviews
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-100 p-6">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
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
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold font-assistant leading-5">Designs and Frontend</h6>

          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-center">
              <span className="mr-1 p-2 bg-slate-100 rounded-full">
                <SiTailwindcss />
              </span>
              <p className="ml-4">Tailwind CSS</p>
            </li>
            <li className="flex items-center">
              <span className="mr-1 p-2 bg-slate-100 rounded-full">
                <TbBrandNextjs />
              </span>
              <p className="ml-4">Next JS</p>
            </li>
            <li className="flex items-center">
              <span className="mr-1 p-2 bg-slate-100 rounded-full">
                <SiReact />
              </span>
              <p className="ml-4">React JS</p>
            </li>
            <li className="flex items-center">
              <span className="mr-1 p-2 bg-slate-100 rounded-full">
                <SiTailwindcss />
              </span>
              <p className="ml-4">Tailwind CSS</p>
            </li>
            <li className="flex items-center">
              <span className="mr-1 p-2 bg-slate-100 rounded-full">
                <SiTailwindcss />
              </span>
              <p className="ml-4">Tailwind CSS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;

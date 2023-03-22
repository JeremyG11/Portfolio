import React from "react";
import Image from "next/image";
import css3 from "../public/css3.svg";
import htmlIcon from "../public/html.svg";
import js from "../public/javascript.svg";
import reactjsicon from "../public/react.svg";
import tailwindCSS from "../public/tailwind-css.svg";
import nodejsIcon from "../public/node-js.svg";
import djangoIcon from "../public/django.svg";
import mongodbIcon from "../public/mongodb.svg";
import gitIcon from "../public/git.svg";
import dockerIcon from "../public/docker.svg";
import mysqlIcon from "../public/mysql.svg";
import python from "../public/python.svg";
const Skills = () => {
  return (
    <div className=" bg-#fff text-black py-8 ">
      <div className="flex justify-center">
        <h1 className="py-3 relative text- text-center font-medium after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-[#ff0062] after:bottom-0 after:left-0">
          Skills and Experience
        </h1>
      </div>
      <div className="lg:px-40 py-8 grid grid-cols-3 gap-10">
        <div className="grid grid-cols-3 border p-8 rounded ">
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={htmlIcon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">HTML 5</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={css3} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">CSS 3</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={js} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">JavaScript</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={python} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">Python</p>
          </div>
        </div>
        <div className="grid grid-cols-3 border p-8 rounded ">
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={reactjsicon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">React Js</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={tailwindCSS} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">Tailwind CSS</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={nodejsIcon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">Node js</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={djangoIcon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">Django</p>
          </div>
        </div>
        <div className="grid grid-cols-3 border p-8 rounded ">
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={mongodbIcon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">MongoDB</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={mysqlIcon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">MySQL</p>
          </div>
        </div>
        <div className="grid grid-cols-3 border p-8 rounded ">
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={gitIcon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">Git</p>
          </div>
          <div className="h-20 w-20 rounded-md flex flex-col items-center justify-around">
            <div>
              <Image src={dockerIcon} alt="" />
            </div>
            <p className="text-xs text-gray-500 font-medium">Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

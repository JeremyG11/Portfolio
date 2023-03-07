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
    <div className=" bg-[#08252c93]">
      <div className="flex justify-center">
        <h1 className="py-3 relative text-3xl text-center font-medium text-white after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-[#ff0062] after:bottom-0 after:left-0">
          Skills and Experience
        </h1>
      </div>
      <div className="p-20 grid grid-cols-6 gap-4">
        <div className="p-2 rounded-md border w-20 flex justify-center">
          <Image src={htmlIcon} alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={css3} with={50} height="50" alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={js} alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={python} alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={reactjsicon} alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={tailwindCSS} alt="" />
        </div>

        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={nodejsIcon} alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={djangoIcon} alt="" />
        </div>

        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={mongodbIcon} alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={mysqlIcon} alt="" />
        </div>

        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={gitIcon} alt="" />
        </div>
        <div className="p-2 rounded-md border w-20 flex items-center justify-center">
          <Image src={dockerIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

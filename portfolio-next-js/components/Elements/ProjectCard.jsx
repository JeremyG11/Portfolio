"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  const elementRef = useRef(null);
  const [span, setSpan] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
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
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <Image
        src={project.ImageUrl}
        alt=""
        className="w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="relative border border-gray-100 bg-white p-4">
        <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>

        <p className="  text-sm text-gray-700">{project.description}</p>

        <div className="my-4 ">
          <ul className="flex items-center  text-xl text-black">
            <Link
              href="https://github.com/JeremyG11"
              target="_blank"
              className=""
            >
              <IoLogoGithub className="w-6 h-6" />
            </Link>
            <Link href="#">
              <AiOutlineDeploymentUnit className="w-6 h-6 ml-4 font-bold" />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

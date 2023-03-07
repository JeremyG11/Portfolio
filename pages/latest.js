import React from "react";
import Image from "next/image";
import mobile from "../public/web4.png";
import web_development from "../public/web1.png";
import design_tool from "../public/web2.png";

const Latest = () => {
  return (
    <div>
      <div className="w-full h-[100%] font-montserrat md:px-20 lg:px-40 bg-gray-900 ">
        <div className="py-5">
          <div className="">
            <div className="flex justify-center">
              <h1 className="py-2 relative text-3xl text-center font-medium text-white after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-[#ff0062] after:bottom-0 after:left-0">
                Projects
              </h1>
            </div>
            <p className="py-5 px-32 leading-6 text-sm text-gray-500 text-center">
              Below are my interesting projects I've working on so far and happy
              to share. Including Designs, web development and Mobile
              development{" "}
            </p>
          </div>
          <div className="py-5 w-[60%] text-white ">
            <ul className="flex items-center justify-between">
              <li className="mx-2 cursor-pointer mr-2 py-3 relative text-sm font-medium after:content-[''] after:absolute after:w-[100%] text-[#D31717] after:transition-all hover:after:w-[100%] after:h-[1px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0">
                All
              </li>
              <li className="mx-2 cursor-pointer mr-2 py-3 relative text-sm font-medium text-white after:content-[''] after:absolute after:w-0 after:transition-all hover:after:w-[100%] after:h-[1px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0">
                Designs
              </li>
              <li className="mx-2 cursor-pointer mr-2 py-3 relative text-sm font-medium text-white after:content-[''] after:absolute after:w-0 after:transition-all hover:after:w-[100%] after:h-[1px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0">
                Web Apps
              </li>
              <li className="mx-2 cursor-pointer mr-2 py-3 relative text-sm font-medium text-white after:content-[''] after:absolute after:w-0 after:transition-all hover:after:w-[100%] after:h-[1px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0">
                Mobile Apps
              </li>
              <li className="mx-2 cursor-pointer mr-2 py-3 relative text-sm font-medium text-white after:content-[''] after:absolute after:w-0 after:transition-all hover:after:w-[100%] after:h-[1px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0">
                Latest
              </li>
            </ul>
          </div>
        </div>
        <div className="px-20 py-10  grid grid-cols-1 md:grid-cols-3 md:px-0  gap-10">
          <div className="flex flex-col items-center shadow rounded-md bg-[#083d49e1] justify-between ">
            <Image src={mobile} alt="" />
            <div className="py-2 font-medium text-white">UI Design</div>
          </div>
          <div className="flex flex-col items-center shadow rounded-md bg-[#083d49e1] justify-between ">
            <Image src={design_tool} alt="" />
            <div className="py-2 font-medium text-white">UI Design</div>
          </div>
          <div className="flex flex-col items-center shadow rounded-md bg-[#083d49e1] justify-between ">
            <Image src={web_development} alt="" />
            <div className="py-2 font-medium text-white">UI Design</div>
          </div>
          <div className="flex flex-col items-center shadow rounded-md bg-[#083d49e1] justify-between ">
            <Image src={web_development} alt="" />
            <div className="py-2 font-medium text-white">UI Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;

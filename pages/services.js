import React from "react";
import Image from "next/image";
import mobile from "../public/mobile-development.png";
import web_development from "../public/coding.png";
import design_tool from "../public/fountain-pen.png";
import Skills from "../components/Skills";

const Works = () => {
  return (
    <div
      className="w-full h-[100%] font-montserrat md:px-20 lg:px-40"
      style={{
        background: "radial-gradient(circle, #0a0a0a6c 20%, transparent 100%)",
      }}
    >
      <div className=" flex flex-col items-center justify-center">
        <h1 className=" py-3 relative text-3xl font-medium text-white after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-[#ff0062] after:bottom-0 after:left-0">
          Services
        </h1>
        <p className="px-6 py-8 md:px-32 text-center text-gray-300 ">
          Select your favorite social network and share our icons with your
          contacts or friends. If you don’t have these social networks, simply
          copy the link and paste it in the one you use.{" "}
        </p>
      </div>
      <div className="px-20 py-10  grid grid-cols-1 md:grid-cols-3 md:px-0  gap-10">
        <div className="flex flex-col items-center shadow p-8 rounded-md bg-[#083d49e1] justify-between ">
          <div className="p-6 rounded-full flex items-center justify-center bg-[#fffbfbad]">
            <Image src={design_tool} width={50} height={50} alt="" />
          </div>
          <div className="py-2 font-medium text-white">UI Design</div>
          <p className="py-3 text-sm text-center text-white">
            Best landing page templates are a step away click now and get hold
            of professionally designed landing page
          </p>
        </div>
        <div className="flex flex-col items-center shadow-lg p-8 rounded-md bg-[#083d49e1] justify-between">
          <div className="p-6 rounded-full flex items-center justify-center bg-[#fffbfbad]">
            <Image src={web_development} alt="" width={50} height={50} />
          </div>
          <div className="py-2 font-medium text-white">Web Development</div>
          <p className="py-3 text-sm text-center text-white">
            Best landing page templates are a step away click now and get hold
            of professionally designed landing page
          </p>
        </div>
        <div className="flex flex-col items-center shadow-lg p-8 rounded-md bg-[#083d49e1] justify-between ">
          <div className="p-6 rounded-full flex items-center justify-center bg-[#fffbfbad]">
            <Image src={mobile} alt="" width={50} height={50} />
          </div>
          <div className="py-2 font-medium text-white">
            Mobile App Development
          </div>
          <p className="py-3 text-sm text-center text-white">
            Best landing page templates are a step away click now and get hold
            of professionally designed landing page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;

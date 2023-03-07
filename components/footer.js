import Link from "next/link";
import React from "react";
Link;
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 pt-20 min-w-full p-3 h-auto text-gray-100">
      <div className="flex flex-col justify-center items-center ">
        <div className="mx-20 px-20 text-center text-4xl font-black">G.</div>
        <p className=" text-gray-600 mx-20 px-20 text-center text-xs font-light w-[500px] leading-5 ">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
        <div className="py-5 ">
          <div className="">
            <ul className="flex items-center justify-center text-black">
              <Link href="#"  className="p-2 rounded-full bg-[#727272]  text-sm mx-3 hover:opacity-70 transition duration-500 text-[#dddada]">
                  <FaFacebook />
              
              </Link>
              <Link href="#" className="p-2 rounded-full bg-[#727272]  text-sm mx-3 hover:opacity-70 transition duration-500 text-[#dddada]">
                  <FaInstagram />
              
              </Link>
              <Link href="#"  className="p-2 rounded-full bg-[#727272] text-sm mx-3 hover:opacity-70 transition duration-500 text-[#dddada]">
                  <FaTwitter />
              
              </Link>
              <Link href="#" className="p-2 rounded-full bg-[#727272]  text-sm mx-3 hover:opacity-70 transition duration-500 text-[#dddada]">
                  <FaLinkedinIn />
               
              </Link>
              <Link href="#"  className=" p-2 rounded-full bg-[#727272]  text-sm mx-3 hover:opacity-70 transition duration-500 text-[#dddada]">
                  <FaDribbble />
                 
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-[#494949dd]" />
      <p className="p-2 text-center text-xs font-light">
        Copyright &copy; 2022 Jeremy Design
      </p>
    </div>
  );
};

export default Footer;

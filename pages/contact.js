import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import location from "../public/location.svg";
import call from "../public/call.svg";
import email from "../public/email.svg";
import emailjs from "@emailjs/browser";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
    // console.log(process.env.NEXT_PUBLIC_TEMPLATE_ID);
    console.log(formRef.current);
  }, []);
  const formRef = useRef();
  const [sent, setSent] = useState(null);
  const [loading, setLoading] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          if(result.status ===200){
            setSent(true)
          }
        },
        (error) => {
          if(error){
            setSent(false)
          }
        }
      );
  };
  return (
    <section className="py-10 md:px-20 lg:px-40 md:flex md:justify-between">
      <div className=" relative px-0 w-[100%] dark:text-white  ">
        <div className="py-5 md:py-0 md:flex md:justiy-between md:dark:bg-[#142336] dark:text-white font-montserrat md:shadow-2xl ">
          <div className="w-16 h-16">

          <h1 className="animate-spin ">Hello</h1>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className=" md:py-8 md:px-20 w-[100%] md:w-[50%]"
          >
            <div className="mt-6">
              <h2 className="font-montserrat text-4xl font-medium">
                Contact Me
              </h2>
              <p className="mt-5 font-montserrat text-sm font-medium text-[#18a]">
                Send me a message and I'll be back to you in no time
              </p>
            </div>
            <div className="w-full my-5 relative ">
              <input
                type="text"
                name="name"
                required
                className="w-full text-[#9b9b9b] bg-transparent text-sm outline-none peer border-[#9b9b9b] border-b-2 py-1"
              />
              <label
                className="mt-2 absolute left-0 pointer-events-none
                text-[#9b9b9b] text-sm 
                  peer-focus:-translate-y-5
                  peer-valid:-translate-y-5 
                peer-focus:text-[#ff0062] 
                  bottom-1 transition duration-500"
              >
                Name
              </label>
            </div>
            <div className="my-5 relative">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                className="w-full text-[#9b9b9b] bg-transparent text-sm outline-none peer border-[#9b9b9b] border-b-2 mt-2 py-1"
              />
              <label
                className="mt-2 absolute left-0  pointer-events-none 
                text-[#9b9b9b] text-sm  
                  peer-focus:-translate-y-5 
                  peer-valid:-translate-y-5 
                peer-focus:text-[#ff0062] bottom-1 transition duration-500"
              >
                Email address
              </label>
            </div>
            <div className="my-5 relative">
              <textarea
                name="message"
                required
                placeholder=" "
                className="w-full h-16  bg-transparent resize-none text-[#9b9b9b] text-sm outline-none  peer border-[#9b9b9b] border-b-2 mt-2 py-1"
              ></textarea>
              <label
                className="absolute left-0 pointer-events-none 
                text-[#9b9b9b] text-sm 
                  peer-focus:-translate-y-14
                  peer-valid:-translate-y-14
                peer-focus:text-[#ff0062] bottom-3
                  transition duration-500"
              >
                Message
              </label>
            </div>
            <div className="flex justify-center my-4 ">
              <input
                type="submit"
                value="send"
                className="p-3 bg-gray-900 dark:bg-white dark:text-gray-900 rounded-sm font-medium md:shadow-md my-5 w-full tracking-widest text-xs text-white hover:opacity-90 transition uppercase cursor-pointer  "
              />
            </div>
          </form>
          <div className="md:relative text-white p-0 w-[50%] md:bg-[#18a] ">
            <div className="py-2 invisible trans-botom-o md:visible  ">
              <ul className="flex items-center justify-center text-black">
                <Link
                  href="#"
                  className="border-[1px] p-2 rounded-full border-[#dddada]  text-sm mx-3 hover:opacity-90 transition duration-500 text-[#dddada]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="border-[1px] p-2 rounded-full border-[#dddada] text-sm mx-3 hover:opacity-90 transition duration-500 text-[#dddada]"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="border-[1px] p-2 rounded-full border-[#dddada]  text-sm mx-3 hover:opacity-90 transition duration-500 text-[#dddada]"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="#"
                  className="border-[1px] p-2 rounded-full border-[#dddada]  text-sm mx-3 hover:opacity-90 transition duration-500 text-[#dddada]"
                >
                  <FaDribbble />
                </Link>
              </ul>
            </div>
            <div className=" md:after:content-[''] md:after:absolute md:after:w-32 md:after:h-[100%] md:after:bg-[#083d49e1] md:after:top-0 md:after:right-0">
              <div className=" flex flex-col px-5 py-8 text-black dark:text-white md:text-white md:bg-gray-900 md:shadow-2xl md:absolute md:right-16 md:top-[20%] z-10">
                <h2 className="text-xl font-montserrat font-medium">
                  Contact info
                </h2>
                <div className="py-5 text-sm ">
                  <div className="py-4">
                    <div className="flex items-center">
                      <Image
                        src={email}
                        alt=""
                        width={25}
                        height={25}
                        className="text-white"
                      />
                      <p className="ml-4">Info@gmail.com</p>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="flex items-center">
                      <Image
                        src={call}
                        alt=""
                        width={20}
                        height={20}
                        className="text-white"
                      />
                      <p className="ml-4">(+251) 95-717 377</p>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="flex items-center">
                      <Image
                        src={location}
                        alt=""
                        width={30}
                        height={30}
                        className="text-white"
                      />
                      <p className="ml-4">
                        King George VI St <br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

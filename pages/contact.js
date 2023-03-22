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
  const formRef = useRef();
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState("");
  const [isSuccessColor, setIsSuccussColor] = useState(true);

  const textColorClass = isSuccessColor ? "text-green-500" : "text-red-500";
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setLoading(false);
            setAlert(true);
            setMessage("Thank you! Your message had been sent successfully!");
            setTimeout(() => setAlert(false), 2000);
          }
          formRef.current.value = "";
        },
        (error) => {
          if (error) {
            setLoading(false);
            setAlert(true);
            setIsSuccussColor(false);
            setMessage("Sorry!, Your message couldn't be sent ");
            setTimeout(() => setAlert(false), 2000);
          }
        }
      );
      e.target.reset()
  };

  useEffect(() => {}, [message]);
  return (
    <section className="py-10 md:px-20 lg:px-40 md:flex md:justify-between">
      <div className=" relative px-0 w-[100%] dark:text-white  ">
        <div className="py-5 md:py-0 md:flex md:justiy-between md:dark:bg-[#142336] dark:text-white font-montserrat md:shadow-2xl ">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className=" md:py-8 md:px-20 w-[100%] md:w-[50%]"
          >
            <div className="mt-2">
              <h2 className="font-montserrat text-3xl font-medium">
                Contact Me
              </h2>
            {loading ? (
              <div className="p-3 flex items-center justify-center">
                <svg
                  className="animate-spin transition-all duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20px"
                  height="20px"
                >
                  <path
                    d="M27.02 22.82a.182.182 1080 1 0 .364 0 .182.182 1080 1 0-.364 0zm-4.018 4.146a.362.362 1080 1 0 .724 0 .362.362 1080 1 0-.724 0zM17.586 29.1a.544.544 1080 1 0 1.088 0 .544.544 1080 1 0-1.088 0zm-5.83-.286a.724.724 1080 1 0 1.448 0 .724.724 1080 1 0-1.448 0zM6.584 26.16a.906.906 1080 1 0 1.812 0 .906.906 1080 1 0-1.812 0zm-3.582-4.512a1.088 1.088 1080 1 0 2.176 0 1.088 1.088 1080 1 0-2.176 0zm-1.344-5.54a1.268 1.268 1080 1 0 2.536 0 1.268 1.268 1080 1 0-2.536 0zm1.106-5.504a1.45 1.45 1080 1 0 2.9 0 1.45 1.45 1080 1 0-2.9 0zm3.318-4.438a1.632 1.632 1080 1 0 3.264 0 1.632 1.632 1080 1 0-3.264 0zm4.872-2.542a1.812 1.812 1080 1 0 3.624 0 1.812 1.812 1080 1 0-3.624 0zm5.472-.158a1.994 1.994 1080 1 0 3.988 0 1.994 1.994 1080 1 0-3.988 0zm5.01 2.254a2.174 2.174 1080 1 0 4.348 0 2.174 2.174 1080 1 0-4.348 0zm3.56 4.234a2.356 2.356 1080 1 0 4.712 0 2.356 2.356 1080 1 0-4.712 0zm1.416 5.484a2.538 2.538 1080 1 0 5.076 0 2.538 2.538 1080 1 0-5.076 0z"
                    fill="#0f0"
                    className=""
                  ></path>
                </svg>
              </div>
            ) : (
              <div></div>
            )}
            {alert ? (
              <div className="p-3 flex items-center justify-center">
                <p className={`${textColorClass} text-xs font-medium`}>
                  {message}
                </p>
              </div>
            ) : (
              <div></div>
            )}
              <p className="mt-5 font-montserrat text-sm font-medium text-[#18a]">
                Send me a message and I will be back to you in no time
              </p>
            </div>
            <div className="w-full my-5 relative ">
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
            <div className="flex justify-center ">
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
              <div className=" flex flex-col px-8 py-5 text-black dark:text-white md:text-white md:bg-gray-900 md:shadow-2xl md:absolute md:right-16 md:top-[20%] z-10">
                <h2 className="text-xl text-[#18a] font-montserrat font-medium">
                  Contact info
                </h2>
                <div className="py-3 text-sm ">
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
                      <p className="ml-5">(+251) 95-717 377</p>
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
                      <p className="ml-3">
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

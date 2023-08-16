"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import desk from "../../public/photo1.jpg"
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { BiLogoTelegram, BiLoaderCircle } from "react-icons/bi";
import SuccessAlert from "../Elements/SuccessAlert";

const Contact = () => {
  const formRef = useRef();
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);

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
            setStatus(result.status);
            setLoading(false);
            setAlert(true);
            setMessage("Thank you! Your message had been sent successfully!");
            setTimeout(() => setAlert(false), 5000);
          }
          formRef.current.value = "";
        },
        (error) => {
          if (error) {
            console.log(
              error,
              process.env.NEXT_PUBLIC_PUBLIC_KEY,
              process.env.NEXT_PUBLIC_SERVICE_ID,
              process.env.NEXT_PUBLIC_TEMPLATE_ID
            );
            setStatus(error.status);
            setLoading(false);
            setAlert(true);
            setMessage("Sorry!, Your message couldn't be sent ");
            setTimeout(() => setAlert(false), 5000);
          }
        }
      );
    formRef.current.reset();
  };

  useEffect(() => {
    
  }, [message]);
  return (
    <section className=" pt-32 px-4 md:px-16 bg-gray-50 dark:bg-gray-800">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 ">
        <section className="relative flex  items-end bg-gray-900 lg:col-span-5 lg:h-5/6 xl:col-span-6">
          <Image
            alt="Contact image"
            width={100}
            height={50}
            className="absolute bg-white  inset-0 h-full w-full object-cover"
            src={desk}
          />

          <div className="hidden lg:relative lg:block lg:p-12 bg-zinc-800 opacity-80">
            <h2 className="text relative text-2xl text-white pl-5 tracking-wider before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-10 uppercase before:bg-[#ff0062] before:-bottom-1 before:left-0">
              contacts
            </h2>
            <p className="mt-4 leading-relaxed text-white/90 font-montserrat">
              Addis Ababa, Ethiopia
            </p>
            <div className="my-4 ">
              <ul className="flex items-center text-xl text-black">
                <Link
                  href="https://twitter.com/gatwech3211"
                  target="_blank"
                  className=" text-white mr-3"
                >
                  <IoLogoTwitter />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gatwech-tap-nguth-800699228/"
                  target="_blank"
                  className=" text-white mx-3"
                >
                  <TfiLinkedin />
                </Link>
                <Link
                  href="https://github.com/JeremyG11"
                  target="_blank"
                  className=" text-white mx-3"
                >
                  <IoLogoGithub />
                </Link>
                <Link
                  href="https://dribbble.com/jeremygatwech"
                  target="_blank"
                  className=" text-white mx-3"
                >
                  <TbBrandDribbbleFilled />
                </Link>
              </ul>
            </div>
          </div>
        </section>

        <main className="shadow-2xl max-w-xl bg-white dark:bg-gray-900 p-6 pl-4  h-5/6 flex items-end justify-center lg:col-span-7 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="max-w-[410px]">
              {alert && <SuccessAlert message={message} status={status} />}
              <div>
                <h2 className="text relative text-2xl dark:text-white pl-5 tracking-wider before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-10 uppercase before:bg-[#ff0062] before:-bottom-1 before:left-0">
                  contact Me
                </h2>
                <p className="mt-2 font-medium font-assistant italic text-gray-500">
                  I'd love to hear from you! Please leave a message and I'll be
                  back to you in no time.
                </p>
              </div>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-5 mt-6 lg:pb-8 font-assistant text-lg"
              >
                <div className="w-full my-5 relative ">
                  <input
                    type="text"
                    name="user_name"
                    required
                    autoComplete="off"
                    className="w-full bg-transparent outline-none peer border-[#9b9b9b] border-b-2 py-1"
                  />
                  <label className="mt-2 absolute left-0 pointer-events-none  peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:text-gray-800 dark:peer-focus:text-gray-200 italic bottom-1 transition duration-500">
                    Name
                  </label>
                </div>
                <div className="my-5 relative">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder=" "
                    autoComplete="off"
                    className="w-full bg-transparent text-sm outline-none peer border-[#9b9b9b] border-b-2 mt-2 py-1"
                  />
                  <label className="mt-2 absolute left-0  pointer-events-none peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:text-gray-800 dark:peer-focus:text-gray-200 italic bottom-1 transition duration-500">
                    Email
                  </label>
                </div>
                <div className="my-5 relative">
                  <textarea
                    name="message"
                    required
                    placeholder=" "
                    autoComplete="off"
                    className="w-full h-14  bg-transparent resize-none outline-none  peer border-[#9b9b9b] border-b-2 mt-2 py-1"
                  ></textarea>
                  <label className="absolute left-0 pointer-events-none peer-focus:-translate-y-10 peer-valid:-translate-y-14 peer-focus:text-gray-800 dark:peer-focus:text-gray-200 italic bottom-3 transition duration-500">
                    Message
                  </label>
                </div>
                <button
                  onClick={sendEmail}
                  className="group rounded-sm flex flex-row items-center justify-between gap-3 border border-black dark:border-gray-100 bg-black px-8 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-blac"
                >
                  <span className="uppercase font-medium text-sm tracking-[5px] text-white dark:text-black transition-colors group-hover:text-black group-active:text-black dark:group-hover:text-white dark:group-active:text-white">
                    Send
                  </span>

                  <span className="shrink-0 rounded-full  text-white dark:text-black group-hover:text-black dark:group-hover:text-white  group-active:text-black  dark:group-active:text-white">
                    {loading ? (
                      <>
                        <BiLoaderCircle className="aninate-spin text-2xl group-active:text-black dark:group-active:text-white  uppercase" />
                      </>
                    ) : (
                      <>
                        <BiLogoTelegram className="text-2xl group-active:text-black dark:group-active:text-white  uppercase" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;

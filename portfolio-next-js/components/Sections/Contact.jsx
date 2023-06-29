"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { BiLogoTelegram } from "react-icons/bi";

const Contact = () => {
  const formRef = useRef();
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState("");

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
            setMessage("Sorry!, Your message couldn't be sent ");
            setTimeout(() => setAlert(false), 2000);
          }
        }
      );
    e.target.reset();
  };

  useEffect(() => {}, [message]);
  return (
    <section className=" my-16 px-4 md:px-16 bg-gray-50 dark:bg-gray-800 mt-10">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex  items-end bg-gray-900 lg:col-span-5 lg:h-5/6 xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            className="absolute bg-white  inset-0 h-full w-full object-cover opacity-80"
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
                    name="name"
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
                    name="email"
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
                  className="group rounded-sm flex items-center justify-between gap-3 border border-black bg-black px-8 py-2 transition-colors hover:bg-gray-100 focus:outline-none focus:ring"
                >
                  <span className="uppercase text-white transition-colors group-hover:text-black group-active:text-black">
                    Send
                  </span>

                  <span className="shrink-0 rounded-full  text-white group-hover:text-black  group-active:text-black">
                    <BiLogoTelegram className="group-active:text-black" />
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

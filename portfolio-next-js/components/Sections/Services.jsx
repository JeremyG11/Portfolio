import React from "react";
import Link from "next/link";
const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900 darK:text-white font-montserrat">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h2 className="relative text-2xl dark:text-white pl-5 before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-10 uppercase before:bg-[#ff0062] before:-bottom-1 before:left-0">
            My Services
          </h2>
          <p className="my-5 italic text-sm">
            Don't just take my words for it. see the comments and reviews
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/"
            className="relative bg-gray-50 dark:bg-gray-800 block p-8 transition "
          >
            <span className="text-8xl font-black py-6 mb-6 text-gray-100 dark:text-gray-900">
              01
            </span>
            <div className="pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10  text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>

            <h2 className="mt-4 text-xl font-bold dark:text-white">
              UX/UI Design
            </h2>

            <p className="mt-4 text-base leading-7 font-assistant text-gray-500 dark:text-gray-300">
              Crafting intuitive and engaging user experiences through
              thoughtful UX/UI design. Expertise in leveraging user research,
              information architecture, and visual design principles to create
              delightful and intuitive user interfaces
            </p>
          </Link>
          <Link
            href="/"
            className="relative bg-gray-50 dark:bg-gray-800 block p-8 transition "
          >
            <span className="text-8xl font-black py-6 mb-6 text-gray-100 dark:text-gray-900">
              02
            </span>
            <div className="pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10  text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>

            <h2 className="mt-4 text-xl font-bold dark:text-white">
              Full Stack Web Developer
            </h2>

            <p className="mt-4 text-base leading-7 font-assistant text-gray-500 dark:text-gray-300">
              I'm versatile Full Stack Developer, Proficient in both front-end
              and back-end technologies, I possess expertise in building
              intuitive user interfaces, designing efficient databases, and
              implementing secure APIs
            </p>
          </Link>
          <Link
            href="/"
            className="relative bg-gray-50 dark:bg-gray-800 block p-8 transition "
          >
            <span className="text-8xl font-black py-6 mb-6 text-gray-100 dark:text-gray-900">
              03
            </span>
            <div className="pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10  text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>

            <h2 className="mt-4 text-xl font-bold dark:text-white">
              Mobile App Developer
            </h2>

            <p className="mt-4 text-base leading-7 font-assistant text-gray-500 dark:text-gray-300">
              An innovative Mobile App Developer, designed and developed native
              and cross-platform, user-friendly and performance-driven, mobile
              applications that deliver seamless experiences
            </p>
          </Link>
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get a Question
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

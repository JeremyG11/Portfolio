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
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
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
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
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
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>

            <h2 className="mt-4 font-assistant text-xl font-semibold text-gray-500 dark:text-white">
              Mobile App Developer
            </h2>

            <p className="mt-4 text-base leading-7 font-assistant text-gray-500 dark:text-gray-300">
              An innovative Mobile App Developer, designed and developed native
              and cross-platform, user-friendly and performance-driven, mobile
              applications that deliver seamless experiences
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

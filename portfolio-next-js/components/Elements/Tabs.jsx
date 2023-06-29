"use client";
import React, { useCallback, useState, useEffect } from "react";

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = useCallback((index) => {
    setActiveTab(index);
  }, []);

  useEffect(() => {
    console.log("Active tab changed:", activeTab);
  }, [activeTab]);
  return (
    <>
      <section className="bg-white dark:bg-gray-800 darK:text-white font-montserrat px-4 py-16 md:px-16">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg flex flex-col items-center justify-center ">
            <h2 className="relative text-2xl font-raleway font-medium text-gray-500 dark:text-white pl-5 before:content-[''] before:absolute before:w-[30px] rounded-lg before:mr-2 before:h-[2px] uppercase before:bg-[#ff0062] before:top-4 before:-left-5">
              Projects
            </h2>
            <p className="my-5 italic text-sm">
              Don't just take my words for it. see the comments and reviews
            </p>
          </div>
          <nav className=" mt-6 flex justify-center text-sm font-medium">
            {tabsData?.map((tab, indx) => {
              return (
                <div key={indx}>
                  <button
                    onClick={() => handleTabClick(indx)}
                    href=""
                    className={
                      indx === activeTab
                        ? "md:mx-10 font-montserrat uppercase text-sm cursor-pointer mr-6 py-3 text-base font-semiblod relative  font-medium after:content-[''] after:absolute after:w-[100%] text-[#D31717] after:transition-all hover:after:w-[100%] after:h-[2px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0"
                        : "md:mx-10 font-montserrat uppercase text-sm cursor-pointer mr-6 py-3 relative text-base font-semiblod text-gray-500 dark:text-gray-20 after:content-[''] after:absolute after:w-0 after:transition-all hover:after:w-[100%] after:h-[2px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0"
                    }
                  >
                    {tab.title}
                  </button>
                </div>
              );
            })}
          </nav>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tabsData[activeTab]?.content}
          </div>
          <div className="mt-10">
            <a
              className="w-44 group rounded-sm flex items-center justify-between gap-3 border border-black bg-black px-8 py-3 transition-colors hover:bg-gray-100 focus:outline-none"
              href="/download"
            >
              <span className="font-medium text-sm  uppercase text-white transition-colors group-hover:text-black group-active:text-black">
                See More
              </span>

              <span className="shrink-0 rounded-full  text-white group-hover:text-black  group-active:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;

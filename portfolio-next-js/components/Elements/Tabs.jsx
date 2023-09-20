"use client";
import React, { useCallback, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Tabs = ({ tabsData, projects }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleTabClick = useCallback(
    (index) => {
      setActiveTab(index);
      if (index === 0) {
        setFilteredProjects(projects);
      } else {
        const selectedTab = tabsData[index]?.title;
        const filtered = projects.filter(
          (project) => project.type.toLowerCase() === selectedTab.toLowerCase()
        );
        setFilteredProjects(filtered);
      }
    },
    [projects, tabsData]
  );

  useEffect(() => {
    const currentTabTitle = tabsData[activeTab]?.title;
    console.log("Current tab title:", currentTabTitle);
  }, [activeTab, tabsData]);

  return (
    <>
      <section className="bg-white dark:bg-gray-800 dark:text-white font-montserrat px-4 py-16 md:px-16">
        <div className="mx-auto max-w-screen-xl px-4 py-24 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg flex flex-col items-center justify-center">
            <h2 className="relative text-2xl font-raleway font-medium text-gray-500 dark:text-white pl-5 before:content-[''] before:absolute before:w-[30px] rounded-lg before:mr-2 before:h-[2px] uppercase before:bg-[#ff0062] before:top-4 before:-left-5">
              Projects
            </h2>
            <p className="my-5 italic text-center text-sm">
              Here are some of the projects that showcase my expertise and
              passion for what i do
            </p>
          </div>
          <nav className="mt-6 flex justify-center text-sm font-medium">
            {tabsData?.map((tab, indx) => (
              <div key={indx}>
                <button
                  onClick={() => handleTabClick(indx)}
                  className={`md:mx-10 font-montserrat uppercase  text-xs cursor-pointer mr-6 py-3 ${
                    indx === activeTab
                      ? " md:font-semiblod relative font-medium after:content-[''] after:absolute after:w-[100%] text-[#D31717] after:transition-all hover:after:w-[100%] after:h-[2px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0"
                      : "relative md:font-semiblod text-gray-500 dark:text-gray-20 after:content-[''] after:absolute after:w-0 after:transition-all hover:after:w-[100%] after:h-[2px] after:bg-[#D31717] hover:text-[#D31717] after:bottom-2 after:left-0"
                  }`}
                >
                  {tab.title}
                </button>
              </div>
            ))}
          </nav>

          <div className="mt-10">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 250: 1, 650: 2, 800: 3 }}
            >
              <Masonry gutter="20px">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="overflow-hidden bg-gray-100">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div className="mt-10 flex justify-end">
            <button className="group rounded-sm flex items-center justify-between gap-3 border border-black dark:border-gray-100 bg-black px-8 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-black">
              <span className="font-medium text-sm text-white dark:text-black transition-colors group-hover:text-black group-active:text-black dark:group-hover:text-white dark:group-active:text-white">
                See More
              </span>

              <span className="shrink-0 rounded-full text-white dark:text-black group-hover:text-black dark:group-hover:text-white group-active:text-black dark:group-active:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 group-active:text-black dark:group-active:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;

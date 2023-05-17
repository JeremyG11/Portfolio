import React from "react";
import Image from "next/image";
import mobile from "../public/mobile-development.png";
import web_development from "../public/coding.png";
import design_tool from "../public/fountain-pen.png";
import Skills from "../components/Skills";

const Works = () => {
  return (
    // <div
    //   className="w-full h-[100%] font-montserrat md:px-20 lg:px-40"
    //   style={{
    //     background: "radial-gradient(circle, #0a0a0a6c 20%, transparent 100%)",
    //   }}
    // >
    //   <div className=" flex flex-col items-center justify-center">
    // <h1 className=" py-3 relative text-3xl font-medium text-white after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-[#ff0062] after:bottom-0 after:left-0">
    //   Services
    // </h1>
    // <p className="px-6 py-8 md:px-32 text-center text-gray-300 ">
    //   Select your favorite social network and share our icons with your
    //   contacts or friends. If you don’t have these social networks, simply
    //   copy the link and paste it in the one you use.{" "}
    // </p>
    //   </div>
    //   <div className="px-20 py-10  grid grid-cols-1 md:grid-cols-3 md:px-0  gap-10">
    //     <div className="flex flex-col items-center shadow p-8 rounded-md bg-[#083d49e1] justify-between ">
    //       <div className="p-6 rounded-full flex items-center justify-center bg-[#fffbfbad]">
    //         <Image src={design_tool} width={50} height={50} alt="" />
    //       </div>
    //       <div className="py-2 font-medium text-white">UI Design</div>
    //       <p className="py-3 text-sm text-center text-white">
    //         Best landing page templates are a step away click now and get hold
    //         of professionally designed landing page
    //       </p>
    //     </div>
    //     <div className="flex flex-col items-center shadow-lg p-8 rounded-md bg-[#083d49e1] justify-between">
    //       <div className="p-6 rounded-full flex items-center justify-center bg-[#fffbfbad]">
    //         <Image src={web_development} alt="" width={50} height={50} />
    //       </div>
    //       <div className="py-2 font-medium text-white">Web Development</div>
    //       <p className="py-3 text-sm text-center text-white">
    //         Best landing page templates are a step away click now and get hold
    //         of professionally designed landing page
    //       </p>
    //     </div>
    //     <div className="flex flex-col items-center shadow-lg p-8 rounded-md bg-[#083d49e1] justify-between ">
    //       <div className="p-6 rounded-full flex items-center justify-center bg-[#fffbfbad]">
    //         <Image src={mobile} alt="" width={50} height={50} />
    //       </div>
    //       <div className="py-2 font-medium text-white">
    //         Mobile App Development
    //       </div>
    //       <p className="py-3 text-sm text-center text-white">
    //         Best landing page templates are a step away click now and get hold
    //         of professionally designed landing page
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <section class="text-gray-600 body-font xl:mx-40">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center justify-center mb-20">
          <h1 className=" py-3 relative text-3xl font-medium text-gray-500 after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-[#ff0062] after:bottom-0 after:left-0">
            Services
          </h1>
          <p className="px-6 py-8 md:px-32 text-center text-gray-500 ">
            Select your favorite social network and share our icons with your
            contacts or friends. If you don't have these social networks, simply
            copy the link and paste it in the one you use.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Shooting Stars
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  The Catalyzer
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Neptune
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

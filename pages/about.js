import React from "react";
import Image from "next/image";
import avatar from "../public/avatar.png";
const About = () => {
  return (
    // <main className="grid grid-cols-2 mt-20 font-montserrat  px-8 md:px-20 py-20 lg:px-40">
    //   <div className="p-4 relative bg-red-500 w-60">
    //     <div className=" bg-gray-200 absolute left-4  w-96 h-80">
    //       <div className="w-[100%] h-[100%]">
    //         <Image src={avatar} width={385} height={350} alt="" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="px-0 dark:text-white ">

    //     <div className="my-5 font-montserrat">
    //       <button className="w-32 p-2 md:w-36 border-2 border-[#ff0062] hover:bg-[#ff0062] transition duration-500 md:px-3 md:py-3 text-sm">
    //         Download CV
    //       </button>
    //     </div>
    //   </div>
    <section className="text-gray-600 body-font lg:mx-40">
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2
            className="relative text-2xl dark:text-white
        after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-[#ff0062] after:-bottom-1 after:left-0"
          >
            About Me
          </h2>
          <p className="mt-4 text-sm py-4 space-x-10 leading-6 font-light text-gray-700 dark:text-gray-100">
            I am a skilled junior web developer with a passion for creating
            elegant, modern, user-friendly websites. With 2 years of experience
            in the industry, I have honed my skills in front-end and back-end
            development, as well as in UX/UI design.
          </p>
          <p className="text-sm leading-6 font-light ">
            Please take a look at my portfolio to see examples of my work and
            feel free to contact me if you have any questions or if you are
            interested in working together.
          </p>
          <div className="flex justify-center">
            <div className="my-5 font-montserrat">
              <button className="w-32 p-2 md:w-36 border-2 border-[#ff0062] hover:bg-[#ff0062] transition duration-500 md:px-3 md:py-3 text-sm">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </main>
  );
};

export default About;

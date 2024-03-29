import Image from "next/image";
import { PiCodepenLogoLight } from "react-icons/pi";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Portfolio from "@/components/Sections/Portfolio";
import Services from "@/components/Sections/Services";
import Testimonials from "@/components/Sections/Testimonials";
import SkillsAndExperience from "@/components/Sections/SkillsAndExperience";
import Navbar from "@/components/Sections/Navbar";
import Link from "next/link";
import gatwech from "../public/gatwech-pic.jpg";

async function getUsers() {
  const res = await fetch(` https://portfolio-rest-api.onrender.com/api/reviews/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const testimonials = await getUsers();
  return (
    <>
      <Navbar />
      <div id="home" className="pt-32 px-4 md:px-16">
        <div className="px-6 flex md:items-center md:px-0 lg:flex lg:items-center py-5">
          <div className=" font-montserrat max-w-4xl">
            <div className="relative dark:text-gray-300 lg:flex-grow md:max-w-xl text-lg lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
              <h2 className="text-center relative text-xl lg:text-2xl dark:text-white pl-5 before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-full lg:before:h-10 uppercase before:bg-[#ff0062] before:-bottom-0 lg:before:-bottom-1 before:left-0">
                Hello, I&apos;m Gatwech Nguth
              </h2>
              <p className="my-5 text-xl xl:text-4xl font-medium font-montserrat tracking-[3px] lg:tracking-[6px] whitespace-nowrap uppercase">
                Full Stack Developer
              </p>
              <p className="mt-4 italic text-base leading-7 font-assistant text-gray-500 dark:text-gray-300">
                Please take a look at my portfolio to see examples of my work
                and feel free to contact me if you have any questions or if you
                are interested in working together.
              </p>

              <div className="mt-4 flex justify-center">
                <div className="my-5 font-montserrat">
                  <Link
                    href="#contact"
                    className="group rounded-sm flex flex-row-reverse items-center justify-between gap-3 border border-black dark:border-gray-100 bg-black px-8 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-black"
                  >
                    <span className="font-medium text-sm tracking-[5px] text-white dark:text-black transition-colors group-hover:text-black group-active:text-black dark:group-hover:text-white dark:group-active:text-white">
                      Hire Me
                    </span>

                    <span className="shrink-0 rounded-full  text-white dark:text-black group-hover:text-black dark:group-hover:text-white  group-active:text-black  dark:group-active:text-white">
                      <PiCodepenLogoLight className="text-2xl group-active:text-black dark:group-active:text-white  uppercase" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto invisible md:visible">
            <div className="group relative rounded-full  space-y-6 overflow-hidden">
              <Image
                className="mx-auto h-56 w-56 grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={gatwech}
                alt="Gatwech"
                loading="lazy"
                width={640}
                height={805}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="portfolio">
        <Portfolio />
        <SkillsAndExperience />
      </div>

      <div>
        <Testimonials testimonials={testimonials} />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

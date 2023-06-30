import Image from "next/image";
import Link from "next/link";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Portfolio from "@/components/Sections/Portfolio";
import Services from "@/components/Sections/Services";
import Testimonials from "@/components/Sections/Testimonials";
import SkillsAndExperience from "@/components/Sections/SkillsAndExperience";

async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?limit=5`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const testimonials = await getUsers();
  return (
    <>
      <div className="mt-32 px-4 md:px-16">
        <div className="px-6 flex md:items-center md:px-0 lg:flex lg:items-center py-5">
          <div className=" font-montserrat max-w-xl">
            <div className="text-3xl py-2 font-normal dark:text-white md:text-4xl">
              <h2 className="text-2xl font-medium text-[#000]  dark:text-white md:text-xl">
                I'm Gatwech Nguth
              </h2>
            </div>
            <h3 className="py-4 text-5xl  dark:text-white md:text-4xl font-medium">
              Full Stack Web developer and UX/UI designer.
            </h3>
            <p className="py-3">
              Freelancer providing services for programming and design content
              needs. Join me down below and let get cracking!
            </p>
            <div className="my-5 font-montserrat">
              <button className="group rounded-sm flex items-center justify-between gap-3 border border-black bg-black px-8 py-2 transition-colors hover:bg-gray-100 focus:outline-none focus:ring">
                <span className="uppercase text-white transition-colors group-hover:text-black group-active:text-black">
                  Hire Me
                </span>

                <span className="shrink-0 rounded-full  text-white group-hover:text-black  group-active:text-black"></span>
              </button>
            </div>
            <div className="py-4">
              <ul className="flex items-center text-black">
                <Link
                  href="#"
                  className="text-2xl ml-0 mr-4 hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500 dark:text-white"
                >
                  <svg
                    className="w-6 h-6 hover:text-gray-500 duration-150"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g fill="currentColor" clipPath="url(#clip0_910_44)">
                      <path
                        fillRule="evenodd"
                        d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                        clipRule="evenodd"
                      />
                      <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_910_44">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-2xl  hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500  mx-4 dark:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-2xl  hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500  mx-4 dark:text-white"
                >
                  <svg
                    className="w-6 h-6 hover:text-gray-500 duration-150"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g clipPath="url(#clip0_17_80)">
                      <path
                        fill="currentColor"
                        d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_80">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-2xl  hover:text-[#ff0062] dark:hover:text-[#ff0062] transition duration-500  mx-4 dark:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </ul>
            </div>
          </div>
          {/* <div className="mx-auto invisible md:visible bg-gradient-to-b from-teal-500  w-80 h-80 rounded-full overflow-hidden md:h-96 md:w-96">
            <h3>IMAGE</h3>
          </div> */}
        </div>
      </div>
      <About />
      <Services />
      <SkillsAndExperience />
      <Portfolio />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </>
  );
}

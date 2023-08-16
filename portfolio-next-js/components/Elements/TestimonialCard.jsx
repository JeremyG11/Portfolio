import React from "react";
import Image from "next/image";
import { LiaQuoteRightSolid } from "react-icons/lia";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
      <blockquote className="flex w-[500px] h-full flex-col justify-between bg-white dark:bg-gray-800 dark:opacity-80 px-12 py-8">
        <div>
          <div className="flex gap-0.5 text-gray-500">
            <LiaQuoteRightSolid className="text-7xl italic " />
          </div>

          <div className="h-32 py-1 line-clamp-4">
            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-200 italic text-center">
              {testimonial.reviewContent}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center mt-6">
          <div className="flex-none w-24 h-24">
            <Image
              src="https://images.unsplash.com/photo-1688917169732-834612d59842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full rounded-full"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-center">
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font text-base font-medium uppercase text-gray-500 dark:text-gray-400">
                {testimonial.name}
              </span>
              <span className="text-gray-500 text-sm dark:text-gray-400">
                {testimonial.occupation}
              </span>
              <div className="mt-3 flex gap-4 text-gray-400">
                <a href="/">
                  <svg
                    className="w-5 h-5 duration-150 hover:text-gray-500"
                    fill="currentColor"
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
                        <path fill="currentColor" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="/">
                  <svg
                    className="w-5 h-5 duration-150 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g clipPath="url(#clip0_17_68)">
                      <path
                        fill="currentColor"
                        d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_68">
                        <path fill="currentColor" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </span>
          </div>
        </div>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;

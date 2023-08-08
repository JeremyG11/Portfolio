"use client";
import React, { useState } from "react";
import { GoCodeReview } from "react-icons/go";
import Swipper from "../Elements/Swipper";
import TestimonialCard from "../Elements/TestimonialCard";
import SwipperXl from "../Elements/SwipperXl";
import ReviewModel from "../Elements/ReviewModel";
import AlertModal from "../Elements/AlertModal";

const Testimonials = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toggler, setToggler] = useState(false);
  const [status, setStatus] = useState(false);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };
  const getNextSlideIndex = (currentIndex) => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  };

  const upCommingSlide = getNextSlideIndex(currentSlide);
  return (
    <section className="bg-gray-50 px-4 md:px-16 dark:bg-gray-900">
      <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-12">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right bg-gray-200 dark:bg-gray-800 p-8 opacity-80">
            <h2 className=" relative text-2xl dark:text-white pl-5 before:content-[''] before:absolute before:w-[3px] rounded-lg before:mr-2 before:h-10 uppercase before:bg-[#ff0062] before:-bottom-1 before:left-0">
              Testimonials
            </h2>
            <p className="my-5 italic text-sm">
              Don't just take my words for it. see the comments and reviews
            </p>
            <p className="mt-4 text-base leading-7 font-assistant text-gray-500 dark:text-gray-300">
              Passioned for creating elegant, modern, user-friendly websites.
              With 3 years of experience in the industry, I have honed my skills
              in
            </p>
            <SwipperXl
              goToNextSlide={goToNextSlide}
              goToPreviousSlide={goToPreviousSlide}
            />
            <div className="mt-2 flex ">
              <div className="my-3 font-montserrat">
                <button
                  onClick={() => setToggler(true)}
                  className="group rounded-sm flex flex-row-reverse items-center justify-between gap-3 border border-black dark:border-gray-100 bg-black px-8 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-black"
                >
                  <span className="font-medium text-sm  text-white dark:text-black transition-colors group-hover:text-black group-active:text-black dark:group-hover:text-white dark:group-active:text-white">
                    Write me a review
                  </span>

                  <span className="shrink-0 rounded-full  text-white dark:text-black group-hover:text-black dark:group-hover:text-white  group-active:text-black  dark:group-active:text-white">
                    <GoCodeReview className="group-active:text-black text-2xl dark:group-active:text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full col-span-2 overflow-hidden flex gap-6">
            <div className="relative flex items-center justify-center w-full dark:text-gray-50">
              <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-hidden lg:gap-8">
                <TestimonialCard testimonial={testimonials[currentSlide]} />
                <TestimonialCard testimonial={testimonials[upCommingSlide]} />
              </div>
            </div>
          </div>
          <Swipper
            goToNextSlide={goToNextSlide}
            goToPreviousSlide={goToPreviousSlide}
          />
          <ReviewModel toggler={toggler} setToggler={setToggler} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

"use client";
import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme && theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <HiOutlineMoon />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <HiOutlineSun />
        </button>
      )}
    </>
  );
};

export default ThemeButton;

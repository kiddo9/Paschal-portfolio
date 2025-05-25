import React from "react";
import DarkLightMode from "./DarkMode";

import { NavLink } from "react-router-dom";

function NaavLink() {
  return (
    <div className="sticky z-50 top-0 w-full backdrop-blur-3xl dark px-4 py-2">
      <div className="justify-between flex items-center">
        <NavLink
          to={"/"}
          className="router-link-active text-gray-300 router-link-exact-active font-medium text-lg"
        >
          Paschal E
        </NavLink>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <a href="https://www.github.com/kiddo9" className="">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 stroke-[#838383] hover:scale-125 duration-200 hover:stroke-gray-500"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/elechi-paschal-18ab85312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 stroke-[#838383] hover:scale-125 duration-200 hover:stroke-gray-500"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6 1.12 6 0 4.88 0 3.5S1.12 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7.5 0h3.6v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V20h-4v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20h-4V8z" />
              </svg>
            </a>
          </div>

          <div className="md:border-r-2 py-3 md:relative md:rounded-none backdrop-blur-3xl border md:border-0  border-[#838383] md:border-l-2 md:h-6 md:px-4 rounded-full lg:border-[#838383] flex justify-center gap-5 items-center fixed md:bottom-0 md:left-0 md:right-0 -bottom-[37rem] left-0 right-0 md:bg-transparent bg-[#0000008e]">
            <ul className="flex text-white md:text-[#838383] gap-4 border-r-2 md:border-r-0 border-[#838383] pr-3">
              <li>
                <NavLink
                  className={({ isActive }: any) =>
                    isActive
                      ? "md:text-white md:font-semibold text-green-500 border-b border-green-500 md:border-b-0"
                      : ""
                  }
                  to={"/projects"}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }: any) =>
                    isActive
                      ? "md:text-white md:font-semibold text-green-500 border-b border-green-500 md:border-b-0"
                      : ""
                  }
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }: any) =>
                    isActive
                      ? "md:text-white md:font-semibold text-green-500 border-b border-green-500 md:border-b-0"
                      : ""
                  }
                  to="/skills"
                >
                  skills
                </NavLink>
              </li>
              <li>
                <a href={`mailto:paschalelechi0@gmail.com`}>
                  <p className="text-[#838383]">Hire me</p>
                </a>
              </li>
            </ul>
            <div className="md:hidden">
              <DarkLightMode />
            </div>
          </div>

          <div className="hidden md:block">
            <DarkLightMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NaavLink;

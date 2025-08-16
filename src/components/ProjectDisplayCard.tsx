import React from "react";
import StackCard from "../components/StackCard";

function ProjectDisplayCard({
  logo,
  type,
  name,
  github,
  PR,
  description,
  stack,
  linkedIn,
  access,
}: any) {
  return (
    <div className="border-[0.001rem] px-3 py-3 border-[#838383] rounded-lg">
      <div className="flex justify-between items-center">
        <a
          href={access}
          className="flex items-center gap-3 hover:border-b border-dashed border-white transition-all duration-100 ease-in-out"
        >
          {type == "img" ? "" : logo}{" "}
          <p className="text-md font-medium text-gray-300">{name}</p>
        </a>

        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 stroke-gray-300 hover:scale-125 duration-200 hover:stroke-gray-500"
            >
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M13 6h3a2 2 0 0 1 2 2v7" />
              <line x1="6" y1="9" x2="6" y2="21" />
            </svg>
            {PR || ""}
          </div>

          <button
            onClick={() => {
              if (github === "") {
                alert("Repo is private. contact for local display");
                return;
              }

              window.open(github, "_blank");
            }}
            className="cursor-pointer"
          >
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 stroke-gray-700 hover:scale-125 duration-200 hover:stroke-gray-500"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </button>

          <a href={linkedIn} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 stroke-gray-300 hover:scale-125 duration-200 hover:stroke-gray-500"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6 1.12 6 0 4.88 0 3.5S1.12 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7.5 0h3.6v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V20h-4v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20h-4V8z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="mt-2 text-sm text-[#838383]">{description}</p>

      <div className="flex gap-7 overflow-x-scroll  Scroll mt-4">
        {Array.isArray(stack)
          ? stack.map((techStack, index) => (
              <StackCard setName={true} key={index} stackName={techStack} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default ProjectDisplayCard;
